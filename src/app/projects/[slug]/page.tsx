"use client";

import { use, useState } from "react";
import { projectDetailsV2 } from "@/data/project-details";
import { projectSnapshots } from "@/data/project-snapshots";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

// Modular Case Study System Blocks (Phase 4)
import {
  CaseStudyHero,
  CaseStudyIntro,
  MetricBlock,
  BeforeAfterBlock,
  DecisionBlock,
  ArchitectureBlock,
  TechnicalImplementation,
  EvidenceBlock,
  OutcomeBlock,
  ReflectionBlock,
} from "@/components/project/blocks";

import ProjectSidebarNav from "@/components/project/ProjectSidebarNav";
import ProjectSnapshotView from "@/components/project/ProjectSnapshotView";
import ProjectArchiveView from "@/components/project/ProjectArchiveView";

export default function ProjectDetailPage({
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

  // 1. Render Modular Evidence-Driven Case Study if data exists
  if (heroData) {
    const navItems = [
      { id: "hero", label: { en: "Introduction", id: "Pengantar" } },
      { id: "context", label: { en: "Context & Problem", id: "Konteks & Masalah" } },
      ...(heroData.metrics ? [{ id: "metrics", label: { en: "Impact Metrics", id: "Metrik Dampak" } }] : []),
      ...(heroData.comparisons ? [{ id: "comparison", label: { en: "Transformation", id: "Transformasi" } }] : []),
      { id: "decision", label: { en: "Trade-offs", id: "Keputusan" } },
      ...(heroData.architecture ? [{ id: "architecture", label: { en: "Architecture", id: "Arsitektur" } }] : []),
      { id: "implementation", label: { en: "Technical Solutions", id: "Solusi Rekayasa" } },
      ...(heroData.evidence ? [{ id: "evidence", label: { en: "Evidence", id: "Bukti Sistem" } }] : []),
      ...(heroData.outcomes ? [{ id: "outcomes", label: { en: "Outcomes", id: "Hasil" } }] : []),
      { id: "reflection", label: { en: "Reflection", id: "Refleksi" } },
    ];

    // Sequential Project Navigation
    const projectOrder = [
      { slug: "fik-apps", title: "FIK Apps", tagline: { en: "Academic SaaS & Architecture", id: "SaaS Akademik & Arsitektur" } },
      { slug: "fleet-management", title: "Fleet Management System", tagline: { en: "Logistics SaaS & Telematics", id: "SaaS Logistik & Telematika" } },
      { slug: "pilmo", title: "PILMO", tagline: { en: "Public Health Adherence System", id: "Sistem Kepatuhan Pengobatan Tuberkulosis" } },
      { slug: "aifa", title: "AIFA", tagline: { en: "AI Cafe Workflow Automation", id: "Otomasi Workflow Kafe Berbasis AI" } },
      { slug: "onecall", title: "OneCall", tagline: { en: "Emergency Response System", id: "Sistem Tanggap Darurat Kritis" } },
    ];
    const currentIndex = projectOrder.findIndex(
      (p) => p.slug === slug || (slug === "fleet-management-system" && p.slug === "fleet-management")
    );
    const prevProject = currentIndex > 0 ? projectOrder[currentIndex - 1] : undefined;
    const nextProject = currentIndex >= 0 && currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : undefined;

    return (
      <div className="relative min-h-screen bg-bg text-text selection:bg-primary-10 selection:text-primary">
        <ProjectSidebarNav
          items={navItems}
          activeSection={activeSection}
          onActiveSectionChange={setActiveSection}
        />

        {/* Main Content Region: Offset by sidebar on xl+ desktop so content is centered within available viewport */}
        <main className="w-full xl:pl-[240px] 2xl:pl-[280px] transition-all">
          {/* 1. CaseStudyHero */}
          <CaseStudyHero
            title={heroData.hero.title}
            tagline={heroData.hero.tagline}
            category={heroData.hero.category}
            role={heroData.hero.role}
            timeline={heroData.hero.timeline}
            team={heroData.hero.team}
            organization={heroData.hero.organization}
            technologies={heroData.hero.technologies}
            image={heroData.hero.image}
            liveUrl={projectMeta?.liveUrl}
          />

          {/* 2. CaseStudyIntro */}
          <CaseStudyIntro
            id="context"
            title={heroData.context.title}
            description={heroData.context.description}
            problemStatement={heroData.context.problemStatement}
            challenges={heroData.context.challenges || heroData.context.points}
            objectives={heroData.context.objectives}
          />

          {/* 3. MetricBlock */}
          {heroData.metrics && (
            <MetricBlock
              id="metrics"
              metrics={heroData.metrics}
            />
          )}

          {/* 4. BeforeAfterBlock */}
          {heroData.comparisons && (
            <BeforeAfterBlock
              id="comparison"
              comparisons={heroData.comparisons}
            />
          )}

          {/* 5. DecisionBlock */}
          <DecisionBlock
            id="decision"
            title={heroData.decision.title}
            description={heroData.decision.description}
            options={heroData.decision.options}
            rationale={heroData.decision.rationale}
          />

          {/* 6. ArchitectureBlock */}
          {heroData.architecture && (
            <ArchitectureBlock
              id="architecture"
              title={heroData.architecture.title}
              description={heroData.architecture.description}
              layers={heroData.architecture.layers}
            />
          )}

          {/* 7. TechnicalImplementation */}
          <TechnicalImplementation
            id="implementation"
            title={heroData.solutions.title}
            description={heroData.solutions.description}
            modules={heroData.solutions.items}
          />

          {/* 8. EvidenceBlock */}
          {heroData.evidence && (
            <EvidenceBlock
              id="evidence"
              title={heroData.evidence.title}
              description={heroData.evidence.description}
              image={heroData.evidence.image}
              caption={heroData.evidence.caption}
              assetNote={heroData.evidence.assetNote}
              insights={heroData.evidence.insights}
            />
          )}

          {/* 9. OutcomeBlock */}
          {heroData.outcomes && (
            <OutcomeBlock
              id="outcomes"
              title={heroData.outcomes.title}
              description={heroData.outcomes.description}
              outcomes={heroData.outcomes.items}
              testimonial={heroData.outcomes.testimonial}
            />
          )}

          {/* 10. ReflectionBlock */}
          <ReflectionBlock
            id="reflection"
            quote={heroData.reflection.quote}
            description={heroData.reflection.description}
            takeaways={heroData.reflection.takeaways}
            prevProject={prevProject}
            nextProject={nextProject}
          />
        </main>
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

  // Fallback
  notFound();
}
