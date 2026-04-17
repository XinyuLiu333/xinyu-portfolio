import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import ImageLightbox from "@/components/ImageLightbox";

const project = getProjectBySlug("sensory-connection")!;

export const metadata: Metadata = {
  title: `${project.title} — Xinyu Liu`,
  description: project.description,
};

const IMG_BASE = "/images/projects/sensory-connection";

const galleryImages = [
  "2165ed_39747028ebad488cba32eddf970b5e6d.avif",
  "2165ed_d0978f3c245e49ffbb713a2325c4ff8e.avif",
  "2165ed_67480e820ea84603b4e1a24f8cf6c406.avif",
];

function SectionDivider() {
  return <hr className="my-20 border-t border-border" />;
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 border-l-2 border-text-muted/30 pl-6">
      <p className="font-serif text-xl sm:text-2xl text-text-primary leading-relaxed italic">
        {children}
      </p>
    </blockquote>
  );
}

export default function SensoryConnectionPage() {
  return (
    <article>
      <section className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#project-sensory-connection"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text-primary transition-colors mb-12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </Link>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-text-muted border border-border rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-text-primary leading-tight mb-4">
            {project.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-text-secondary">
            <span>{project.company}</span>
            <span>{project.year}</span>
            <span>{project.role}</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <FadeIn>
        <figure className="mx-auto max-w-4xl px-6">
          <ImageLightbox
            src={`${IMG_BASE}/hero.jpg`}
            alt="Sensory Connection — physical touch as first language"
          >
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: project.coverColor }}>
              <Image
                src={`${IMG_BASE}/hero.jpg`}
                alt="Sensory Connection — physical touch as first language"
                width={1600}
                height={900}
                sizes="(max-width: 768px) 100vw, 896px"
                className="w-full h-auto"
                priority
              />
            </div>
          </ImageLightbox>
        </figure>
      </FadeIn>

      <div className="mx-auto max-w-3xl px-6 py-8">
        <FadeIn>
          <section className="mb-0 mt-12">
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              This collaborative project explored physical human touch in the context of a high-tech society where we are no longer using touch to connect with each other.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Touch is the first language we learn as infants and we use it for instinctive creation of bonds with other people. On a subconscious level, the more we touch someone, the more we feel connected to them — and so the more we trust them.
            </p>
          </section>
        </FadeIn>

        {/* Video */}
        <FadeIn>
          <figure className="mt-12 mb-0">
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: project.coverColor }}>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/-IJ0zQVIU2U"
                  title="Sensory Connection — Project Film"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </figure>
        </FadeIn>

        <SectionDivider />

        <FadeIn>
          <section className="mb-0">
            <h2 className="font-serif text-2xl text-text-primary mb-8">
              Old-Fashioned Bonds, New Forms
            </h2>

            <PullQuote>
              Touch is the first language we learn as infants. The more we touch someone, the more we feel connected to them — and the more we trust them.
            </PullQuote>

            <p className="text-text-secondary text-base leading-relaxed mb-6">
              I wanted to explore the old-fashioned kind of bonds created between people and new forms of language, communication, and interaction. How could technology — the very force that has distanced us from physical contact — be used to bring us back to embodied connection?
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Using Processing for interactive visualization and Arduino for physical sensing, the project prototyped experiences that translate touch into visible, shareable digital form — making the invisible bonds of physical contact tangible and persistent.
            </p>
          </section>
        </FadeIn>

        {/* Gallery */}
        <div className="mt-16 mb-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {galleryImages.map((filename) => (
              <FadeIn key={filename}>
                <ImageLightbox
                  src={`${IMG_BASE}/${filename}`}
                  alt="Sensory Connection — project exploration"
                >
                  <div className="rounded-lg overflow-hidden bg-bg-card">
                    <Image
                      src={`${IMG_BASE}/${filename}`}
                      alt="Sensory Connection — project exploration"
                      width={800}
                      height={600}
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="w-full h-auto"
                    />
                  </div>
                </ImageLightbox>
              </FadeIn>
            ))}
          </div>
        </div>

        <SectionDivider />

        <FadeIn>
          <section className="mb-0">
            <h2 className="font-serif text-2xl text-text-primary mb-8">
              Why This Still Matters
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              This project was an early experiment in what I now think of as the core design challenge: making invisible human dynamics visible and actionable. The same instinct — sensing something intangible and giving it form — appears in my later work designing AI agents that need to earn trust, CRM systems that surface relationship health, and interaction patterns where the emotional layer is as important as the functional one.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              The tools have changed from Arduino to language models, but the question remains: how do you design for the connection between people, not just the transaction?
            </p>
          </section>
        </FadeIn>

        <div className="flex flex-wrap gap-2 mt-16">
          {["Processing", "Arduino", "Physical Computing", "Filming", "Video Editing", "Interactive Prototyping"].map((skill) => (
            <span
              key={skill}
              className="text-xs font-mono text-text-muted border border-border rounded-full px-3 py-1"
            >
              {skill}
            </span>
          ))}
        </div>

        <nav className="mt-16 flex items-center justify-center">
          <Link
            href="/#project-sensory-connection"
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            All Projects
          </Link>
        </nav>
      </div>
    </article>
  );
}
