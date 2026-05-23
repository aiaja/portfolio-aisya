import { projects } from "@/data/project";
import BentoCard from "@/components/ui/BentoCard";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Award } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Aisya Nur Syakbani`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FCFBF4] text-charcoal pb-24">
      {/* Header / Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-charcoal/40 hover:text-charcoal transition-colors mb-8 text-xs font-bold uppercase tracking-widest no-underline group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-primary/10 text-green-primary text-[10px] font-black uppercase tracking-widest rounded">
                {project.status === "ongoing" ? "Current Work" : "Completed"}
              </span>
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-3 py-1 bg-charcoal/5 text-charcoal/40 text-[10px] font-black uppercase tracking-widest rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter uppercase leading-none">
              {project.title}
            </h1>
            <p className="text-xl text-charcoal/60 font-medium leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <BentoCard variant="white" className="p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/30 mb-2">Role</p>
              <p className="font-black text-sm uppercase">{project.role}</p>
            </BentoCard>
            <BentoCard variant="white" className="p-6">
              <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/30 mb-2">Timeline</p>
              <p className="font-black text-sm uppercase">{project.timeline}</p>
            </BentoCard>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-charcoal/5 border border-charcoal/5">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover"
          />
        </div>
      </section>

      {/* CBL Content Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: The Narrative (CBL) */}
        <div className="lg:col-span-8 space-y-24">
          {/* 01. The Challenge */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black italic text-charcoal/10">01</span>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/40">The Challenge</h2>
            </div>
            <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
              {project.content.challenge}
            </p>
          </div>

          {/* 02. The Process/Solution */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black italic text-charcoal/10">02</span>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/40">Solution & Process</h2>
            </div>
            <div className="text-lg text-charcoal/70 font-medium leading-relaxed space-y-4">
              {project.content.process.split('\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4">
              {project.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-charcoal text-beige text-[10px] font-black uppercase tracking-widest rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Impact & Links */}
        <div className="lg:col-span-4 space-y-8">
          {/* Impact Cards (Michael Leon Style) */}
          <div className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/40 ml-2">Impact & Results</h2>
            {project.content.impact.map((metric, i) => (
              <BentoCard 
                key={i} 
                variant={i % 2 === 0 ? "pink-light" : "white"} 
                className="p-8 border-none"
              >
                <p className="text-4xl font-black text-charcoal mb-1 italic tracking-tighter">{metric.value}</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40">{metric.label}</p>
              </BentoCard>
            ))}
          </div>

          {/* External Links */}
          <div className="pt-8 space-y-4">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                className="flex items-center justify-between p-6 bg-charcoal text-beige rounded-2xl hover:scale-[1.02] active:scale-95 transition-all no-underline"
              >
                <span className="font-black uppercase tracking-widest text-xs">Source Code</span>
                <Github size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                className="flex items-center justify-between p-6 bg-green-primary text-beige rounded-2xl hover:scale-[1.02] active:scale-95 transition-all no-underline"
              >
                <span className="font-black uppercase tracking-widest text-xs">Live Demo</span>
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mt-32">
        <BentoCard variant="green" className="p-12 flex flex-col items-center text-center gap-6">
          <Award size={48} className="text-pink-primary" />
          <div className="space-y-2">
            <h3 className="text-3xl font-black italic uppercase tracking-tighter leading-none">Interested in this project?</h3>
            <p className="text-beige/60 text-sm font-medium">Let&apos;s discuss how I can help you with similar solutions.</p>
          </div>
          <Link 
            href="/#contact" 
            className="px-10 py-4 bg-pink-primary text-beige rounded-full font-black uppercase tracking-widest text-sm hover:bg-beige hover:text-green-primary transition-all no-underline"
          >
            Start a Conversation
          </Link>
        </BentoCard>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
