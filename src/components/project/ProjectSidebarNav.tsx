"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";

interface NavItem {
 id: string;
 label: Translatable;
}

interface ProjectSidebarNavProps {
 items: NavItem[];
 activeSection?: string;
 onActiveSectionChange?: (id: string) => void;
}

const ProjectSidebarNav = ({ 
 items,
 activeSection: propActiveSection,
 onActiveSectionChange
}: ProjectSidebarNavProps) => {
 const { t } = useLanguage();
 const [internalActiveSection, setInternalActiveSection] = useState(items[0]?.id || "");

 const activeSection = propActiveSection !== undefined ? propActiveSection : internalActiveSection;
 const setActiveSection = (id: string) => {
  if (onActiveSectionChange) {
   onActiveSectionChange(id);
  } else {
   setInternalActiveSection(id);
  }
 };

 useEffect(() => {
  const handleScroll = () => {
   // Check if user has reached the bottom of the page
   const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
   
   if (isAtBottom) {
    setActiveSection(items[items.length - 1].id);
    return;
   }

   let current = items[0]?.id;
   for (const item of items) {
    const element = document.getElementById(item.id);
    if (element && window.scrollY >= element.offsetTop - 200) {
     current = item.id;
    }
   }
   setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, [items]);

 return (
  <nav className="fixed left-12 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-6 pointer-events-none">
   <div className="relative">
    <div className="absolute left-[5.5px] top-2 bottom-2 w-[1px] bg-border-strong/30" />
    <div className="pointer-events-auto flex flex-col gap-8">
     {items.map((item) => (
      <a
       key={item.id}
       href={`#${item.id}`}
       className={cn(
        "flex items-center gap-5 no-underline transition-all duration-300 group",
        activeSection === item.id ? "text-primary" : "text-subtle"
       )}
      >
       <div className="relative z-10 flex items-center justify-center w-3 h-3">
        <div 
         className={cn(
          "w-1.5 h-1.5 rounded-full transition-all duration-300",
          activeSection === item.id 
           ? "bg-primary scale-150 shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
           : "bg-border-strong group-hover:bg-muted"
         )} 
        />
       </div>
       <span 
        className={cn(
         "text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300",
         activeSection === item.id 
          ? "text-text translate-x-1 opacity-100" 
          : "opacity-40 group-hover:opacity-100 group-hover:translate-x-1"
        )}
       >
        {t(item.label)}
       </span>
      </a>
     ))}
    </div>
   </div>
  </nav>
 );
};

export default ProjectSidebarNav;

