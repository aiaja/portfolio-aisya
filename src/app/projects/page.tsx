"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "@/data/v3/project";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Helper to determine the link for the project.
const getProjectLink = (slug: string) => {
 const v2DetailedProjects = ["fik-apps", "fms", "pilmo"];
 if (v2DetailedProjects.includes(slug)) {
  return `/v2/projects/${slug}`;
 }
 return `/projects/${slug}`;
};

// Define Filter Categories
type FilterCategory = "All" | "Engineering" | "Product/PM" | "UI/UX";

export default function ProjectArchiveV2() {
 const { t } = useLanguage();
 const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

 // Filter Logic
 const filteredProjects = projects.filter((project) => {
  if (activeFilter === "All") return true;
  
  // Convert role to string for easy matching
  const roleString = (typeof project.role === 'string' ? project.role : project.role.en).toLowerCase();
  
  if (activeFilter === "Engineering") {
   return roleString.includes("developer") || roleString.includes("engineer");
  }
  if (activeFilter === "Product/PM") {
   return roleString.includes("product") || roleString.includes("pm") || roleString.includes("manager");
  }
  if (activeFilter === "UI/UX") {
   return roleString.includes("ui/ux") || roleString.includes("design");
  }
  return true;
 });

 const filters: { label: string; value: FilterCategory }[] = [
  { label: "All", value: "All" },
  { label: "Engineering", value: "Engineering" },
  { label: "Product/PM", value: "Product/PM" },
  { label: "UI/UX", value: "UI/UX" },
 ];

 return (
  <div className="min-h-screen flex flex-col bg-bg text-text selection:bg-primary selection:text-white">
   {/* Fake Navbar Spacing */}
   <div className="h-24"></div>

   <main className="flex-grow pt-8 md:pt-16 pb-24 px-6">
    <div className="max-w-[1000px] mx-auto">
     
     {/* Back Navigation */}
     <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-12"
     >
      <Link 
       href="/v2" 
       className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-subtle hover:text-primary transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded p-1"
      >
       <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
       {t({ en: "Back to Home", id: "Kembali ke Beranda" })}
      </Link>
     </motion.div>

     {/* Header */}
     <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12">
      <div className="max-w-[600px]">
       <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-4 bg-primary-10 px-3 py-1 rounded-full"
       >
        Index
       </motion.span>
       <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-[clamp(40px,6vw,72px)] font-extrabold leading-[1.05] tracking-tight mb-6"
       >
        Project <span className="italic text-primary">Archive.</span>
       </motion.h1>
       <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-xl text-muted leading-relaxed"
       >
        {t({
         id: "Daftar lengkap proyek, eksperimen, dan karya yang telah saya bangun selama perjalanan saya sebagai engineer.",
         en: "A complete list of projects, experiments, and works I've built throughout my journey as an engineer.",
        })}
       </motion.p>
      </div>
      <motion.div 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.3 }}
       className="text-left md:text-right"
      >
       <div className="text-3xl font-extrabold text-text">{filteredProjects.length}</div>
       <div className="text-[10px] font-black uppercase tracking-widest text-subtle">
        {t({ en: "Projects Found", id: "Proyek Ditemukan" })}
       </div>
      </motion.div>
     </div>

     {/* Filters */}
     <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="flex flex-wrap gap-2 mb-12"
     >
      {filters.map((filter) => (
       <button
        key={filter.value}
        onClick={() => setActiveFilter(filter.value)}
        className={cn(
         "px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
         activeFilter === filter.value 
          ? "bg-primary text-white shadow-md shadow-primary/20" 
          : "bg-surface-2 text-muted hover:bg-border hover:text-text"
        )}
       >
        {filter.label}
       </button>
      ))}
     </motion.div>

     {/* Archive Table (Desktop Focus, Graceful Mobile) */}
     <div className="w-full">
      
      {/* Mobile List View (< md) */}
      <div className="md:hidden flex flex-col gap-6">
       <AnimatePresence mode="popLayout">
        {filteredProjects.map((project, i) => (
         <motion.div
          key={project.slug}
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
         >
          <Link 
           href={getProjectLink(project.slug)} 
           className="group block p-6 bg-surface border border-border rounded-2xl hover:border-primary/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
           <div className="flex justify-between items-start mb-4">
            <span className="text-[10px] font-mono font-bold text-subtle uppercase">
             {project.timeline.split(" ")[0]}
            </span>
            <ArrowUpRight className="w-5 h-5 text-border-strong group-hover:text-primary transition-colors" />
           </div>
           <h3 className="text-xl font-bold text-text mb-2 group-hover:text-primary transition-colors">
            {project.title}
           </h3>
           <p className="text-sm text-muted mb-4 line-clamp-2">
            {t(project.description)}
           </p>
           <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
             <span key={tag} className="px-2 py-1 bg-bg border border-border rounded text-[9px] font-bold text-subtle">
              {tag}
             </span>
            ))}
           </div>
          </Link>
         </motion.div>
        ))}
       </AnimatePresence>
       {filteredProjects.length === 0 && (
        <div className="py-12 text-center text-muted">
         {t({ en: "No projects found in this category.", id: "Tidak ada proyek di kategori ini." })}
        </div>
       )}
      </div>

      {/* Desktop Table View (>= md) */}
      <table className="hidden md:table w-full text-left border-collapse relative">
       <thead>
        <tr>
         <th className="py-4 pr-4 border-b border-border text-[10px] font-black uppercase tracking-[0.2em] text-subtle w-24">
          {t({ en: "Year", id: "Tahun" })}
         </th>
         <th className="py-4 px-4 border-b border-border text-[10px] font-black uppercase tracking-[0.2em] text-subtle">
          {t({ en: "Project", id: "Proyek" })}
         </th>
         <th className="py-4 px-4 border-b border-border text-[10px] font-black uppercase tracking-[0.2em] text-subtle w-48">
          {t({ en: "Role", id: "Peran" })}
         </th>
         <th className="py-4 px-4 border-b border-border text-[10px] font-black uppercase tracking-[0.2em] text-subtle w-64">
          {t({ en: "Tech", id: "Teknologi" })}
         </th>
         <th className="py-4 pl-4 border-b border-border text-[10px] font-black uppercase tracking-[0.2em] text-subtle text-right w-12">
          Link
         </th>
        </tr>
       </thead>
       <tbody className="divide-y divide-border">
        <AnimatePresence>
         {filteredProjects.map((project) => (
          <motion.tr 
           key={project.slug} 
           layout
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="group cursor-pointer transition-colors hover:bg-surface-2"
          >
           <td className="py-6 pr-4 align-top transition-colors">
            <span className="text-sm font-mono font-medium text-muted">
             {project.timeline.split(" ")[0]}
            </span>
           </td>
           <td className="py-6 px-4 align-top transition-colors">
            <Link href={getProjectLink(project.slug)} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
             <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
              {project.title}
             </h3>
             <p className="text-sm text-muted mt-1 max-w-sm line-clamp-2">
              {t(project.description)}
             </p>
            </Link>
           </td>
           <td className="py-6 px-4 align-top transition-colors">
            <span className="text-sm font-medium text-text">
             {t(project.role)}
            </span>
           </td>
           <td className="py-6 px-4 align-top transition-colors">
            <div className="flex flex-wrap gap-2">
             {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-surface border border-border rounded text-[10px] font-medium text-muted">
               {tag}
              </span>
             ))}
            </div>
           </td>
           <td className="py-6 pl-4 align-top text-right transition-colors">
            <Link 
             href={getProjectLink(project.slug)}
             aria-label={`View details for ${project.title}`}
             className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-border group-hover:border-primary group-hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
             <ArrowUpRight className="w-4 h-4 text-subtle group-hover:text-primary group-hover:translate-x-[2px] group-hover:translate-y-[-2px] transition-all duration-300" />
            </Link>
           </td>
          </motion.tr>
         ))}
        </AnimatePresence>
       </tbody>
      </table>
      {filteredProjects.length === 0 && (
       <div className="hidden md:block py-12 text-center text-muted">
        {t({ en: "No projects found in this category.", id: "Tidak ada proyek di kategori ini." })}
       </div>
      )}
     </div>

    </div>
   </main>

   <footer className="py-12 border-t border-border bg-surface text-center mt-auto">
    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-subtle">
     All Projects · Portfolio V2
    </p>
   </footer>
  </div>
 );
}


