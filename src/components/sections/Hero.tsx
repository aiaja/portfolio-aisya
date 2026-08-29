"use client";

import { ArrowRight, Trophy } from "lucide-react";
import { profile } from "@/data/profile";
import { techStack } from "@/data/techstack";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Button from "../ui/Button";
import Section from "../ui/Section";
import BlobPhotoCard from "../ui/BlobPhotoCard";
import { heroData } from "@/data/hero";
import { useRef, useEffect } from "react";

// Magnetic repulsion hook
function useMagneticRepulsion(
  ref: React.RefObject<HTMLElement | null>,
  maxDistance = 80,
  strength = 50
) {
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

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, maxDistance, strength, x, y]);

  return [springX, springY];
}

// Magnetic YOE badge component
const YOEBadge = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [x, y] = useMagneticRepulsion(ref, 100, 30);
  const { t } = useLanguage();

  return (
    <div className="inline-flex select-none mb-6">
      <motion.div
        ref={ref}
        style={{ x, y }}
        className="flex items-center gap-2 bg-surface border border-border-strong rounded-full px-3.5 py-1.5 shadow-subtle cursor-default"
      >
        <Trophy size={13} className="text-primary shrink-0" />
        <span className="font-mono text-xs font-bold text-text tracking-tight leading-none">
          {t({ id: "6+ Hackathon & Kompetisi", en: "6+ Hackathons & Competitions" })}
        </span>
      </motion.div>
    </div>
  );
};

// Overlapping Magnetic Tech Stack Icon component
const TechIcon = ({
  tech,
  index,
}: {
  tech: (typeof techStack)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [x, y] = useMagneticRepulsion(ref, 80, 40);

  return (
    <motion.div
      ref={ref}
      title={tech.name}
      whileHover={{ scale: 1.15, zIndex: 30 }}
      style={{
        x,
        y,
        zIndex: index,
        marginLeft: index === 0 ? 0 : -10,
      }}
      className="w-10 h-10 rounded-full bg-surface border-2 border-surface shadow-subtle flex items-center justify-center shrink-0 relative cursor-pointer transition-transform"
    >
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-5 h-5 object-contain"
        loading="lazy"
      />
    </motion.div>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  // Curate core 5 foundational tech items for the hero
  const featuredStack = techStack.filter((tech) =>
    ["TypeScript", "Next.js", "React", "Tailwind CSS", "Laravel"].includes(tech.name)
  );

  return (
    <Section
      id="hero"
      background="transparent"
      withBorder={false}
      className="flex items-center pt-24 md:pt-28 pb-8 md:pb-10"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 lg:gap-16 items-center w-full">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <YOEBadge />

          <h1 className="text-[clamp(36px,5.5vw,56px)] font-extrabold leading-[1.08] tracking-tight text-text mb-6">
            {heroData.title.line1}
            <br />
            <span className="text-primary italic font-serif">
              {heroData.title.line2}
            </span>
          </h1>

          <p className="text-muted text-base md:text-lg leading-relaxed max-w-[500px] mb-8">
            {t(heroData.description)}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              href="#stories"
              aria-label={t({
                id: "Lihat studi kasus pilihan",
                en: "View selected case studies",
              })}
              icon={<ArrowRight size={16} />}
            >
              {t(heroData.cta.primary)}
            </Button>

            <Button
              href={profile.cvUrl || "https://drive.google.com/file/d/1Oas6FrXwJ8CNbsb8gUUrjQB6AK2NmqO4/view?usp=sharing"}
              variant="secondary"
              aria-label={t({ id: "Unduh Resume", en: "View Resume" })}
            >
              {t(heroData.cta.secondary)}
            </Button>
          </div>

          {/* Tech Stack Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-12 select-none">
            <span className="text-subtle text-[11px] font-mono font-bold uppercase tracking-[0.15em] shrink-0">
              {t({ id: "Core Stack:", en: "Core Stack:" })}
            </span>
            <div className="flex items-center pl-2 sm:pl-0">
              {featuredStack.map((tech, idx) => (
                <TechIcon key={tech.name} tech={tech} index={idx} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Profile Visual: Interactive 3D Organic Blob Photo Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center justify-center w-full"
        >
          <BlobPhotoCard
            imageSrc="/images/profile.svg"
            imageAlt={profile.name}
            priority
          />
        </motion.div>
      </div>
    </Section>
  );
};

export default Hero;
