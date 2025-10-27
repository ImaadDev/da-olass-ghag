"use client";

import { useState } from "react";
import ScrollBasedAnimation from "../../components/ScrollBasedAnimation";

const archivesData = [
  {
    title: "Pakistan economy shows signs of recovery",
    category: "Business",
    date: "Oct 20, 2025",
    img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tech startups boom in Pakistan",
    category: "Technology",
    date: "Oct 18, 2025",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Health sector reforms underway",
    category: "Health",
    date: "Oct 15, 2025",
    img: "https://images.unsplash.com/photo-1581090700227-1fbc2b35d2d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Sports events postponed due to weather",
    category: "Sports",
    date: "Oct 10, 2025",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Entertainment industry celebrates awards",
    category: "Entertainment",
    date: "Oct 05, 2025",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New education policy highlights",
    category: "Pakistan",
    date: "Oct 01, 2025",
    img: "https://images.unsplash.com/photo-1600195077909-46a7652c1cbd?auto=format&fit=crop&w=800&q=80",
  },
  // add more as needed
];

const ITEMS_PER_PAGE = 4;

export default function ArchivesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(archivesData.length / ITEMS_PER_PAGE);

  const currentData = archivesData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="bg-white text-black max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28">
      
      {/* Header */}
      <ScrollBasedAnimation direction="up" delay={0.1}>
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-red-600" />
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-red-700">
              Archives
            </h1>
          </div>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl">
            Browse through our collection of past articles and news stories. Stay updated on events, insights, and reports from various categories.
          </p>
        </header>
      </ScrollBasedAnimation>

      {/* Articles Grid */}
      <ScrollBasedAnimation direction="up" delay={0.2}>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {currentData.map((item, idx) => (
            <article key={idx} className="cursor-pointer group">
              <div className="relative w-full h-64 overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="border border-red-600 bg-red-600/80 px-3 py-1">
                    <span className="text-white text-xs font-medium tracking-widest">
                      {item.category.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-bold text-lg md:text-xl leading-tight group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                <div className="text-sm text-gray-500 font-mono">
                  <span>{item.date}</span>
                </div>
              </div>
            </article>
          ))}
        </section>
      </ScrollBasedAnimation>

      {/* Pagination */}
      <ScrollBasedAnimation direction="up" delay={0.3}>
        <div className="flex justify-center items-center gap-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-4 py-2 border border-red-600 font-bold text-sm tracking-widest transition ${
              currentPage === 1
                ? "text-gray-400 border-gray-400 cursor-not-allowed"
                : "text-red-700 hover:bg-red-700 hover:text-white"
            }`}
          >
            Prev
          </button>
          <span className="text-gray-700 font-medium">{currentPage} / {totalPages}</span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-4 py-2 border border-red-600 font-bold text-sm tracking-widest transition ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-400 cursor-not-allowed"
                : "text-red-700 hover:bg-red-700 hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      </ScrollBasedAnimation>
    </main>
  );
}
