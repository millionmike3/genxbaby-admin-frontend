import PricingEngineAdmin from "@/components/PricingEngineAdmin";
import PricingDashboard from "@/components/PricingDashboard";
import MatrixView from "@/components/MatrixView";
import LLPAMatrixEditor from "@/components/LLPAMatrixEditor";
import BorrowerRulesEditor from "@/components/BorrowerRulesEditor";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#05060A] text-[#E5E7EB]">

      {/* Topbar */}
      <header className="border-b border-[#1F2933] bg-[#0B0D10]">
        <div className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#F9FAFB]">
              GenXBaby Admin
            </h1>
            <p className="text-xs text-[#9CA3AF] mt-1">
              Enterprise Pricing & Risk Control Center
            </p>
          </div>
{/* KPI Strip */}
<div className="border-b border-[#1F2933] bg-[#0B0D10]">
  <div className="max-w-7xl mx-auto px-10 py-4 grid grid-cols-4 gap-8">

    {/* Requests Today */}
    <div className="flex flex-col">
      <span className="text-[0.65rem] uppercase tracking-[0.18em] text-[#9CA3AF]">
        Requests Today
      </span>
      <span className="text-lg font-semibold text-[#16A34A]">
        1,204
      </span>
    </div>

    {/* Avg Response Time */}
    <div className="flex flex-col">
      <span className="text-[0.65rem] uppercase tracking-[0.18em] text-[#9CA3AF]">
        Avg Response Time
      </span>
      <span className="text-lg font-semibold text-[#E5E7EB]">
        82ms
      </span>
    </div>

    {/* Error Rate */}
    <div className="flex flex-col">
      <span className="text-[0.65rem] uppercase tracking-[0.18em] text-[#9CA3AF]">
        Errors
      </span>
      <span className="text-lg font-semibold text-[#16A34A]">
        0
      </span>
    </div>

    {/* Engine Load */}
    <div className="flex flex-col">
      <span className="text-[0.65rem] uppercase tracking-[0.18em] text-[#9CA3AF]">
        Engine Load
      </span>
      <span className="text-lg font-semibold text-[#C9A34A]">
        37%
      </span>
    </div>

  </div>
</div>

          {/* Market-style status strip */}
          <div className="flex items-center gap-10 text-xs text-[#9CA3AF]">
            <div className="flex flex-col items-end">
              <span className="uppercase tracking-[0.18em] text-[0.65rem]">
                Engine Status
              </span>
              <span className="mt-1 text-[#16A34A] font-medium">
                Active · v2
              </span>
            </div>

            <div className="flex flex-col items-end">
              <span className="uppercase tracking-[0.18em] text-[0.65rem]">
                Last Sync
              </span>
              <span className="mt-1">
                2 minutes ago
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-10 py-14 space-y-20">

        {/* Row 1: Engine + Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          <section className="col-span-2 space-y-4">
            <h2 className="text-sm font-semibold text-[#9CA3AF] uppercase tracking-[0.12em]">
              Pricing Engine Admin
            </h2>
            <div className="bg-[#0B0D10] border border-[#1F2933] rounded-xl p-10 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
              <PricingEngineAdmin />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-[#9CA3AF] uppercase tracking-[0.12em]">
              Engine Snapshot
            </h2>
            <div className="bg-[#0B0D10] border border-[#1F2933] rounded-xl p-10 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
              <PricingDashboard />
            </div>
          </section>

        </div>

        {/* Row 2: Matrix + LLPA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-[#9CA3AF] uppercase tracking-[0.12em]">
              Matrix Viewer
            </h2>
            <div className="bg-[#0B0D10] border border-[#1F2933] rounded-xl p-10 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
              <MatrixView />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-sm font-semibold text-[#9CA3AF] uppercase tracking-[0.12em]">
              LLPA Matrix Editor
            </h2>
            <div className="bg-[#0B0D10] border border-[#1F2933] rounded-xl p-10 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
              <LLPAMatrixEditor />
            </div>
          </section>

        </div>

        {/* Row 3: Borrower Rules */}
        <section className="space-y-4">
          <h2 className="text-sm font-semibold text-[#9CA3AF] uppercase tracking-[0.12em]">
            Borrower Rules Editor
          </h2>
          <div className="bg-[#0B0D10] border border-[#1F2933] rounded-xl p-10 shadow-[0_12px_30px_rgba(0,0,0,0.6)]">
            <BorrowerRulesEditor />
          </div>
        </section>

      </div>
    </main>
  );
}
