import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-0 flex flex-col justify-center">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {/* Card 1 — Intro (large) */}
        <BentoCard
  variant="green"
  className="md:col-span-2 flex flex-col justify-between"
>
  <div>
    <span className="inline-block text-pink-primary text-xs font-semibold tracking-widest uppercase mb-3">
      Frontend Developer
    </span>
    <h1 className="text-beige text-2xl md:text-3xl font-bold leading-tight my-6">
  <span className="block">Hi, I&apos;m{" "}</span>
  <span className="text-pink-primary text-3xl md:text-4xl">
    Aisya </span>Nur Syakbani  👋
</h1>
    <p className="text-beige/80 text-sm leading-relaxed max-w-lg">
      A passionate Frontend Developer & Tech Leader with a hustler
      mindset. I bridge the gap between clean code and products that
      people actually use.
    </p>
  </div>
  <div className="flex flex-wrap gap-3">
    <a
      href="mailto:aisyafirst@gmail.com"
      className="inline-flex items-center gap-2 bg-beige text-green-primary text-sm font-semibold rounded-full hover:bg-pink-primary hover:text-beige transition-all duration-200 no-underline"
      style={{ padding: "8px 20px" }}
    >
      <Mail size={14} />
      Hire Me
    </a>
    <a
      href="/cv_aisya.pdf"
      download
      className="inline-flex items-center gap-2 border-2 border-beige text-beige text-sm font-semibold rounded-full hover:bg-beige hover:text-green-primary transition-all duration-200 no-underline"
      style={{ padding: "8px 20px" }}
    >
      <ArrowDown size={14} />
      Download CV
    </a>
  </div>
</BentoCard>

        {/* Card 2 — Photo */}
        <BentoCard
          variant="pink"
          className="flex flex-col items-center justify-between pb-6 overflow-hidden relative"
        >
          {/* Foto di atas */}
          <div
            className="relative w-full"
            style={{ minHeight: "220px", zIndex: 2 }}
          >
            <Image
              src="/images/profile.svg"
              alt="Aisya Nur Syakbani"
              fill
              sizes="280px"
              className="object-contain object-top"
              priority
            />
          </div>

          {/* Text di bawah */}
          <div className="text-center relative shrink-0" style={{ zIndex: 3 }}>
            <p className="text-beige font-bold text-base">Aisya Nur Syakbani</p>
            <p className="text-beige/75 text-sm mt-1">Semarang, Indonesia 🇮🇩</p>
            <span
              className="inline-flex items-center gap-1.5 mt-2 bg-beige/20 text-beige text-xs font-medium rounded-full"
              style={{ padding: "4px 12px" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </span>
          </div>
        </BentoCard>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 items-stretch">
        {/* Card 3 — Social */}
        <BentoCard
          variant="charcoal"
          className="flex flex-col justify-between min-h-[180px]"
        >
          <p className="text-beige/40 text-xs font-semibold tracking-widest uppercase mb-4">
            Find me on
          </p>
          <div className="flex flex-col gap-3 flex-1 justify-center">
            {[
              {
                icon: <Github size={16} />,
                label: "github.com/aiaja",
                href: "https://github.com/aiaja",
              },
              {
                icon: <Linkedin size={16} />,
                label: "linkedin.com/in/aisyanrs",
                href: "https://linkedin.com/in/aisyanrs",
              },
              {
                icon: <Mail size={16} />,
                label: "aisyafirst@gmail.com",
                href: "mailto:aisyafirst@gmail.com",
              },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-beige/70 hover:text-pink-primary transition-colors no-underline group"
              >
                <span className="shrink-0">{icon}</span>
                <span className="text-sm group-hover:translate-x-1 transition-transform duration-200">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </BentoCard>

        {/* Card 4 — Stats */}
        <BentoCard
          variant="pink-light"
          className="flex flex-col justify-between min-h-[180px]"
        >
          <p className="text-charcoal/40 text-xs font-semibold tracking-widest uppercase mb-4">
            At a glance
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 flex-1 content-center">
            {[
              { value: "4+", label: "Projects done" },
              { value: "6+", label: "Achievements" },
              { value: "3.78", label: "GPA" },
              { value: "12+", label: "Tech stack" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-green-primary text-2xl font-bold leading-none">
                  {value}
                </p>
                <p className="text-charcoal/60 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Card 5 — Currently */}
        <BentoCard
          variant="beige"
          className="flex flex-col justify-between min-h-[180px]"
        >
          <p className="text-charcoal/40 text-xs font-semibold tracking-widest uppercase mb-4">
            Currently
          </p>
          <div className="flex flex-col gap-2.5 flex-1 justify-center">
            {[
              { prefix: "Interning at", highlight: "Bengkel Koding" },
              { prefix: "Vice President at", highlight: "DNCC" },
              { prefix: "Building", highlight: "Nexa Diesel Track" },
              { prefix: "Computer Science Student at", highlight: "UDINUS" },
            ].map(({ prefix, highlight }) => (
              <div key={highlight} className="flex items-start gap-2">
                <span className="text-pink-primary text-sm mt-0.5 shrink-0">
                  →
                </span>
                <p className="text-charcoal text-sm">
                  {prefix}{" "}
                  <span className="font-semibold text-green-primary">
                    {highlight}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default Hero;
