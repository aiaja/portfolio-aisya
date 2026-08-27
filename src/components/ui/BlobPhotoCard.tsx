"use client";

import React, { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Translatable } from "@/types";

interface BlobPhotoCardProps {
  imageSrc: string;
  imageAlt: string;
  badgeText?: Translatable;
  className?: string;
  priority?: boolean;
}

export const BlobPhotoCard: React.FC<BlobPhotoCardProps> = ({
  imageSrc,
  imageAlt,
  badgeText,
  className = "",
  priority = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  // Normalized mouse coordinates from center: -1 to 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for natural organic parallax depth
  const springConfig = { stiffness: 180, damping: 22, mass: 0.5 };

  // Photo layer: shifts up to 10px toward cursor
  const photoXTransform = useTransform(mouseX, [-1, 1], [-10, 10]);
  const photoYTransform = useTransform(mouseY, [-1, 1], [-10, 10]);
  const photoSpringX = useSpring(photoXTransform, springConfig);
  const photoSpringY = useSpring(photoYTransform, springConfig);

  // Background gradient blob: shifts up to 16px in OPPOSITE direction
  const bgXTransform = useTransform(mouseX, [-1, 1], [16, -16]);
  const bgYTransform = useTransform(mouseY, [-1, 1], [16, -16]);
  const bgSpringX = useSpring(bgXTransform, springConfig);
  const bgSpringY = useSpring(bgYTransform, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const normX = Math.max(-1, Math.min(1, (e.clientX - centerX) / (rect.width / 2)));
    const normY = Math.max(-1, Math.min(1, (e.clientY - centerY) / (rect.height / 2)));

    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={cardRef}
      tabIndex={0}
      role="figure"
      aria-label={imageAlt}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative w-full max-w-[280px] h-[320px] sm:max-w-[320px] sm:h-[360px] md:max-w-[360px] md:h-[400px] mx-auto select-none outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-[2rem] cursor-pointer ${className}`}
    >
      {/* Embedded SVG Filter/Gradient Definitions for 3D Glossy Bubbles */}
      <svg
        width="0"
        height="0"
        className="absolute w-0 h-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <g id="heroBubbleAsset">
            <radialGradient id="heroBubbleBase" cx="38%" cy="32%" r="75%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="22%" stopColor="#fff0f5" />
              <stop offset="48%" stopColor="#ffd1dc" />
              <stop offset="76%" stopColor="#ffb6c1" />
              <stop offset="100%" stopColor="#fca5b9" />
            </radialGradient>
            <radialGradient id="heroRimShadow" cx="65%" cy="70%" r="65%">
              <stop offset="55%" stopColor="#f06292" stopOpacity="0" />
              <stop offset="80%" stopColor="#f06292" stopOpacity="0" />
              <stop offset="96%" stopColor="#e91e63" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#d81b60" stopOpacity="0.4" />
            </radialGradient>
            <radialGradient id="heroTopGlow" cx="42%" cy="18%" r="55%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroBounceLight" cx="55%" cy="82%" r="40%">
              <stop offset="0%" stopColor="#ffe4e9" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ffe4e9" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroMainHighlight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="heroSecondaryHighlight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            <filter
              id="heroInnerShadow"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
              <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="1 0" />
              </feComponentTransfer>
              <feGaussianBlur stdDeviation="6" />
              <feOffset dx="0" dy="6" result="offsetblur" />
              <feFlood floodColor="#f06292" floodOpacity="0.25" />
              <feComposite in2="offsetblur" operator="in" />
              <feComposite in2="SourceGraphic" operator="over" />
            </filter>
            <filter id="heroSoftBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" />
            </filter>
            <filter
              id="heroSoftBlurLg"
              x="-60%"
              y="-60%"
              width="220%"
              height="220%"
            >
              <feGaussianBlur stdDeviation="7" />
            </filter>
            <clipPath id="heroSphereClip">
              <circle cx="130" cy="130" r="112" />
            </clipPath>

            <circle cx="130" cy="130" r="112" fill="url(#heroBubbleBase)" />
            <g clipPath="url(#heroSphereClip)">
              <circle cx="130" cy="130" r="112" fill="url(#heroRimShadow)" />
              <circle cx="130" cy="130" r="112" fill="url(#heroBounceLight)" />
              <circle cx="130" cy="130" r="112" fill="url(#heroTopGlow)" />
              <circle
                cx="130"
                cy="130"
                r="112"
                fill="transparent"
                filter="url(#heroInnerShadow)"
              />
            </g>
            <circle
              cx="130"
              cy="130"
              r="111"
              fill="none"
              stroke="#ffffff"
              strokeOpacity="0.5"
              strokeWidth="1.5"
            />
            <circle
              cx="130"
              cy="130"
              r="112"
              fill="none"
              stroke="#f48fb1"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
            <ellipse
              className="bubble-shine"
              cx="88"
              cy="78"
              rx="42"
              ry="30"
              fill="url(#heroMainHighlight)"
              filter="url(#heroSoftBlurLg)"
            />
            <ellipse
              cx="78"
              cy="66"
              rx="16"
              ry="11"
              fill="#ffffff"
              opacity="0.95"
              filter="url(#heroSoftBlur)"
            />
            <ellipse
              cx="170"
              cy="185"
              rx="14"
              ry="9"
              fill="url(#heroSecondaryHighlight)"
              filter="url(#heroSoftBlur)"
              opacity="0.8"
            />
            <ellipse
              cx="150"
              cy="205"
              rx="46"
              ry="16"
              fill="#ffffff"
              opacity="0.18"
              filter="url(#heroSoftBlurLg)"
            />
          </g>
        </defs>
      </svg>

      {/* Layer 1: Ambient Halo Blob (Warm broken white & subtle primary ambient glow) */}
      <motion.div
        aria-hidden="true"
        style={{
          x: shouldReduceMotion ? 0 : bgSpringX,
          y: shouldReduceMotion ? 0 : bgSpringY,
        }}
        className="absolute -inset-4 sm:-inset-5 v3-blob-bg bg-gradient-to-br from-primary/15 via-white/80 to-surface-2 blur-[3px] pointer-events-none"
      />

      {/* Layer 2: Main Photo Card (Tactile Skeuomorphic 3D Plaque with Physical Bezel & Rim) */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : photoSpringX,
          y: shouldReduceMotion ? 0 : photoSpringY,
        }}
        className="absolute inset-0 overflow-hidden v3-photo bg-white shadow-blob-v3 ring-[2.5px] ring-white/95"
      >
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 45%, #fff0f5 0%, #fff7f9 40%, #ffffff 75%, #f4f2ef 100%)",
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 280px, 360px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            priority={priority}
          />
          {/* Skeuomorphic Glass Specular Lens & Physical Bevel */}
          <div
            className="absolute inset-0 pointer-events-none rounded-[inherit] ring-1 ring-inset ring-white/90 shadow-[inset_0_3px_6px_rgba(255,255,255,0.95),inset_0_-5px_10px_rgba(26,25,23,0.14)]"
            aria-hidden="true"
          />
          {/* Curved Specular Glaze */}
          <div
            className="absolute -top-16 -left-16 w-56 h-56 bg-gradient-to-br from-white/70 via-white/20 to-transparent rounded-full blur-[2px] pointer-events-none opacity-85"
            aria-hidden="true"
          />
          {/* Top Glass Light Sweep */}
          <div
            className="absolute top-0 inset-x-0 h-1/3 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </motion.div>

      {/* Layer 3: 5 Floating 3D Glossy Bubbles */}
      {/* Bubble 1: Top-Left (64px) */}
      <div
        className="bubble-float bubble-shadow z-20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 pointer-events-none"
        style={{
          position: "absolute",
          top: "2%",
          left: "-6%",
          animationDelay: "0s",
        }}
      >
        <svg viewBox="0 0 260 260" className="w-full h-full block overflow-visible">
          <use href="#heroBubbleAsset" />
        </svg>
      </div>

      {/* Bubble 2: Top-Right (34px) */}
      <div
        className="bubble-float bubble-shadow z-20 w-7 h-7 sm:w-8 sm:h-8 md:w-[34px] md:h-[34px] pointer-events-none"
        style={{
          position: "absolute",
          top: "14%",
          right: "0%",
          animationDelay: "0.9s",
        }}
      >
        <svg viewBox="0 0 260 260" className="w-full h-full block overflow-visible">
          <use href="#heroBubbleAsset" />
        </svg>
      </div>

      {/* Bubble 3: Bottom-Left (88px) */}
      <div
        className="bubble-float bubble-shadow z-20 w-16 h-16 sm:w-20 sm:h-20 md:w-[88px] md:h-[88px] pointer-events-none"
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-10%",
          animationDelay: "1.7s",
        }}
      >
        <svg viewBox="0 0 260 260" className="w-full h-full block overflow-visible">
          <use href="#heroBubbleAsset" />
        </svg>
      </div>

      {/* Bubble 4: Bottom-Right (28px) */}
      <div
        className="bubble-float bubble-shadow z-20 w-6 h-6 sm:w-7 sm:h-7 md:w-7 md:h-7 pointer-events-none"
        style={{
          position: "absolute",
          bottom: "2%",
          right: "10%",
          animationDelay: "2.5s",
        }}
      >
        <svg viewBox="0 0 260 260" className="w-full h-full block overflow-visible">
          <use href="#heroBubbleAsset" />
        </svg>
      </div>

      {/* Bubble 5: Middle-Right (46px) */}
      <div
        className="bubble-float bubble-shadow z-20 w-9 h-9 sm:w-10 sm:h-10 md:w-[46px] md:h-[46px] pointer-events-none"
        style={{
          position: "absolute",
          top: "46%",
          right: "-8%",
          animationDelay: "3.3s",
        }}
      >
        <svg viewBox="0 0 260 260" className="w-full h-full block overflow-visible">
          <use href="#heroBubbleAsset" />
        </svg>
      </div>

      {/* Optional Editorial Pill Badge if explicitly provided */}
      {badgeText && (
        <div className="absolute -bottom-2 -right-1 sm:bottom-2 sm:right-0 z-30 pointer-events-none">
          <div className="flex items-center gap-2 bg-surface/95 backdrop-blur-md border border-border-strong px-3 py-1.5 rounded-full shadow-pill transition-transform duration-300 group-hover:scale-105">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="font-mono text-[11px] sm:text-xs font-bold text-text tracking-tight leading-none">
              {t(badgeText)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlobPhotoCard;
