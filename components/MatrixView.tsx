"use client";

import { useEffect, useState } from "react";

type LtvBucket = Record<string, number>;

type FicoBucket = {
  ltv: LtvBucket;
};

type ProductBaseRates = {
  fico: Record<string, FicoBucket>;
};

type BaseRates = Record<string, ProductBaseRates>;

type Adjustments = Record<string, Record<string, number>>;

type InvestorOverlays = Record<string, number>;

type Matrix = {
  base_rates: BaseRates;
  adjustments: Adjustments;
  investor_overlays: InvestorOverlays;
};


export default function MatrixView() {
  const [matrix, setMatrix] = useState<Matrix | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMatrix() {
      setLoading(true);
      setError(null);

      try {
        const url =
          process.env.NEXT_PUBLIC_PRICING_ENGINE_URL + "/matrix/current";

        const data = (await (await fetch(url)).json()) as Partial<Matrix>;

        const safeMatrix: Matrix = {
          base_rates: data.base_rates ?? {},
          adjustments: data.adjustments ?? {},
          investor_overlays: data.investor_overlays ?? {},
        };

        setMatrix(safeMatrix);
      } catch (e: any) {
        setError(e.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    loadMatrix();
  }, []);

  if (loading) return <p className="text-sm text-[#9CA3AF]">Loading matrix…</p>;
  if (error) return <p className="text-sm text-red-400">Error: {error}</p>;
  if (!matrix) return <p className="text-sm text-[#9CA3AF]">No matrix loaded.</p>;

  const baseRates = matrix.base_rates["30yr_fixed"]?.fico ?? {};

  return (
    <div className="space-y-12">
      {/* your JSX stays exactly the same */}
    </div>
  );
}
