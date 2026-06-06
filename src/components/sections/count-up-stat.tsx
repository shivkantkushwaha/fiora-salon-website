"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  value: number;
  label: string;
  suffix?: string;
};

export function CountUpStat({ value, label, suffix = "" }: CountUpStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    const duration = 1800;
    const start = performance.now();

    let animationFrame = 0;

    const frame = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(frame);
      }
    };

    animationFrame = requestAnimationFrame(frame);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="border border-[var(--luxury-gold)]/28 bg-white px-5 py-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.07)]"
    >
      <p className="luxury-heading text-5xl font-semibold text-[var(--luxury-black)] sm:text-6xl">
        {count.toLocaleString("en-IN")}
        {suffix}
      </p>
      <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--luxury-gold-deep)]">
        {label}
      </p>
    </motion.div>
  );
}
