"use client";

import { useState } from "react";
import ScrollBasedAnimation from "../../../components/ScrollBasedAnimation";

const technologyNews = [
  {
    title: "AI Revolution: Startups Transforming Global Industries",
    category: "TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Quantum Computing Breakthrough Promises Faster Processing",
    category: "TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pakistan’s Tech Ecosystem Sees Surge in Investment",
    category: "TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cybersecurity Firms Report Record Demand in 2025",
    category: "TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1581091870622-7bdf6c1df2a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "SpaceX Launches Next-Gen Satellites for Global Internet",
    category: "TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1544829099-303127b00c3c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Robotics in Healthcare: The Future of Medical Assistance",
    category: "TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Google Unveils Next-Gen AI Model for Developers",
    category: "TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Electric Vehicles Now Dominate Asian Markets",
    category: "TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1593941707874-ef25b8b4a92f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "5G Networks Power Smart Cities Across the Globe",
    category: "TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Blockchain Beyond Crypto: Securing Digital Transactions",
    category: "TECHNOLOGY",
    img: "https://images.unsplash.com/photo-1518544886114-1e1c7d2f19a8?auto=format&fit=crop&w=800&q=80",
  },
];

const ITEMS_PER_PAGE = 16;

export default function TechnologyNewsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(technologyNews.length / ITEMS_PER_PAGE);
  const paginatedNews = technologyNews.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <main className="bg-white text-black max-w-7xl mx-auto px-8 py-16 md:py-24">
      {/* Header */}
      <ScrollBasedAnimation direction="up" delay={0.1}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
            Technology News
          </h1>
        </div>
      </ScrollBasedAnimation>

      {/* Featured Story */}
      <ScrollBasedAnimation direction="up" delay={0.2}>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Image */}
          <div className="relative h-96 lg:h-[32rem] overflow-hidden">
            <img
              src={technologyNews[0].img}
              alt={technologyNews[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 border border-white bg-black/80">
              <span className="text-white text-xs font-semibold tracking-widest">
                {technologyNews[0].category}
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              {technologyNews[0].title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Innovation and automation are reshaping industries globally, with
              AI and data-driven technologies driving a new wave of efficiency
              and creativity.
            </p>
            <button className="mt-6 border-2 border-black px-8 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300 w-fit">
              READ MORE
            </button>
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* News Grid */}
      <ScrollBasedAnimation direction="up" delay={0.3}>
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-8 bg-black" />
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
              Latest Updates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedNews.map((item, idx) => (
              <article
                key={idx}
                className="group cursor-pointer bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-300"
              >
                <div className="relative w-full h-64 overflow-hidden">
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
                  <h3 className="font-bold text-lg leading-snug group-hover:translate-x-1 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <span>3 hours ago</span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>
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
            className="border-2 border-black px-6 py-2 text-sm font-bold uppercase tracking-widest disabled:opacity-30 hover:bg-black hover:text-white transition-colors duration-300"
          >
            Prev
          </button>
          <span className="text-sm font-mono">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="border-2 border-black px-6 py-2 text-sm font-bold uppercase tracking-widest disabled:opacity-30 hover:bg-black hover:text-white transition-colors duration-300"
          >
            Next
          </button>
        </div>
      </ScrollBasedAnimation>
    </main>
  );
}
