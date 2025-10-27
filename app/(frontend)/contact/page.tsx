"use client";

import ScrollBasedAnimation from "../../components/ScrollBasedAnimation";

export default function ContactPageProfessional() {
  return (
    <main className="bg-white text-black mx-auto px-6 md:px-16 py-20 md:py-28 leading-relaxed relative">
      
      {/* Header */}
      <ScrollBasedAnimation direction="up" delay={0.1}>
        <header className="max-w-4xl mx-auto mb-20 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-10 bg-black" />
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              Contact Us
            </h1>
          </div>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl">
            Have questions, feedback, or story tips? We’d love to hear from you. 
            Fill out the form below or reach out via email, phone, or social media.
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
                placeholder="Full Name"
                className="w-full border-2 border-black px-4 py-3 text-black font-medium text-sm tracking-wide focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-2 border-black px-4 py-3 text-black font-medium text-sm tracking-wide focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full border-2 border-black px-4 py-3 text-black font-medium text-sm tracking-wide focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full border-2 border-black px-4 py-3 text-black font-medium text-sm tracking-wide focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="border-2 border-black px-10 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-all"
            >
              SEND MESSAGE
            </button>
          </form>
        </section>
      </ScrollBasedAnimation>

      {/* Contact Details */}
      <ScrollBasedAnimation direction="up" delay={0.3}>
        <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-700 text-lg md:text-xl mb-24">
          <div>
            <h3 className="font-bold uppercase mb-2">Email</h3>
            <p>info@daolassghag.com</p>
            <p>tips@daolassghag.com</p>
          </div>
          <div>
            <h3 className="font-bold uppercase mb-2">Phone</h3>
            <p>+92 300 1234567</p>
            <p>+92 321 7654321</p>
          </div>
          <div>
            <h3 className="font-bold uppercase mb-2">Address</h3>
            <p>Da Olass Ghag Headquarters</p>
            <p>Peshawar, Khyber Pakhtunkhwa, Pakistan</p>
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* Social Links */}
      <ScrollBasedAnimation direction="up" delay={0.4}>
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center gap-8 text-black font-bold uppercase tracking-wide text-sm md:text-base">
            <a href="https://www.facebook.com" target="_blank">Facebook</a>
            <a href="https://www.twitter.com" target="_blank">Twitter</a>
            <a href="https://www.instagram.com" target="_blank">Instagram</a>
            <a href="https://www.youtube.com" target="_blank">YouTube</a>
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* Footer CTA */}
      <ScrollBasedAnimation direction="up" delay={0.5}>
        <footer className="mt-24 text-center border-t border-gray-300 pt-16">
          <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
            Stay Connected
          </h3>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-6">
            We are always ready to hear from our readers and contributors. 
            Your feedback makes us better.
          </p>
          <a
            href="/subscribe"
            className="inline-block border-2 border-black px-10 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-all"
          >
            SUBSCRIBE
          </a>
        </footer>
      </ScrollBasedAnimation>
    </main>
  );
}
