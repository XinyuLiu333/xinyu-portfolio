"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

export default function FadeIn({ children, id }: { children: ReactNode; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"hidden" | "instant" | "animate">("hidden");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (inViewport) {
      setState("instant");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("animate");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id={id}
      className={
        state === "hidden"
          ? "opacity-0 translate-y-6"
          : state === "instant"
            ? "opacity-100 translate-y-0"
            : "opacity-100 translate-y-0 transition-all duration-700 ease-out"
      }
    >
      {children}
    </div>
  );
}
