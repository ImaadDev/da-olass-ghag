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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3 sm:gap-4">
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600  transition-colors hover:shadow-md">
          <p className="text-gray-500 text-xs sm:text-sm font-medium">Users</p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-1">1,245</h3>
        </div>
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600  transition-colors hover:shadow-md">
          <p className="text-gray-500 text-xs sm:text-sm font-medium">Videos</p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-1">532</h3>
        </div>
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600  transition-colors hover:shadow-md">
          <p className="text-gray-500 text-xs sm:text-sm font-medium">Podcasts</p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-1">124</h3>
        </div>
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600  transition-colors hover:shadow-md">
          <p className="text-gray-500 text-xs sm:text-sm font-medium">Visitors</p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-1">8,341</h3>
        </div>
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600  transition-colors hover:shadow-md">
          <p className="text-gray-500 text-xs sm:text-sm font-medium">Revenue</p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-1">$12,430</h3>
        </div>
        <div className="bg-white p-3 sm:p-4 shadow border-l-4 border-red-600  transition-colors hover:shadow-md">
          <p className="text-gray-500 text-xs sm:text-sm font-medium">Comments</p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mt-1">1,032</h3>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
        <div className="bg-white p-3 sm:p-4 shadow  w-full h-64 sm:h-80">
          <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">User Growth</h3>
          <Line data={userData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="bg-white p-3 sm:p-4 shadow  w-full h-64 sm:h-80">
          <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Videos Uploaded</h3>
          <Bar data={videoData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      {/* Recent Users */}
      <div className="bg-white p-3 sm:p-4 shadow  w-full">
        <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Recent Users</h3>

        {/* Mobile Card View */}
        <div className="block md:hidden space-y-3">
          <div className="border border-gray-200 -lg p-3">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium text-gray-900 text-sm">John Doe</h4>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>
              <span className="inline-flex px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">Admin</span>
            </div>
            <p className="text-sm text-gray-600">Joined: Oct 20, 2025</p>
          </div>

          <div className="border border-gray-200  p-3">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium text-gray-900 text-sm">Jane Smith</h4>
                <p className="text-xs text-gray-500">jane@example.com</p>
              </div>
              <span className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">Editor</span>
            </div>
            <p className="text-sm text-gray-600">Joined: Oct 19, 2025</p>
          </div>

          <div className="border border-gray-200  p-3">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium text-gray-900 text-sm">Michael Lee</h4>
                <p className="text-xs text-gray-500">michael@example.com</p>
              </div>
              <span className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">Subscriber</span>
            </div>
            <p className="text-sm text-gray-600">Joined: Oct 18, 2025</p>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2 px-3 sm:px-4 text-gray-500 text-xs sm:text-sm font-medium">Name</th>
                <th className="py-2 px-3 sm:px-4 text-gray-500 text-xs sm:text-sm font-medium">Email</th>
                <th className="py-2 px-3 sm:px-4 text-gray-500 text-xs sm:text-sm font-medium">Role</th>
                <th className="py-2 px-3 sm:px-4 text-gray-500 text-xs sm:text-sm font-medium">Joined</th>
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
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-4 shadow  w-full">
        <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
          <a
            href="/admin/users"
            className="bg-red-600 text-white font-semibold py-3 px-4 text-center text-sm  shadow-sm hover:bg-red-700 hover:shadow-md transition-all duration-200 flex items-center justify-center min-h-[50px]"
          >
            Manage Users
          </a>
          <a
            href="/admin/videos"
            className="bg-red-600 text-white font-semibold py-3 px-4 text-center text-sm  shadow-sm hover:bg-red-700 hover:shadow-md transition-all duration-200 flex items-center justify-center min-h-[50px]"
          >
            Manage Videos
          </a>
          <a
            href="/admin/podcasts"
            className="bg-red-600 text-white font-semibold py-3 px-4 text-center text-sm shadow-sm hover:bg-red-700 hover:shadow-md transition-all duration-200 flex items-center justify-center min-h-[50px]"
          >
            Manage Podcasts
          </a>
          <a
            href="/admin/settings"
            className="bg-red-600 text-white font-semibold py-3 px-4 text-center text-sm  shadow-sm hover:bg-red-700 hover:shadow-md transition-all duration-200 flex items-center justify-center min-h-[50px] col-span-2 lg:col-span-1"
          >
            Settings
          </a>
        </div>
      </div>
    </div>
  );
}
