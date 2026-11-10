"use client";

import { useState } from "react";

type QuoteResult = {
  base_rate: number;
  adjusted_rate: number;
  final_rate: number;
  investor: string;
};

export default function PricingABTest() {
  const [inputs, setInputs] = useState({
    fico: 760,
    ltv: 70,
    loan_amount: 500000,
    investor: "SubstantialFunding",
    property_type: "single_family",
    occupancy: "investment",
    purpose: "cashout",
    state: "NY",
    dscr: 1.25,
  });

  const [v1, setV1] = useState<QuoteResult | null>(null);
  const [v2, setV2] = useState<QuoteResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function runCompare() {
    setLoading(true);
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_PRICING_ENGINE_URL + "/pricing/quote/compare",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(inputs),
        }
      );
      const data = await res.json();
      setV1(data.v1);
      setV2(data.v2);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6 text-sm">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <label className="block">
            <span className="text-slate-300">FICO</span>
            <input
              type="number"
              className="mt-1 w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-100"
              value={inputs.fico}
              onChange={(e) => setInputs({ ...inputs, fico: Number(e.target.value) })}
            />
          </label>

          <label className="block">
            <span className="text-slate-300">LTV</span>
            <input
              type="number"
              className="mt-1 w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-100"
              value={inputs.ltv}
              onChange={(e) => setInputs({ ...inputs, ltv: Number(e.target.value) })}
            />
          </label>

          <label className="block">
            <span className="text-slate-300">Loan Amount</span>
            <input
              type="number"
              className="mt-1 w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-100"
              value={inputs.loan_amount}
              onChange={(e) =>
                setInputs({ ...inputs, loan_amount: Number(e.target.value) })
              }
            />
          </label>
        </div>

        <div className="space-y-3">
          <label className="block">
            <span className="text-slate-300">Investor</span>
            <input
              className="mt-1 w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-100"
              value={inputs.investor}
              onChange={(e) => setInputs({ ...inputs, investor: e.target.value })}
            />
          </label>

          <label className="block">
            <span className="text-slate-300">DSCR</span>
            <input
              type="number"
              step="0.01"
              className="mt-1 w-full bg-slate-950 border border-slate-800 rounded px-2 py-1 text-slate-100"
              value={inputs.dscr}
              onChange={(e) => setInputs({ ...inputs, dscr: Number(e.target.value) })}
            />
          </label>
        </div>
      </div>

      <button
        onClick={runCompare}
        disabled={loading}
        className="px-4 py-2 rounded bg-emerald-500 text-slate-950 font-medium"
      >
        {loading ? "Running..." : "Run A/B Pricing (v1 vs v2)"}
      </button>

      {v1 && v2 && (
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border border-slate-800 rounded-lg p-4 bg-slate-900">
            <h3 className="font-semibold text-emerald-400 mb-2">Engine v1</h3>
            <p>Base: {v1.base_rate}</p>
            <p>Adjusted: {v1.adjusted_rate}</p>
            <p>Final: {v1.final_rate}</p>
          </div>

          <div className="border border-slate-800 rounded-lg p-4 bg-slate-900">
            <h3 className="font-semibold text-emerald-400 mb-2">Engine v2</h3>
            <p>Base: {v2.base_rate}</p>
            <p>Adjusted: {v2.adjusted_rate}</p>
            <p>Final: {v2.final_rate}</p>
          </div>
        </div>
      )}
    </div>
  );
}
