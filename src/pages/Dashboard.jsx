// import DashboardLayout from "../layout/DashboardLayout";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div>


      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Users" value="1,240" />
        <StatCard title="Orders" value="320" />
        <StatCard title="Revenue" value="$12,400" />
        <StatCard title="Growth" value="+12%" />
      </div>

      {/* Content box */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">
          Recent Activity
        </h2>
        <p className="text-gray-600">
          Dashboard content goes here...
        </p>
      </div>
    </div>
  );
}
