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
    <section id="trust" className="py-6 bg-surface/80 backdrop-blur-md border-y border-border">
      <div className="max-w-[1000px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-5 md:gap-4">
          {trustItems.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="flex items-center gap-3 md:px-3 md:first:pl-0 border-r-0 md:border-r border-border md:last:border-r-0 w-full"
              >
                <div className="w-8 h-8 rounded-lg bg-primary-10 border border-primary-20 flex items-center justify-center shrink-0 text-primary">
                  {Icon && <Icon size={16} />}
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
