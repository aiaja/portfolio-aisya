"use client";

import {
  Star,
  Monitor,
  Users,
  GraduationCap,
  Award,
  LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { trustItems } from "@/data/trust-strip";

const iconMap: Record<string, LucideIcon> = {
  Star,
  Monitor,
  Users,
  GraduationCap,
  Award,
};

const TrustStrip = () => {
  const { t } = useLanguage();

  return (
    <section id="trust" className="py-6 bg-gradient-to-b from-surface/90 via-surface/80 to-surface-2/80 backdrop-blur-md border-y border-border shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-5 md:gap-4">
          {trustItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="group flex items-center gap-3 md:px-3 md:first:pl-0 border-r-0 md:border-r border-border md:last:border-r-0 w-full select-none"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-b from-white via-[#f7f5f1] to-[#ebe7e0] border border-[#d8d3cb] flex items-center justify-center shrink-0 text-primary shadow-[0_2.5px_0_0_#dedad2,0_4px_10px_rgba(26,25,23,0.06),inset_0_1.5px_0_0_rgba(255,255,255,1)] group-hover:-translate-y-0.5 group-hover:bg-gradient-to-b group-hover:from-[#fff6f8] group-hover:via-[#fdecf2] group-hover:to-[#fbdde8] group-hover:border-primary/45 group-hover:shadow-[0_3.5px_0_0_#e8ccd7,0_6px_14px_rgba(168,72,94,0.18),inset_0_1.5px_0_0_rgba(255,255,255,1)] transition-all duration-200">
                  {Icon && <Icon size={16} className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.06)]" />}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-text leading-tight truncate">
                    {t(item.text)}
                  </div>
                  <div className="text-[10px] text-muted font-medium truncate mt-0.5">
                    {t(item.sub)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
