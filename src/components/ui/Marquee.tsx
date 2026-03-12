type MarqueeProps = {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
};

export default function Marquee({ items, direction = "left", speed = 30 }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left { animation: marquee-left ${speed}s linear infinite; }
        .marquee-right { animation: marquee-right ${speed}s linear infinite; }
      `}</style>
      <div className={`flex w-max gap-3 ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center rounded-full bg-green-primary text-beige text-sm font-medium whitespace-nowrap"
            style={{ padding: "6px 16px" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}