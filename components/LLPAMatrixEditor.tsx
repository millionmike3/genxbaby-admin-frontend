"use client";

import { useState } from "react";

export default function LLPAMatrixEditor() {
  const initialColumns = ["Credit Score", "LTV", "LLPA"];
  const initialRows = [
    { "Credit Score": "740+", LTV: "80%", LLPA: "0.250" },
    { "Credit Score": "700–739", LTV: "85%", LLPA: "0.375" },
  ];

  const [columns] = useState(initialColumns);
  const [rows, setRows] = useState(initialRows);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  function updateCell(rowIndex: number, column: string, value: string) {
    setRows((prev) => {
      const updated = [...prev];
      updated[rowIndex] = { ...updated[rowIndex], [column]: value };
      return updated;
    });
  }

  async function saveChanges() {
    setSaving(true);
    setMessage("");

    try {
      // TODO: Replace with your real LLPA update endpoint
      console.log("Saving LLPA Matrix:", rows);

      await new Promise((res) => setTimeout(res, 800)); // simulate API

      setMessage("LLPA Matrix updated successfully.");
    } catch (e: any) {
      setMessage("Error saving LLPA Matrix.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-10">

      {/* Header */}
      <h2 className="text-sm font-semibold text-[#9CA3AF] uppercase tracking-[0.12em]">
        LLPA Matrix Editor
      </h2>

      {/* Editable Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#0B0D10] border-b border-[#1F2933]">
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-left uppercase tracking-[0.12em] text-[#9CA3AF] text-xs"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b border-[#1F2933]">
                {columns.map((col) => (
                  <td key={col} className="px-4 py-3">
                    <input
                      type="text"
                      value={row[col]}
                      onChange={(e) =>
                        updateCell(rowIndex, col, e.target.value)
                      }
                      className="
                        w-full bg-[#11151B] border border-[#1F2933]
                        rounded-md px-3 py-2 text-[#E5E7EB]
                        focus:outline-none focus:border-[#16A34A]
                      "
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Save Button */}
      <button
        onClick={saveChanges}
        disabled={saving}
        className="
          px-6 py-3 rounded-lg font-semibold text-sm
          bg-[#16A34A] text-[#05060A]
          hover:bg-[#16A34A]/80 transition
          disabled:opacity-50
        "
      >
        {saving ? "Saving..." : "Save Changes"}
      </button>

      {/* Status Message */}
      {message && (
        <p className="text-xs text-[#9CA3AF]">
          {message}
        </p>
      )}
    </div>
  );
}
