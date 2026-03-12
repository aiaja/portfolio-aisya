import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 pb-12 px-6 max-w-7xl mx-auto flex flex-col justify-center"
    >
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
        {/* Card 1 — Intro (large) */}
        <BentoCard
          variant="green"
          className="md:col-span-2 flex flex-col justify-between min-h-70"
        >
          <div>
            <span className="inline-block text-pink-primary text-xs font-semibold tracking-widest uppercase mb-3">
              Frontend Developer
            </span>
            <h1 className="text-beige text-4xl md:text-5xl font-bold leading-tight mb-4">
              Hi, I&apos;m <span className="text-pink-primary">Aisya</span> Nur
              Syakbani 👋
            </h1>
            <p className="text-beige/80 text-sm md:text-base leading-relaxed max-w-lg">
              A passionate Frontend Developer & Tech Leader with a hustler
              mindset. I bridge the gap between clean code and products that
              people actually use.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="mailto:aisyafirst@gmail.com"
              className="inline-flex items-center gap-2 bg-beige text-green-primary text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-pink-primary hover:text-beige transition-all duration-200 no-underline"
            >
              <Mail size={15} />
              Hire Me
            </a>
            <a
              href="/cv_aisya.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-beige text-beige text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-beige hover:text-green-primary transition-all duration-200 no-underline"
            >
              <ArrowDown size={15} />
              Download CV
            </a>
          </div>
        </BentoCard>

        {/* Card 2 — Photo */}
        <BentoCard
          variant="pink"
          className="flex flex-col items-center justify-center min-h-70 gap-4 min-h-70"
        >
          <div className="relative w-36 h-36 overflow-hidden">
            <Image
              src="/images/profile.svg"
              alt="Aisya Nur Syakbani"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center">
            <p className="text-beige font-bold text-lg leading-tight">
              Aisya Nur Syakbani
            </p>
            <p className="text-beige/80 text-sm mt-1">Semarang, Indonesia 🇮🇩</p>
            <span className="inline-flex items-center gap-1.5 mt-2 bg-beige/20 text-beige text-xs font-medium px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for work
            </span>
          </div>
        </BentoCard>

        {/* Card 3 — Social Links */}
        <BentoCard
          variant="charcoal"
          className="flex flex-col justify-between min-h-40"
        >
          <p className="text-beige/50 text-xs font-semibold tracking-widest uppercase">
            Find me on
          </p>
          <div className="flex flex-col gap-3 mt-3">
            <a
              href="https://github.com/aiaja"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-beige hover:text-pink-primary transition-colors no-underline group"
            >
              <Github size={18} />
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                github.com/aiaja
              </span>
            </a>
            <a
              href="https://linkedin.com/in/aisyanrs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-beige hover:text-pink-primary transition-colors no-underline group"
            >
              <Linkedin size={18} />
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                linkedin.com/in/aisyanrs
              </span>
            </a>
            <a
              href="mailto:aisyafirst@gmail.com"
              className="flex items-center gap-3 text-beige hover:text-pink-primary transition-colors no-underline group"
            >
              <Mail size={18} />
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform">
                aisyafirst@gmail.com
              </span>
            </a>
          </div>
        </BentoCard>

        {/* Card 4 — Quick Stats */}
        <BentoCard
          variant="pink-light"
          className="flex flex-col justify-center min-h-40"
        >
          <p className="text-charcoal/50 text-xs font-semibold tracking-widest uppercase mb-4">
            At a glance
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-green-primary text-3xl font-bold">4+</p>
              <p className="text-charcoal/70 text-xs mt-1">Projects done</p>
            </div>
            <div>
              <p className="text-green-primary text-3xl font-bold">6+</p>
              <p className="text-charcoal/70 text-xs mt-1">Achievements</p>
            </div>
            <div>
              <p className="text-green-primary text-3xl font-bold">3.72</p>
              <p className="text-charcoal/70 text-xs mt-1">GPA</p>
            </div>
            <div>
              <p className="text-green-primary text-3xl font-bold">12+</p>
              <p className="text-charcoal/70 text-xs mt-1">Tech stack</p>
            </div>
          </div>
        </BentoCard>

        {/* Card 5 — Currently */}
        <BentoCard
          variant="beige"
          className="flex flex-col justify-center min-h-40"
        >
          <p className="text-charcoal/50 text-xs font-semibold tracking-widest uppercase mb-3">
            Currently
          </p>
          <div className="flex flex-col gap-2.5">
            <div className="flex items-start gap-2">
              <span className="text-pink-primary mt-0.5">→</span>
              <p className="text-charcoal text-sm">
                Interning at{" "}
                <span className="font-semibold text-green-primary">
                  Bengkel Koding
                </span>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-primary mt-0.5">→</span>
              <p className="text-charcoal text-sm">
                VP at{" "}
                <span className="font-semibold text-green-primary">DNCC</span>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-primary mt-0.5">→</span>
              <p className="text-charcoal text-sm">
                Building{" "}
                <span className="font-semibold text-green-primary">
                  Nexa Diesel Track
                </span>
              </p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-pink-primary mt-0.5">→</span>
              <p className="text-charcoal text-sm">
                S1 Teknik Informatika,{" "}
                <span className="font-semibold text-green-primary">UDINUS</span>{" "}
                — Semester 5
              </p>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
