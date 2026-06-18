"use client";

import Navbar from "@/components/v3/Navbar";
import Contact from "@/components/v3/sections/Contact";
import Experience from "@/components/v3/sections/Experience";
import Footer from "@/components/v3/sections/Footer";
import Hero from "@/components/v3/sections/Hero";
import Projects from "@/components/v3/sections/Projects";
import Skills from "@/components/v3/sections/Skills";

const Home = () => {
 return (
  <main className="min-h-screen bg-beige">
   <Navbar />
   <div className="max-w-7xl mx-auto px-6 md:px-12">
    <Hero />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
   </div>
   <Footer />
  </main>
 );
};

export default Home;

