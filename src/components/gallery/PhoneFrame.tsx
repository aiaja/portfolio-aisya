import React from "react";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-full aspect-[9/18.5] rounded-[30px] bg-gradient-to-b from-[#2d2d2d] via-[#1c1c1c] to-[#0f0f0f] p-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.28),0_16px_34px_-8px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08)] flex flex-col items-center relative overflow-hidden select-none",
        className
      )}
    >
      {/* Skeuomorphic Dynamic Island / Speaker Pill */}
      <div className="w-[64px] h-4 bg-gradient-to-b from-[#181818] to-[#080808] rounded-full mx-auto relative top-0 z-20 shadow-[inset_0_1px_0.5px_rgba(255,255,255,0.2),0_1px_3px_rgba(0,0,0,0.6)] flex items-center justify-center">
        <span className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/10 block shadow-[inset_0_0.5px_1px_rgba(255,255,255,0.3)] ml-auto mr-2" />
      </div>

      {/* Screen Area (9/18.5 aspect ratio with inset glass shadow) */}
      <div className="w-full h-full rounded-[22px] overflow-hidden bg-white -mt-4 relative shadow-[inset_0_1.5px_3.5px_rgba(0,0,0,0.2)]">
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;
