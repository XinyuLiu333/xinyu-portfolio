import { ViewTransition } from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-16">
      <ViewTransition name="hero-intro">
        <div className="max-w-2xl text-center">
          <p className="text-sm tracking-widest uppercase text-text-muted mb-6">
            Portfolio
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal text-text-primary leading-tight mb-6">
            Xinyu Liu
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-4">
            Principal Experience Designer
          </p>
          <p className="text-base text-text-muted leading-relaxed max-w-lg mx-auto mb-12">
            10+ years designing enterprise and healthcare products.
            <br />
            From vision to global scale.
          </p>
          <a
            href="#projects"
            className="inline-flex flex-col items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            View Selected Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-bounce"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </ViewTransition>
    </section>
  );
}
