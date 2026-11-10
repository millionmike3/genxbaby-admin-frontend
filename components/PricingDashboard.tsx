"use client";

import { useState } from "react";

type PricingResponse = {
  base_rate: number;
  adjusted_rate: number;
  final_rate: number;
  investor: string;
  inputs: any;
};

export default function PricingDashboard() {
  const [payload, setPayload] = useState({
    fico: 720,
    ltv: 75,
    loan_amount: 400000,
    dscr: 1.25,
    property_type: "2-4 unit",
    occupancy: "investment",
    purpose: "cashout",
    state: "NY",
    investor: "SubstantialFunding",
  });

  const [result, setResult] = useState<PricingResponse | null>(null);
  const [issues, setIssues] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  function updateField(field: string, value: any) {
    setPayload((prev) => ({ ...prev, [field]: value }));
  }

  async function runScenario() {
    setLoading(true);
    setIssues([]);
    setResult(null);

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_PRICING_ADMIN_URL + "/admin/test-scenario",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!data.valid) {
        setIssues(data.issues || []);
      } else {
        setResult(data.pricing);
      }
    } catch (e: any) {
      setIssues([e.message || "Unknown error"]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-10">

      {/* SECTION HEADER */}
      <h2 className="text-sm font-semibold text-[#9CA3AF] uppercase tracking-[0.12em]">
        Pricing Scenario Analysis
      </h2>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* INPUT PANEL */}
        <div className="bg-[#0B0D10] border border-[#1F2933] rounded-xl p-8 shadow-[0_12px_30px_rgba(0,0,0,0.6)] space-y-6">

          <h3 className="text-sm uppercase tracking-[0.12em] text-[#9CA3AF]">
            Scenario Inputs
          </h3>

          <div className="grid grid-cols-2 gap-5">

            {/* FICO */}
            <div className="space-y-1">
              <label className="text-xs text-[#9CA3AF] uppercase tracking-[0.12em]">
                FICO
              </label>
              <input
                type="number"
                value={payload.fico}
                onChange={(e) => updateField("fico", Number(e.target.value))}
                className="w-full bg-[#11151B] border border-[#1F2933] rounded-lg px-3 py-2 text-sm text-[#E5E7EB]"
              />
            </div>

            {/* LTV */}
            <div className="space-y-1">
              <label className="text-xs text-[#9CA3AF] uppercase tracking-[0.12em]">
                LTV
              </label>
              <input
                type="number"
                value={payload.ltv}
                onChange={(e) => updateField("ltv", Number(e.target.value))}
                className="w-full bg-[#11151B] border border-[#1F2933] rounded-lg px-3 py-2 text-sm text-[#E5E7EB]"
              />
            </div>

            {/* Loan Amount */}
            <div className="space-y-1">
              <label className="text-xs text-[#9CA3AF] uppercase tracking-[0.12em]">
                Loan Amount
              </label>
              <input
                type="number"
                value={payload.loan_amount}
                onChange={(e) => updateField("loan_amount", Number(e.target.value))}
                className="w-full bg-[#11151B] border border-[#1F2933] rounded-lg px-3 py-2 text-sm text-[#E5E7EB]"
              />
            </div>

            {/* DSCR */}
            <div className="space-y-1">
              <label className="text-xs text-[#9CA3AF] uppercase tracking-[0.12em]">
                DSCR
              </label>
              <input
                type="number"
                step="0.01"
                value={payload.dscr}
                onChange={(e) => updateField("dscr", Number(e.target.value))}
                className="w-full bg-[#11151B] border border-[#1F2933] rounded-lg px-3 py-2 text-sm text-[#E5E7EB]"
              />
            </div>

            {/* Property Type */}
            <div className="space-y-1 col-span-2">
              <label className="text-xs text-[#9CA3AF] uppercase tracking-[0.12em]">
                Property Type
              </label>
              <input
                type="text"
                value={payload.property_type}
                onChange={(e) => updateField("property_type", e.target.value)}
                className="w-full bg-[#11151B] border border-[#1F2933] rounded-lg px-3 py-2 text-sm text-[#E5E7EB]"
              />
            </div>

            {/* Occupancy */}
            <div className="space-y-1 col-span-2">
              <label className="text-xs text-[#9CA3AF] uppercase tracking-[0.12em]">
                Occupancy
              </label>
              <input
                type="text"
                value={payload.occupancy}
                onChange={(e) => updateField("occupancy", e.target.value)}
                className="w-full bg-[#11151B] border border-[#1F2933] rounded-lg px-3 py-2 text-sm text-[#E5E7EB]"
              />
            </div>

            {/* Purpose */}
            <div className="space-y-1 col-span-2">
              <label className="text-xs text-[#9CA3AF] uppercase tracking-[0.12em]">
                Purpose
              </label>
              <input
                type="text"
                value={payload.purpose}
                onChange={(e) => updateField("purpose", e.target.value)}
                className="w-full bg-[#11151B] border border-[#1F2933] rounded-lg px-3 py-2 text-sm text-[#E5E7EB]"
              />
            </div>

            {/* State */}
            <div className="space-y-1">
              <label className="text-xs text-[#9CA3AF] uppercase tracking-[0.12em]">
                State
              </label>
              <input
                type="text"
                value={payload.state}
                onChange={(e) => updateField("state", e.target.value)}
                className="w-full bg-[#11151B] border border-[#1F2933] rounded-lg px-3 py-2 text-sm text-[#E5E7EB]"
              />
            </div>

            {/* Investor */}
            <div className="space-y-1">
              <label className="text-xs text-[#9CA3AF] uppercase tracking-[0.12em]">
                Investor
              </label>
              <input
                type="text"
                value={payload.investor}
                onChange={(e) => updateField("investor", e.target.value)}
                className="w-full bg-[#11151B] border border-[#1F2933] rounded-lg px-3 py-2 text-sm text-[#E5E7EB]"
              />
            </div>

          </div>

          <button
            onClick={runScenario}
            disabled={loading}
            className="px-5 py-2 rounded-lg bg-[#16A34A] text-[#05060A] font-semibold text-sm tracking-wide disabled:opacity-50"
          >
            {loading ? "Running..." : "Run Scenario"}
          </button>
        </div>

        {/* RESULT PANEL */}
        <div className="bg-[#0B0D10] border border-[#1F2933] rounded-xl p-8 shadow-[0_12px_30px_rgba(0,0,0,0.6)] space-y-6">

          <h3 className="text-sm uppercase tracking-[0.12em] text-[#9CA3AF]">
            Result
          </h3>

          {/* ISSUES */}
          {issues.length > 0 && (
            <div className="text-sm text-red-400 space-y-2">
              <p className="font-semibold">Issues Detected</p>
              <ul className="list-disc ml-5 space-y-1">
                {issues.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
          )}

          {/* RESULT */}
          {result && (
            <div className="text-sm space-y-3">

              <div className="flex justify-between border-b border-[#1F2933] pb-2">
                <span className="text-[#9CA3AF] uppercase tracking-[0.12em] text-[0.7rem]">
                  Base Rate
                </span>
                <span className="font-semibold text-[#16A34A]">
                  {result.base_rate}%
                </span>
              </div>

              <div className="flex justify-between border-b border-[#1F2933] pb-2">
                <span className="text-[#9CA3AF] uppercase tracking-[0.12em] text-[0.7rem]">
                  Adjusted Rate
                </span>
                <span className="font-semibold text-[#E5E7EB]">
                  {result.adjusted_rate}%
                </span>
              </div>

              <div className="flex justify-between border-b border-[#1F2933] pb-2">
                <span className="text-[#9CA3AF] uppercase tracking-[0.12em] text-[0.7rem]">
                  Final Rate
                </span>
                <span className="font-semibold text-[#C9A34A]">
                  {result.final_rate}%
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#9CA3AF] uppercase tracking-[0.12em] text-[0.7rem]">
                  Investor
                </span>
                <span className="font-semibold text-[#E5E7EB]">
                  {result.investor}
                </span>
              </div>

            </div>
          )}

          {/* EMPTY STATE */}
          {!result && issues.length === 0 && !loading && (
            <p className="text-xs text-[#9CA3AF]">
              Run a scenario to see pricing output.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
