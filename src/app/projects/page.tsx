"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import PageTransition from "@/components/ui/PageTransition";
import { projects } from "@/data/project";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ProjectArchive from "@/components/project/ProjectArchive";

const ProjectPage = () => {
  const { t } = useLanguage();

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#FCFBF4] text-charcoal pb-24">
      <ProjectArchive />
    </main>
    </PageTransition>
  );
};

export default ProjectPage;
