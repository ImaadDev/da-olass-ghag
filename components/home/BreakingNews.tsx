"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function BreakingNews() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  const headlines = t("home.breakingHeadlines", { returnObjects: true }) as string[];

  useEffect(() => {
    const ticker = setInterval(() => {
      setIndex((i) => (i + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(ticker);
  }, [headlines.length]);

  return (
    <div className="bg-red-600 text-white py-3 px-6 text-sm tracking-wide uppercase">
      <span className="font-semibold">{t("home.breaking")}</span>{" "}
      <span>{headlines[index]}</span>
    </div>
  );
}
