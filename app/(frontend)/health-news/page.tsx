"use client";

import { useState } from "react";
import ScrollBasedAnimation from "../../../components/ScrollBasedAnimation";

const healthNews = [
  {
    title: "New National Health Policy Targets Universal Coverage",
    category: "HEALTH",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pakistan Launches Major Anti-Malaria Campaign",
    category: "HEALTH",
    img: "https://images.unsplash.com/photo-1576765607924-3e447244af8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "AI in Medicine: Revolutionizing Early Disease Detection",
    category: "HEALTH",
    img: "https://images.unsplash.com/photo-1576765607924-3e447244af8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Nutrition Experts Warn Against Rising Obesity Trends",
    category: "HEALTH",
    img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "World Health Organization Backs New Vaccine Initiative",
    category: "HEALTH",
    img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mental Health Awareness Rises Among Youth",
    category: "HEALTH",
    img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Telemedicine Expands Access in Remote Areas",
    category: "HEALTH",
    img: "https://images.unsplash.com/photo-1580281657521-319cdceb8f3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Hospitals Adopt New AI-Driven Management Systems",
    category: "HEALTH",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Global Health Summit Focuses on Post-COVID Recovery",
    category: "HEALTH",
    img: "https://images.unsplash.com/photo-1580281658628-8b6c89d90d3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fitness Industry Booms with Smart Tech Devices",
    category: "HEALTH",
    img: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80",
  },
];

const ITEMS_PER_PAGE = 6;

export default function HealthNewsPage() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(healthNews.length / ITEMS_PER_PAGE);
  const paginatedNews = healthNews.slice(
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
            Health News
          </h1>
        </div>
      </ScrollBasedAnimation>

      {/* Featured Story */}
      <ScrollBasedAnimation direction="up" delay={0.2}>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Image */}
          <div className="relative h-96 lg:h-[32rem] overflow-hidden">
            <img
              src={healthNews[0].img}
              alt={healthNews[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 border border-white bg-black/80">
              <span className="text-white text-xs font-semibold tracking-widest">
                {healthNews[0].category}
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              {healthNews[0].title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              With new policies and global collaboration, the health sector is
              entering a new phase of innovation and accessibility to improve
              life expectancy and wellness.
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
              Latest Health Updates
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
                    <span>4 hours ago</span>
                    <span>•</span>
                    <span>6 min read</span>
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
