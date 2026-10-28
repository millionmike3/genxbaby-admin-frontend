import { getNotifications } from "@/lib/api";

export default async function Page() {
  const notifications = await getNotifications();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <pre className="bg-white p-4 rounded shadow">{JSON.stringify(notifications, null, 2)}</pre>
    </div>
  );
}
