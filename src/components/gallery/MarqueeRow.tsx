"use client";

import React from "react";
import { GalleryItem } from "@/data/gallery";
import GalleryCard from "./GalleryCard";
import { cn } from "@/lib/utils";

interface MarqueeRowProps {
  items: GalleryItem[];
  direction?: "left" | "right";
  speedSeconds?: number;
  onItemClick?: (item: GalleryItem) => void;
  className?: string;
}

export const MarqueeRow: React.FC<MarqueeRowProps> = ({
  items,
  direction = "left",
  speedSeconds = 42,
  onItemClick,
  className,
}) => {
  // Duplicate items for seamless continuous looping
  const duplicatedItems = [...items, ...items];

  return (
    <div className={cn("marquee-wrap select-none", className)}>
      <div
        className={cn(
          "marquee-row",
          direction === "left" ? "left" : "right",
          "gap-3.5 sm:gap-4 lg:gap-[22px] py-3.5 px-3 sm:px-4"
        )}
        style={{
          animationDuration: `${speedSeconds}s`,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <GalleryCard
            key={`${item.id}-${index}`}
            item={item}
            onOpen={onItemClick}
          />
        ))}
      </div>
    </div>
  );
};

export default MarqueeRow;
