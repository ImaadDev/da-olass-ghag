"use client";

import ScrollAnimation from "../components/ScrollBasedAnimation"; // adjust path if needed
import Image from "next/image";
import { Facebook, Instagram, Youtube, Twitter, TicketCheckIcon } from "lucide-react";
import { useTranslation } from 'react-i18next';
import Link from "next/link";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-red-700 text-gray-700">
      <ScrollAnimation direction="up" delay={0.3}>

        <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <ScrollAnimation direction="left" delay={0.3}>

         {/* Logo & About */}
<div className="flex items-start gap-4">
  <div className="relative w-14 h-14 flex-shrink-0">
    <Image
      src="/logo.png" // 🖼️ Make sure logo.png is in /public
      alt="Da Olass Ghag Logo"
      fill
      className="object-contain"
      priority
    />
    
  </div>
  <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
      {t('footer.about')}
    </p>
  <div>
    
    
  </div>
</div>

</ScrollAnimation>


<ScrollAnimation direction="up" delay={0.4}>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link href="/" className="hover:text-red-600 transition">{t('footer.home')}</Link></li>
              <li><Link href="/videos" className="hover:text-red-600 transition">{t('footer.videos')}</Link></li>
              <li><Link href="/podcasts" className="hover:text-red-600 transition">{t('footer.podcasts')}</Link></li>
              <li><Link href="/environment" className="hover:text-red-600 transition">Environment</Link></li>
              <li><Link href="/contact" className="hover:text-red-600 transition">{t('footer.contact')}</Link></li>
            </ul>
          </div>
          </ScrollAnimation>

<ScrollAnimation direction="up" delay={0.5}>
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">{t('footer.categories')}</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="/videos?category=Business" className="hover:text-red-600 transition">{t('footer.business')}</a></li>
              <li><a href="/videos?category=Technology" className="hover:text-red-600 transition">{t('footer.technology')}</a></li>
              <li><a href="/videos?category=Health" className="hover:text-red-600 transition">{t('footer.health')}</a></li>
              <li><a href="/videos?category=Sports" className="hover:text-red-600 transition">{t('footer.sports')}</a></li>
              <li><a href="/videos?category=Entertainment" className="hover:text-red-600 transition">{t('footer.entertainment')}</a></li>
              <li><a href="/environment" className="hover:text-red-600 transition">Environment</a></li>
            </ul>
          </div>
          </ScrollAnimation>


<ScrollAnimation direction="right" delay={0.6}>
         {/* Contact & Social */}
<div className="space-y-4">
  {/* Section Title */}
  <h3 className="text-lg font-semibold text-white mb-4 border-b border-red-600 inline-block pb-1">
    {t('footer.contactTitle')}
  </h3>

  {/* Contact Info */}
  <div className="space-y-2 text-sm">
    <p className="flex items-center gap-2 text-gray-300">
      <span className="text-red-500">📧</span> {t('footer.email')}
    </p>
    <p className="flex items-center gap-2 text-gray-300">
      <span className="text-red-500">📞</span> {t('footer.phone')}
    </p>
  </div>

  {/* Social Icons */}
  <div className="flex items-center gap-5 mt-4">
    <a
      href="https://www.facebook.com/mudam675"
      className="p-2 bg-blue-800 rounded-full  hover:bg-blue-900 transition"
      aria-label="Facebook"
    >
      <Facebook className="w-4 h-4 text-white" />
    </a>
    <a
      href="https://www.instagram.com/da_olass_ghag?igsh=MXAwa2R1a3V3cnUxMw%3D%3D&utm_source=qr"
      className="p-2 bg-pink-800 rounded-full hover:bg-pink-600 transition"
      aria-label="Instagram"
    >
      <Instagram className="w-4 h-4 text-white" />
    </a>
    <a
      href="https://x.com/da_olass_ghag?s=11"
      className="p-2 bg-black rounded-full hover:bg-gary-800 transition"
      aria-label="Twitter"
    >
      <Twitter className="w-4 h-4 text-white" />
    </a>
    <a
      href="https://www.youtube.com/@DaOlassGhag"
      className="p-2 bg-white rounded-full hover:bg-gary-600 transition"
      aria-label="YouTube"
    >
      <Youtube className="w-4 h-4 text-red-600" />
    </a>
  
  </div>

  {/* Developer Credit */}
<div className="pt-4 border-t border-gray-800 mt-4">
  <p className="text-sm text-gray-300 tracking-wide text-center">
    {t('footer.developedBy')} <span className="text-red-500">♥</span> by{" "}
    <a
      href="https://www.imadkhan.online"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white font-semibold hover:text-red-400 transition-colors duration-300"
    >
      {t('footer.developerName')}
    </a>
  </p>
</div>

</div>

          </ScrollAnimation>

        </div>

<ScrollAnimation direction="up" delay={0.7}>
        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Da Olass Ghag. {t('footer.copyright')}
        </div>
        </ScrollAnimation>
      </ScrollAnimation>
    </footer>
  );
}
