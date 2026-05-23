import { ReactNode } from "react";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
  variant?: "green" | "pink" | "beige" | "charcoal" | "pink-light";
};

const variantStyles: Record<string, string> = {
  green: "bg-green-primary text-beige",
  pink: "bg-pink-primary text-beige",
  beige: "bg-beige text-charcoal border border-charcoal/10",
  charcoal: "bg-charcoal text-beige",
  "pink-light": "bg-pink-light text-charcoal",
};

const BentoCard = ({
  children,
  className = "",
  variant = "beige",
}: BentoCardProps) => {
  return (
    <div
      className={`
        rounded-bento p-6 overflow-hidden
        transition-transform duration-300 ease-in-out
        hover:-translate-y-1
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default BentoCard;