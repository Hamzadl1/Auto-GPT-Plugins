"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function CountUp({
  target,
  suffix = "",
  duration = 1.8,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut" as const,
      onUpdate(value) {
        setDisplay(Math.round(value).toLocaleString("fr-FR"));
      },
    });

    return () => controls.stop();
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
