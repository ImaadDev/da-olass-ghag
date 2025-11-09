"use client";

import Image from "next/image";
import ScrollBasedAnimation from "../ScrollBasedAnimation";
import { useTranslation } from "react-i18next";

export default function SportsNews() {
  const { t } = useTranslation();

  const sportsNews = t("home.sportsNewsData", { returnObjects: true });

  const images = [
    "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1585859758890-b59fa7d6ef1d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600718376413-702d29c1dc3d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 md:py-24 border-t border-gray-100">
      {/* Section header */}
      <ScrollBasedAnimation direction="up" offset={60}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            {t("home.sportsNews")}
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
                  src={images[idx]}
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
            {t("home.viewAllSportsNews")}
          </button>
        </ScrollBasedAnimation>
      </div>
    </section>
  );
}
