"use client";

import { Montserrat } from "next/font/google";
import Sidebar from "../../components/admin/Sidebar";
import AdminNavbar from "../../components/admin/Navbar";
import { useState } from "react";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false); // sidebar closed by default on mobile

  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

          {/* Main content */}
          <div className="flex-1 flex flex-col">
            {/* Navbar */}
            <AdminNavbar open={sidebarOpen} setOpen={setSidebarOpen} />

            {/* Main content */}
            <main className="flex-1 p-6 overflow-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
