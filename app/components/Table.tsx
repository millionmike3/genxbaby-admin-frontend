import { getApplications } from "@/lib/api";

export default async function ApplicationsPage() {
  const apps = await getApplications();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Applications</h2>

      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="border-b">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Created</th>
          </tr>
        </thead>

        <tbody>
          {apps.map(app => (
            <tr key={app.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{app.id}</td>
              <td className="p-3">{app.name}</td>
              <td className="p-3">{app.status}</td>
              <td className="p-3">{app.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
