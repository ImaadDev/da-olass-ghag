"use client";

import { Home, BarChart2,Mic, Settings,Play, LogOut, X,Newspaper } from "lucide-react";
import Image from "next/image";

interface SidebarProps {
  open: boolean; // controlled by parent layout
  setOpen: (val: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const menuItems = [
    { name: "Dashboard", icon: <Home />, path: "/admin" },
    { name: "Analytics", icon: <BarChart2 />, path: "/admin/analytics" },
    { name: "News", icon: <Newspaper />, path: "/admin/news" },
    { name: "Videos", icon: <Play />, path: "/admin/videos" },
    { name: "Podcasts", icon: <Mic />, path: "/admin/podcasts" },
    { name: "Settings", icon: <Settings />, path: "/admin/settings" },
    { name: "Logout", icon: <LogOut />, path: "/logout" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-full bg-black text-white z-30 flex flex-col transition-transform duration-300
          md:relative md:translate-x-0
          ${open ? "translate-x-0 w-64" : "-translate-x-full md:w-64"}
        `}
      >
        {/* Logo & Close Button */}
        <div className="flex items-center justify-between h-16 border-b border-gray-800 px-3">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Da Olass Ghag Logo"
              width={32}
              height={32}
              className="object-contain"
            />
            
              <span className="font-bold text-lg text-red-600">DA OLASS GHAG</span>
            
          </div>

          {/* Close button (top-right corner) */}
          <button
            className="md:hidden p-2 hover:bg-red-600 rounded transition"
            onClick={() => setOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map(({ name, icon, path }) => (
            <a
              key={name}
              href={path}
              className="flex text-white items-center gap-3 px-3 py-2 hover:bg-red-600 transition"
            >
              {icon}
              <span>{name}</span>
            </a>
          ))}
        </nav>

       
      </aside>
    </>
  );
}
