import React from "react";



export function DataTable({
  columns,
  data,
}) {
  return (
    <div className="w-full overflow-x-auto rounded">
      <table className="w-full border-collapse rounded rounded-xl shadow-sm">
        <thead className="bg-muted rounded text-left">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="px-4 py-3 text-sm font-semibold text-gray-700 border-b"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className="hover:bg-gray-50 transition-colors border-b"
            >
              {columns.map((col) => (
                <td key={String(col.key)} className="px-4 py-3 text-sm">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
