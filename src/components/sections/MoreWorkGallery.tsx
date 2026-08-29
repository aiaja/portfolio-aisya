"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { galleryHeader, galleryItems, GalleryItem } from "@/data/gallery";
import MarqueeRow from "@/components/gallery/MarqueeRow";

export const MoreWorkGallery: React.FC = () => {
  const { t } = useLanguage();
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Split gallery items into two distinct rows for opposite scrolling
  const row1Items = galleryItems.filter((_, i) => i % 2 === 0);
  const row2Items = galleryItems.filter((_, i) => i % 2 !== 0);

  return (
    <section
      id="more-work"
      className="py-16 sm:py-24 relative overflow-hidden bg-bg/50"
      aria-label="More Work Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text mb-3">
            {t(galleryHeader.titleRegular)}{" "}
            <span className="font-serif italic font-semibold text-primary">
              {t(galleryHeader.titleAccent)}
            </span>
          </h2>
        </div>
      </div>

      {/* Marquee Row 1 — Scrolls Left */}
      <div className="w-full">
        <MarqueeRow
          items={row1Items}
          direction="left"
          speedSeconds={42}
          onItemClick={(item) => setActiveItem(item)}
        />
      </div>

      {/* Marquee Row 2 — Scrolls Right */}
      <div className="w-full mt-4 sm:mt-5">
        <MarqueeRow
          items={row2Items}
          direction="right"
          speedSeconds={38}
          onItemClick={(item) => setActiveItem(item)}
        />
      </div>


      {/* Optional Lightbox Modal for Quick Item Preview */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-surface border border-border rounded-bento p-6 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-border mb-4">
              <div>
                <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider">
                  {activeItem.device} {activeItem.media === "video" ? "· Video Demo" : ""}
                </span>
                <h3 className="text-xl font-bold text-text mt-0.5">
                  {activeItem.projectName}
                </h3>
              </div>
              <button
                onClick={() => setActiveItem(null)}
                className="w-9 h-9 rounded-full bg-surface-2 hover:bg-surface-3 flex items-center justify-center text-muted hover:text-text transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-surface-2 border border-border mb-5 flex items-center justify-center min-h-[260px] max-h-[420px]">
              {activeItem.media === "video" && activeItem.src ? (
                <video
                  src={activeItem.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : activeItem.src || activeItem.poster ? (
                <img
                  src={activeItem.src || activeItem.poster}
                  alt={t(activeItem.alt)}
                  className="w-full h-auto max-h-[380px] object-contain"
                />
              ) : (
                <div className="p-8 text-center text-muted text-sm">
                  {t(activeItem.alt)}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-muted max-w-md">
                {t(activeItem.alt)}
              </p>
              {activeItem.projectSlug && (
                <Link
                  href={`/projects/${activeItem.projectSlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                >
                  <span>Lihat Detail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MoreWorkGallery;
