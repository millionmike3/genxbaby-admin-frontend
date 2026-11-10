
import PricingDashboard from "@/components/PricingDashboard";
import MatrixView from "@/components/MatrixView";

import PricingEngineAdmin from "@/components/PricingEngineAdmin";
import LLPAMatrixEditor from "@/components/LLPAMatrixEditor";
import BorrowerRulesEditor from "@/components/BorrowerRulesEditor";

const sections = [
  {
    id: "pricing-admin",
    number: "01",
    label: "PRICING ENGINE",
    description: "Core pricing configuration and administration",
  },
  {
    id: "pricing-dashboard",
    number: "02",
    label: "PRICING INTELLIGENCE",
    description: "Pricing performance and engine analytics",
  },
  {
    id: "matrix-view",
    number: "03",
    label: "MATRIX INTELLIGENCE",
    description: "View pricing matrices and market adjustments",
  },
  {
    id: "llpa-editor",
    number: "04",
    label: "LLPA MANAGEMENT",
    description: "Loan-level price adjustment configuration",
  },
  {
    id: "borrower-rules",
    number: "05",
    label: "BORROWER RULES",
    description: "Borrower eligibility and underwriting parameters",
  },
];

function SectionHeader({
  number,
  label,
  description,
}: {
  number: string;
  label: string;
  description: string;
}) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

      <div className="flex items-start gap-4">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 font-mono text-sm font-bold text-amber-400">
          {number}
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-[0.16em] text-slate-100">
            {label}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {description}
          </p>
        </div>

      </div>

      <div className="hidden items-center gap-2 sm:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
        <span className="font-mono text-[10px] tracking-widest text-slate-500">
          GX SYSTEM MODULE
        </span>
      </div>

    </div>
  );
}

function ModuleCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#26364B] bg-[#101B2C] shadow-[0_8px_30px_rgba(0,0,0,0.18)]">

      <div className="h-[2px] w-full bg-gradient-to-r from-amber-500 via-amber-400/40 to-transparent" />

      <div className="p-4 sm:p-6 lg:p-8">
        {children}
      </div>

    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B1220] text-slate-100">

      {/* Executive Dashboard Header */}
      <header className="border-b border-[#253247] bg-[#0D1728]">

        <div className="mx-auto max-w-[1800px] px-4 py-7 sm:px-6 lg:px-10">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

            <div>

              <div className="mb-3 flex items-center gap-2">

                <span className="rounded border border-amber-500/30 bg-amber-500/10 px-2 py-1 font-mono text-[10px] font-bold tracking-widest text-amber-400">
                  GX / ADMINISTRATION
                </span>

                <span className="font-mono text-[10px] tracking-widest text-slate-500">
                  INSTITUTIONAL PLATFORM
                </span>

              </div>

              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Financial Intelligence Center
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Centralized management of pricing infrastructure,
                investor overlays, loan-level adjustments,
                and borrower eligibility intelligence.
              </p>

            </div>

            {/* System Status */}
            <div className="flex flex-wrap items-center gap-3">

              <div className="rounded-lg border border-[#29394F] bg-[#101B2C] px-4 py-3">

                <div className="text-[10px] font-semibold tracking-widest text-slate-500">
                  PLATFORM
                </div>

                <div className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-200">

                  <span className="h-2 w-2 rounded-full bg-teal-400" />

                  GX ENGINE

                </div>

              </div>

              <div className="rounded-lg border border-[#29394F] bg-[#101B2C] px-4 py-3">

                <div className="text-[10px] font-semibold tracking-widest text-slate-500">
                  ACCESS LEVEL
                </div>

                <div className="mt-1 text-sm font-semibold text-amber-400">
                  ADMINISTRATOR
                </div>

              </div>

            </div>

          </div>

          {/* Navigation */}
          <nav className="mt-7 flex gap-2 overflow-x-auto border-t border-[#253247] pt-4">

            {sections.map((section) => (

              <a
                key={section.id}
                href={`#${section.id}`}
                className="shrink-0 rounded-md border border-transparent px-3 py-2 text-xs font-semibold text-slate-400 transition hover:border-amber-500/30 hover:bg-amber-500/5 hover:text-amber-400"
              >
                {section.number} / {section.label}
              </a>

            ))}

          </nav>

        </div>

      </header>

      {/* Main Administration Workspace */}
      <div className="mx-auto max-w-[1800px] space-y-12 px-4 py-8 sm:px-6 lg:px-10 lg:py-10">

        {/* 01 Pricing Engine Administration */}
        <section id="pricing-admin" className="scroll-mt-28">

          <SectionHeader
            number="01"
            label="PRICING ENGINE ADMIN"
            description="Core pricing configuration and administration"
          />

          <ModuleCard>
            <PricingEngineAdmin />
          </ModuleCard>

        </section>

        {/* 02 Pricing Dashboard */}
        <section id="pricing-dashboard" className="scroll-mt-28">

          <SectionHeader
            number="02"
            label="PRICING INTELLIGENCE"
            description="Pricing performance and engine analytics"
          />

          <ModuleCard>
            <PricingDashboard />
          </ModuleCard>

        </section>

        {/* 03 Matrix Viewer */}
        <section id="matrix-view" className="scroll-mt-28">

          <SectionHeader
            number="03"
            label="MATRIX INTELLIGENCE"
            description="Pricing matrices and market adjustments"
          />

          <ModuleCard>
            <MatrixView />
          </ModuleCard>

        </section>

        {/* 04 LLPA Matrix Editor */}
        <section id="llpa-editor" className="scroll-mt-28">

          <SectionHeader
            number="04"
            label="LLPA MATRIX MANAGEMENT"
            description="Loan-level price adjustment configuration"
          />

          <ModuleCard>
            <LLPAMatrixEditor />
          </ModuleCard>

        </section>

        {/* 05 Borrower Rules */}
        <section id="borrower-rules" className="scroll-mt-28">

          <SectionHeader
            number="05"
            label="BORROWER ELIGIBILITY ENGINE"
            description="Borrower rules and underwriting parameters"
          />

          <ModuleCard>
            <BorrowerRulesEditor />
          </ModuleCard>

        </section>

      </div>

    </main>
  );
}
