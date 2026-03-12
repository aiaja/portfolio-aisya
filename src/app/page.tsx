import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-beige">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Hero />
      </div>
    </main>
  );
}