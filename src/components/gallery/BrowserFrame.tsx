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
        "w-full rounded-[10px] overflow-hidden bg-white dark:bg-surface border border-border shadow-[0_12px_28px_-10px_rgba(26,25,23,0.25)] flex flex-col",
        className
      )}
    >
      {/* Traffic light chrome bar */}
      <div className="bg-[#efece7] dark:bg-surface-2 px-2.5 py-2 flex items-center gap-1.5 border-b border-border/40 select-none">
        <span className="w-[7px] h-[7px] rounded-full bg-[#ec6a5e] block shadow-xs" />
        <span className="w-[7px] h-[7px] rounded-full bg-[#f4bf4f] block shadow-xs" />
        <span className="w-[7px] h-[7px] rounded-full bg-[#61c454] block shadow-xs" />
      </div>

      {/* Screen Area (16/10.5 consistent aspect ratio) */}
      <div className="w-full aspect-[16/10.5] overflow-hidden relative bg-white">
        {children}
      </div>
    </div>
  );
};

export default BrowserFrame;
