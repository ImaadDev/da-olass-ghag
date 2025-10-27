"use client";

import { useState } from "react";
import ScrollBasedAnimation from "../../components/ScrollBasedAnimation";

const businessNews = [
  {
    title: "Stock Market Hits Record Highs Amid Global Recovery",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pakistan Signs Major Trade Deal with Gulf States",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1542224566-6e85ef09a079?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Tech Startups Attract Record Venture Capital Funding",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Central Bank Maintains Key Interest Rate Steady",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1567427013953-1e1a0a0c87e3?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "E-commerce Sector Sees 45% Growth in Q3",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1556742049-9089d07f7b32?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Manufacturing Output Rebounds After Decline",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1581092334207-22daaa20e6a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Government Announces SME Support Package",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1522205408450-add114ad53fe?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Oil Prices Surge Amid Global Supply Cuts",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Automobile Industry Gears Up for EV Revolution",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Banking Sector Embraces FinTech Integration",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1556741533-411cf82e4e2e?auto=format&fit=crop&w=800&q=80",
  },
];

const ITEMS_PER_PAGE = 16;

export default function BusinessNewsPage() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(businessNews.length / ITEMS_PER_PAGE);
  const paginatedNews = businessNews.slice(
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
            Business News
          </h1>
        </div>
      </ScrollBasedAnimation>

      {/* Featured Story */}
      <ScrollBasedAnimation direction="up" delay={0.2}>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Image */}
          <div className="relative h-96 lg:h-[32rem] overflow-hidden">
            <img
              src={businessNews[0].img}
              alt={businessNews[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 border border-white bg-black/80">
              <span className="text-white text-xs font-semibold tracking-widest">
                {businessNews[0].category}
              </span>
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              {businessNews[0].title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              The economy continues to show signs of resilience as markets reach
              new highs. Analysts highlight improved investor confidence and
              sectoral performance.
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
                    <span>2 hours ago</span>
                    <span>•</span>
                    <span>4 min read</span>
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
