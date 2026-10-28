import { getAuditLogs } from "@/lib/api";

export default async function AuditPage() {
  const logs = await getAuditLogs();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Audit Logs</h2>

      <ul className="space-y-3">
        {logs.map(log => (
          <li key={log.id} className="bg-white p-4 rounded shadow">
            <div className="font-medium">{log.action}</div>
            <div className="text-gray-600 text-sm">{log.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
