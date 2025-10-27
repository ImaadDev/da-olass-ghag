"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  // 🔗 Manually controlled link paths
  const newsCategories = [
    { name: "Pakistan", path: "/pk-news" },
    { name: "World", path: "/world-news" },
    { name: "Business", path: "/business-news" },
    { name: "Technology", path: "/tech-news" },
    { name: "Health", path: "/health-news" },
    { name: "Climate", path: "/environments" },
    { name: "Sports", path: "/sports-news" },
    { name: "Entertainment", path: "/showbiz-news" },
    { name: "Opinion", path: "/opinion" },
  ];

  const moreLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Archives", path: "/archives" },
    { name: "Newsletter", path: "/newsletter" },
    { name: "Podcasts", path: "/podcasts" },
  ];

  return (
    <nav className="bg-white border-b-2 border-black sticky top-0 z-50">
      {/* Top bar */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4 font-mono text-black">
            <span>SUNDAY, OCTOBER 26, 2025</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="text-black hover:opacity-70 font-medium tracking-wide">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl md:text-3xl font-bold tracking-tighter text-black hover:opacity-70 transition"
          >
            DA OLASS <span className="bg-black text-white px-1">GHAG</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="/"
              className="font-bold text-sm tracking-wide text-black hover:opacity-70 transition"
            >
              HOME
            </a>

            {/* News Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setNewsDropdown(true)}
              onMouseLeave={() => setNewsDropdown(false)}
            >
              <button className="flex items-center gap-1 font-bold text-sm tracking-wide text-black hover:opacity-70 transition">
                NEWS
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    newsDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white border-2 border-black overflow-hidden transition-all duration-300 origin-top ${
                  newsDropdown
                    ? "opacity-100 scale-y-100 visible"
                    : "opacity-0 scale-y-0 invisible"
                }`}
              >
                {newsCategories.map(({ name, path }) => (
                  <a
                    key={path}
                    href={path}
                    className="block px-4 py-3 font-medium text-sm border-b border-gray-200 last:border-b-0 text-black hover:bg-black hover:text-white transition"
                  >
                    {name.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/live"
              className="font-bold text-sm tracking-wide text-black hover:opacity-70 transition"
            >
              LIVE TV
            </a>

            <a
              href="/videos"
              className="font-bold text-sm tracking-wide text-black hover:opacity-70 transition"
            >
              VIDEOS
            </a>

            {/* More Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMoreDropdown(true)}
              onMouseLeave={() => setMoreDropdown(false)}
            >
              <button className="flex items-center gap-1 font-bold text-sm tracking-wide text-black hover:opacity-70 transition">
                MORE
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    moreDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute top-full right-0 mt-2 w-48 bg-white border-2 border-black overflow-hidden transition-all duration-300 origin-top ${
                  moreDropdown
                    ? "opacity-100 scale-y-100 visible"
                    : "opacity-0 scale-y-0 invisible"
                }`}
              >
                {moreLinks.map(({ name, path }) => (
                  <a
                    key={path}
                    href={path}
                    className="block px-4 py-3 font-medium text-sm border-b border-gray-200 last:border-b-0 text-black hover:bg-black hover:text-white transition"
                  >
                    {name.toUpperCase()}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Search & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button className="text-black hover:opacity-70 transition">
              <Search className="w-5 h-5" />
            </button>
            <button
              className="lg:hidden text-black hover:opacity-70 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden border-t-2 border-black overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-white">
          <a
            href="/"
            className="block px-4 py-3 font-bold text-sm border-b border-gray-200 text-black hover:bg-gray-50 transition"
          >
            HOME
          </a>

          {/* Mobile News Dropdown */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setMobileNewsOpen(!mobileNewsOpen)}
              className="w-full flex items-center justify-between px-4 py-3 font-bold text-sm text-black hover:bg-gray-50 transition"
            >
              NEWS
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileNewsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
                mobileNewsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {newsCategories.map(({ name, path }) => (
                <a
                  key={path}
                  href={path}
                  className="block px-8 py-2 text-sm font-medium text-black hover:bg-gray-100 transition"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/live"
            className="block px-4 py-3 font-bold text-sm border-b border-gray-200 text-black hover:bg-gray-50 transition"
          >
            LIVE TV
          </a>

          <a
            href="/videos"
            className="block px-4 py-3 font-bold text-sm border-b border-gray-200 text-black hover:bg-gray-50 transition"
          >
            VIDEOS
          </a>

          {/* Mobile More Dropdown */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
              className="w-full flex items-center justify-between px-4 py-3 font-bold text-sm text-black hover:bg-gray-50 transition"
            >
              MORE
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  mobileMoreOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`bg-gray-50 overflow-hidden transition-all duration-300 ${
                mobileMoreOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {moreLinks.map(({ name, path }) => (
                <a
                  key={path}
                  href={path}
                  className="block px-8 py-2 text-sm font-medium text-black hover:bg-gray-100 transition"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="pt-4 space-y-2">
            <button className="w-full border-2 border-black px-4 py-3 font-bold text-sm text-black hover:bg-black hover:text-white transition">
              SUBSCRIBE
            </button>
            <button className="w-full border-2 border-black px-4 py-3 font-bold text-sm text-black hover:bg-black hover:text-white transition">
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
