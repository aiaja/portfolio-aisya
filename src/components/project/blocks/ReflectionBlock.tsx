"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";
import { ArrowRight, ArrowLeft, Sparkles, MessageSquare } from "lucide-react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export interface ReflectionBlockProps {
  id?: string;
  label?: Translatable;
  quote: Translatable;
  takeaways?: Translatable[];
  description: Translatable;
  nextProject?: {
    slug: string;
    title: string;
    tagline?: Translatable;
  };
  prevProject?: {
    slug: string;
    title: string;
  };
}

export default function ReflectionBlock({
  id = "reflection",
  label = { id: "Refleksi & Pelajaran", en: "Engineering Reflection" },
  quote,
  takeaways,
  description,
  nextProject,
  prevProject,
}: ReflectionBlockProps) {
  const { t } = useLanguage();

  return (
    <Section id={id} background="bg">
      <div className="max-w-[850px] mx-auto">
        
        {/* Header */}
        <span className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-subtle mb-3 block select-none">
          {t(label)}
        </span>

        {/* Hero Quote Card */}
        <Card variant="surface" className="p-6 md:p-8 mb-8 border-l-4 border-l-primary shadow-subtle">
          <div className="flex items-start gap-3">
            <Sparkles size={22} className="text-primary shrink-0 mt-1" />
            <div>
              <blockquote className="text-base md:text-xl font-bold font-serif italic text-text leading-snug mb-3">
                "{t(quote)}"
              </blockquote>
              <p className="text-xs md:text-sm text-muted leading-relaxed">
                {t(description)}
              </p>
            </div>
          </div>
        </Card>

        {/* Key Takeaways */}
        {takeaways && takeaways.length > 0 && (
          <div className="p-6 rounded-bento bg-surface-2 border border-border mb-12">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted mb-4 pb-2 border-b border-border">
              {t({ id: "Pelajaran Utama", en: "Key Takeaways" })}
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              {takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-text">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Next / Previous Project Navigation */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-muted hover:text-text transition-colors no-underline group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              <span>{prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary hover:text-primary/80 transition-colors no-underline group"
            >
              <span>{t({ id: "Studi Kasus Selanjutnya:", en: "Next Case Study:" })} {nextProject.title}</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Button href="/#stories" variant="outline" size="sm">
              {t({ id: "Kembali ke Beranda", en: "Back to Homepage" })}
            </Button>
          )}
        </div>

      </div>
    </Section>
  );
}
