"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";
import useReducedMotion from "@/hooks/useReducedMotion";

export default function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!visible || reduced || !element) return;
    const animation = animate(0, value, {
      duration: 1.35,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (current) => { element.textContent = String(Math.round(current)); },
    });
    return () => {
      animation.stop();
      element.textContent = String(value);
    };
  }, [reduced, value, visible]);

  return <strong aria-label={`${value}${suffix}`}><span ref={ref} aria-hidden="true">{value}</span><span aria-hidden="true">{suffix}</span></strong>;
}
