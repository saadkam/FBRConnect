import { Routes, Route, Navigate, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateInvoice from "./pages/CreateInvoice";

export default function App() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-8">FBRConnect</h1>
        <nav className="space-y-4">
          <Link to="/dashboard" className="block text-blue-600 hover:underline">Dashboard</Link>
          <Link to="/create-invoice" className="block text-blue-600 hover:underline">Create Invoice</Link>
          <Link to="/sync" className="block text-blue-600 hover:underline">Sync</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <div className="flex justify-end mb-4">
          {/* Settings icon */}
          <div className="relative group">
            <button className="text-gray-600 hover:text-black">⚙️</button>
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md p-2 hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-invoice" element={<CreateInvoice />} />
          <Route path="/sync" element={<div>Sync Page</div>} />
        </Routes>
      </main>
    </div>
  );
}
