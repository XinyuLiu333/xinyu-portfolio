import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import ImageLightbox from "@/components/ImageLightbox";

const project = getProjectBySlug("telepathic-technology")!;

export const metadata: Metadata = {
  title: `${project.title} — Xinyu Liu`,
  description: project.description,
};

const IMG_BASE = "/images/projects/telepathic-technology";

const galleryImages = [
  "2165ed_4953b90d065345d6b01420783fb12325.avif",
  "2165ed_5c50ccf8507d4d8ca7c123495b9bd9f0.avif",
  "2165ed_68000855e57e48828540d564165bff39.avif",
  "2165ed_5acba20f47844b77bea54e26d46839e5.avif",
  "2165ed_09a319e06b8347cba4d5a829e48bd57d.avif",
  "2165ed_05ca2197afca45bbb637fe15fe4056e0.avif",
  "2165ed_f1acc8ee9c304265b9e213aba1ae9ddf.avif",
  "2165ed_0314cd9f96054ac9aa0504a04b6835c1.avif",
  "2165ed_fcd0d582833f4c27a2ae8272e57ffd4c.avif",
  "2165ed_0bb18a24a4d0444bacecacd99be3c331.avif",
  "2165ed_29ddfa0601294d8aae824c5392ccfa41.avif",
  "2165ed_07dbf18f294843f6931ff416d19fc4d3.avif",
  "2165ed_3d60b62883c845a1ae020a360735005e.avif",
  "2165ed_c1e0b74488254314aa0f077b7f468168.avif",
  "2165ed_4f3f7aaa3030427c8605d8257b7207d0.avif",
  "2165ed_a25cc98cc4a44accb725e4a05516bc62.avif",
  "2165ed_2ed39c0108634c67a253b1ea405b2b4b.avif",
  "2165ed_6184f633dd544d2ab32e66940f3fe180.avif",
  "2165ed_4eaadc191b13445398c0b7a77dfad195.avif",
  "2165ed_f8164f708168413da4735f5de32ac502.avif",
  "2165ed_ae4cdf11fffb4b629daea451de0383b5.avif",
  "2165ed_ee8c78d411e44e9da645ed2f1ec0a06f.avif",
  "2165ed_35f5ecdf833648a2acb026112d1ed2a0.avif",
  "2165ed_9b701e92e5b042b8b5bd61eaca2cfabd.avif",
  "2165ed_31ab9c0d589645018a154c1c802b1b2c.avif",
  "2165ed_6974971e689445bebb8f26a7804f2484.avif",
  "2165ed_a16e6e5aee3c43a6b229d06911340050.avif",
  "2165ed_34f46665f50a44fa9de52b16e8043b53.avif",
  "2165ed_8ebfd681661e4e4dbd402fcd30f73f12.avif",
  "2165ed_4d63c7dcc8cf4dd286dcf80fddf4a96c.avif",
  "2165ed_78c9c02f0f4f484392dfc3b834f48633.avif",
  "2165ed_9f00df8b113f4b26abaf97b5f734fcdc.avif",
  "2165ed_9b97cc0a363b46eda2d279a7367efa81.avif",
  "2165ed_e333f21c0a4c4455acbefaeebb9541a0.avif",
  "2165ed_9d1cd18f75964d1781886b4b15036f05.avif",
];

const batch1 = galleryImages.slice(0, 6);
const batch2 = galleryImages.slice(6, 14);
const batch3 = galleryImages.slice(14, 22);
const batch4 = galleryImages.slice(22);

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
            alt="Telepathic Technology — project exploration"
          >
            <div className="rounded-lg overflow-hidden bg-bg-card">
              <Image
                src={`${IMG_BASE}/${filename}`}
                alt="Telepathic Technology — project exploration"
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

export default function TelepathicTechnologyPage() {
  return (
    <article>
      <section className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#project-telepathic-technology"
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
            alt="Telepathic Technology — speculative sensing technology exploration"
          >
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: project.coverColor }}>
              <Image
                src={`${IMG_BASE}/hero.avif`}
                alt="Telepathic Technology — speculative sensing technology exploration"
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
              Too often people consider the evolving relationship between humans and technology as leading us away from what makes us human. This project imagined the opposite — technology of the future not elevating us past our nature, but leading us back to our natural environment, allowing us to experience the world in ways we have never seen before.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              The essence of these experiences would be captured and sent wirelessly through devices that connect with our minds.
            </p>
          </section>
        </FadeIn>

        {/* Video */}
        <FadeIn>
          <figure className="mt-12 mb-0">
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: project.coverColor }}>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/OT-rAdUcuWM"
                  title="Telepathic Technology — Project Film"
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

        {/* Gallery batch 1 */}
        <div className="mb-16">
          <ImageGrid images={batch1} columns={3} />
        </div>

        <FadeIn>
          <section className="mb-0">
            <h2 className="font-serif text-2xl text-text-primary mb-8">
              The Premise
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              This multi-disciplinary studio used scenarios and vignettes — filmic portraits that demonstrate, offer the viewer an essence, atmosphere, and possible experience instigated by a designed system — to explore meaningful or emergent social behaviors, exchanges, emotional experiences, and living spaces based upon sensing technologies.
            </p>

            <PullQuote>
              Rarely have designers anticipated the full implications of new technologies on the larger culture, the lives of individuals, or the built environment.
            </PullQuote>

            <p className="text-text-secondary text-base leading-relaxed">
              From the automobile and television to mobile phones and gene sequencers, initial functional intent represents only a small part of the total impact of new technology. In the interest of increasing the potential relevance and impact of new technological capabilities, this project explored and mapped territories of linked social, cultural, and psychological behavior.
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
              The Investigation
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              The objective was to play, reveal, tweak, challenge, interrogate, interpret, abuse, and test the limits of our senses and our adaptive responses to the influence of new technologies.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              The work spanned multiple disciplines — researching sensing technologies, designing speculative products, creating projection mapping installations, filming vignettes, video editing, and designing the final exhibition.
            </p>
          </section>
        </FadeIn>

        {/* Gallery batch 3 */}
        <div className="mt-16 mb-0">
          <ImageGrid images={batch3} />
        </div>

        <SectionDivider />

        <FadeIn>
          <section className="mb-0">
            <h2 className="font-serif text-2xl text-text-primary mb-8">
              Why This Still Matters
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              This project, created over a decade ago, explored questions that are now at the center of AI and sensing technology design: How should technology interact with our senses? When does augmentation enhance rather than diminish the human experience? How do we design for capabilities whose full implications we can&rsquo;t yet anticipate?
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              The same instinct — imagining technology as an invisible medium rather than a destination — runs through all of my work today, from the &ldquo;Air&rdquo; metaphor in my AI-Human Relationship exploration to the push-first intelligence delivery in the Agentic AI strategy.
            </p>
          </section>
        </FadeIn>

        {/* Gallery batch 4 */}
        <div className="mt-16 mb-0">
          <ImageGrid images={batch4} columns={3} />
        </div>

        <div className="flex flex-wrap gap-2 mt-16">
          {["Scenario Design", "Speculative Prototyping", "Projection Mapping", "Film & Vignettes", "Exhibition Design", "Technology Research"].map((skill) => (
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
            href="/#project-telepathic-technology"
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            All Projects
          </Link>
        </nav>
      </div>
    </article>
  );
}
