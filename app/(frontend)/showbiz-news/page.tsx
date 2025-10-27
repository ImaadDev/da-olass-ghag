"use client";

import { useState } from "react";
import ScrollBasedAnimation from "../../../components/ScrollBasedAnimation";

const showbizNews = [
  {
    title: "Pakistani Film Wins Award at International Festival",
    category: "ENTERTAINMENT",
    img: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Drama Industry Booms with Record Viewership in 2025",
    category: "ENTERTAINMENT",
    img: "https://images.unsplash.com/photo-1598289431512-4f91b8b1cfb4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New Streaming Platform Launches in Pakistan",
    category: "ENTERTAINMENT",
    img: "https://images.unsplash.com/photo-1590608897129-79da98d159d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Celebrities Unite for Flood Relief Fundraiser",
    category: "ENTERTAINMENT",
    img: "https://images.unsplash.com/photo-1542204637-e67bc7d41e2e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Music Industry Sees Revival Through Independent Artists",
    category: "ENTERTAINMENT",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pakistani Actor Lands Role in Major Hollywood Film",
    category: "ENTERTAINMENT",
    img: "https://images.unsplash.com/photo-1590608897129-79da98d159d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fashion Week Karachi Showcases Bold New Designs",
    category: "ENTERTAINMENT",
    img: "https://images.unsplash.com/photo-1520975918311-6c799aa5e8e3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Award Season Kicks Off with Red Carpet Glamour",
    category: "ENTERTAINMENT",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
];

const ITEMS_PER_PAGE = 6;

export default function ShowbizNewsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(showbizNews.length / ITEMS_PER_PAGE);
  const paginatedNews = showbizNews.slice(
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
            Entertainment News
          </h1>
        </div>
      </ScrollBasedAnimation>

      {/* Featured */}
      <ScrollBasedAnimation direction="up" delay={0.2}>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="relative h-96 lg:h-[32rem] overflow-hidden">
            <img
              src={showbizNews[0].img}
              alt={showbizNews[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 border border-white bg-black/80">
              <span className="text-white text-xs font-semibold tracking-widest">
                {showbizNews[0].category}
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              {showbizNews[0].title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              The entertainment industry continues to thrive, with major
              achievements in film, music, and fashion drawing global attention.
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
              Latest Showbiz Highlights
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
                    5 hours ago • 4 min read
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
