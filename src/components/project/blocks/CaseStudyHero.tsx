"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";
import { ArrowLeft, ArrowUpRight, Calendar, Users, Briefcase, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export interface CaseStudyHeroProps {
  title: { line1: string; line2?: string };
  tagline: Translatable;
  category?: Translatable;
  role: Translatable;
  timeline?: Translatable;
  team: Translatable;
  organization?: Translatable;
  technologies?: string[];
  image?: string;
  liveUrl?: string;
}

export default function CaseStudyHero({
  title,
  tagline,
  category,
  role,
  timeline,
  team,
  organization,
  technologies,
  image,
  liveUrl,
}: CaseStudyHeroProps) {
  const { t } = useLanguage();

  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-bg border-b border-border">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#stories"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-muted hover:text-text transition-colors no-underline group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            <span>{t({ id: "Kembali ke Studi Kasus", en: "Back to Selected Work" })}</span>
          </Link>
        </div>

        {/* Category Badge & Live Action */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {category && (
            <Badge variant="primary" size="md">
              {t(category)}
            </Badge>
          )}

          {liveUrl && (
            <Button
              href={liveUrl}
              variant="outline"
              size="sm"
              icon={<ArrowUpRight size={14} />}
              className="text-xs"
            >
              {t({ en: "Live System", id: "Sistem Aktif" })}
            </Button>
          )}
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.08] tracking-tight text-text mb-6">
          {title.line1}
          {title.line2 && (
            <>
              <br />
              <span className="text-primary italic font-serif">{title.line2}</span>
            </>
          )}
        </h1>

        {/* Tagline / Subtitle */}
        <p className="text-muted text-base md:text-xl leading-relaxed max-w-3xl mb-10">
          {t(tagline)}
        </p>

        {/* Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 p-5 rounded-bento bg-surface border border-border mb-10">
          <div>
            <div className="flex items-center gap-1.5 text-subtle text-[10px] font-mono uppercase font-bold tracking-wider mb-1">
              <Briefcase size={12} />
              <span>{t({ id: "Peran", en: "Role" })}</span>
            </div>
            <div className="text-xs md:text-sm font-bold text-text truncate">{t(role)}</div>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-subtle text-[10px] font-mono uppercase font-bold tracking-wider mb-1">
              <Users size={12} />
              <span>{t({ id: "Tim", en: "Team" })}</span>
            </div>
            <div className="text-xs md:text-sm font-bold text-text truncate">{t(team)}</div>
          </div>

          {timeline && (
            <div>
              <div className="flex items-center gap-1.5 text-subtle text-[10px] font-mono uppercase font-bold tracking-wider mb-1">
                <Calendar size={12} />
                <span>{t({ id: "Waktu", en: "Timeline" })}</span>
              </div>
              <div className="text-xs md:text-sm font-bold text-text truncate">{t(timeline)}</div>
            </div>
          )}

          {organization && (
            <div>
              <div className="flex items-center gap-1.5 text-subtle text-[10px] font-mono uppercase font-bold tracking-wider mb-1">
                <Award size={12} />
                <span>{t({ id: "Institusi", en: "Client / Org" })}</span>
              </div>
              <div className="text-xs md:text-sm font-bold text-text truncate">{t(organization)}</div>
            </div>
          )}
        </div>

        {/* Tech Stack Badges */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <span className="text-subtle text-[11px] font-mono font-bold uppercase tracking-wider mr-1">
              {t({ id: "Stack:", en: "Stack:" })}
            </span>
            {technologies.map((tech) => (
              <Badge key={tech} variant="subtle" size="sm">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {/* Showcase Visual Panel with Clean White Framing */}
        {image && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-bento-lg border border-border bg-surface p-6 md:p-10 shadow-card flex items-center justify-center overflow-hidden"
          >
            <div className="relative w-full aspect-[16/9] max-h-[440px]">
              <Image
                src={image}
                alt={title.line1}
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
