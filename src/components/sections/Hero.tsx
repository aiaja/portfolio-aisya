"use client";

import Image from "next/image";
import { ArrowRight, Trophy } from "lucide-react";
import { profile } from "@/data/v3/profile";
import { techStack } from "@/data/techstack";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Button from "../ui/Button";
import Section from "../ui/Section";
import { heroData } from "@/data/hero";
import { useRef, useEffect } from "react";

// Magnetic repulsion hook inspired by muhid.de
function useMagneticRepulsion(ref: React.RefObject<HTMLElement | null>, maxDistance = 80, strength = 60) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 120, damping: 18, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.hypot(dx, dy);

      if (distance < maxDistance && distance > 0) {
        const factor = (1 - distance / maxDistance) * strength;
        x.set(-(dx / distance) * factor);
        y.set(-(dy / distance) * factor);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!ref.current) return;
      const touch = e.touches[0];
      if (!touch) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = touch.clientX - centerX;
      const dy = touch.clientY - centerY;
      const distance = Math.hypot(dx, dy);

      if (distance < maxDistance && distance > 0) {
        const factor = (1 - distance / maxDistance) * strength;
        x.set(-(dx / distance) * factor);
        y.set(-(dy / distance) * factor);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseLeave);
    };
  }, [ref, maxDistance, strength, x, y]);

  return [springX, springY];
}

// Magnetic YOE badge component (Muhid Style)
const YOEBadge = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [x, y] = useMagneticRepulsion(ref, 100, 40);
  const { t } = useLanguage();

  return (
    <div className="inline-flex select-none mb-6" style={{ transform: "rotate(-4.82deg)" }}>
      <motion.div
        ref={ref}
        style={{
          x,
          y,
          boxShadow: "0 1px 6px rgba(0,0,0,0.10)",
        }}
        className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3.5 py-1.5 cursor-default"
      >
        <Trophy size={12} className="text-[#1e1e1e] shrink-0" />
        <span className="font-sans text-[11px] font-bold text-[#1e1e1e] tracking-tight leading-none">
          {t({ id: "6+ Hackathon", en: "6+ Hackathons" })}
        </span>
      </motion.div>
    </div>
  );
};

// Overlapping Magnetic Tech Stack Icon component
const TechIcon = ({ tech, index }: { tech: typeof techStack[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [x, y] = useMagneticRepulsion(ref, 80, 60);

  const iconSize = tech.name === "Cursor" ? 22 : tech.category === "framework" ? 18 : 20;

  return (
    <motion.div
      ref={ref}
      title={tech.name}
      whileHover={{ scale: 1.1 }}
      style={{
        x,
        y,
        zIndex: index,
        marginLeft: index === 0 ? 0 : -12,
      }}
      className="w-9 h-9 rounded-full bg-white border-2 border-white shadow-[0_1px_6px_rgba(0,0,0,0.10)] flex items-center justify-center shrink-0 relative cursor-default"
    >
      <img
        src={tech.icon}
        alt={tech.name}
        className="object-contain"
        style={{
          width: iconSize,
          height: iconSize,
        }}
      />
    </motion.div>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  // Curate stack for hero layout (5 core/relevant stack items)
  const featuredStack = techStack.filter((tech) =>
    ["Next.js", "React", "TypeScript", "Figma", "Laravel"].includes(tech.name)
  );

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
          {/* YOE Badge (Muhid Style) */}
          <YOEBadge />

          <h1 className="text-[clamp(36px,5vw,54px)] font-extrabold leading-[1.08] text-text mb-6">
            {heroData.title.line1}
            <br />
            <span className="text-primary italic">{heroData.title.line2}</span>
          </h1>

          <p className="text-muted text-lg md:text-xl leading-relaxed max-w-[440px] mb-6">
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
              href="https://drive.google.com/file/d/1Oas6FrXwJ8CNbsb8gUUrjQB6AK2NmqO4/view?usp=sharing"
              variant="secondary"
              aria-label={t({ id: "Resume", en: "Resume" })}
            >
              {t(heroData.cta.secondary)}
            </Button>
          </div>
              {/* Tech Stack Overlapping Row - Muhid Style */}
              <div className="flex flex-col mt-16 sm:flex-row sm:items-center gap-3 sm:gap-4 mb-8 z-10 relative select-none">
                <span className="text-muted text-[10px] font-black uppercase tracking-[0.2em] shrink-0">
                  {t({ id: "Teknologi Saya", en: "My Stack" })}
                </span>
                <div className="flex items-center flex-wrap gap-y-2.5 pl-3 sm:pl-0">
                  {featuredStack.map((tech, idx) => (
                    <TechIcon key={tech.name} tech={tech} index={idx} />
                  ))}
                </div>
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


