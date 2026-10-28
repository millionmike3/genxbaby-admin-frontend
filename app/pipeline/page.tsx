import { getPipeline } from "@/lib/api";

export default async function Page() {
  const pipeline = await getPipeline();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Pipeline Intelligence</h1>
      <pre className="bg-white p-4 rounded shadow">{JSON.stringify(pipeline, null, 2)}</pre>
    </div>
  );
}
