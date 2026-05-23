"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
  className?: string;
}

const Marquee = ({
  items,
  direction = "left",
  speed = 40,
  className,
}: MarqueeProps) => {
  const isRight = direction === "right";
  
  return (
    <div className={cn("overflow-hidden flex whitespace-nowrap mask-marquee", className)}>
      <motion.div
        animate={{
          x: isRight ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex gap-4 pr-4"
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-charcoal/10 bg-white/50 backdrop-blur-sm whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </motion.div>
      
      <style jsx>{`
        .mask-marquee {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </div>
  );
};

export default Marquee;
