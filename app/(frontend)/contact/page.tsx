"use client";

import ScrollBasedAnimation from "../../../components/ScrollBasedAnimation";
import { useTranslation } from "react-i18next";

export default function ContactPageProfessional() {
  const { t } = useTranslation();

  const contactDetails = t("contact.contactDetails", { returnObjects: true }) as {
    email: { title: string; primary: string; tips: string };
    phone: { title: string; primary: string; secondary: string };
    address: { title: string; line1: string; line2: string };
  };

  const socialLinks = t("contact.socialLinks", { returnObjects: true }) as {
    facebook: string;
    twitter: string;
    instagram: string;
    youtube: string;
  };

  return (
    <main className="bg-white text-black mx-auto px-6 md:px-16 py-20 md:py-28 leading-relaxed relative">

      {/* Header */}
      <ScrollBasedAnimation direction="up" delay={0.1}>
        <header className="max-w-4xl mx-auto mb-20 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-black" />
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              {t("contact.title")}
            </h1>
          </div>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl">
            {t("contact.subtitle")}
          </p>


        </header>
      </ScrollBasedAnimation>

      {/* Contact Form */}
      <ScrollBasedAnimation direction="up" delay={0.2}>
        <section className="max-w-4xl mx-auto mb-24">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={t("contact.form.fullName")}
                className="w-full border-2 border-black px-4 py-3 text-black font-medium text-sm tracking-wide focus:outline-none"
              />
              <input
                type="email"
                placeholder={t("contact.form.email")}
                className="w-full border-2 border-black px-4 py-3 text-black font-medium text-sm tracking-wide focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder={t("contact.form.subject")}
              className="w-full border-2 border-black px-4 py-3 text-black font-medium text-sm tracking-wide focus:outline-none"
            />
            <textarea
              placeholder={t("contact.form.message")}
              rows={6}
              className="w-full border-2 border-black px-4 py-3 text-black font-medium text-sm tracking-wide focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="border-2 border-black px-10 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-all"
            >
              {t("contact.form.sendMessage")}
            </button>
          </form>
        </section>
      </ScrollBasedAnimation>

      {/* Contact Details */}
      <ScrollBasedAnimation direction="up" delay={0.3}>
        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-700 text-lg md:text-xl mb-24">
          <div>
            <h3 className="font-bold uppercase mb-2">{contactDetails.email.title}</h3>
            <p>{contactDetails.email.primary}</p>
            <p>{contactDetails.email.tips}</p>
          </div>
          <div>
            <h3 className="font-bold uppercase mb-2">{contactDetails.phone.title}</h3>
            <p>{contactDetails.phone.primary}</p>
            <p>{contactDetails.phone.secondary}</p>
          </div>
          <div>
            <h3 className="font-bold uppercase mb-2">{contactDetails.address.title}</h3>
            <p>{contactDetails.address.line1}</p>
            <p>{contactDetails.address.line2}</p>
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* Social Links */}
      <ScrollBasedAnimation direction="up" delay={0.4}>
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
            {t("contact.followUs")}
          </h3>
          <div className="flex justify-center gap-8 text-black font-bold uppercase tracking-wide text-sm md:text-base">
            <a href="https://www.facebook.com" target="_blank">{socialLinks.facebook}</a>
            <a href="https://www.twitter.com" target="_blank">{socialLinks.twitter}</a>
            <a href="https://www.instagram.com" target="_blank">{socialLinks.instagram}</a>
            <a href="https://www.youtube.com" target="_blank">{socialLinks.youtube}</a>
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* Footer CTA */}
      <ScrollBasedAnimation direction="up" delay={0.5}>
        <footer className="mt-24 text-center border-t border-gray-300 pt-16">
          <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
            {t("contact.stayConnected")}
          </h3>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            {t("contact.stayConnectedText")}
          </p>
          <a
            href="/subscribe"
            className="inline-block border-2 border-black px-10 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-all"
          >
            {t("contact.subscribe")}
          </a>
        </footer>
      </ScrollBasedAnimation>
    </main>
  );
}
