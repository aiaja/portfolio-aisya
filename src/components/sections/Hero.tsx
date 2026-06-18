"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/v3/profile";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Button from "../ui/Button";
import Section from "../ui/Section";

import { heroData } from "@/data/hero";

const Hero = () => {
 const { t } = useLanguage();

 return (
  <Section
   id="hero"
   withBorder={false}
   className="min-h-screen md:h-screen md:min-h-[720px] flex items-center py-12 md:py-0"
  >
   <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-10 md:gap-16 items-center w-full pt-20 md:pt-0">
    {/* Text Content */}
    <motion.div
     initial={{ opacity: 0, x: -20 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.6 }}
    >
     <h1 className="text-[clamp(36px,5vw,54px)] font-extrabold leading-[1.08] text-text mb-6">
      {heroData.title.line1}
      <br />
      <span className="text-primary italic">{heroData.title.line2}</span>
     </h1>

     <p className="text-muted text-lg md:text-xl leading-relaxed max-w-[440px] mb-10">
      {t(heroData.description)}
     </p>

     <div className="flex flex-wrap gap-4">
      <Button
       href="#projects"
       aria-label={t({
        id: "Lihat proyek saya",
        en: "View my projects",
       })}
       icon={<ArrowRight size={16} />}
      >
       {t(heroData.cta.primary)}
      </Button>

      <Button
       href="#why"
       variant="secondary"
       aria-label={t({ id: "Baca cerita saya", en: "Read my story" })}
      >
       {t(heroData.cta.secondary)}
      </Button>
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
  </Section>
 );
};

export default Hero;

