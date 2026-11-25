import {
  Activity,
  ArrowUpRight,
  Database,
  Gauge,
  Layers3,
  LockKeyhole,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
  Zap,
} from "lucide-react";

import PricingEngineAdmin from "@/components/PricingEngineAdmin";
import PricingDashboard from "@/components/PricingDashboard";
import MatrixView from "@/components/MatrixView";
import LLPAMatrixEditor from "@/components/LLPAMatrixEditor";
import BorrowerRulesEditor from "@/components/BorrowerRulesEditor";

const systemMetrics = [
  { label: "Engine status", value: "Active", detail: "Pricing service", icon: Activity, tone: "text-emerald-300", dot: "bg-emerald-400" },
  { label: "Engine version", value: "v2", detail: "Current release", icon: Zap, tone: "text-sky-300", dot: "bg-sky-400" },
  { label: "Avg. response", value: "82ms", detail: "Displayed snapshot", icon: Gauge, tone: "text-amber-300", dot: "bg-amber-300" },
  { label: "Reported errors", value: "0", detail: "Displayed snapshot", icon: ShieldCheck, tone: "text-emerald-300", dot: "bg-emerald-400" },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  number,
}: {
  eyebrow: string;
  title: string;
  description: string;
  number: string;
}) {
  return (
    <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-amber-300/80">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-lg font-semibold tracking-tight text-white">
          {title}
        </h2>
        <p className="mt-1 text-xs leading-5 text-slate-400">
          {description}
        </p>
      </div>
      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600">
        {number}
      </span>
    </div>
  );
}

function WorkspacePanel({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-w-0 rounded-2xl border border-white/[0.08] bg-[#101B2B]/90 p-4 shadow-xl shadow-black/10 sm:p-6 lg:p-7">
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <main className="space-y-8 text-slate-100">
      <section className="relative isolate overflow-hidden rounded-3xl border border-white/[0.09] bg-[#101C2D] shadow-2xl shadow-black/20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-amber-300/[0.08] blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-sky-400/[0.08] blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.025)_55%,transparent_78%)]" />
        </div>

        <div className="flex flex-col justify-between gap-7 px-6 py-7 sm:px-8 sm:py-9 xl:flex-row xl:items-end xl:px-10">
          <div className="max-w-3xl">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-amber-300/25 bg-amber-300/[0.08] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-amber-200">
                GX / CONTROL
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                Administrative environment
              </span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Pricing & risk
              <span className="block text-slate-400">control center.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">
              A centralized workspace for pricing intelligence, investor
              matrices, loan-level adjustments, and borrower eligibility.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0B1422]/70 px-3 py-2.5">
              <LockKeyhole size={14} className="text-emerald-300" />
              <span className="text-[10px] font-medium text-slate-300">Admin workspace</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#0B1422]/70 px-3 py-2.5">
              <Database size={14} className="text-sky-300" />
              <span className="text-[10px] font-medium text-slate-300">Pricing data</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-white/[0.08] sm:grid-cols-4">
          {systemMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className={`min-w-0 px-5 py-4 sm:px-6 ${index > 0 ? "border-l border-white/[0.07]" : ""} ${index > 1 ? "border-t border-white/[0.07] sm:border-t-0" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={13} className={metric.tone} />
                  <span className="truncate text-[9px] font-semibold uppercase tracking-[0.15em] text-slate-500">
                    {metric.label}
                  </span>
                </div>
                <p className={`mt-2 text-xl font-semibold tracking-tight ${metric.tone}`}>
                  {metric.value}
                </p>
                <p className="mt-1 text-[10px] text-slate-500">{metric.detail}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="01 / Engine operations"
          title="Pricing engine overview"
          description="Engine configuration and the current operational snapshot."
          number="CORE SYSTEM"
        />
        <WorkspacePanel>
          <PricingEngineAdmin />
        </WorkspacePanel>
      </section>

      <section>
        <SectionHeading
          eyebrow="02 / Scenario intelligence"
          title="Pricing analysis"
          description="Evaluate borrower and property inputs against the pricing service."
          number="ANALYTICS"
        />
        <WorkspacePanel>
          <PricingDashboard />
        </WorkspacePanel>
      </section>

      <section id="matrix-intelligence" className="grid scroll-mt-8 gap-7 2xl:grid-cols-2">
        <div className="min-w-0">
          <SectionHeading
            eyebrow="03 / Pricing architecture"
            title="Matrix intelligence"
            description="Review current pricing rules and adjustment logic."
            number="MATRIX"
          />
          <WorkspacePanel>
            <MatrixView />
          </WorkspacePanel>
        </div>

        <div className="min-w-0">
          <SectionHeading
            eyebrow="04 / Loan-level adjustments"
            title="LLPA management"
            description="Manage loan-level price adjustment structures."
            number="LLPA"
          />
          <WorkspacePanel>
            <LLPAMatrixEditor />
          </WorkspacePanel>
        </div>
      </section>

      <section>
        <SectionHeading
          eyebrow="05 / Underwriting configuration"
          title="Borrower eligibility rules"
          description="Maintain borrower qualification and underwriting parameters."
          number="ELIGIBILITY"
        />
        <WorkspacePanel>
          <BorrowerRulesEditor />
        </WorkspacePanel>
      </section>

      <footer className="flex flex-col justify-between gap-3 border-t border-white/[0.08] py-5 text-[9px] font-medium uppercase tracking-[0.18em] text-slate-600 sm:flex-row">
        <span className="inline-flex items-center gap-2">
          <Workflow size={12} />
          GenXBaby financial infrastructure
        </span>
        <span className="inline-flex items-center gap-2">
          <SlidersHorizontal size={12} />
          Pricing · Risk · Eligibility
          <ArrowUpRight size={12} />
        </span>
      </footer>
    </main>
  );
}