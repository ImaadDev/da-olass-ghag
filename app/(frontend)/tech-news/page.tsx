"use client";

import { useState, useEffect } from "react";
import ScrollBasedAnimation from "../../../components/ScrollBasedAnimation";
import { getTechnologyNews } from "@/lib/getNewsByCategory";

const ITEMS_PER_PAGE = 6;

export default function TechnologyNewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const techNews = await getTechnologyNews();
      console.log("technology news:", techNews);
      setNews(techNews);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen text-gray-600">
        Loading technology news...
      </main>
    );
  }

  if (news.length === 0) {
    return (
      <main className="flex justify-center items-center h-screen text-gray-600">
        No technology news available.
      </main>
    );
  }

  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  const paginatedNews = news.slice(
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
              src={news[0].image_url[0]}
              alt={news[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 border border-white bg-black/80">
              <span className="text-white text-xs font-semibold tracking-widest">
                {news[0].category}
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              {news[0].title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {news[0].summary || "Innovation and automation are reshaping industries globally, with AI and data-driven technologies driving a new wave of efficiency and creativity."}
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
            {paginatedNews.map((item: any, idx: number) => (
              <article
                key={idx}
                className="group cursor-pointer bg-white border border-gray-200 hover:bg-gray-50 transition-colors duration-300"
              >
                <a href={`/tech-news/${item.slug}`} className="block">
                  <div className="relative w-full h-64 overflow-hidden">
                    <img
                      src={item.image_url[0]}
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
                    <p className="text-xs text-gray-500 font-mono">
                      {item.published_at
                        ? new Date(item.published_at).toLocaleDateString()
                        : "Recently"}
                    </p>
                  </div>
                </a>
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
