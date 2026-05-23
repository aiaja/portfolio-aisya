import { ReactNode, CSSProperties } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: "_blank" | "_self";
  download?: boolean;
  icon?: ReactNode;
};

const sizeStyles: Record<string, CSSProperties> = {
  sm: { fontSize: "12px", padding: "6px 16px", gap: "6px" },
  md: { fontSize: "14px", padding: "8px 20px", gap: "8px" },
  lg: { fontSize: "16px", padding: "10px 24px", gap: "8px" },
};

const variantClasses: Record<string, string> = {
  solid: "bg-green-primary text-beige border-2 border-green-primary hover:bg-green-secondary hover:border-green-secondary",
  outline: "bg-transparent text-green-primary border-2 border-green-primary hover:bg-green-primary hover:text-beige",
  ghost: "bg-transparent text-green-primary border-2 border-transparent hover:border-green-primary",
};

const Button = ({
  children,
  href,
  onClick,
  variant = "solid",
  size = "md",
  className = "",
  target,
  download,
  icon,
}: ButtonProps) => {
  const baseClass = [
    "inline-flex items-center justify-center font-semibold rounded-full",
    "transition-all duration-200 no-underline cursor-pointer select-none",
    variantClasses[variant],
    className,
  ].join(" ");

  const inlineStyle: CSSProperties = {
    ...sizeStyles[size],
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        download={download}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={baseClass}
        style={inlineStyle}
      >
        {icon && <span style={{ flexShrink: 0, display: "flex" }}>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClass} style={inlineStyle}>
      {icon && <span style={{ flexShrink: 0, display: "flex" }}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;