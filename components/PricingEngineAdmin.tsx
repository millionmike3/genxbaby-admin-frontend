import { AdminCard } from "@/components/AdminCard";
import { AdminTable } from "@/components/AdminTable";

export default function PricingEngineAdmin() {
  const stats = [
    { title: "Engine Status", value: "Active" },
    { title: "Version", value: "v2" },
    { title: "Last Sync", value: "2 minutes ago" },
  ];

  const columns = ["Metric", "Value"];
  const rows = [
    { Metric: "Requests Today", Value: "1,204" },
    { Metric: "Avg Response Time", Value: "82ms" },
    { Metric: "Errors", Value: "0" },
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <AdminCard key={s.title} title={s.title} value={s.value} />
        ))}
      </div>

      <AdminTable columns={columns} rows={rows} />
    </div>
  );
}
