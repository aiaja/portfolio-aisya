"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import { selectedStories } from "@/data/selected-stories";
import { projects } from "@/data/projects";

const SelectedStories = () => {
  const { t } = useLanguage();

  return (
    <Section id="stories" background="transparent" withBorder={false}>
      {/* Header */}
      <div className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <span className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-subtle mb-3 block select-none">
            {t({ id: "Studi Kasus Rekayasa", en: "Engineering Case Studies" })}
          </span>
          <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] tracking-tight text-text">
            {t({ id: "Karya Terpilih &", en: "Selected Work &" })}
            <br />
            <span className="text-primary italic font-serif">
              {t({ id: "Solusi Terukur.", en: "Scalable Solutions." })}
            </span>
          </h2>
        </div>

        <Button
          href="/projects"
          variant="outline"
          size="sm"
          icon={<ArrowRight size={14} />}
        >
          {t({ id: "Arsip Semua Proyek", en: "All Projects Archive" })}
        </Button>
      </div>

      {/* Stories Stack */}
      <div className="space-y-8 md:space-y-10">
        {selectedStories.map((story, i) => {
          const projectDetail = projects.find(
            (p) => p.slug === story.slug || (story.slug === "fleet-management" && p.slug === "fleet-management-system")
          );

          return (
            <motion.div
              key={story.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-bento-lg border border-border bg-surface hover:border-border-strong hover:shadow-card transition-all duration-300 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Left Section: Context & Metrics */}
                <div className="flex flex-col justify-between gap-6 p-6 md:p-8 md:w-[380px] shrink-0 border-b md:border-b-0 md:border-r border-border">
                  <div className="space-y-3">
                    <Badge variant="primary" size="sm">
                      {t(story.tag)}
                    </Badge>

                    <Link href={`/projects/${story.slug}`} className="block no-underline">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text group-hover:text-primary transition-colors duration-200">
                        {story.title}
                      </h3>
                    </Link>

                    <p className="text-sm font-normal leading-relaxed text-muted">
                      {t(projectDetail?.description || story.subtitle)}
                    </p>
                  </div>

                  {/* Metrics Grid */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {story.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-surface-2 border border-border rounded-lg p-2.5 flex flex-col justify-center"
                        >
                          <div className="text-base font-extrabold text-text leading-tight">
                            {metric.value}
                          </div>
                          <div className="text-[10px] text-muted font-mono font-medium truncate mt-0.5">
                            {t(metric.label)}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      <Button
                        href={`/projects/${story.slug}`}
                        variant="primary"
                        size="sm"
                        className="text-xs py-1.5 px-4"
                        icon={<ArrowRight size={13} />}
                      >
                        {t({ en: "Case Study", id: "Studi Kasus" })}
                      </Button>
                      {projectDetail?.liveUrl && (
                        <Button
                          href={projectDetail.liveUrl}
                          variant="outline"
                          size="sm"
                          className="text-xs py-1.5 px-3"
                          icon={<ArrowUpRight size={13} />}
                        >
                          {t({ en: "Live", id: "Demo" })}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Section: Clean White Showcase Panel with Subtle Breathing Room */}
                <Link
                  href={`/projects/${story.slug}`}
                  className="flex-1 min-h-[260px] md:min-h-0 relative overflow-hidden bg-surface p-6 md:p-8 flex items-center justify-center group/image block"
                  aria-label={story.title}
                >
                  <div className="relative w-full h-full min-h-[220px] md:min-h-[260px] flex items-center justify-center">
                    <Image
                      src={projectDetail?.image || "/images/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-contain object-center transition-transform duration-500 group-hover/image:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 650px"
                      priority={i === 0}
                    />
                  </div>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default SelectedStories;
