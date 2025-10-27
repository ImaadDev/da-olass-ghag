"use client";

import Image from "next/image";
import ScrollBasedAnimation from "../ScrollBasedAnimation";

const sportsNews = [
  {
    title: "Pakistan wins gold in South Asian Games",
    category: "SPORTS",
    img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "KP cricket team advances to national finals",
    category: "CRICKET",
    img: "https://images.unsplash.com/photo-1585859758890-b59fa7d6ef1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Local football league attracts international scouts",
    category: "FOOTBALL",
    img: "https://images.unsplash.com/photo-1600718376413-702d29c1dc3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tennis star from Pakistan reaches semifinals",
    category: "TENNIS",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function SportsNews() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-24 border-t border-gray-100">
      {/* Section header */}
      <ScrollBasedAnimation direction="up" offset={60}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            Sports News
          </h2>
        </div>
      </ScrollBasedAnimation>

      {/* Sports grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sportsNews.map((news, idx) => (
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
            VIEW ALL SPORTS NEWS
          </button>
        </ScrollBasedAnimation>
      </div>
    </section>
  );
}
