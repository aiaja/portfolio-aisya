"use client";

import { use, useState } from "react";
import { projectDetailsV2 } from "@/data/project-details";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// V2 Project Components
import ProjectSidebarNav from "@/components/project/ProjectSidebarNav";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectContext from "@/components/project/ProjectContext";
import ProjectDecision from "@/components/project/ProjectDecision";
import ProjectSolutions from "@/components/project/ProjectSolutions";
import ProjectReflection from "@/components/project/ProjectReflection";

const characterImages: Record<string, string> = {
  hero: "/char/main.svg",
  context: "/char/angry.svg",
  decision: "/char/curious.svg",
  execution: "/char/wink.svg",
  reflection: "/char/smile.svg",
};

export default function ProjectDetailV2Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const data = projectDetailsV2[slug];
  const [activeSection, setActiveSection] = useState("hero");

  if (!data) notFound();

  const navItems = [
    { id: "hero", label: { en: "Introduction", id: "Pengantar" } },
    { id: "context", label: { en: "The Problem", id: "Masalah" } },
    { id: "decision", label: { en: "The Decision", id: "Keputusan" } },
    { id: "execution", label: { en: "The Solution", id: "Solusi" } },
    { id: "reflection", label: { en: "Reflection", id: "Refleksi" } },
  ];

  return (
    <div className="relative">
      <ProjectSidebarNav 
        items={navItems} 
        activeSection={activeSection} 
        onActiveSectionChange={setActiveSection} 
      />

      <ProjectHero hero={data.hero} />

      <ProjectContext context={data.context} />

      <ProjectDecision decision={data.decision} />

      <ProjectSolutions solutions={data.solutions} />

      <ProjectReflection reflection={data.reflection} slug={data.slug} />

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
    </div>
  );
}
