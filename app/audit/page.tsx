"use client";

export const dynamic = "force-dynamic";

export default function AuditPage() {
  // TEMP: Replace with real API call later
  const logs = [];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Audit Logs</h1>

      <ul className="space-y-3">
        {Array.isArray(logs) && logs.length > 0 ? (
          logs.map((log) => (
            <li key={log.id} className="bg-white p-4 rounded shadow">
              <div className="font-medium">{log.action}</div>
              <div className="text-gray-600 text-sm">{log.timestamp}</div>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No audit logs found.</li>
        )}
      </ul>
    </div>
  );
}
