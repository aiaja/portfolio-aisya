"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectSnapshot } from "@/types";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Components
import ProjectSidebarNav from "./ProjectSidebarNav";
import ProjectHero from "./ProjectHero";
import Section from "../ui/Section";

const characterImages: Record<string, string> = {
  hero: "/char/main.svg",
  overview: "/char/curious.svg",
  contributions: "/char/wink.svg",
  tech: "/char/wink.svg",
  reflection: "/char/smile.svg",
};

interface ProjectSnapshotViewProps {
  snapshot: ProjectSnapshot;
  liveUrl?: string;
}

export default function ProjectSnapshotView({
  snapshot,
  liveUrl,
}: ProjectSnapshotViewProps) {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: { en: "Introduction", id: "Pengantar" } },
    { id: "overview", label: { en: "Overview", id: "Ikhtisar" } },
    { id: "contributions", label: { en: "Contributions", id: "Kontribusi" } },
    { id: "tech", label: { en: "Tech Stack", id: "Teknologi" } },
    { id: "reflection", label: { en: "Reflection", id: "Refleksi" } },
  ];

  // Transform snapshot hero data into the structure expected by ProjectHero
  const transformedHero = {
    title: { line1: snapshot.hero.title, line2: "" },
    tagline: snapshot.hero.tagline,
    stats: [],
    role: snapshot.hero.role,
    team: snapshot.hero.duration || "",
    image: snapshot.hero.image,
  };

  return (
    <div className="relative">
      <ProjectSidebarNav
        items={navItems}
        activeSection={activeSection}
        onActiveSectionChange={setActiveSection}
      />

      <ProjectHero hero={transformedHero} liveUrl={liveUrl} />

      <Section id="overview" background="surface">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-subtle mb-4 block">
              {t({ en: "Overview", id: "Ikhtisar" })}
            </span>
            <h2 className="text-4xl font-extrabold leading-tight mb-6 text-text">
              {t({ en: "Project Overview", id: "Ikhtisar Proyek" })}
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>{t(snapshot.overview)}</p>
          </div>
        </div>
      </Section>

      <Section id="contributions" background="bg">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-subtle mb-4 block">
              {t({ en: "Contributions", id: "Kontribusi" })}
            </span>
            <h2 className="text-4xl font-extrabold leading-tight mb-6 text-text">
              {t({ en: "Key Contributions", id: "Kontribusi Utama" })}
            </h2>
          </div>
          <div className="space-y-4 w-full">
            {snapshot.contributions.map((point, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-surface border border-border rounded-2xl"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary-10 text-primary">
                  <span className="text-xs font-bold">✓</span>
                </div>
                <span className="text-sm font-bold text-text">{t(point)}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="tech" background="surface">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-subtle mb-4 block">
              {t({ en: "Technologies", id: "Teknologi" })}
            </span>
            <h2 className="text-4xl font-extrabold leading-tight mb-6 text-text">
              {t({ en: "Tech Stack", id: "Teknologi Utama" })}
            </h2>
          </div>
          <div className="flex flex-wrap gap-2.5 w-full">
            {snapshot.tech.map((techItem) => (
              <span
                key={techItem}
                className="px-4 py-2 bg-surface-2 border border-border rounded-full text-xs font-bold text-muted hover:text-primary hover:border-primary/30 transition-all shadow-sm"
              >
                {techItem}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {snapshot.gallery && snapshot.gallery.length > 0 && (
        <Section id="gallery" background="bg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {snapshot.gallery.map((img, i) => (
              <div
                key={i}
                className="aspect-[16/10] relative rounded-3xl overflow-hidden border border-border bg-white"
              >
                <Image
                  src={img}
                  alt={`Gallery screenshot ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section id="reflection" background="surface">
        <div className="max-w-[960px] mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 relative">
            <Image
              src="/char/smile.svg"
              alt="Mascot Smile"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-subtle mb-4 block">
              {t({ en: "Reflection", id: "Refleksi" })}
            </span>
            <p className="text-xl md:text-2xl font-bold leading-relaxed mb-6 text-text">
              {t(snapshot.reflection)}
            </p>
          </div>
        </div>
      </Section>

      {/* Floating Mascot Character Reacting to Scroll */}
      <div className="fixed bottom-6 right-6 z-40 w-24 h-24 md:w-32 md:h-32 pointer-events-none drop-shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full h-full"
          >
            <Image
              src={characterImages[activeSection] || "/char/main.svg"}
              alt="Mascot Character"
              width={128}
              height={128}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <footer className="py-12 border-t border-border bg-surface text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-subtle">
          Snapshot · {snapshot.slug.toUpperCase().replace("-", " ")} ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
