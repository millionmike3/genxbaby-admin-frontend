export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <h1 className="text-xl font-bold mb-6">GenXBaby Admin</h1>

      <nav className="space-y-2">
        <a href="/dashboard" className="block p-2 rounded hover:bg-gray-100">Dashboard</a>
        <a href="/applications" className="block p-2 rounded hover:bg-gray-100">Applications</a>
        <a href="/audit" className="block p-2 rounded hover:bg-gray-100">Audit Logs</a>
        <a href="/notifications" className="block p-2 rounded hover:bg-gray-100">Notifications</a>
        <a href="/pipeline" className="block p-2 rounded hover:bg-gray-100">Pipeline Intelligence</a>
      </nav>
    </aside>
  );
}
