"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="pt-32 pb-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-syne text-[clamp(36px,5vw,54px)] font-extrabold leading-[1.08] text-text mb-6">
            Product-Minded<br />
            <span className="text-primary italic">Frontend Engineer</span>
          </h1>
          
          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-[440px] mb-10">
            {t({ 
              id: "Saya mengubah masalah dunia nyata menjadi produk digital yang terukur melalui riset, pengambilan keputusan, dan rekayasa perangkat lunak.", 
              en: "I turn real-world problems into scalable digital products through research, decision-making, and engineering." 
            })}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-bold rounded-full hover:opacity-90 active:scale-95 transition-all no-underline px-8 py-3.5 shadow-lg shadow-primary/20"
            >
              {t({ id: "Lihat Karya Saya", en: "View My Work" })}
              <ArrowRight size={16} />
            </a>
            
            <a
              href="#why"
              className="inline-flex items-center gap-2 border border-border-strong text-text text-sm font-bold rounded-full hover:bg-surface-2 active:scale-95 transition-all no-underline px-8 py-3.5"
            >
              {t({ id: "Baca Cerita Saya", en: "Read My Story" })}
            </a>
          </div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-square rounded-[24px] bg-primary-10 border border-primary-20 overflow-hidden hidden md:block"
        >
          <Image
            src="/images/profile.svg"
            alt={profile.name}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
