"use client";

import { ReactNode, MouseEvent } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "none" | "sm" | "md" | "lg";
type ButtonPadding = "none" | "sm" | "md" | "lg";

interface ButtonProps {
 children: ReactNode;
 variant?: ButtonVariant;
 size?: ButtonSize;
 padding?: ButtonPadding;
 className?: string;
 icon?: ReactNode;
 iconPosition?: "left" | "right";
 href?: string;
 external?: boolean;
 onClick?: (e: MouseEvent) => void;
 disabled?: boolean;
 type?: "button" | "submit" | "reset";
 "aria-label"?: string;
 "aria-expanded"?: boolean;
}

const Button = ({
 children,
 variant = "primary",
 size = "md",
 padding,
 className,
 icon,
 iconPosition = "right",
 href,
 external,
 onClick,
 ...props
}: ButtonProps) => {
 const baseStyles = "inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all duration-300 active:scale-95 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none no-underline cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

 const variants = {
  primary: "bg-primary text-white shadow-lg shadow-primary/20 hover:opacity-90",
  secondary: "bg-surface-2 text-text border border-border-strong hover:bg-surface-3",
  outline: "border border-border-strong text-muted hover:border-text hover:text-text",
  ghost: "text-primary border border-primary/20 hover:bg-primary-10",
 };

 const sizes = {
  none: "",
  sm: "px-5 py-2 text-[12px]",
  md: "px-8 py-3.5 text-sm",
  lg: "px-10 py-4 text-base",
 };

 const paddings = {
  none: "p-0",
  sm: "p-2",
  md: "p-4",
  lg: "p-6",
 };

 // Explicit padding prop overrides size-based padding
 const activePadding = padding ? paddings[padding] : sizes[size];

 const content = (
  <>
   {icon && iconPosition === "left" && icon}
   {children}
   {icon && iconPosition === "right" && icon}
  </>
 );

 const combinedClassName = cn(baseStyles, variants[variant], activePadding, className);

 if (href) {
  const isExternal = external || href.startsWith("http") || href.startsWith("mailto:");
  
  if (isExternal) {
   return (
    <a
     href={href}
     className={combinedClassName}
     target={isExternal ? "_blank" : undefined}
     rel={isExternal ? "noopener noreferrer" : undefined}
     onClick={onClick}
     {...(props as any)}
    >
     {content}
    </a>
   );
  }

  return (
   <Link href={href} className={combinedClassName} onClick={onClick} {...(props as any)}>
    {content}
   </Link>
  );
 }

 return (
  <button 
   className={combinedClassName} 
   onClick={onClick} 
   type={props.type || "button"}
   {...(props as any)}
  >
   {content}
  </button>
 );
};

export default Button;

