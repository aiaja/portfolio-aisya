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
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-[url('/assets/bg-flow.svg')] bg-cover bg-top bg-no-repeat pointer-events-none opacity-90"
          aria-hidden="true"
        />
        <Hero />
        <TrustStrip />
        <SelectedStories />
      </div>
      <ExperienceGrid />
      <Skills />
      <ContactEditorial />
      <Footer />
    </main>
  );
}
