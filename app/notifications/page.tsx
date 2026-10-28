"use client";

export const dynamic = "force-dynamic";

export default function NotificationsPage() {
  // TEMP: Replace with real API call later
  const notes = [];

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Notifications</h1>

      <ul className="space-y-3">
        {Array.isArray(notes) && notes.length > 0 ? (
          notes.map((n) => (
            <li key={n.id} className="bg-white p-4 rounded shadow">
              <div>{n.message}</div>
              <div className="text-gray-500 text-sm">{n.createdAt}</div>
            </li>
          ))
        ) : (
          <li className="text-gray-500">No notifications found.</li>
        )}
      </ul>
    </div>
  );
}
