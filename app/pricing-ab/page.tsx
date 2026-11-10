import PricingABTest from "@/components/PricingABTest";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 px-10 py-12">
      <h1 className="text-3xl font-semibold mb-6 text-emerald-400">
        Pricing Engine A/B Testing (v1 vs v2)
      </h1>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-8 shadow-xl">
        <PricingABTest />
      </div>
    </main>
  );
}
