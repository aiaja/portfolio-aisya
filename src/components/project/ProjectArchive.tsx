"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { projects } from "@/data/project";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const ProjectArchive = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>        
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Navigation */}
      <nav className="max-w-6xl mx-auto mb-8 p-6">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-charcoal/40 hover:text-charcoal transition-colors text-xs font-bold uppercase tracking-widest no-underline group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          {t({ id: "Kembali ke Proyek", en: "Back to Projects" })}
        </Link>
      </nav>
          {/* Header */}
          <div className="mb-16 md:mb-24">        
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase text-charcoal leading-none mb-6">
              Archive
            </h1>
            <p className="text-charcoal/60 text-sm md:text-lg font-medium max-w-2xl leading-relaxed">
              {t({ 
                id: "Daftar lengkap proyek, eksperimen, dan karya yang telah saya bangun selama perjalanan saya sebagai engineer.", 
                en: "A complete list of projects, experiments, and works I've built throughout my journey as an engineer." 
              })}
            </p>
          </div>

          {/* Archive Table */}
          <div className="w-full overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead className="border-b border-charcoal/20">
                <tr className="text-charcoal/30 text-[10px] font-black uppercase tracking-[0.2em]">
                  <th className="py-4 px-4">{t({ id: "Tahun", en: "Year" })}</th>
                  <th className="py-4 px-4">{t({ id: "Proyek", en: "Project" })}</th>
                  <th className="py-4 px-4 hidden md:table-cell">{t({ id: "Peran", en: "Role" })}</th>
                  <th className="py-4 px-4 hidden lg:table-cell">{t({ id: "Teknologi", en: "Built with" })}</th>
                  <th className="py-4 px-4 text-right">Link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/5">
                {projects.map((project) => (
                  <tr 
                    key={project.slug} 
                    className="group hover:bg-charcoal/[0.02] transition-colors"
                  >
                    <td className="py-6 px-4 align-top">
                      <span className="text-charcoal/40 font-mono text-xs font-bold">
                        {project.timeline.split(" ")[0]}
                      </span>
                    </td>
                    <td className="py-6 px-4 align-top">
                      <div className="flex flex-col gap-1">
                        <Link 
                          href={`/projects/${project.slug}`}
                          className="text-lg font-black uppercase tracking-tight text-charcoal group-hover:text-pink-primary transition-colors inline-flex items-center gap-2"
                        >
                          {project.title}
                          <span className="md:hidden">
                             <ArrowUpRight size={14} className="text-charcoal/20" />
                          </span>
                        </Link>
                        <p className="text-xs text-charcoal/50 max-w-sm leading-relaxed lg:hidden">
                          {t(project.description)}
                        </p>
                      </div>
                    </td>
                    <td className="py-6 px-4 align-top hidden md:table-cell">
                      <span className="text-sm text-charcoal/60 font-medium">
                        {t(project.role)}
                      </span>
                    </td>
                    <td className="py-6 px-4 align-top hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1.5 max-w-xs">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className="text-[9px] font-mono text-charcoal/40 border border-charcoal/10 px-1.5 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-6 px-4 align-top text-right">
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-charcoal/5 text-charcoal group-hover:bg-pink-primary group-hover:text-beige transition-all"
                      >
                        <ArrowUpRight size={18} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>        
        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            height: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.02);
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(203, 146, 137, 0.2);
            border-radius: 10px;
          }
        `}</style>
      
    </PageTransition>
  );
};

export default ProjectArchive;
