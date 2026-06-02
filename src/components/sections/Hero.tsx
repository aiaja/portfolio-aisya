"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="pt-24 pb-8 flex flex-col justify-center">
      {/* Top Row: Main Intro & Photo */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
        
        {/* Card 1 — Main Intro (large) */}
        <BentoCard
          variant="green"
          className="md:col-span-3 flex flex-col justify-between min-h-[400px] p-10 relative overflow-hidden"
        >
          {/* Abstract Background Decoration */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-pink-primary rounded-full blur-[100px] opacity-20 pointer-events-none" />
          
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-beige text-[10px] font-bold uppercase tracking-widest">
                {profile.available ? t({ id: "Tersedia untuk bekerja", en: "Available for work" }) : t({ id: "Sibuk", en: "Busy" })}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-beige text-5xl md:text-7xl font-black leading-none tracking-tighter mb-2 italic">
                {profile.name}
              </h1>
              <p className="text-beige/40 text-lg md:text-xl font-bold italic tracking-tight mb-8">
                {t({ id: "Merancang Solusi untuk Dampak Dunia Nyata.", en: "Engineering Solutions for Real-World Impact." })}
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-beige/70 text-base md:text-lg font-medium leading-relaxed max-w-xxxl"
            >
              {t(profile.bio)}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 relative z-10 mt-8"
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-pink-primary text-beige text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all no-underline px-8 py-3 shadow-lg shadow-pink-primary/20"
            >
              <Mail size={16} />
              {t({ id: "Mari berdiskusi", en: "Let's talk" })}
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 border border-white/20 text-beige text-sm font-bold rounded-full hover:bg-white/10 active:scale-95 transition-all no-underline px-8 py-3"
            >
              <ArrowDown size={16} />
              Resume
            </a>
          </motion.div>
        </BentoCard>

        {/* Card 2 — Photo/Location */}
        <BentoCard
          variant="pink"
          className="flex flex-col items-center justify-center p-8 overflow-hidden relative"
        >
          
          <div className="relative w-full flex items-center justify-center z-10 min-h-[200px]">
              <Image
                src="/images/profile.svg"
                alt={profile.name}
                fill
                sizes="300px"
                className="object-contain object-bottom"
                priority
              />
          </div>

          <div className="text-center relative z-20 mt-6 shrink-0">
            <p className="text-beige font-black text-xl tracking-tight leading-none uppercase">{profile.firstName}</p>
            <div className="flex items-center justify-center gap-1 text-beige/80 text-[10px] mt-1 font-bold tracking-widest uppercase">
              <span>{t(profile.location)}</span>
              <span>🇮🇩</span>
            </div>
          </div>
        </BentoCard>
      </div>

      {/* Bottom Row: Focus & Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 items-stretch">
        
        {/* Card 3 — Dynamic Activities (Focus) */}
        <BentoCard
          variant="white"
          className="md:col-span-1 flex flex-col justify-between p-8"
        >
          <p className="text-charcoal/30 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            {t({ id: "Fokus & Aktivitas", en: "Focus & Activities" })}
          </p>
          <div className="space-y-4">
            {profile.activities.map(({ prefix, highlight }) => (
              <div key={t(highlight)} className="group flex items-center gap-3 border-b border-charcoal/5 pb-3 last:border-0 last:pb-0">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-primary group-hover:scale-150 transition-transform" />
                <p className="text-charcoal/60 text-sm font-medium">
                  {t(prefix)}{" "}
                  <span className="text-charcoal font-black uppercase tracking-tight">
                    {t(highlight)}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Card 4 — Core Stats (Overview) */}
        <BentoCard
          variant="pink-light"
          className="md:col-span-1 flex flex-col justify-between p-8"
        >
          <p className="text-charcoal/30 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            Overview
          </p>
          <div className="grid grid-cols-2 gap-4">
            {profile.stats.map(({ value, label }) => (
              <div key={t(label)} className="group">
                <p className={cn(
                  "text-3xl font-black leading-none transition-colors",
                  t(label) === "Achievements" || t(label) === "Penghargaan" ? "text-pink-primary animate-pulse" : "text-charcoal group-hover:text-pink-primary"
                )}>
                  {value}
                </p>
                <p className="text-charcoal/40 text-[9px] font-bold uppercase tracking-wider mt-1">{t(label)}</p>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default Hero;
