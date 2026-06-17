type SectionTitleProps = {
  label: string;
  title: string;
  align?: "left" | "center";
};

const SectionTitle = ({ label, title, align = "left" }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      <span className="inline-block text-subtle text-[11px] font-medium tracking-[0.12em] uppercase mb-3">
        {label}
      </span>
      <h2 className="text-text font-syne text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
