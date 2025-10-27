"use client";

import { useEffect, useState } from "react";

const headlines = [
  "Khyber Pakhtunkhwa launches new education initiative",
  "International trade talks ongoing in Geneva",
  "Pakistan wins gold in South Asian Games",
];

export default function BreakingNews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const ticker = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(ticker);
  }, []);

  return (
    <div className="bg-red-600 text-white py-3 px-6 text-sm tracking-wide uppercase">
      <span className="font-semibold">Breaking:</span>{" "}
      <span>{headlines[index]}</span>
    </div>
  );
}
