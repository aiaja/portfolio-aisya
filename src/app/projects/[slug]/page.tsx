import { projects } from "@/data/project";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import ProjectDetailContent from "@/components/project/ProjectDetailContent";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const description = typeof project.description === "string" ? project.description : project.description.en;

  return {
    title: `${project.title} — Aisya Nur Syakbani`,
    description: description,
    openGraph: {
      title: `${project.title} | Aisya Nur Syakbani`,
      description: description,
      images: project.image ? [project.image] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Aisya Nur Syakbani`,
      description: description,
      images: project.image ? [project.image] : [],
    },
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
      <ProjectDetailContent project={project} />
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
