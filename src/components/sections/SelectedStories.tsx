"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Section from "../ui/Section";
import Button from "../ui/Button";

import { selectedStories } from "@/data/selected-stories";
import { projects } from "@/data/projects/project";

const SelectedStories = () => {
  const { t } = useLanguage();

  return (
    <Section id="stories">
      <div className="mb-12 md:mb-16 flex justify-between items-center">
        <div className="">

        <span className="text-[11px] font-medium tracking-[0.12em] uppercase text-subtle mb-3 block">
          {t({ id: "Cerita Pilihan", en: "Selected Stories" })}
        </span>
        <h2 className="text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] text-text">
          {t({ id: "Studi kasus dalam", en: "Case studies in" })}
          <br />
          {t({ id: "product thinking.", en: "product thinking." })}
        </h2>
        </div>
        <div className="">
            <Button
       href="/projects"
       
       icon={<ArrowRight size={16} />}
      >
{t({ id: "Proyek Lainnya", en: "More Projects" })}     
 </Button>
        </div>
      </div>

      <div className="space-y-16 md:space-y-10">
        {selectedStories.map((story, i) => {
          // Look up matching project for richer description and image
          const projectDetail = projects.find(
            (p) =>
              p.slug === story.slug ||
              (p.slug === "fleet-management-system" &&
                story.slug === "fleet-management"),
          );

          return (
            <div
              key={i}
              className="block group"
            >
              <div className="flex flex-col md:flex-row items-stretch md:rounded-[32px] md:bg-[#fafafa] md:border md:border-border/40 overflow-hidden hover:border-border-strong hover:shadow-lg transition-all duration-500">
                {/* Left Section: Information & Metrics */}
                <div className="flex flex-col gap-4 p-6 md:p-8 md:w-[340px] shrink-0">
                  <div>
                    <span className="text-[10px] font-semibold tracking-[0.08em] uppercase text-subtle mb-2 block">
                      {t(story.tag)}
                    </span>
                    <Link href={`/projects/${story.slug}`} className="no-underline">
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-text leading-tight hover:text-primary transition-colors duration-300">
                        {story.title}
                      </h3>
                    </Link>
                  </div>

                  <p className="text-[15px] font-medium leading-relaxed text-muted tracking-tight">
                    {t(projectDetail?.description || story.subtitle)}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {story.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-surface/85 backdrop-blur-sm border border-border/45 rounded-xl p-3 flex flex-col justify-center min-h-[60px]"
                      >
                        <div className="text-sm font-extrabold text-text mb-0.5 leading-none">
                          {metric.value}
                        </div>
                        <div className="text-[9px] text-subtle uppercase tracking-wider font-bold leading-none">
                          {t(metric.label)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Button
                      href={`/projects/${story.slug}`}
                      variant="outline"
                      size="sm"
                      className="text-[11px] py-1.5 px-4"
                    >
                      {t({ en: "Case Study", id: "Studi Kasus" })}
                    </Button>
                    {projectDetail?.liveUrl && (
                      <Button
                        href={projectDetail.liveUrl}
                        variant="primary"
                        size="sm"
                        className="text-[11px] py-1.5 px-4"
                        icon={<ArrowUpRight size={13} />}
                      >
                        {t({ en: "Live Demo", id: "Buka Situs" })}
                      </Button>
                    )}
                  </div>
                </div>

                {/* Right Section: Image Container with Overlay Hover Action */}
                <Link
                  href={`/projects/${story.slug}`}
                  className="flex-1 min-h-[260px] aspect-[16/10] md:aspect-[16/9] relative overflow-hidden rounded-[24px] md:rounded-none m-4 md:m-0 border border-border/40 md:border-none shadow-sm md:shadow-none bg-white/50 block group-hover:opacity-95"
                >
                  {/* Floating Overlay Action Icon */}
                  <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 z-10 h-10 rounded-full text-primary flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-0.5 transition-transform duration-300"
                    />
                  </div>

                  <motion.div
                    className="absolute inset-0 w-full h-full p-4 md:p-8"
                    whileHover={{ scale: 1.025 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image
                      src={projectDetail?.image || "/images/placeholder.svg"}
                      alt={story.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                      priority={i === 0}
                    />
                  </motion.div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default SelectedStories;
