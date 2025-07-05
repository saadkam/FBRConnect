import { useState } from "react";

export default function Dashboard() {
  const [invoices, setInvoices] = useState([
    { id: 1, number: "INV-001", client: "ABC Corp", amount: 15000, due: "2025-07-05", status: "Pending" },
    { id: 2, number: "INV-002", client: "XYZ Ltd", amount: 8200, due: "2025-07-12", status: "Pending" },
  ]);

  const markAsPaid = (id) => {
    setInvoices(invoices.filter(inv => inv.id !== id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Welcome to FBRConnect Dashboard</h1>
      <div className="bg-red-500 text-white p-4 text-xl">Hello Tailwind</div>
      <div className="bg-red-500 text-white p-4 text-xl">
  If this is red, Tailwind is fixed.
</div>


      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Invoice #</th>
              <th className="px-4 py-2 text-left">Client</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">Due Date</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id} className="border-t">
                <td className="px-4 py-2">{inv.number}</td>
                <td className="px-4 py-2">{inv.client}</td>
                <td className="px-4 py-2">PKR {inv.amount.toLocaleString()}</td>
                <td className="px-4 py-2">{inv.due}</td>
                <td className="px-4 py-2 text-yellow-600 font-semibold">{inv.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => markAsPaid(inv.id)}
                    className="px-3 py-1 text-sm text-white bg-green-600 rounded hover:bg-green-700"
                  >
                    Mark as Paid
                  </button>
                </td>
              </tr>
            ))}
            {invoices.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  All invoices are paid ✅
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
