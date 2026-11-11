
"use client";

import { useCallback, useEffect, useState } from "react";

// ------------------------------------------------------
// TYPES MATCHING THE ACTUAL RAILWAY JSON RESPONSE
// ------------------------------------------------------

type Matrix = {
  metadata?: {
    version?: string;
    lastUpdated?: string;
    source?: string;
    description?: string;
  };

  baseRates?: Record<string, number>;

  pricingTiers?: {
    fico?: Array<{
      range: string;
      adjustment: number;
    }>;
    ltv?: Array<{
      range: string;
      adjustment: number;
    }>;
  };

  llpa?: {
    ficoLtvGrid?: Array<{
      fico: string;
      ltvAdjustments: Record<string, number>;
    }>;
    occupancy?: Record<string, number>;
    loanPurpose?: Record<string, number>;
    propertyType?: Record<string, number>;
  };

  riskFactors?: {
    dti?: Record<string, number>;
    firstTimeHomebuyer?: number;
    bankruptcySeasoningUnder2Years?: number;
    foreclosureSeasoningUnder3Years?: number;
  };

  productAdjustments?: Record<string, number>;

  eligibilityRules?: {
    maxLtv?: Record<string, number>;
    minFico?: Record<string, number>;
    maxDti?: Record<string, number>;
  };
};

// ------------------------------------------------------
// API CONFIGURATION
// ------------------------------------------------------

const API_URL =
  process.env.NEXT_PUBLIC_PRICING_ENGINE_URL?.replace(/\/+$/, "") ||
  "https://gxpricingengine-production.up.railway.app";

// ------------------------------------------------------
// FORMAT HELPERS
// ------------------------------------------------------

