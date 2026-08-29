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
        "h-full aspect-[9/18.5] rounded-[26px] bg-[#111111] p-2 shadow-[0_14px_30px_-10px_rgba(26,25,23,0.30),0_0_0_1px_rgba(0,0,0,0.12)] flex flex-col items-center relative overflow-hidden select-none",
        className
      )}
    >
      {/* Notch */}
      <div className="w-[60px] h-3.5 bg-[#111111] rounded-b-[10px] mx-auto relative top-0 z-20" />

      {/* Screen Area (9/18.5 aspect ratio) */}
      <div className="w-full h-full rounded-[18px] overflow-hidden bg-white -mt-3.5 relative">
        {children}
      </div>
    </div>
  );
};

export default PhoneFrame;
