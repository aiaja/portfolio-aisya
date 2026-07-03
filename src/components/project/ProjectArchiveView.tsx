"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/types";
import { Github, ArrowUpRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

// Components
import ProjectHero from "./ProjectHero";
import Section from "../ui/Section";
import Button from "../ui/Button";

interface ProjectArchiveViewProps {
  project: Project;
}

export default function ProjectArchiveView({ project }: ProjectArchiveViewProps) {
  const { t } = useLanguage();

  // Detect URL types (e.g., if liveUrl is actually a GitHub repository)
  const rawLiveUrl = project.liveUrl;
  const isGithubLive = rawLiveUrl && rawLiveUrl.toLowerCase().includes("github.com");
  const githubUrl = project.githubUrl || (isGithubLive ? rawLiveUrl : undefined);
  const demoUrl = isGithubLive ? undefined : rawLiveUrl;

  // Transform project data into a structure suitable for ProjectHero
  const mockHero = {
    title: { line1: project.title, line2: "" },
    tagline: project.description,
    stats: [],
    role: project.role,
    team: { en: "Archived Project", id: "Proyek Arsip" },
    image: project.image,
  };

  return (
    <div className="relative">
      <ProjectHero hero={mockHero} liveUrl={demoUrl} />

      <Section id="archive-content" background="surface">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-subtle mb-4 block">
              {t({ en: "Status", id: "Status" })}
            </span>
            <h2 className="text-4xl font-extrabold leading-tight mb-6 text-text">
              {t({ en: "Project Archive", id: "Arsip Proyek" })}
            </h2>
          </div>
          <div className="space-y-8 w-full">
            <div className="p-6 bg-surface-2 border border-border rounded-2xl">
              <p className="text-lg text-muted leading-relaxed">
                {t({
                  en: "This project is currently archived and not documented as a full case study.",
                  id: "Proyek ini saat ini diarsipkan dan tidak didokumentasikan sebagai studi kasus lengkap.",
                })}
              </p>
            </div>

            <div className="flex flex-col gap-6 pt-6 border-t border-border">
              {/* Technologies */}
              <div>
                <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-subtle mb-3 block">
                  {t({ en: "Technologies", id: "Teknologi" })}
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-surface border border-border rounded-full text-xs font-bold text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                {githubUrl && (
                  <Button
                    href={githubUrl}
                    variant="outline"
                    size="sm"
                    icon={<Github size={14} />}
                  >
                    GitHub
                  </Button>
                )}
                {demoUrl && (
                  <Button
                    href={demoUrl}
                    variant="primary"
                    size="sm"
                    icon={<ArrowUpRight size={14} />}
                  >
                    {t({ en: "Visit Live Site", id: "Kunjungi Situs" })}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-border bg-surface text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-subtle">
          Archive · {project.slug.toUpperCase().replace("-", " ")} ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
