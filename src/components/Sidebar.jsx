import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900 text-gray-300 p-6">
      <h2 className="text-white text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-white"
        >
          Dashboard
        </Link>

        <Link
          to="/users"
          className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-white"
        >
          Users
        </Link>

        <Link
          to="/settings"
          className="block px-3 py-2 rounded hover:bg-gray-800 hover:text-white"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}
