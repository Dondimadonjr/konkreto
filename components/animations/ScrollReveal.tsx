"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-5 scale-[0.985] opacity-0"
      } transition-[opacity,transform] duration-500 ease-out motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
