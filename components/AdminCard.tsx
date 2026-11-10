export function AdminCard({ title, value }) {
  return (
    <div className="bg-black/40 backdrop-blur-md border border-primary/40 rounded-xl p-6 
                    shadow-neonGreenSoft hover:shadow-neonGreen transition-all">
      <h2 className="text-xl font-semibold text-primary">{title}</h2>
      <p className="text-4xl font-bold mt-3">{value}</p>
    </div>
  );
}
