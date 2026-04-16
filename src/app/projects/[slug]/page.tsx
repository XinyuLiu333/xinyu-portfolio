import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import CaseStudyHero from "@/components/CaseStudyHero";
import CaseStudySection from "@/components/CaseStudySection";
import CaseStudyImages from "@/components/CaseStudyImages";
import Link from "next/link";
import type { Metadata } from "next";
import { bustImageCache } from "@/lib/image-cache-bust";
import type { Project } from "@/lib/types";

type Params = Promise<{ slug: string }>;

function freshImages(project: Project): Project {
  return {
    ...project,
    images: project.images.map((img) => ({
      ...img,
      src: bustImageCache(img.src),
    })),
  };
}

export async function generateStaticParams() {
  return projects.filter((p) => p.content).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Xinyu Liu`,
    description: project.description,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const rawProject = getProjectBySlug(slug);

  if (!rawProject || !rawProject.content) {
    notFound();
  }

  const project = freshImages(rawProject) as typeof rawProject & { content: NonNullable<typeof rawProject.content> };

  const allWithContent = projects.filter((p) => p.content);
  const currentIndex = allWithContent.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? allWithContent[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allWithContent.length - 1
      ? allWithContent[currentIndex + 1]
      : null;

  const allExplicit = project.images.length > 0 && project.images.every((img) => img.slot !== undefined);
  const inlineImages = allExplicit ? project.images : project.images.slice(1);
  const imageSlots = distributeImages(inlineImages);

  return (
    <article>
      <CaseStudyHero project={project} />
      <div className="mx-auto max-w-3xl px-6 py-8">
        <CaseStudySection
          title="Overview"
          paragraphs={[project.content.overview]}
        />

        {project.content.liveLinks && project.content.liveLinks.length > 0 && (
          <div className="mb-16 flex flex-wrap gap-3">
            {project.content.liveLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium border border-text-primary text-text-primary rounded-full hover:bg-text-primary hover:text-bg-primary transition-colors"
              >
                {link.label}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </a>
            ))}
          </div>
        )}

        {imageSlots[0].length > 0 && (
          <CaseStudyImages images={imageSlots[0]} coverColor={project.coverColor} />
        )}

        <CaseStudySection title="Problem" paragraphs={project.content.problem} />
        {imageSlots[1].length > 0 && (
          <CaseStudyImages images={imageSlots[1]} coverColor={project.coverColor} />
        )}

        <CaseStudySection title="Process" paragraphs={project.content.process} />
        {imageSlots[2].length > 0 && (
          <CaseStudyImages images={imageSlots[2]} coverColor={project.coverColor} />
        )}

        <CaseStudySection
          title="Solution"
          paragraphs={project.content.solution}
        />
        {imageSlots[3].length > 0 && (
          <CaseStudyImages images={imageSlots[3]} coverColor={project.coverColor} />
        )}

        <CaseStudySection title="Impact" paragraphs={project.content.impact} />

        <nav className="mt-16 pt-8 border-t border-border flex items-center justify-between">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              &larr; {prevProject.title}
            </Link>
          ) : (
            <span />
          )}
          <Link
            href={`/#project-${slug}`}
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            All Projects
          </Link>
          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              {nextProject.title} &rarr;
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </article>
  );
}

import { ProjectImage } from "@/lib/types";

/**
 * Distribute inline images across 4 slots (after Overview, Problem, Process, Solution).
 * Images with an explicit `slot` field are placed directly; remaining images are
 * distributed sequentially — first 3 to slots 0-2, all extras to slot 3 (Solution).
 */
function distributeImages(images: ProjectImage[]): [ProjectImage[], ProjectImage[], ProjectImage[], ProjectImage[]] {
  const slots: [ProjectImage[], ProjectImage[], ProjectImage[], ProjectImage[]] = [[], [], [], []];

  const explicit = images.filter((img) => img.slot !== undefined);
  const auto = images.filter((img) => img.slot === undefined);

  for (const img of explicit) {
    slots[img.slot!].push(img);
  }

  const n = auto.length;
  if (n <= 4) {
    auto.forEach((img, i) => slots[i].push(img));
  } else {
    slots[0].push(auto[0]);
    slots[1].push(auto[1]);
    slots[2].push(auto[2]);
    for (let i = 3; i < n; i++) {
      slots[3].push(auto[i]);
    }
  }

  return slots;
}
