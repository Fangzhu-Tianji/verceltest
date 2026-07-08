import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/home";

function AnimatedNumber({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplay(value);
              clearInterval(timer);
            } else {
              setDisplay(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-serif font-bold text-gold-500">
      {display}
      <span className="text-2xl">{suffix}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 md:py-28 bg-navy-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animate-[fadeInUp_0.8s_ease-out]"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: "both" }}
            >
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-white/50 mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}