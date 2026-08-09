"use client";

import { use, useState } from "react";
import { projectDetailsV2 } from "@/data/project-details";
import { projectSnapshots } from "@/data/project-snapshots";
import { projects } from "@/data/projects/project";
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

// Snapshot & Archive Views
import ProjectSnapshotView from "@/components/project/ProjectSnapshotView";
import ProjectArchiveView from "@/components/project/ProjectArchiveView";

export default function ProjectDetailV2Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [activeSection, setActiveSection] = useState("hero");

  const heroData = projectDetailsV2[slug];
  const snapshotData = projectSnapshots[slug];
  const projectMeta = projects.find(
    (p) =>
      p.slug === slug ||
      (slug === "fleet-management" && p.slug === "fleet-management-system")
  );

  // If the slug doesn't exist anywhere, return 404
  if (!heroData && !snapshotData && !projectMeta) {
    notFound();
  }

  // 1. Render Hero Case Study if data exists
  if (heroData) {
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

        <ProjectHero hero={heroData.hero} liveUrl={projectMeta?.liveUrl} />

        <ProjectContext context={heroData.context} />

        <ProjectDecision decision={heroData.decision} />

        <ProjectSolutions solutions={heroData.solutions} />

        <ProjectReflection reflection={heroData.reflection} slug={heroData.slug} />

        </div>
    );
  }

  // 2. Render Project Snapshot if snapshot data exists
  if (snapshotData) {
    return <ProjectSnapshotView snapshot={snapshotData} liveUrl={projectMeta?.liveUrl} />;
  }

  // 3. Fallback to Archive page if project metadata exists but no detail or snapshot data
  if (projectMeta) {
    return <ProjectArchiveView project={projectMeta} />;
  }

  // Fallback (should not be reached due to top validation check)
  notFound();
}
