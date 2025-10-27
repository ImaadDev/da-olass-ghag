"use client";

import ScrollBasedAnimation from "../../components/ScrollBasedAnimation";

export default function AboutUsPage() {
  return (
    <main className="bg-white text-black mx-auto px-6 md:px-16 py-20 md:py-28 leading-relaxed">
      {/* Intro */}
      <ScrollBasedAnimation direction="up" delay={0.1}>
        <header className="max-w-5xl mx-auto mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-10 bg-black" />
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight">
              About Da Olass Ghag
            </h1>
          </div>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl">
            <span className="font-semibold">Da Olass Ghag</span>{" "}
            <span className="italic">(in Pashto: د اولس غږ)</span> means{" "}
            <span className="font-semibold">“The Voice of the People.”</span>{" "}
            Founded in 2017 by a group of student journalists, it started as a
            small university initiative to amplify unheard voices from Khyber
            Pakhtunkhwa and other underrepresented regions of Pakistan.
          </p>
        </header>
      </ScrollBasedAnimation>

      {/* Story Section */}
      <ScrollBasedAnimation direction="right" delay={0.2}>
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 border-b border-black pb-3">
            Our Story
          </h2>
          <div className="space-y-6 text-gray-700 text-lg md:text-xl">
            <p>
              What began as a student-led effort with limited resources evolved
              into a bold, independent movement. The founders, driven by a deep
              sense of purpose and responsibility, built{" "}
              <span className="font-semibold">Da Olass Ghag</span> on a
              foundation of honesty, integrity, and consistency.
            </p>
            <p>
              Despite facing countless challenges — from censorship to financial
              struggles — the mission never wavered. What started in classrooms
              and small studios has grown into a trusted digital newsroom
              recognized for its credibility and community-based reporting.
            </p>
            <p>
              Today, <span className="font-semibold">Da Olass Ghag</span>{" "}
              produces authentic Pashto journalism that brings stories of
              culture, politics, environment, and people’s daily struggles into
              focus — always guided by one belief:{" "}
              <span className="italic">
                journalism should serve the people, not power.
              </span>
            </p>
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* Mission Section */}
      <ScrollBasedAnimation direction="left" delay={0.3}>
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 border-b border-black pb-3">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            To strengthen Pashto-language journalism by reporting with
            integrity, inclusivity, and independence — amplifying the voices that
            are often unheard and ensuring every story reflects the lived
            realities of the people.
          </p>
        </section>
      </ScrollBasedAnimation>

      {/* Vision Section */}
      <ScrollBasedAnimation direction="up" delay={0.4}>
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6 border-b border-black pb-3">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg md:text-xl">
            To become the leading digital Pashto news platform — connecting
            local realities with global conversations, inspiring dialogue,
            promoting understanding, and empowering the next generation of
            storytellers and journalists.
          </p>
        </section>
      </ScrollBasedAnimation>

      {/* Values Section */}
      <ScrollBasedAnimation direction="up" delay={0.5}>
        <section className="max-w-5xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-10 border-b border-black pb-3">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 text-gray-700 text-lg md:text-xl">
            <div>
              <h3 className="font-bold uppercase mb-3">Credibility</h3>
              <p>
                Truth and accuracy above all. We believe that facts build trust,
                and trust builds communities.
              </p>
            </div>
            <div>
              <h3 className="font-bold uppercase mb-3">Independence</h3>
              <p>
                Free from political or corporate influence — we report with
                fairness, transparency, and accountability.
              </p>
            </div>
            <div>
              <h3 className="font-bold uppercase mb-3">Diversity</h3>
              <p>
                We highlight voices that are often overlooked — creating a
                platform that reflects all of society, not just a fraction.
              </p>
            </div>
            <div>
              <h3 className="font-bold uppercase mb-3">Innovation</h3>
              <p>
                We embrace new digital tools and storytelling formats to make
                Pashto journalism more engaging and accessible for everyone.
              </p>
            </div>
          </div>
        </section>
      </ScrollBasedAnimation>

      {/* Closing Section */}
      <ScrollBasedAnimation direction="up" delay={0.6}>
        <footer className="max-w-4xl mx-auto text-center border-t border-gray-300 pt-16">
          <h3 className="text-3xl md:text-4xl font-bold uppercase mb-4">
            The Voice of the People
          </h3>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            At <span className="font-semibold">Da Olass Ghag</span>, we continue
            to tell stories that matter — with courage, clarity, and compassion.
          </p>
          <a
            href="/contact"
            className="inline-block border-2 border-black px-10 py-3 font-bold text-sm tracking-widest hover:bg-black hover:text-white transition-all"
          >
            CONTACT US
          </a>
        </footer>
      </ScrollBasedAnimation>
    </main>
  );
}
