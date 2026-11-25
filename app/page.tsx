"use client";

import { useState } from "react";

import PricingDashboard from "@/components/PricingDashboard";
import MatrixView from "@/components/MatrixView";
import PricingEngineAdmin from "@/components/PricingEngineAdmin";
import LLPAMatrixEditor from "@/components/LLPAMatrixEditor";
import BorrowerRulesEditor from "@/components/BorrowerRulesEditor";

const modules = [
  {
    id: "pricing-admin",
    number: "01",
    label: "Pricing Engine",
    description: "Configure and manage the core pricing engine.",
    component: PricingEngineAdmin,
  },
  {
    id: "pricing-dashboard",
    number: "02",
    label: "Pricing Intelligence",
    description: "Review pricing performance and market intelligence.",
    component: PricingDashboard,
  },
  {
    id: "matrix-view",
    number: "03",
    label: "Matrix Intelligence",
    description: "Review the current pricing matrix and adjustments.",
    component: MatrixView,
  },
  {
    id: "llpa-editor",
    number: "04",
    label: "LLPA Management",
    description: "Manage loan-level price adjustments.",
    component: LLPAMatrixEditor,
  },
  {
    id: "borrower-rules",
    number: "05",
    label: "Borrower Rules",
    description: "Manage borrower eligibility and underwriting rules.",
    component: BorrowerRulesEditor,
  },
];

export default function PricingAdminPage() {
  const [activeModule, setActiveModule] = useState("pricing-admin");

  const selectedModule =
    modules.find((module) => module.id === activeModule) ?? modules[0];

  const ActiveComponent = selectedModule.component;

  return (
    <main className="min-h-screen overflow-hidden bg-[#080E19] text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-48 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.06] blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/[0.05] blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-[1800px] px-5 py-7 sm:px-8 lg:px-12">

        {/* Header */}
        <header className="mb-10 flex flex-col gap-6 border-b border-white/10 pb-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10">
                <span className="text-sm font-black text-cyan-300">GX</span>
              </div>

              <div>
                <p className="text-sm font-bold tracking-[0.25em] text-white">
                  GENXBABY
                </p>
                <p className="text-[9px] tracking-[0.24em] text-slate-500">
                  FINANCIAL INFRASTRUCTURE
                </p>
              </div>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Financial Intelligence
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Pricing, risk, matrices and borrower configuration.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 sm:self-center">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-medium tracking-wide text-slate-300">
              ADMIN WORKSPACE
            </span>
          </div>
        </header>

        {/* Module Navigation */}
        <nav
          aria-label="Pricing administration modules"
          className="mb-8 overflow-x-auto rounded-xl border border-white/10 bg-[#101827]/90 p-2"
        >
          <div className="flex min-w-max items-center gap-1">
            {modules.map((module) => {
              const isActive = activeModule === module.id;

              return (
                <button
                  key={module.id}
                  type="button"
                  onClick={() => setActiveModule(module.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex items-center gap-2.5 rounded-lg px-4 py-3 text-left transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-400 text-[#07111F] shadow-lg shadow-cyan-500/10"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  <span
                    className={`text-[10px] font-bold ${
                      isActive ? "text-[#07111F]/60" : "text-slate-600"
                    }`}
                  >
                    {module.number}
                  </span>

                  <span className="whitespace-nowrap text-xs font-semibold tracking-wide">
                    {module.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Active Workspace */}
        <section className="min-h-[650px]">
          <div className="mb-7 flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400">
                  MODULE {selectedModule.number}
                </span>
                <span className="h-px w-8 bg-cyan-400/40" />
                <span className="text-[10px] tracking-widest text-slate-500">
                  GENXBABY PLATFORM
                </span>
              </div>

              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {selectedModule.label}
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                {selectedModule.description}
              </p>
            </div>

            <span className="text-xs tracking-wide text-slate-500">
              ADMINISTRATION / PRICING
            </span>
          </div>

          {/* Component Workspace */}
          <div className="rounded-xl border border-white/10 bg-[#0D1523] p-4 shadow-2xl shadow-black/20 sm:p-7 lg:p-9">
            <ActiveComponent />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-[10px] tracking-widest text-slate-600 sm:flex-row">
          <span>GENXBABY FINANCIAL INFRASTRUCTURE</span>
          <span>PRICING & RISK MANAGEMENT</span>
        </footer>
      </div>
    </main>
  );
}