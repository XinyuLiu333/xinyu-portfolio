import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import ImageLightbox from "./ImageLightbox";
import { Project } from "@/lib/types";

export default function CaseStudyHero({ project }: { project: Project }) {
  const allExplicit = project.images.length > 0 && project.images.every((img) => img.slot !== undefined);
  const hero = allExplicit ? undefined : project.images[0];

  return (
    <section className="pt-24 pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/#project-${project.slug}`}
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
          {project.duration && <span>{project.duration}</span>}
        </div>
      </div>
      {hero && (
        <ViewTransition name={`hero-${project.slug}`}>
          <figure className="mx-auto max-w-4xl mt-12">
            <ImageLightbox
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              unoptimized={hero.unoptimized}
            >
              <div
                className="rounded-xl overflow-hidden"
                style={{ backgroundColor: project.coverColor }}
              >
                <Image
                  src={hero.src}
                  alt={hero.alt}
                  width={1600}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 896px"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </ImageLightbox>
            {hero.caption && (
              <figcaption className="mt-3 text-sm text-text-muted text-center">
                {hero.caption}
              </figcaption>
            )}
          </figure>
        </ViewTransition>
      )}
    </section>
  );
}
