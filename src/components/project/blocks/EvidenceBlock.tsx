"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export interface EvidenceBlockProps {
  id?: string;
  label?: Translatable;
  title: Translatable;
  description?: Translatable;
  image?: string;
  caption?: Translatable;
  insights?: { title: Translatable; value: string; description?: Translatable }[];
}

export default function EvidenceBlock({
  id = "evidence",
  label = { id: "Bukti Artefak", en: "Concrete Evidence" },
  title,
  description,
  image,
  caption,
  insights,
}: EvidenceBlockProps) {
  const { t } = useLanguage();

  return (
    <Section id={id} background="bg">
      <div className="max-w-[900px] mx-auto">
        
        {/* Header */}
        <span className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-subtle mb-3 block select-none">
          {t(label)}
        </span>
        <h2 className="text-[clamp(26px,3.8vw,38px)] font-extrabold leading-[1.15] tracking-tight text-text mb-4">
          {t(title)}
        </h2>
        {description && (
          <p className="text-muted text-base md:text-lg leading-relaxed mb-8">
            {t(description)}
          </p>
        )}

        {/* Evidence Visual Asset Panel */}
        {image && (
          <div className="rounded-bento-lg border border-border bg-surface p-4 md:p-6 shadow-subtle mb-6 overflow-hidden">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
              <Image
                src={image}
                alt={t(title)}
                fill
                className="object-contain object-center"
              />
            </div>
            {caption && (
              <p className="text-center text-xs font-mono text-muted mt-4 pt-3 border-t border-border">
                {t(caption)}
              </p>
            )}
          </div>
        )}

        {/* Insights Grid */}
        {insights && insights.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {insights.map((ins, i) => (
              <Card key={i} variant="surface" className="p-4">
                <div className="text-xs font-mono font-bold uppercase text-primary mb-1">
                  {t(ins.title)}
                </div>
                <div className="text-lg font-bold text-text mb-1">
                  {ins.value}
                </div>
                {ins.description && (
                  <p className="text-xs text-muted leading-relaxed">
                    {t(ins.description)}
                  </p>
                )}
              </Card>
            ))}
          </div>
        )}

      </div>
    </Section>
  );
}
