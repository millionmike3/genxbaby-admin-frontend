export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-black/60 backdrop-blur-xl border-r border-primary/40 p-6 space-y-6 min-h-screen">
      <div className="text-2xl font-bold text-primary">GenXBaby Admin</div>

      <nav className="space-y-4">
        <a className="block text-white hover:text-primary transition">Dashboard</a>
        <a className="block text-white hover:text-primary transition">Pricing Engine</a>
        <a className="block text-white hover:text-primary transition">LLPA Matrix</a>
        <a className="block text-white hover:text-primary transition">Borrower Rules</a>
      </nav>
    </aside>
  );
}
