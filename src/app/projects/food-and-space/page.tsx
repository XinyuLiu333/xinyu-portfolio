import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import ImageLightbox from "@/components/ImageLightbox";

const project = getProjectBySlug("food-and-space")!;

export const metadata: Metadata = {
  title: `${project.title} — Xinyu Liu`,
  description: project.description,
};

const IMG_BASE = "/images/projects/food-and-space";

const heroImage = "2165ed_c141c5deca2d41f89072dd27cf5ecff7.avif";

const galleryImages = [
  "2165ed_f6096ba4c2a44ffc857677830da1e2cb.avif",
  "2165ed_33bca3d4f3dc4b9992b56935803caebe.avif",
  "2165ed_b6123cc291e34fa69b00a8c06e0b1c40.avif",
  "2165ed_6d2575ed4ee64a12834faf2fccef901a.avif",
  "2165ed_9686cb9c58fb490c81a5495ca6d74522.avif",
  "2165ed_6dd03e4a13fe47dba805ca2ff485fb37.avif",
];

const batch1 = galleryImages.slice(0, 3);
const batch2 = galleryImages.slice(3);

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

function ImageGrid({ images, columns = 3 }: { images: string[]; columns?: 2 | 3 }) {
  const gridClass = columns === 3
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
    : "grid grid-cols-1 sm:grid-cols-2 gap-3";

  return (
    <div className={gridClass}>
      {images.map((filename) => (
        <FadeIn key={filename}>
          <ImageLightbox
            src={`${IMG_BASE}/${filename}`}
            alt="Food and Space — exploring micro-worlds in food"
          >
            <div className="rounded-lg overflow-hidden bg-bg-card">
              <Image
                src={`${IMG_BASE}/${filename}`}
                alt="Food and Space — exploring micro-worlds in food"
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

export default function FoodAndSpacePage() {
  return (
    <article>
      <section className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#project-food-and-space"
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
            src={`${IMG_BASE}/${heroImage}`}
            alt="Food and Space — micro-worlds inside food"
          >
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: project.coverColor }}>
              <Image
                src={`${IMG_BASE}/${heroImage}`}
                alt="Food and Space — micro-worlds inside food"
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
            <PullQuote>
              Food can really trigger the imagination.
            </PullQuote>

            <p className="text-text-secondary text-base leading-relaxed mb-6">
              Have you ever tried origami animals made of food paper? Or drinking champagne gas from a balloon? What about straw dining — sucking your food up from dishes hidden under the tabletop, turning dinner into a whole new experience?
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              People always enjoy eating food, but they never notice the micro-space and beauty inside food, and rarely play with it. This project let imagination go wild — creating a guidebook to fun food experiences that reveal the hidden worlds in what we eat every day.
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
              Seeing What We Overlook
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              Using stop motion and film, the project zoomed into the textures, structures, and colors of food at a scale we normally ignore — revealing architecture in a slice of bread, landscapes in a cross-section of fruit, and playful narratives in everyday ingredients.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              The work was as much about the craft of observation as it was about food. Stop motion demanded patience and precision — each frame a deliberate composition, each transition a small discovery.
            </p>
          </section>
        </FadeIn>

        {/* Gallery batch 2 */}
        <div className="mt-16 mb-0">
          <ImageGrid images={batch2} />
        </div>

        <SectionDivider />

        <FadeIn>
          <section className="mb-0">
            <h2 className="font-serif text-2xl text-text-primary mb-8">
              Why This Still Matters
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              This project trained a way of seeing — the habit of looking closely at familiar things and finding something unexpected. That same instinct shows up in every product I design today: noticing the micro-interactions that others skip, the small moments of delight or friction that shape how a product <em>feels</em>.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Design at its best is about making people notice what they&rsquo;ve been overlooking — whether it&rsquo;s the hidden space inside food or the hidden potential in how they work.
            </p>
          </section>
        </FadeIn>

        <div className="flex flex-wrap gap-2 mt-16">
          {["Stop Motion", "Filming", "Video Editing", "Food Design", "Micro Photography", "Experiential Design"].map((skill) => (
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
            href="/#project-food-and-space"
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            All Projects
          </Link>
        </nav>
      </div>
    </article>
  );
}
