"use client";

import Navbar from "@/components/v2/Navbar";
import WhyIBuild from "@/components/v2/sections/WhyIBuild";
import HowIWork from "@/components/v2/sections/HowIWork";
import SelectedStories from "@/components/v2/sections/SelectedStories";
import ExperienceGrid from "@/components/v2/sections/ExperienceGrid";
import ProjectArchive from "@/components/v2/sections/ProjectArchive";
import ContactEditorial from "@/components/v2/sections/ContactEditorial";
import Footer from "@/components/v2/sections/Footer";
import Hero from "@/components/v2/sections/Hero";
import TrustStrip from "@/components/v2/sections/TrustStrip";

const HomeV2 = () => {
  return (
    <main className="min-h-screen bg-bg">
      <Navbar />
      <div className="max-w-[960px] mx-auto px-8 md:px-8">
        <Hero />
      </div>
      <TrustStrip />
      <div className="max-w-[960px] mx-auto px-8 md:px-8">
        <WhyIBuild />
        <HowIWork />
        <SelectedStories />
        <ExperienceGrid />
        <ProjectArchive />
        <ContactEditorial />
      </div>
      <Footer />
    </main>
  );
};

export default HomeV2;
