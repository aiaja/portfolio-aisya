"use client";

import Navbar from "@/components/Navbar";
import WhyIBuild from "@/components/sections/WhyIBuild";
import HowIWork from "@/components/sections/HowIWork";
import SelectedStories from "@/components/sections/SelectedStories";
import ExperienceGrid from "@/components/sections/ExperienceGrid";
import ProjectArchive from "@/components/sections/ProjectArchive";
import ContactEditorial from "@/components/sections/ContactEditorial";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";

const HomeV2 = () => {
 return (
  <main className="min-h-screen bg-bg">
   <Navbar />
   <Hero />
   <TrustStrip />
   <WhyIBuild />
   <HowIWork />
   <SelectedStories />
   <ExperienceGrid />
   <ProjectArchive />
   <ContactEditorial />
   <Footer />
  </main>
 );
};

export default HomeV2;

