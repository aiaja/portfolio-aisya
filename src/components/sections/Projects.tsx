"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Github, ArrowRight, Activity } from "lucide-react";
import BentoCard from "@/components/ui/BentoCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { projects } from "@/data/project";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <SectionTitle label="Selected Works" title="Featured Projects" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Project 1 — Nexa Diesel (Large Feature) */}
        <BentoCard
          variant="charcoal"
          className="md:col-span-3 flex flex-col justify-between min-h-[500px] group p-0"
        >
          <div className="relative w-full h-[300px] overflow-hidden">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            
            <div className="absolute top-8 left-8 flex gap-2">
              <span className="px-3 py-1 bg-pink-primary text-beige text-[10px] font-black uppercase tracking-widest rounded-full flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {projects[0].status}
              </span>
            </div>
          </div>

          <div className="p-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="flex-1">
              <h3 className="text-beige text-4xl font-black italic tracking-tighter mb-4 uppercase">
                {projects[0].title}
              </h3>
              <p className="text-beige/60 text-sm font-medium leading-relaxed max-w-xl line-clamp-2">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {projects[0].tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold text-beige/40 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <Link 
              href={`/projects/${projects[0].slug}`}
              className="group/btn flex items-center justify-center w-16 h-16 rounded-full bg-pink-primary text-beige hover:scale-110 active:scale-95 transition-all shadow-xl shadow-pink-primary/20"
            >
              <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </BentoCard>

        {/* Project 2 — ECOPOS (Vertical) */}
        <BentoCard
          variant="green"
          className="md:col-span-1 flex flex-col justify-between p-8 group"
        >
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-beige font-black text-xl">
                E
              </div>
              <span className="text-[10px] font-black text-beige/40 uppercase tracking-widest">Done</span>
            </div>
            <h3 className="text-2xl font-black italic tracking-tight uppercase leading-none">
              {projects[1].title}
            </h3>
            <p className="text-beige/60 text-xs font-medium leading-relaxed line-clamp-3">
              {projects[1].description}
            </p>
          </div>

          <div className="mt-8 space-y-6">
            <div className="flex flex-wrap gap-2">
              {projects[1].tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-[9px] font-bold text-beige/30 uppercase tracking-widest border border-white/10 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              href={`/projects/${projects[1].slug}`}
              className="flex items-center justify-between w-full p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest no-underline"
            >
              <span>Case Study</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </BentoCard>

        {/* Project 3 & 4 (Grid items) */}
        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.slice(2).map((project, index) => (
            <BentoCard
              key={project.slug}
              variant={index === 0 ? "pink" : "beige"}
              className="flex items-center justify-between p-8 group"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className={cn(
                    "text-xl font-black italic uppercase tracking-tight",
                    index === 0 ? "text-beige" : "text-charcoal"
                  )}>
                    {project.title}
                  </h3>
                  <span className={cn(
                    "text-[9px] font-black uppercase tracking-[0.2em] opacity-40",
                    index === 0 ? "text-beige" : "text-charcoal"
                  )}>
                    / 2024
                  </span>
                </div>
                <p className={cn(
                  "text-xs font-medium max-w-md line-clamp-1",
                  index === 0 ? "text-beige/60" : "text-charcoal/60"
                )}>
                  {project.description}
                </p>
              </div>
              
              <Link 
                href={`/projects/${project.slug}`}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                  index === 0 
                    ? "bg-beige text-pink-primary hover:bg-white" 
                    : "bg-charcoal text-beige hover:bg-black"
                )}
              >
                <ArrowRight size={18} />
              </Link>
            </BentoCard>
          ))}
        </div>

        {/* Github CTA (Full Width) */}
        <BentoCard
          variant="white"
          className="md:col-span-4 flex flex-col md:flex-row items-center justify-between p-10 group cursor-pointer border-dashed border-2 border-charcoal/10 bg-transparent hover:bg-white transition-all"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center text-beige">
              <Github size={24} />
            </div>
            <div>
              <h4 className="text-charcoal font-black text-xl uppercase tracking-tighter italic leading-none mb-2">Want to see more experimentation?</h4>
              <p className="text-charcoal/50 text-xs font-bold uppercase tracking-widest">Check out my other repositories on GitHub</p>
            </div>
          </div>
          
          <a 
            href="https://github.com/aiaja" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 flex items-center gap-3 px-8 py-4 bg-charcoal text-beige rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all no-underline"
          >
            Explore Repos
            <ExternalLink size={14} />
          </a>
        </BentoCard>

      </div>
    </section>
  );
};

export default Projects;
