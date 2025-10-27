"use client";

import Image from "next/image";
import ScrollBasedAnimation from "../ScrollBasedAnimation";

const showbizNews = [
  {
    title: "Pakistani film wins award at international festival",
    category: "FILM",
    img: "https://images.unsplash.com/photo-1519750157634-bbbb2b98a3c3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Top singer releases new album breaking records",
    category: "MUSIC",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Celebrity wedding draws media frenzy in Lahore",
    category: "CELEBRITY",
    img: "https://images.unsplash.com/photo-1508873699372-7ae58d0b2f0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fashion week highlights emerging designers in Pakistan",
    category: "FASHION",
    img: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=800&q=80",
  },
];

export default function ShowbizNews() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-24 border-t border-gray-100">
      {/* Section header */}
      <ScrollBasedAnimation direction="up" offset={60}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            Showbiz & Entertainment
          </h2>
        </div>
      </ScrollBasedAnimation>

      {/* Showbiz grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {showbizNews.map((news, idx) => (
          <ScrollBasedAnimation
            key={idx}
            direction="up"
            delay={idx * 0.1}
            offset={80}
          >
            <article className="cursor-pointer group">
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={news.img}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-3">
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-1">
                  {news.category}
                </p>
                <h3 className="text-base font-medium leading-snug group-hover:underline">
                  {news.title}
                </h3>
              </div>
            </article>
          </ScrollBasedAnimation>
        ))}
      </div>

      {/* View All */}
      <div className="mt-16 text-center">
        <ScrollBasedAnimation direction="up" delay={0.4}>
          <button className="border-2 border-black px-8 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300">
            VIEW ALL SHOWBIZ NEWS
          </button>
        </ScrollBasedAnimation>
      </div>
    </section>
  );
}
