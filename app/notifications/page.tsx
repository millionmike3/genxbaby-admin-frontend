import { getNotifications } from "@/lib/api";

export default async function NotificationsPage() {
  const notes = await getNotifications();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Notifications</h2>

      <ul className="space-y-3">
        {notes.map(n => (
          <li key={n.id} className="bg-white p-4 rounded shadow">
            <div>{n.message}</div>
            <div className="text-gray-500 text-sm">{n.createdAt}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
