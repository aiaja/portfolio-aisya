"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Home, ArrowRight } from "lucide-react";

const NotFound = () => {
 const { t } = useLanguage();
 const canvasRef = useRef<HTMLCanvasElement>(null);

 // Interactive Liquid Glowing Aura Canvas
 useEffect(() => {
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let animationFrameId: number;
  
  // Custom glowing fluid parameters in the project's color palette
  let blobs = [
   { 
    x: 0, y: 0, targetX: 0, targetY: 0, 
    radius: 260, color: "rgba(255, 143, 162, 0.22)", // --primary (light pinkish red)
    speedX: 0.4, speedY: 0.5, 
    angleX: Math.random() * 10, angleY: Math.random() * 10,
    isMouse: false
   },
   { 
    x: 0, y: 0, targetX: 0, targetY: 0, 
    radius: 340, color: "rgba(203, 146, 137, 0.18)", // --v1-accent (rose pink-primary)
    speedX: 0.25, speedY: 0.35, 
    angleX: Math.random() * 10, angleY: Math.random() * 10,
    isMouse: false
   },
   { 
    x: 0, y: 0, targetX: 0, targetY: 0, 
    radius: 290, color: "rgba(179, 75, 97, 0.14)", // --color-secondary (deep pink-maroon)
    speedX: 0.3, speedY: 0.25, 
    angleX: Math.random() * 10, angleY: Math.random() * 10,
    isMouse: false
   },
   { 
    x: 0, y: 0, targetX: 0, targetY: 0, 
    radius: 240, color: "rgba(253, 163, 177, 0.22)", // --color-accent
    speedX: 0, speedY: 0,
    angleX: 0, angleY: 0,
    isMouse: true 
   }
  ];

  const resizeCanvas = () => {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   
   blobs.forEach(b => {
    if (!b.isMouse) {
     b.x = Math.random() * canvas.width;
     b.y = Math.random() * canvas.height;
    }
   });
  };

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const handleGlobalMouseMove = (e: MouseEvent) => {
   blobs[3].targetX = e.clientX;
   blobs[3].targetY = e.clientY;
  };
  window.addEventListener("mousemove", handleGlobalMouseMove);

  // Set initial mouse position in center of screen
  blobs[3].x = window.innerWidth / 2;
  blobs[3].y = window.innerHeight / 2;
  blobs[3].targetX = window.innerWidth / 2;
  blobs[3].targetY = window.innerHeight / 2;

  const render = () => {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   
   // High-performance blur filter native inside canvas context
   ctx.filter = "blur(48px)";

   blobs.forEach(b => {
    if (b.isMouse) {
     // Smooth spring delay following coordinates
     b.x += (b.targetX - b.x) * 0.06;
     b.y += (b.targetY - b.y) * 0.06;
    } else {
     // Organic drift
     b.angleX += b.speedX * 0.008;
     b.angleY += b.speedY * 0.008;
     
     b.x += Math.sin(b.angleX) * 1.1;
     b.y += Math.cos(b.angleY) * 1.1;
     
     // Loop around screen border
     if (b.x < -b.radius) b.x = canvas.width + b.radius;
     if (b.x > canvas.width + b.radius) b.x = -b.radius;
     if (b.y < -b.radius) b.y = canvas.height + b.radius;
     if (b.y > canvas.height + b.radius) b.y = -b.radius;
    }

    const gradient = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
    gradient.addColorStop(0, b.color);
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
   });

   ctx.filter = "none";
   animationFrameId = requestAnimationFrame(render);
  };

  render();

  return () => {
   cancelAnimationFrame(animationFrameId);
   window.removeEventListener("resize", resizeCanvas);
   window.removeEventListener("mousemove", handleGlobalMouseMove);
  };
 }, []);

 return (
  <main className="h-screen min-h-screen flex flex-col justify-between overflow-hidden bg-bg relative selection:bg-primary/20">
   {/* Interactive background canvas fluid auras */}
   <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-50 mix-blend-multiply dark:mix-blend-screen" />

   <Navbar />

   <div className="flex-grow flex items-center justify-center px-6 pt-20 pb-6 relative z-10">
    <Section id="not-found" withBorder={false} className="py-0 md:py-0 w-full">
     <motion.div 
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="backdrop-blur-xl bg-surface/30 border border-border-strong/10 shadow-2xl rounded-[2.5rem] p-8 md:p-12 max-w-4xl w-full mx-auto relative"
     >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
       {/* Left Column: Typography & CTAs */}
       <div className="md:col-span-6 flex flex-col items-start text-left">
        {/* Small Glowing Error Indicator Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-10 border border-primary-20 text-[10px] font-black uppercase tracking-widest text-primary mb-6 select-none">
         <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
         <span>404 - Not Found</span>
        </div>

        {/* Large Typographical Number with outline styling */}
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none mb-4 italic select-none">
         <span style={{ WebkitTextStroke: "1.5px var(--text)", color: "transparent" }}>4</span>
         <span className="text-primary">0</span>
         <span style={{ WebkitTextStroke: "1.5px var(--text)", color: "transparent" }}>4</span>
        </h1>

        {/* Simplified, elegant UX Copy */}
        <h2 className="text-2xl font-extrabold tracking-tight text-text mb-6">
         {t({ id: "Halaman Tidak Ditemukan", en: "Page Not Found" })}
        </h2>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
         <Button 
          href="/" 
          variant="primary"
          icon={<Home size={14} />}
          iconPosition="left"
          className="shadow-xl shadow-primary/10 px-6 py-3"
         >
          {t({ id: "Beranda", en: "Return Home" })}
         </Button>
         <Button 
          href="https://drive.google.com/file/d/1Oas6FrXwJ8CNbsb8gUUrjQB6AK2NmqO4/view?usp=sharing"
          variant="outline"
          className="px-6 py-3"
         >
          {t({ id: "Resume", en: "Resume" })}
         </Button>
        </div>
       </div>

       {/* Right Column: Copy description & Quick Navigation */}
       <div className="md:col-span-6 flex flex-col items-start text-left md:border-l md:border-border-strong/10 md:pl-10">
        <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
         {t({
          id: "Apakah Anda ingin menjelajahi halaman lain? Anda dapat kembali ke beranda atau menavigasi melalui tautan di bawah ini.",
          en: "Would you like to explore another page? You can return to the homepage or use the navigation shortcuts below."
         })}
        </p>

        <div className="w-full border-t border-border-strong/10 my-4 md:hidden" />

        {/* Subtle index quick nav links */}
        <div className="w-full flex flex-col items-start">
         <p className="text-[10px] font-black uppercase tracking-[0.2em] text-subtle mb-4 select-none">
          {t({ id: "Rute Navigasi", en: "Quick Navigation" })}
         </p>
         <div className="flex flex-col gap-3 text-sm font-bold text-muted w-full">
          <Link href="/#experience" className="hover:text-primary transition-colors flex items-center justify-between group/link py-1 border-b border-border/30 hover:border-primary/20">
           <span>01/ {t({ id: "Pengalaman", en: "Experience" })}</span>
           <ArrowRight size={14} className="text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
          </Link>
          <Link href="/#stories" className="hover:text-primary transition-colors flex items-center justify-between group/link py-1 border-b border-border/30 hover:border-primary/20">
           <span>02/ {t({ id: "Studi Kasus", en: "Case Studies" })}</span>
           <ArrowRight size={14} className="text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
          </Link>
          <Link href="/#contact" className="hover:text-primary transition-colors flex items-center justify-between group/link py-1 border-b border-border/30 hover:border-primary/20">
           <span>03/ {t({ id: "Hubungi Saya", en: "Contact" })}</span>
           <ArrowRight size={14} className="text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover/link:opacity-100 group-hover/link:translate-x-0" />
          </Link>
         </div>
        </div>
       </div>
      </div>
     </motion.div>
    </Section>
   </div>

   <Footer />
  </main>
 );
};

export default NotFound;
