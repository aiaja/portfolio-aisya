import React from "react";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "w-full rounded-[12px] overflow-hidden bg-white border border-[#d2cdc5] shadow-[0_2px_4px_rgba(26,25,23,0.06),0_12px_28px_-8px_rgba(26,25,23,0.2),inset_0_1px_0_0_rgba(255,255,255,0.9)] flex flex-col select-none",
        className
      )}
    >
      {/* Skeuomorphic Traffic Light Chrome Bar */}
      <div className="bg-gradient-to-b from-[#f3f0ea] to-[#e4e0d7] px-3 py-2 flex items-center gap-1.5 border-b border-[#d2cdc5]/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] select-none">
        <span className="w-[8px] h-[8px] rounded-full bg-gradient-to-b from-[#ff7a6e] to-[#e2463f] block border border-[#c83730] shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.7),0_1px_1.5px_rgba(0,0,0,0.25)]" />
        <span className="w-[8px] h-[8px] rounded-full bg-gradient-to-b from-[#ffd359] to-[#f4be38] block border border-[#d6a120] shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.7),0_1px_1.5px_rgba(0,0,0,0.25)]" />
        <span className="w-[8px] h-[8px] rounded-full bg-gradient-to-b from-[#56db68] to-[#34c749] block border border-[#279f38] shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.7),0_1px_1.5px_rgba(0,0,0,0.25)]" />
      </div>

      {/* Screen Area (16/10.5 consistent aspect ratio with inset display bevel) */}
      <div className="w-full aspect-[16/10.5] overflow-hidden relative bg-white shadow-[inset_0_1px_3px_rgba(0,0,0,0.08)]">
        {children}
      </div>
    </div>
  );
};

export default BrowserFrame;
