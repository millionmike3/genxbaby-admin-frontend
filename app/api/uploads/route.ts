import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { emitUnderwritingEvent } from "@/lib/underwriting/events";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File;
    const applicationId = formData.get("applicationId") as string;
    const type = formData.get("type") as string;

    if (!file || !applicationId || !type) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert file to bytes
    const bytes = await file.arrayBuffer();
    const fileBytes = new Uint8Array(bytes);

    // Save file locally
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public/uploads", fileName);

    await writeFile(filePath, fileBytes);

    const fileUrl = `/uploads/${fileName}`;

    // 🔥 Send metadata to your backend instead of Prisma
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/documents/upload`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicationId,
          borrowerId: "TODO",
          type,
          fileUrl,
          status: "uploaded",
        }),
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: "Backend rejected upload" },
        { status: 500 }
      );
    }

    const document = await res.json();

    // Real-time event for underwriters + loan officers
    emitUnderwritingEvent(applicationId, {
      type: "DOC_UPLOADED",
      document,
    });

    return NextResponse.json({ success: true, document });
  } catch (err) {
    console.error("Document Upload Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
