"use client";

import { useEffect, useState } from "react";
import ScrollBasedAnimation from "../../../components/ScrollBasedAnimation";
import { getPakistanNews } from "@/lib/getNewsByCategory";

export default function PakistanNewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getPakistanNews();
      setNews(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (news.length === 0) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl font-bold mb-6">Pakistan News</h1>
        <p className="text-gray-500">No news found in this category yet.</p>
      </main>
    );
  }

  return (
    <main className="bg-white text-black max-w-7xl mx-auto px-8 py-16 md:py-24">
      <ScrollBasedAnimation direction="up" delay={0.1}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
            Pakistan News
          </h1>
        </div>
      </ScrollBasedAnimation>

      {/* Hero Section (first news item) */}
      <ScrollBasedAnimation direction="up" delay={0.2}>
        {news[0] && (
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <div className="relative h-96 lg:h-[32rem] overflow-hidden">
              <img
                src={news[0].image_url?.[0] || "/placeholder.jpg"}
                alt={news[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 border border-white bg-black/80">
                <span className="text-white text-xs font-semibold tracking-widest">
                  {news[0].category}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 leading-snug">
                {news[0].title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {news[0].summary || "No description available."}
              </p>
              <button className="mt-6 border-2 border-black px-8 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300 w-fit">
                READ MORE
              </button>
            </div>
          </section>
        )}
      </ScrollBasedAnimation>

      {/* Latest Updates */}
      <ScrollBasedAnimation direction="up" delay={0.3}>
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-1 h-8 bg-black" />
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
              Latest Updates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.slice(1).map((item, idx) => (
              <article
                key={idx}
                className="group cursor-pointer bg-white border border-gray-200 transition-colors duration-300 hover:bg-gray-50"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={item.image_url?.[0] || "/placeholder.jpg"}
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
                    <span>{new Date(item.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </ScrollBasedAnimation>
    </main>
  );
}
