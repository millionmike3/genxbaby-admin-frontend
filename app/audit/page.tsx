import { getAuditLogs } from "@/lib/api";

export default async function Page() {
  const logs = await getAuditLogs();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Audit Logs</h1>
      <pre className="bg-white p-4 rounded shadow">{JSON.stringify(logs, null, 2)}</pre>
    </div>
  );
}
