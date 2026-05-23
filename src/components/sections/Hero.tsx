"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

const iconMap = {
  github: <Github size={16} />,
  linkedin: <Linkedin size={16} />,
  mail: <Mail size={16} />,
};

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-8 flex flex-col justify-center">
      {/* Bento Grid */}
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
                {profile.available ? 'Available for work' : 'Busy'}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-beige text-4xl md:text-6xl font-black leading-none tracking-tighter mb-6 italic"
            >
              {profile.firstName} {profile.name.split(profile.firstName)[1]}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-beige/70 text-lg md:text-xl font-medium leading-relaxed max-w-xl"
            >
              {profile.bio}
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 relative z-10"
          >
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 bg-pink-primary text-beige text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all no-underline px-8 py-3 shadow-lg shadow-pink-primary/20"
            >
              <Mail size={16} />
              Let&apos;s talk
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
          className="flex flex-col items-center justify-between p-8 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-primary/40 pointer-events-none" />
          
          <div className="relative w-full h-full min-h-[250px] z-10">
            <Image
              src="/images/profile.svg"
              alt={profile.name}
              fill
              sizes="300px"
              className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>

          <div className="text-center relative z-20 mt-4">
            <p className="text-beige font-black text-lg tracking-tight leading-none uppercase">{profile.firstName}</p>
            <div className="flex items-center justify-center gap-1 text-beige/60 text-xs mt-1 font-bold tracking-widest">
              <span>{profile.location}</span>
              <span>🇮🇩</span>
            </div>
          </div>
        </BentoCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 items-stretch">
        {/* Card 3 — Social Connect */}
        <BentoCard
          variant="charcoal"
          className="md:col-span-1 flex flex-col justify-between p-8"
        >
          <p className="text-beige/30 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Connect
          </p>
          <div className="flex flex-col gap-4">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between text-beige/60 hover:text-pink-primary transition-all no-underline group"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 bg-white/5 rounded-lg group-hover:bg-pink-primary/20 group-hover:text-pink-primary transition-colors">
                    {iconMap[social.icon as keyof typeof iconMap]}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider">
                    {social.icon}
                  </span>
                </div>
                <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
              </a>
            ))}
          </div>
        </BentoCard>

        {/* Card 4 — Dynamic Activities */}
        <BentoCard
          variant="beige"
          className="md:col-span-2 flex flex-col justify-between p-8"
        >
          <p className="text-charcoal/30 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Focus & Activities
          </p>
          <div className="space-y-4">
            {profile.activities.map(({ prefix, highlight }) => (
              <div key={highlight} className="group flex items-center gap-3 border-b border-charcoal/5 pb-3 last:border-0 last:pb-0">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-primary group-hover:scale-150 transition-transform" />
                <p className="text-charcoal/60 text-sm font-medium">
                  {prefix}{" "}
                  <span className="text-charcoal font-black uppercase tracking-tight">
                    {highlight}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Card 5 — Core Stats */}
        <BentoCard
          variant="pink-light"
          className="md:col-span-1 flex flex-col justify-between p-8"
        >
          <p className="text-charcoal/30 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            Overview
          </p>
          <div className="grid grid-cols-2 gap-4">
            {profile.stats.map(({ value, label }) => (
              <div key={label} className="group">
                <p className="text-charcoal text-2xl font-black leading-none group-hover:text-pink-primary transition-colors">
                  {value}
                </p>
                <p className="text-charcoal/40 text-[9px] font-bold uppercase tracking-wider mt-1">{label}</p>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default Hero;
