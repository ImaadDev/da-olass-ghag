"use client";

import ScrollBasedAnimation from "../ScrollBasedAnimation";

const businessNews = [
  {
    title: "Stock market sees record gains",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "New tax reforms announced",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1542223616-5f09779c2dcf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Local startups attract investors",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Export growth fuels economy",
    category: "BUSINESS",
    img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f3f29?auto=format&fit=crop&w=800&q=80",
  },
];

export default function BusinessNews() {
  return (
    <ScrollBasedAnimation direction="up" delay={0.2}>
      <section className="max-w-7xl mx-auto px-8 py-16 md:py-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-1 h-8 bg-black" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
            Business
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessNews.map((item, idx) => (
            <article key={idx} className="cursor-pointer group">
              <div className="relative w-full h-64 overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:opacity-90 transition-all duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="border border-white bg-black/80 px-3 py-1">
                    <span className="text-white text-xs font-medium tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="font-bold text-xl leading-tight group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 font-mono">
                  <span>2 hours ago</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </ScrollBasedAnimation>
  );
}
