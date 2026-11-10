export default function BorrowerRulesEditor() {
  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-semibold text-primary">Borrower Rules Editor</h2>

      <div className="bg-black/40 backdrop-blur-md border border-primary/40 rounded-xl p-8 space-y-6">
        <label className="block">
          <span className="text-primary font-semibold">Minimum Credit Score</span>
          <input
            type="number"
            className="mt-2 w-full bg-black/60 border border-primary/40 rounded-lg p-3 text-white"
            defaultValue={620}
          />
        </label>

        <label className="block">
          <span className="text-primary font-semibold">Max DTI</span>
          <input
            type="number"
            className="mt-2 w-full bg-black/60 border border-primary/40 rounded-lg p-3 text-white"
            defaultValue={50}
          />
        </label>

        <button className="px-6 py-3 bg-primary text-black font-bold rounded-lg 
                           shadow-neonGreen hover:bg-primary/80 transition">
          Save Borrower Rules
        </button>
      </div>
    </div>
  );
}
