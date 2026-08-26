"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import SelectedStories from "@/components/sections/SelectedStories";
import ExperienceGrid from "@/components/sections/ExperienceGrid";
import Skills from "@/components/sections/Skills";
import ContactEditorial from "@/components/sections/ContactEditorial";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-text selection:bg-primary-10 selection:text-primary">
      <Navbar />
      {/* Group section: Hero, TrustStrip, SelectedStories with Flow Background */}
      <div className="relative isolate overflow-hidden">
        {/* Continuous Flow SVG Ribbon filling 100% of the screen width */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none z-0 select-none overflow-hidden"
          aria-hidden="true"
        >
          <img
            src="/assets/bg-flow.svg"
            alt="Background Flow"
            className="w-full h-auto min-w-full object-cover object-top pointer-events-none block scale-150"
            loading="eager"
          />
        </div>

        <div className="relative z-10">
          <Hero />
          <TrustStrip />
          <SelectedStories />
        </div>
      </div>
      <ExperienceGrid />
      <Skills />
      <ContactEditorial />
      <Footer />
    </main>
  );
}
