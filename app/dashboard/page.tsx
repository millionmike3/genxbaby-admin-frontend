import Card from "@/components/Card";

export default async function DashboardPage() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <Card title="Total Applications" value="128" />
      <Card title="Pending Reviews" value="42" />
      <Card title="Notifications" value="12" />
    </div>
  );
}
