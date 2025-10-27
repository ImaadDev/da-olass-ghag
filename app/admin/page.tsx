"use client";

import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);

export default function AdminHome() {
  // Sample chart data
  const userData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Users",
        data: [300, 450, 500, 700, 650, 900, 1100],
        backgroundColor: "rgba(220,38,38,0.6)",
        borderColor: "rgba(220,38,38,1)",
        borderWidth: 2,
      },
    ],
  };

  const videoData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Videos Uploaded",
        data: [5, 7, 4, 10, 6, 8, 9],
        backgroundColor: "rgba(220,38,38,0.6)",
      },
    ],
  };

  return (
    <div className="space-y-6 sm:space-y-8 p-4 sm:p-6 lg:p-8 w-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-black">Welcome, Admin!</h2>

      {/* Statistic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600 rounded">
          <p className="text-gray-500 text-xs sm:text-sm">Users</p>
          <h3 className="text-lg sm:text-xl font-bold text-black">1,245</h3>
        </div>
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600 rounded">
          <p className="text-gray-500 text-xs sm:text-sm">Videos</p>
          <h3 className="text-lg sm:text-xl font-bold text-black">532</h3>
        </div>
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600 rounded">
          <p className="text-gray-500 text-xs sm:text-sm">Podcasts</p>
          <h3 className="text-lg sm:text-xl font-bold text-black">124</h3>
        </div>
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600 rounded">
          <p className="text-gray-500 text-xs sm:text-sm">Visitors</p>
          <h3 className="text-lg sm:text-xl font-bold text-black">8,341</h3>
        </div>
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600 rounded">
          <p className="text-gray-500 text-xs sm:text-sm">Revenue</p>
          <h3 className="text-lg sm:text-xl font-bold text-black">$12,430</h3>
        </div>
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600 rounded">
          <p className="text-gray-500 text-xs sm:text-sm">Comments</p>
          <h3 className="text-lg sm:text-xl font-bold text-black">1,032</h3>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
        <div className="bg-white p-3 sm:p-4 shadow rounded w-full h-64 sm:h-80">
          <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">User Growth</h3>
          <Line data={userData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="bg-white p-3 sm:p-4 shadow rounded w-full h-64 sm:h-80">
          <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Videos Uploaded</h3>
          <Bar data={videoData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Recent Users Table */}
      <div className="bg-white p-3 sm:p-4 shadow rounded overflow-x-auto w-full">
        <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Recent Users</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-2 px-3 sm:px-4 text-gray-500 text-xs sm:text-sm">Name</th>
              <th className="py-2 px-3 sm:px-4 text-gray-500 text-xs sm:text-sm">Email</th>
              <th className="py-2 px-3 sm:px-4 text-gray-500 text-xs sm:text-sm">Role</th>
              <th className="py-2 px-3 sm:px-4 text-gray-500 text-xs sm:text-sm">Joined</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-3 sm:px-4 text-sm">John Doe</td>
              <td className="py-2 px-3 sm:px-4 text-sm">john@example.com</td>
              <td className="py-2 px-3 sm:px-4 text-sm">Admin</td>
              <td className="py-2 px-3 sm:px-4 text-sm">Oct 20, 2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-3 sm:px-4 text-sm">Jane Smith</td>
              <td className="py-2 px-3 sm:px-4 text-sm">jane@example.com</td>
              <td className="py-2 px-3 sm:px-4 text-sm">Editor</td>
              <td className="py-2 px-3 sm:px-4 text-sm">Oct 19, 2025</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-3 sm:px-4 text-sm">Michael Lee</td>
              <td className="py-2 px-3 sm:px-4 text-sm">michael@example.com</td>
              <td className="py-2 px-3 sm:px-4 text-sm">Subscriber</td>
              <td className="py-2 px-3 sm:px-4 text-sm">Oct 18, 2025</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
        <a
          href="/admin/users"
          className="bg-red-600 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 text-center text-sm sm:text-base rounded shadow hover:bg-red-700 transition"
        >
          Manage Users
        </a>
        <a
          href="/admin/videos"
          className="bg-red-600 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 text-center text-sm sm:text-base rounded shadow hover:bg-red-700 transition"
        >
          Manage Videos
        </a>
        <a
          href="/admin/podcasts"
          className="bg-red-600 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 text-center text-sm sm:text-base rounded shadow hover:bg-red-700 transition"
        >
          Manage Podcasts
        </a>
        <a
          href="/admin/settings"
          className="bg-red-600 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 text-center text-sm sm:text-base rounded shadow hover:bg-red-700 transition"
        >
          Settings
        </a>
      </div>
    </div>
  );
}