function formatLabel(value: string): string {
  return value
    .replace(/([A-Z])/g, " $1")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatAdjustment(value: number): string {
  return `${value > 0 ? "+" : ""}${value.toFixed(3)}%`;
}

function formatRate(value: number): string {
  return `${value.toFixed(3)}%`;
}

// ------------------------------------------------------
// REUSABLE DISPLAY COMPONENTS
// ------------------------------------------------------

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-slate-700 bg-slate-900/80 p-5 space-y-4">
      <h2 className="text-lg font-bold text-cyan-400">
        {title}
      </h2>
      {children}
    </section>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: Array<Array<string | number>>;
}) {
  if (!rows.length) {
    return (
      <p className="text-sm text-slate-500">
        No data available.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-slate-700 text-slate-400">
            {headers.map((header) => (
              <th key={header} className="p-3 whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-slate-800 hover:bg-slate-800/50"
            >
              {row.map((value, cellIndex) => (
                <td
                  key={cellIndex}
                  className="p-3 text-white whitespace-nowrap"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AdjustmentCards({
  data,
}: {
  data?: Record<string, number>;
}) {
  if (!data || Object.keys(data).length === 0) {
    return (
      <p className="text-sm text-slate-500">
        No adjustments available.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(data).map(([key, value]) => (
        <div
          key={key}
          className="rounded-lg border border-slate-700 bg-slate-950 p-4"
        >
          <p className="text-sm text-slate-400">
            {formatLabel(key)}
          </p>

          <p className={`mt-2 text-xl font-bold ${
            value > 0
              ? "text-amber-400"
              : value < 0
                ? "text-emerald-400"
                : "text-white"
          }`}>
            {formatAdjustment(value)}
          </p>
        </div>
      ))}
    </div>
  );
}

// ------------------------------------------------------
// MAIN MATRIX VIEW
// ------------------------------------------------------

export default function MatrixView() {
  const [matrix, setMatrix] = useState<Matrix | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastFetched, setLastFetched] = useState<string | null>(null);

  // ----------------------------------------------------
  // FETCH MATRIX
  // ----------------------------------------------------

  const loadMatrix = useCallback(async () => {
    setError(null);
    setRefreshing(true);

    try {
      if (!API_URL) {
        throw new Error("Pricing engine URL is not configured.");
      }

      console.log("Pricing Engine URL:", API_URL);

      const url = `${API_URL}/matrix/current`;

      console.log("Matrix fetch URL:", url);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        const errorText = await response.text();

        throw new Error(
          `Pricing API returned ${response.status}: ${errorText}`
        );
      }

      const data: unknown = await response.json();

      console.log("Matrix response:", data);

      if (
        !data ||
        typeof data !== "object" ||
        Array.isArray(data)
      ) {
        throw new Error("Invalid matrix JSON structure.");
      }

      const parsed = data as Matrix;

      // Verify the actual sections returned by Railway.
      if (
        !parsed.baseRates ||
        typeof parsed.baseRates !== "object"
      ) {
        throw new Error(
          "Matrix response is missing the baseRates section."
        );
      }

      setMatrix(parsed);
      setLastFetched(new Date().toLocaleString());

    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Unable to load pricing matrix.";

      console.error("Matrix loading error:", err);

      setError(message);

    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void loadMatrix();
  }, [loadMatrix]);

  // ----------------------------------------------------
  // LOADING / ERROR STATES
  // ----------------------------------------------------

  if (loading) {
    return (
      <div className="rounded-xl border border-slate-700 bg-slate-950 p-8 text-center text-slate-300">
        Loading GenXBaby pricing matrix...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-500/40 bg-red-950/20 p-6">
        <h2 className="text-xl font-bold text-red-400">
          Pricing Matrix Error
        </h2>

        <p className="mt-3 text-sm text-slate-300">
          {error}
        </p>

        <button
          onClick={() => void loadMatrix()}
          disabled={refreshing}
          className="mt-5 rounded-lg bg-cyan-600 px-5 py-2 font-semibold text-white disabled:opacity-50"
        >
          {refreshing ? "Retrying..." : "Retry Matrix Fetch"}
        </button>
      </div>
    );
  }

  if (!matrix) {
    return (
      <p className="text-slate-400">
        No pricing matrix loaded.
      </p>
    );
  }

  // ----------------------------------------------------
  // MATRIX DATA
  // ----------------------------------------------------

  const metadata = matrix.metadata ?? {};

  const baseRates = matrix.baseRates ?? {};
  const ficoTiers = matrix.pricingTiers?.fico ?? [];
  const ltvTiers = matrix.pricingTiers?.ltv ?? [];

  const llpa = matrix.llpa ?? {};
  const riskFactors = matrix.riskFactors ?? {};
  const productAdjustments = matrix.productAdjustments ?? {};
  const eligibility = matrix.eligibilityRules ?? {};

  // ----------------------------------------------------
  // RENDER
  // ----------------------------------------------------

  return (
    <div className="space-y-8 text-white">

      {/* HEADER */}

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>
          <h1 className="text-3xl font-bold">
            GenXBaby Pricing Matrix
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Live institutional pricing configuration
          </p>
        </div>

        <button
          onClick={() => void loadMatrix()}
          disabled={refreshing}
          className="rounded-lg bg-cyan-600 px-5 py-3 font-semibold text-white hover:bg-cyan-500 disabled:opacity-50"
        >
          {refreshing ? "Refreshing..." : "Refresh Matrix"}
        </button>

      </div>

      {/* METADATA */}

      <Section title="Matrix Metadata">

        <div className="grid gap-4 md:grid-cols-3">

          <div>
            <p className="text-xs text-slate-400">Version</p>
            <p className="font-semibold">
              {metadata.version ?? "N/A"}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Last Updated</p>
            <p className="font-semibold">
              {metadata.lastUpdated ?? "N/A"}
            </p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Source</p>
            <p className="font-semibold">
              {metadata.source ?? "N/A"}
            </p>
          </div>

        </div>

        {metadata.description && (
          <p className="text-sm text-slate-400">
            {metadata.description}
          </p>
        )}

      </Section>

      {/* BASE RATES */}

      <Section title="Base Mortgage Rates">

        <DataTable
          headers={["Mortgage Product", "Base Rate"]}
          rows={Object.entries(baseRates).map(
            ([product, rate]) => [
              formatLabel(product),
              formatRate(rate),
            ]
          )}
        />

      </Section>

      {/* FICO TIERS */}

      <Section title="FICO Pricing Tiers">

        <DataTable
          headers={["FICO Range", "Rate Adjustment"]}
          rows={ficoTiers.map((tier) => [
            tier.range,
            formatAdjustment(tier.adjustment),
          ])}
        />

      </Section>

      {/* LTV TIERS */}

      <Section title="Loan-to-Value Pricing Tiers">

        <DataTable
          headers={["LTV Range", "Rate Adjustment"]}
          rows={ltvTiers.map((tier) => [
            tier.range,
            formatAdjustment(tier.adjustment),
          ])}
        />

      </Section>

      {/* LLPA GRID */}

      <Section title="FICO / LTV LLPA Grid">

        {llpa.ficoLtvGrid && llpa.ficoLtvGrid.length > 0 ? (

          <DataTable
            headers={[
              "FICO Range",
              ...Object.keys(
                llpa.ficoLtvGrid[0].ltvAdjustments
              ),
            ]}
            rows={llpa.ficoLtvGrid.map((row) => [
              row.fico,
              ...Object.values(row.ltvAdjustments).map(
                formatAdjustment
              ),
            ])}
          />

        ) : (
          <p className="text-sm text-slate-500">
            No LLPA grid available.
          </p>
        )}

      </Section>

      {/* OCCUPANCY */}

      <Section title="Occupancy Adjustments">
        <AdjustmentCards data={llpa.occupancy} />
      </Section>

      {/* LOAN PURPOSE */}

      <Section title="Loan Purpose Adjustments">
        <AdjustmentCards data={llpa.loanPurpose} />
      </Section>

      {/* PROPERTY TYPE */}

      <Section title="Property Type Adjustments">
        <AdjustmentCards data={llpa.propertyType} />
      </Section>

      {/* RISK FACTORS */}

      <Section title="Risk Factors">

        {riskFactors.dti && (
          <>
            <h3 className="font-semibold text-slate-300">
              Debt-to-Income Adjustments
            </h3>
            <AdjustmentCards data={riskFactors.dti} />
          </>
        )}

        <AdjustmentCards
          data={{
            firstTimeHomebuyer:
              riskFactors.firstTimeHomebuyer ?? 0,

            bankruptcySeasoningUnder2Years:
              riskFactors.bankruptcySeasoningUnder2Years ?? 0,

            foreclosureSeasoningUnder3Years:
              riskFactors.foreclosureSeasoningUnder3Years ?? 0,
          }}
        />

      </Section>

      {/* PRODUCT ADJUSTMENTS */}

      <Section title="Product Adjustments">
        <AdjustmentCards data={productAdjustments} />
      </Section>

      {/* ELIGIBILITY RULES */}

      <Section title="Eligibility Rules">

        {Object.entries(eligibility).map(
          ([category, rules]) => (
            <div key={category} className="space-y-3">

              <h3 className="font-semibold text-cyan-400">
                {formatLabel(category)}
              </h3>

              <AdjustmentCards
                data={rules}
              />

            </div>
          )
        )}

      </Section>

      {/* FOOTER */}

      <div className="border-t border-slate-800 pt-4 text-xs text-slate-500">
        <p>
          API: {API_URL}/matrix/current
        </p>

        <p className="mt-1">
          Last successful fetch: {lastFetched ?? "Not available"}
        </p>
      </div>

    </div>
  );
}
