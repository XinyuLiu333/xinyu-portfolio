"use client";

import type { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import EssayCard from "./EssayCard";
import FadeIn from "./FadeIn";

const ESSAY_SLUGS = new Set(["ai-human-relationship", "telepathic-technology"]);

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <h2 className="font-serif text-3xl text-text-primary mb-16 text-center">
            Selected Work
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <FadeIn key={project.slug} id={`project-${project.slug}`}>
              {ESSAY_SLUGS.has(project.slug) ? (
                <EssayCard project={project} />
              ) : (
                <ProjectCard project={project} />
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
