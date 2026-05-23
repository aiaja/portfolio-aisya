type BadgeProps = {
  label: string;
  variant?: "green" | "pink" | "charcoal" | "outline";
  size?: "sm" | "md";
};

const variantStyles: Record<string, string> = {
  green: "bg-green-primary text-beige",
  pink: "bg-pink-primary text-beige",
  charcoal: "bg-charcoal text-beige",
  outline: "bg-transparent text-green-primary border border-green-primary",
};

const sizeStyles: Record<string, string> = {
  sm: "text-xs px-2.5 py-0.5",
  md: "text-xs px-3 py-1",
};

const Badge = ({ label, variant = "green", size = "md" }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center font-medium rounded-full whitespace-nowrap ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {label}
    </span>
  );
};

export default Badge;