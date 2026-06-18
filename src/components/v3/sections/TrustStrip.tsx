"use client";

import { Star, Monitor, Users, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TrustStrip = () => {
 const { t } = useLanguage();

 const items = [
  {
   icon: <Star />,
   text: "GPA 3.78 / 4.00",
   sub: t({ id: "Ilmu Komputer", en: "Computer Science" }),
  },
  {
   icon: <Monitor />,
   text: "Frontend Engineer",
   sub: "Bengkel Koding",
  },
  {
   icon: <Users />,
   text: "Vice President",
   sub: "Dian Nuswantoro CC",
  },
  {
   icon: <GraduationCap />,
   text: "Teaching Assistant",
   sub: "Laravel · MVC",
  },
  {
   icon: <Award />,
   text: t({ id: "Finalis Nasional", en: "National Finalist" }),
   sub: t({ id: "5 Kompetisi", en: "5 Competitions" }),
  },
 ];

 return (
  <section id="trust" className="py-7 bg-surface border-y border-border">
   <div className="flex flex-wrap items-center justify-start md:justify-between gap-0">
    {items.map((item, index) => (
     <div 
      key={index}
      className="flex items-center gap-2.5 px-8 py-2 border-r border-border last:border-r-0 w-full md:w-auto"
     >
      <div className="w-8 h-8 rounded-lg bg-primary-10 flex items-center justify-center shrink-0 text-primary">
       {item.icon}
      </div>
      <div>
       <div className="text-[13px] font-bold text-text leading-tight">{item.text}</div>
       <div className="text-[11px] text-subtle">{item.sub}</div>
      </div>
     </div>
    ))}
   </div>
  </section>
 );
};

export default TrustStrip;

