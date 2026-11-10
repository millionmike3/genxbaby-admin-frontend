"use client";

import { useEffect, useState } from "react";

export default function MatrixEditor() {
  const [raw, setRaw] = useState<string>("");
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          process.env.NEXT_PUBLIC_PRICING_ENGINE_URL + "/matrix/current"
        );
        if (!res.ok) return;
        const data = await res.json();
        setRaw(JSON.stringify(data, null, 2));
      } catch {}
    }
    load();
  }, []);

  async function save() {
    setStatus(null);
    try {
      const blob = new Blob([raw], { type: "application/json" });
      const file = new File([blob], "matrix.json", { type: "application/json" });

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(
        process.env.NEXT_PUBLIC_PRICING_ENGINE_URL + "/matrix/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || "Upload failed");
      }

      setStatus("Matrix updated successfully.");
    } catch (e: any) {
      setStatus(e.message || "Error updating matrix.");
    }
  }

  return (
    <div className="space-y-4 text-sm">
      <h3 className="text-xl font-semibold text-emerald-400">
        Matrix Editor (JSON)
      </h3>
      <p className="text-slate-400">
        Edit the pricing matrix JSON directly. Upload validates base_rates, adjustments, and investor_overlays.
      </p>
      <textarea
        className="w-full h-80 bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-xs text-slate-100"
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
      />
      <button
        onClick={save}
        className="px-4 py-2 rounded bg-emerald-500 text-slate-950 font-medium"
      >
        Save Matrix
      </button>
      {status && <p className="text-xs text-slate-300 mt-2">{status}</p>}
    </div>
  );
}
