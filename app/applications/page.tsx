import { getApplications } from "@/lib/api";

export default async function Page() {
  const apps = await getApplications();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Applications</h1>
      <pre className="bg-white p-4 rounded shadow">{JSON.stringify(apps, null, 2)}</pre>
    </div>
  );
}
