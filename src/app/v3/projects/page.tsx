"use client";

import Navbar from "@/components/v3/Navbar";
import Footer from "@/components/v3/sections/Footer";
import PageTransition from "@/components/v3/ui/PageTransition";
import { projects } from "@/data/v3/project";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ProjectArchive from "@/components/v3/project/ProjectArchive";

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

