import { getPipeline } from "@/lib/api";

export default async function PipelinePage() {
  const pipeline = await getPipeline();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Pipeline Intelligence</h2>

      <pre className="bg-white p-4 rounded shadow text-sm">
        {JSON.stringify(pipeline, null, 2)}
      </pre>
    </div>
  );
}
