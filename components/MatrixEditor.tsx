"use client";

import { useEffect, useState } from "react";

export default function MatrixEditor() {
  const [raw, setRaw] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      // 🔥 Debug: show the base URL
      console.log(
        "Pricing Engine URL:",
        process.env.NEXT_PUBLIC_PRICING_ENGINE_URL
      );

      const url =
        process.env.NEXT_PUBLIC_PRICING_ENGINE_URL + "/matrix/current";

      // 🔥 Debug: show the full fetch URL
      console.log("Matrix fetch URL:", url);

      try {
        const res = await fetch(url);

        // 🔥 Debug: inspect raw response BEFORE JSON parsing
        const text = await res.text();
        console.log("Matrix raw response:", text);

        // Parse JSON safely
        const data = JSON.parse(text);
        setRaw(JSON.stringify(data, null, 2));
      } catch (err) {
        console.error("MatrixEditor load error:", err);
      }
    }

    load();
  }, []);

  async function save() {
    setStatus(null);

    try {
      const blob = new Blob([raw], { type: "application/json" });
      const file = new File([blob], "matrix.json", { type: "application/json" });

      const formData = new FormData();
      formData.append("file", file);

      const url =
        process.env.NEXT_PUBLIC_PRICING_ENGINE_URL + "/matrix/upload";

      // 🔥 Debug: show upload URL
      console.log("Matrix upload URL:", url);

      const res = await fetch(url, {
        method: "POST",
        body: formData,
      });

      // 🔥 Debug: inspect raw upload response
      const uploadText = await res.text();
      console.log("Matrix upload raw response:", uploadText);

      if (!res.ok) {
        // 🔥 FIX: TypeScript-safe error parsing
        let errJson: any = {};
        try {
          errJson = JSON.parse(uploadText);
        } catch {
          // ignore parse errors
        }

        throw new Error(errJson?.detail || "Upload failed");
      }

      setStatus("Matrix updated successfully.");
    } catch (e: any) {
      setStatus(e.message || "Error updating matrix.");
    }
  }

  return (
    <div className="space-y-4 text-sm">
      <h3 className="text-xl font-semibold text-emerald-400">
        Matrix Editor (JSON)
      </h3>

      <p className="text-slate-400">
        Edit the pricing matrix JSON directly. Upload validates base_rates,
        adjustments, and investor_overlays.
      </p>

      <textarea
        className="w-full h-80 bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-xs text-slate-100"
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
      />

      <button
        onClick={save}
        className="px-4 py-2 rounded bg-emerald-500 text-slate-950 font-medium"
      >
        Save Matrix
      </button>

      {status && <p className="text-xs text-slate-300 mt-2">{status}</p>}
    </div>
  );
}
