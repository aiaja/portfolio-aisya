"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Play, Maximize2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { GalleryItem } from "@/data/gallery";
import BrowserFrame from "./BrowserFrame";
import PhoneFrame from "./PhoneFrame";
import { cn } from "@/lib/utils";

interface GalleryCardProps {
  item: GalleryItem;
  onOpen?: (item: GalleryItem) => void;
  className?: string;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ item, onOpen, className }) => {
  const { t } = useLanguage();
  const [imgError, setImgError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const colors = item.colors || ["#eae7e2", "#DCC4D8"];
  const isVideo = item.media === "video";
  const isMobile = item.device === "mobile";

  const handleMouseEnter = () => {
    if (isVideo && videoRef.current && item.src) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (isVideo && videoRef.current && item.src) {
      videoRef.current.pause();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onOpen) {
      e.preventDefault();
      onOpen(item);
    }
  };

  // Abstract UI preview vector fallback matching reference styling
  const renderFallbackVector = () => (
    <svg
      viewBox="0 0 400 260"
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full block select-none"
    >
      <rect width="400" height="260" fill={colors[0]} />
      <rect x="0" y="0" width="400" height="34" fill={colors[1]} opacity="0.9" />
      <rect x="20" y="56" width="160" height="14" rx="4" fill={colors[1]} opacity="0.55" />
      <rect x="20" y="80" width="110" height="10" rx="3" fill={colors[1]} opacity="0.3" />
      <rect x="20" y="110" width="360" height="70" rx="10" fill="#ffffff" opacity="0.6" />
      <rect x="20" y="192" width="170" height="50" rx="10" fill="#ffffff" opacity="0.45" />
      <rect x="210" y="192" width="170" height="50" rx="10" fill="#ffffff" opacity="0.45" />
    </svg>
  );

  const renderMedia = () => {
    if (isVideo && item.src) {
      return (
        <video
          ref={videoRef}
          src={item.src}
          poster={item.poster || (item.src ? undefined : "/images/FIK APPS.svg")}
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-top"
        />
      );
    }

    if (item.src && !imgError) {
      return (
        <img
          src={item.src}
          alt={t(item.alt)}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      );
    }

    if (item.poster && !imgError) {
      return (
        <img
          src={item.poster}
          alt={t(item.alt)}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      );
    }

    return renderFallbackVector();
  };

  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={cn(
          "relative shrink-0 w-[230px] h-[270px] sm:w-[260px] sm:h-[300px] lg:w-[300px] lg:h-[340px] bg-gradient-to-b from-[#ffffff] via-[#f8f6f2] to-[#ece8e1] border border-[#dcd6cc] rounded-bento p-3.5 sm:p-4 lg:p-[22px] flex items-center justify-center shadow-skeuo-card hover:bg-gradient-to-b hover:from-[#fff6f8] hover:via-[#fdecf2] hover:to-[#fbdde8] hover:border-primary/45 cursor-pointer group select-none",
          className
        )}
      >
        {children}
      </div>
    );
  };

  return (
    <CardWrapper>
      {/* Top-Left Skeuomorphic Glossy Badge */}
      <div className="absolute z-50 top-3.5 left-3.5 bg-gradient-to-b from-white/95 to-white/85 backdrop-blur-md border border-white/90 px-2.5 py-1 rounded-full text-[10.5px] font-bold text-text z-10 flex items-center gap-1.5 shadow-[0_2px_6px_rgba(0,0,0,0.08),inset_0_1px_0_0_rgba(255,255,255,0.95)]">
        {isVideo ? (
          <>
            <span className="w-1.5 h-1.5 rounded-full bg-primary block shadow-[0_0_6px_oklch(var(--primary))] animate-pulse" />
            <span>Demo · {item.projectName}</span>
          </>
        ) : (
          <>
            <span className="text-muted text-[9.5px] uppercase tracking-wider font-semibold">
              {isMobile ? "Mobile" : "Web"}
            </span>
            <span className="text-border-strong">·</span>
            <span>{item.projectName}</span>
          </>
        )}
      </div>

      {/* Frame Container (Desktop or Mobile) */}
      {isMobile ? (
        <PhoneFrame>{renderMedia()}</PhoneFrame>
      ) : (
        <BrowserFrame>{renderMedia()}</BrowserFrame>
      )}

      {/* Video Hover Play Button Overlay — Skeuomorphic 3D Bubble */}
      {isVideo && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-12 h-12 rounded-full bg-gradient-to-b from-white via-[#fcfbfa] to-[#ede9e2] text-text shadow-[0_8px_22px_rgba(0,0,0,0.22),inset_0_1.5px_0_0_rgba(255,255,255,1),0_0_0_1px_rgba(0,0,0,0.08)] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200">
            <Play className="w-4 h-4 fill-current text-primary ml-0.5" />
          </div>
        </div>
      )}

      {/* Bottom-Right Expand / Link Icon — Skeuomorphic Tactile Button */}
      <div className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-gradient-to-b from-white to-[#ede8e1] border border-white/90 shadow-[0_3px_8px_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,1)] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200 text-text z-10 hover:scale-110 active:scale-95 active:shadow-inner">
        <Maximize2 className="w-3.5 h-3.5 text-text" />
      </div>
    </CardWrapper>
  );
};

export default GalleryCard;
