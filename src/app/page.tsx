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
      <Hero />
      <TrustStrip />
      <SelectedStories />
      <ExperienceGrid />
      <Skills />
      <ContactEditorial />
      <Footer />
    </main>
  );
}
