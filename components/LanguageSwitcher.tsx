'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import '@/lib/i18n';

export default function LanguageSwitcher({ isMobile = false }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = i18n.language === 'ur';

  // Load saved language from localStorage (if available), otherwise default to English
  useEffect(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      if (savedLang !== i18n.language) {
        i18n.changeLanguage(savedLang);
        document.documentElement.lang = savedLang;
        document.documentElement.dir = savedLang === 'ur' ? 'rtl' : 'ltr';
      }
    } else {
      // No saved language, ensure English is set as default
      if (i18n.language !== 'en') {
        i18n.changeLanguage('en');
      }
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
  }, [i18n]);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);

    // Remember language preference
    localStorage.setItem('language', lang);
    setIsOpen(false);
  };

  // Update document attributes when language changes
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ur' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ur', name: 'اردو', flag: '🇵🇰' }
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 group"
      >
        <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
        <span className="text-sm text-black font-medium">{currentLang.flag} {currentLang.name}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className={`absolute top-full mt-2 w-40 bg-black/95 backdrop-blur-sm border border-white/20 shadow-xl z-20 overflow-hidden ${isRTL ? 'left-0' : 'right-0'}`}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`flex items-center gap-3 w-full px-4 py-3 hover:bg-[#6EFF33]/10 transition-colors duration-200 ${
                  i18n.language === lang.code ? 'bg-[#6EFF33]/20 text-accent' : 'text-gray-300'
                } ${isRTL ? 'text-right flex-row-reverse' : 'text-left'}`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
