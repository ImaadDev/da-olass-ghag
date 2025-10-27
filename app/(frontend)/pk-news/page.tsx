"use client";

import ScrollBasedAnimation from "../../components/ScrollBasedAnimation";

const pakistanNews = [
  {
    title: "Prime Minister inaugurates new development projects",
    category: "PAKISTAN",
    img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Senate approves major constitutional amendment",
    category: "PAKISTAN",
    img: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f0?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Lahore hosts cultural festival with massive turnout",
    category: "PAKISTAN",
    img: "https://images.unsplash.com/photo-1603112579864-5f34b5e5b04a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Flood relief efforts continue across Sindh",
    category: "PAKISTAN",
    img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New education policy focuses on digital inclusion",
    category: "PAKISTAN",
    img: "https://images.unsplash.com/photo-1600195077909-46a7652c1cbd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pakistan’s exports hit record growth this quarter",
    category: "PAKISTAN",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "KP introduces new tourism initiatives",
    category: "PAKISTAN",
    img: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Government announces public health reforms",
    category: "PAKISTAN",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function PakistanNewsPage() {
  return (
    <main className="bg-white text-black max-w-7xl mx-auto px-8 py-16 md:py-24">
      {/* Header */}
      <ScrollBasedAnimation direction="up" delay={0.1}>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
            Pakistan News
          </h1>
        </div>
      </ScrollBasedAnimation>

      {/* Hero Section */}
      <ScrollBasedAnimation direction="up" delay={0.2}>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Left: Image */}
          <div className="relative h-96 lg:h-[32rem] overflow-hidden">
            <img
              src={pakistanNews[0].img}
              alt={pakistanNews[0].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1 border border-white bg-black/80">
              <span className="text-white text-xs font-semibold tracking-widest">
                {pakistanNews[0].category}
              </span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              {pakistanNews[0].title}
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Major infrastructure and education reforms are underway across the
              country, with key development projects being inaugurated to boost
              employment and digital growth.
            </p>
            <button className="mt-6 border-2 border-black px-8 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300 w-fit">
              READ MORE
            </button>
          </div>
        </section>
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

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pakistanNews.slice(1).map((item, idx) => (
              <article
                key={idx}
                className="group cursor-pointer bg-white border border-gray-200 transition-colors duration-300 hover:bg-gray-50"
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

      {/* View More */}
      <ScrollBasedAnimation direction="up" delay={0.4}>
        <div className="mt-16 text-center">
          <button className="border-2 border-black px-10 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-colors duration-300 uppercase">
            View All Pakistan News
          </button>
        </div>
      </ScrollBasedAnimation>
    </main>
  );
}
