"use client";

import { useState } from "react";

const environmentArticles = [
  {
    title: "Global Climate Summit 2025 Highlights",
    category: "Environment",
    date: "Oct 22, 2025",
    thumbnail: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Renewable Energy Innovations",
    category: "Climate",
    date: "Oct 20, 2025",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Plastic Pollution and Its Effects",
    category: "Environment",
    date: "Oct 18, 2025",
    thumbnail: "https://images.unsplash.com/photo-1581090700227-1fbc2b35d2d7?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Deforestation and Global Warming",
    category: "Climate",
    date: "Oct 15, 2025",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Sustainable Agriculture Practices",
    category: "Environment",
    date: "Oct 12, 2025",
    thumbnail: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    title: "Water Scarcity Solutions",
    category: "Climate",
    date: "Oct 10, 2025",
    thumbnail: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

const ITEMS_PER_PAGE = 6;

export default function EnvironmentPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(environmentArticles.length / ITEMS_PER_PAGE);

  const currentArticles = environmentArticles.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const topArticle = currentArticles[0];
  const otherArticles = currentArticles.slice(1);

  return (
    <main className="bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28">

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-red-600" />
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-red-700">
              Climate & Environment
            </h1>
          </div>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl">
            Explore the latest news, insights, and updates about climate change, environmental protection, and sustainability efforts across the globe.
          </p>
        </header>

        {/* Top Featured Article */}
        {topArticle && (
          <a
            href={topArticle.link}
            className="group block mb-12 border-2 border-black overflow-hidden transition hover:border-red-600"
          >
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
              <img
                src={topArticle.thumbnail}
                alt={topArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-0 left-0 bg-red-600 px-4 py-2">
                <span className="text-white text-xs font-bold tracking-[0.2em]">
                  {topArticle.category.toUpperCase()}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h2 className="font-bold text-3xl md:text-4xl text-white leading-tight mb-2 group-hover:text-red-500 transition">
                  {topArticle.title}
                </h2>
                <div className="text-sm text-gray-300 font-mono">{topArticle.date}</div>
              </div>
            </div>
          </a>
        )}

        {/* Other Articles Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {otherArticles.map((article, idx) => (
            <a
              key={idx}
              href={article.link}
              className="group border-2 border-black overflow-hidden transition hover:border-red-600"
            >
              <div className="relative w-full h-60 md:h-64 overflow-hidden">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-0 left-0 bg-red-600 px-3 py-1">
                  <span className="text-white text-xs font-bold tracking-[0.1em]">
                    {article.category.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg md:text-xl mb-1 group-hover:text-red-700 transition">
                  {article.title}
                </h3>
                <div className="text-sm text-gray-500 font-mono">
                  {article.date}
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* Pagination */}
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
            PREV
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
            NEXT
          </button>
        </div>

      </div>
    </main>
  );
}
