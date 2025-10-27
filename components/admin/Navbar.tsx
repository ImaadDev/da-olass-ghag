"use client";

import { Menu, X, User, Bell, LogOut } from "lucide-react";

interface AdminNavbarProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export default function AdminNavbar({ open, setOpen }: AdminNavbarProps) {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 shadow-sm">
      {/* Hamburger button for mobile */}
      <button
        className="md:hidden text-black p-2 hover:bg-red-600 transition rounded"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      {/* Title */}
      <h1 className="hidden text-lg md:block font-bold text-black">Admin Dashboard</h1>

      {/* Right side icons */}
      <div className="flex items-center gap-4">
        <button className="text-black hover:text-red-600 transition"><User/></button>
        <button className="text-black hover:text-red-600 transition"><Bell/></button>
        <button className="text-black hover:text-red-600 transition"><LogOut/></button>

      </div>
    </header>
  );
}
