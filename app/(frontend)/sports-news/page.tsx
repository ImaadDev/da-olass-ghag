"use client";

import { useState } from "react";
import ScrollBasedAnimation from "../../../components/ScrollBasedAnimation";

const sportsNews = [
  {
    title: "Pakistan Clinches Victory in T20 Series Against England",
    category: "SPORTS",
    img: "https://images.unsplash.com/photo-1508264165352-258859e62245?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Babar Azam Sets New Record in ODI Rankings",
    category: "SPORTS",
    img: "https://images.unsplash.com/photo-1505842465776-3b4953ca4f83?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pakistan Super League 2025: Exciting New Teams Announced",
    category: "SPORTS",
    img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Women’s Cricket Team Advances to World Cup Semifinals",
    category: "SPORTS",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Karachi to Host Asia Cup Matches This Summer",
    category: "SPORTS",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pakistan Hockey Team Makes Strong Comeback in Tournament",
    category: "SPORTS",
    img: "https://images.unsplash.com/photo-1505842465776-3b4953ca4f83?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New Training Facilities Opened for National Athletes",
    category: "SPORTS",
    img: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cricket Legends Launch Youth Development Program",
    category: "SPORTS",
    img: "https://images.unsplash.com/photo-1508261305434-1f2a3e6f9e48?auto=format&fit=crop&w=800&q=80",
  },
];

const ITEMS_PER_PAGE = 6;

export default function SportsNewsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(sportsNews.length / ITEMS_PER_PAGE);
  const paginatedNews = sportsNews.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <main className="bg-white text-black max-w-7xl mx-auto px-8 py-16 md:py-24">
      {/* Header */}
      <ScrollBasedAnimation direction="up" delay={0.1}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">
            Sports News
          </h1>
        </div>
      </ScrollBasedAnimation>

      {/* Featured */}
      <ScrollBasedAnimation direction="up" delay={0.2}>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="relative h-96 lg:h-[32rem] overflow-hidden">
            <img
              src={sportsNews[0].img}
              alt={sportsNews[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 border border-white bg-black/80">
              <span className="text-white text-xs font-semibold tracking-widest">
                {sportsNews[0].category}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              {sportsNews[0].title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Pakistan’s latest win cements their dominance in world cricket, as
              new records and milestones continue to be achieved on the field.
            </p>
            <button className="mt-6 border-2 border-black px-8 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition">
              READ MORE
            </button>
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* Grid */}
      <ScrollBasedAnimation direction="up" delay={0.3}>
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-8 bg-black" />
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
              Latest Sports Updates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedNews.map((item, idx) => (
              <article
                key={idx}
                className="group cursor-pointer bg-white border border-gray-200 hover:bg-gray-50 transition"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 border border-white bg-black/80">
                    <span className="text-white text-xs font-semibold tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="font-bold text-lg group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono">
                    3 hours ago • 5 min read
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* Pagination */}
      <ScrollBasedAnimation direction="up" delay={0.4}>
        <div className="flex justify-center items-center gap-4 mt-16">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="border-2 border-black px-6 py-2 text-sm font-bold uppercase tracking-widest disabled:opacity-30 hover:bg-black hover:text-white transition"
          >
            Prev
          </button>
          <span className="text-sm font-mono">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="border-2 border-black px-6 py-2 text-sm font-bold uppercase tracking-widest disabled:opacity-30 hover:bg-black hover:text-white transition"
          >
            Next
          </button>
        </div>
      </ScrollBasedAnimation>
    </main>
  );
}
