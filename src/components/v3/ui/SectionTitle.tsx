type SectionTitleProps = {
 label: string;
 title: string;
 align?: "left" | "center";
};

const SectionTitle = ({ label, title, align = "left" }: SectionTitleProps) => {
 return (
  <div className={`mb-8 ${align === "center" ? "text-center" : "text-left"}`}>
   <span className="inline-block text-pink-primary text-xs font-semibold tracking-widest uppercase mb-2">
    {label}
   </span>
   <h2 className="text-charcoal text-3xl md:text-4xl font-bold leading-tight">
    {title}
   </h2>
  </div>
 );
};

export default SectionTitle;
