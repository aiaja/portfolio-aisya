"use client";

import { use } from "react";
import { projectDetailsV2 } from "@/data/project-details";
import { notFound } from "next/navigation";

// V2 Project Components
import ProjectSidebarNav from "@/components/project/ProjectSidebarNav";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectContext from "@/components/project/ProjectContext";
import ProjectDecision from "@/components/project/ProjectDecision";
import ProjectSolutions from "@/components/project/ProjectSolutions";
import ProjectReflection from "@/components/project/ProjectReflection";

export default function ProjectDetailV2Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const data = projectDetailsV2[slug];

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
      <ProjectSidebarNav items={navItems} />

      <ProjectHero hero={data.hero} />

      <ProjectContext context={data.context} />

      <ProjectDecision decision={data.decision} />

      <ProjectSolutions solutions={data.solutions} />

      <ProjectReflection reflection={data.reflection} slug={data.slug} />
    </div>
  );
}
