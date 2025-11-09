'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../public/locales/en/common.json';
import ur from '../public/locales/ur/common.json';

export const locales = ['en', 'ur'];

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ur: { translation: ur },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;
