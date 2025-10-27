"use client";

import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);
  const [moreDropdown, setMoreDropdown] = useState(false);
  const [mobileNewsOpen, setMobileNewsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

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
      {/* Top Bar */}
<div className="bg-gray-100 border-b border-gray-300">
  <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between text-xs md:text-sm">
    {/* Current Date */}
    <div className="flex items-center gap-2 text-gray-700 font-medium">
      <span className="uppercase tracking-wide">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </span>
    </div>

    {/* Subscribe Button */}
    <div className="mt-2 md:mt-0">
      <button className="bg-red-600 text-white px-4 py-1 md:py-2 font-semibold tracking-wide hover:bg-red-700 transition">
        Subscribe
      </button>
    </div>
  </div>
</div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png" // 🖼️ ensure this file is inside /public/logo.png
                  alt="Da Olass Ghag Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-sm md:text-lg font-bold tracking-tighter text-black hover:opacity-80 transition">
                DA OLASS <span className="bg-red-700 text-white px-1">GHAG</span>
              </span>
            </a>
          </div>

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

          {/* Search & Social & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="#" className="text-black hover:text-red-600 transition">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-black hover:text-red-600 transition">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-black hover:text-red-600 transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-black hover:text-red-600 transition">
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Search */}
            <button className="text-black hover:opacity-70 transition">
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Menu */}
            <button
              className="lg:hidden text-black hover:opacity-70 transition"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
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

          {/* Mobile Social Icons */}
          <div className="flex items-center gap-4 px-4 py-3">
            <a href="#" className="text-black hover:text-red-600 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-black hover:text-red-600 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-black hover:text-red-600 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-black hover:text-red-600 transition">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="pt-4 space-y-2">
            <button className="w-full border-2 border-black px-4 py-3 font-bold text-sm text-black hover:bg-black hover:text-white transition">
              SUBSCRIBE
            </button>
            <a
              href="/login"
              className="block text-center border-2 border-black px-4 py-3 font-bold text-sm text-black hover:bg-black hover:text-white transition"
            >
              SIGN IN
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
