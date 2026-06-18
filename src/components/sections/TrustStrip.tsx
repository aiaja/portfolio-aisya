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
  <section id="trust" className="py-8 bg-surface border-y border-border">
   <div className="mx-auto px-8">
    <div className="flex flex-wrap items-center justify-start md:justify-between gap-y-6 md:gap-y-0">
     {trustItems.map((item, index) => {
      const Icon = iconMap[item.icon];
      return (
       <div
        key={index}
        className="flex items-center gap-2.5 px-0 md:px-8 first:pl-0 border-r-0 md:border-r border-border last:border-r-0 w-1/2 md:w-auto"
       >
        <div className="w-8 h-8 rounded-lg bg-primary-10 flex items-center justify-center shrink-0 text-primary">
         {Icon && <Icon size={18} />}
        </div>
        <div>
         <div className="text-[13px] font-bold text-text leading-tight">
          {t(item.text)}
         </div>
         <div className="text-[11px] text-subtle">{t(item.sub)}</div>
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

