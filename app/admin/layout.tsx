"use client";

import { Montserrat } from "next/font/google";
import Sidebar from "../../components/admin/Sidebar";
import AdminNavbar from "../../components/admin/Navbar";
import { useState, useEffect } from "react";
import "../globals.css";
import { useAuth } from "@/lib/useAuth";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, loading } = useAuth();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

// Show loading screen while checking auth
if (loading || !user) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased bg-gray-50`}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center gap-4">
            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            
            {/* Text */}
            <p className="text-gray-700 text-lg md:text-xl font-medium">
              Checking authentication...
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}



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
