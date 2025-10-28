"use client";

import { Menu, X, User, Bell, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

interface AdminNavbarProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export default function AdminNavbar({ open, setOpen }: AdminNavbarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
      return;
    }
    router.push("/login"); // redirect to login page
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 shadow-sm">
      <div className="flex items-center gap-3">
        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-black p-2 hover:bg-red-600 transition rounded"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Title - Show abbreviated version on mobile */}
        <h1 className="text-lg md:text-xl font-bold text-black truncate">
          <span className="md:hidden">Admin</span>
          <span className="hidden md:inline">Admin Dashboard</span>
        </h1>
      </div>

      {/* Right side icons */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="text-black hover:text-red-600 transition p-1 md:p-0">
          <User className="h-5 w-5 md:h-6 md:w-6"/>
        </button>
        <button className="text-black hover:text-red-600 transition p-1 md:p-0">
          <Bell className="h-5 w-5 md:h-6 md:w-6"/>
        </button>
        <button
          className="text-black hover:text-red-600 transition p-1 md:p-0"
          onClick={handleLogout} // 🔹 added logout
        >
          <LogOut className="h-5 w-5 md:h-6 md:w-6"/>
        </button>
      </div>
    </header>
  );
}
