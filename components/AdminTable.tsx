export function AdminTable({ columns, rows }) {
  return (
    <div className="overflow-x-auto border border-primary/40 rounded-xl bg-black/40 backdrop-blur-md">
      <table className="min-w-full text-left text-white">
        <thead className="bg-primary/20">
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-6 py-4 font-semibold text-primary">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-t border-primary/20 hover:bg-primary/10">
              {columns.map((col) => (
                <td key={col} className="px-6 py-4">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
