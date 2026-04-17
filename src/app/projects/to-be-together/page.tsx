import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import ImageLightbox from "@/components/ImageLightbox";

const project = getProjectBySlug("to-be-together")!;

export const metadata: Metadata = {
  title: `${project.title} — Xinyu Liu`,
  description: project.description,
};

const IMG_BASE = "/images/projects/to-be-together";

const galleryImages = [
  "2165ed_4043dfb4961f437591c233f7f13deec9.avif",
  "2165ed_059206f4781946ddab0c5435ad2edbc6.avif",
  "2165ed_1bca655801ba4d47b6eca71b8ead6142.avif",
  "2165ed_2f90cf44594e40a59e00436852885011.avif",
  "2165ed_77754174dd324ff191888db334ba5baf.avif",
  "2165ed_34545549c98f4566ad250701cdadb6c4.avif",
  "2165ed_2aaf649d58714c169eb312e9eeff62ed.avif",
  "2165ed_5fde1b4245014d908714113b27bec5a3.avif",
  "2165ed_7c2e98ace4f6485d87b987632ec82ede.avif",
  "2165ed_9e5ada779057400d9fbd11596310e2fa.avif",
  "2165ed_75c757d66a35410ba2c6975e04f70cd4.avif",
  "2165ed_c2bb8f7baf684bd0a9c7d79df4324370.avif",
  "2165ed_883cccaf34854c5e9fc1177cd9cbd208.avif",
  "2165ed_aff51996da8644c1a23ec82b8fddcdc7.avif",
  "2165ed_4bec4e910f9a49d996a7faf119d1c267.avif",
  "2165ed_10d601012b15482fa4ea575edd7a87e1.avif",
  "2165ed_60bba238ca18408ebc975cf2aa64f5fc.avif",
  "2165ed_cd85e1096d374d068fd6c6831271d2bc.avif",
  "2165ed_b75de5d7b32a4e568e4a07eff8f66a21.avif",
  "2165ed_0aa5729fc6a044ba856b7756602cdf47.avif",
];

const batch1 = galleryImages.slice(0, 4);
const batch2 = galleryImages.slice(4, 10);
const batch3 = galleryImages.slice(10, 16);
const batch4 = galleryImages.slice(16);

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

function ImageGrid({ images, columns = 2 }: { images: string[]; columns?: 2 | 3 }) {
  const gridClass = columns === 3
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
    : "grid grid-cols-1 sm:grid-cols-2 gap-3";

  return (
    <div className={gridClass}>
      {images.map((filename) => (
        <FadeIn key={filename}>
          <ImageLightbox
            src={`${IMG_BASE}/${filename}`}
            alt="To Be Together — designing for human connection"
          >
            <div className="rounded-lg overflow-hidden bg-bg-card">
              <Image
                src={`${IMG_BASE}/${filename}`}
                alt="To Be Together — designing for human connection"
                width={800}
                height={600}
                sizes={columns === 3 ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : "(max-width: 640px) 100vw, 50vw"}
                className="w-full h-auto"
              />
            </div>
          </ImageLightbox>
        </FadeIn>
      ))}
    </div>
  );
}

export default function ToBeTogetherPage() {
  return (
    <article>
      <section className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#project-to-be-together"
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
            src={`${IMG_BASE}/hero.avif`}
            alt="To Be Together — designing for human connection on campus"
          >
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: project.coverColor }}>
              <Image
                src={`${IMG_BASE}/hero.avif`}
                alt="To Be Together — designing for human connection on campus"
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
              As more and more technology applications enter campus life, they create growing communication limitations for college students. Connection increasingly depends on networks, which not only reduces the quality of real human contact but also brings psychological strain.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Through research, I found that campus environments cannot satisfy students&rsquo; communication desires, and campuses lack interesting, functional activities and communication forms. The student background difference is not the fundamental barrier to connection — it&rsquo;s the sensitive, impulsive student personality paired with an environment that offers no right space for expression.
            </p>
          </section>
        </FadeIn>

        {/* Gallery batch 1 */}
        <div className="mt-12 mb-0">
          <ImageGrid images={batch1} />
        </div>

        <SectionDivider />

        <FadeIn>
          <section className="mb-0">
            <h2 className="font-serif text-2xl text-text-primary mb-8">
              The Concept of Emptiness
            </h2>

            <PullQuote>
              The very important reason for lacking effective communication is not background difference — it&rsquo;s that campus environments offer no right space for people willing to express themselves.
            </PullQuote>

            <p className="text-text-secondary text-base leading-relaxed mb-6">
              Against these findings, I put forward the concept of &ldquo;emptiness&rdquo; — designing spaces and moments that strip away the noise of digital mediation and create conditions for genuine, in-person encounter.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              The project approached this from two perspectives: psychology — understanding the emotional barriers and impulses that prevent students from connecting — and environment — redesigning the physical campus to invite the kind of spontaneous, meaningful interaction that technology has displaced.
            </p>
          </section>
        </FadeIn>

        {/* Gallery batch 2 */}
        <div className="mt-16 mb-0">
          <ImageGrid images={batch2} columns={3} />
        </div>

        {/* Gallery batch 3 */}
        <div className="mt-6 mb-0">
          <ImageGrid images={batch3} columns={3} />
        </div>

        <SectionDivider />

        <FadeIn>
          <section className="mb-0">
            <h2 className="font-serif text-2xl text-text-primary mb-8">
              Why This Still Matters
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              This was one of my earliest projects to combine rigorous research — questionnaires, psychology literature, in-person interviews — with design concept development. The methodology I built here became foundational: start with the human need, understand the systemic barriers, then propose an intervention.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              The core insight — that people <em>want</em> to connect but the environment doesn&rsquo;t support it — echoes through my later work. Whether designing AI agents that encourage trust, CRM tools that support relationship-building, or health apps that sustain engagement, the pattern is the same: design the conditions for connection, not just the tool.
            </p>
          </section>
        </FadeIn>

        {/* Gallery batch 4 */}
        <div className="mt-16 mb-0">
          <ImageGrid images={batch4} />
        </div>

        <div className="flex flex-wrap gap-2 mt-16">
          {["User Research", "Questionnaire Design", "Psychology Research", "Product Design", "3D Modeling", "Filming"].map((skill) => (
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
            href="/#project-to-be-together"
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            All Projects
          </Link>
        </nav>
      </div>
    </article>
  );
}
