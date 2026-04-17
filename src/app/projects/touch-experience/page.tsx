import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProjectBySlug } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import ImageLightbox from "@/components/ImageLightbox";

const project = getProjectBySlug("touch-experience")!;

export const metadata: Metadata = {
  title: `${project.title} — Xinyu Liu`,
  description: project.description,
};

const IMG_BASE = "/images/projects/touch-experience";

const galleryImages = [
  "2165ed_086d00b15f6d493c9404453cd8b63bc3.avif",
  "2165ed_8722a54774d84007af83c8eb0cf2ac3e.avif",
  "2165ed_7763a4e040c04b08947e2a7df5928158.avif",
  "2165ed_f88e5abb3faf44dfb3507a942e81f0c5.avif",
  "2165ed_a8819b7ec74742c78d7e8e59653f5acc.avif",
  "2165ed_1e7553bd8a7446c2957982099ac83f7c.avif",
  "2165ed_428b973c410e44edb8b13916f77f7bba.avif",
  "2165ed_1038b8ac1b9c4c6982bb64a1c62ade1c.avif",
  "2165ed_30a43ff9a5f04ffb97f1015be1253752.avif",
  "2165ed_76f55f4acd0041229ca95d8adfe21c2f.avif",
  "2165ed_8031b1ea452546bf8a85ee5b7add8cd6.avif",
  "2165ed_240ab449291c4688b496a0bf6acfc0a9.avif",
  "2165ed_d3ec1532f7f9425f86c7fd2ab7ff1f1e.avif",
  "2165ed_f7e3f3d17a584ec797b98645304ef664.avif",
  "2165ed_717606c0306844429553893840dd3f53.avif",
  "2165ed_a464effea42b4c50b3cd25904340b1fb.avif",
  "2165ed_f54ca015297e404499d912710b025f51.avif",
  "2165ed_02e894556660462a9ba98cc9f4032313.avif",
  "2165ed_533db0bbd0c54282b801059bf033d52e.avif",
];

const batch1 = galleryImages.slice(0, 4);
const batch2 = galleryImages.slice(4, 10);
const batch3 = galleryImages.slice(10, 15);
const batch4 = galleryImages.slice(15);

const thesisImages = [
  "2165ed_93b484028a6c45bcad9149470e47d5b4.avif",
  "2165ed_54b973f5e2bf48f4872d34f284bf67b8.avif",
  "2165ed_03368c084f984ffdab1046b5a2617320.avif",
  "2165ed_11259ff2d0db40b48a9f87b420c8f955.avif",
  "2165ed_c1a9e08c2a1c4413b9037e7c03a5190e.avif",
  "2165ed_639707dc807d429e882c63dd0441d31a.avif",
  "2165ed_649b7daad6814307b0778e5aeb403e21.avif",
  "2165ed_55f6f9dc4f134d7c87eb511184bb15e7.avif",
  "2165ed_c1d9185d27d54ea38345a686c8db03e1.avif",
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
            alt="Touch Experience — exploring physical touch"
          >
            <div className="rounded-lg overflow-hidden bg-bg-card">
              <Image
                src={`${IMG_BASE}/${filename}`}
                alt="Touch Experience — exploring physical touch"
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

export default function TouchExperiencePage() {
  return (
    <article>
      <section className="pt-24 pb-16 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/#project-touch-experience"
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
            alt="Touch Experience — exploring physical touch as human communication"
          >
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: project.coverColor }}>
              <Image
                src={`${IMG_BASE}/hero.avif`}
                alt="Touch Experience — exploring physical touch as human communication"
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
              I have been exploring the effect of physical touch since 2012. Thinking about 30 years ago, we exchanged information and expressed emotions by face-to-face chatting or writing letters. We cherished every possibility of communication and connection with others.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Nowadays, global internet makes everything so fast and so easy. We don&rsquo;t appreciate the connection, and we don&rsquo;t have deep contact with others anymore.
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
              The Mother of Senses
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              Physical contact is one of the most effective ways of communication. Even though we used to be so familiar with touch as we were with breathing, it&rsquo;s often downplayed or disregarded — even within such fields as the history of the body or the history of medicine.
            </p>

            <PullQuote>
              Human skin is the oldest and the most sensitive of our organs, our first medium of communication, and our most efficient protector. Touch is the parent of our eyes, ears, nose and mouth — the mother of senses.
            </PullQuote>

            <p className="text-text-secondary text-base leading-relaxed">
              Each owner of a human body is necessarily bound up in the physical. For me, the most exciting aspect of touch is that it is so broadly related to our culture, history, individual personality, human community, sensitive feelings, humanity, sociology, psychology, emotions, biological effects, and our relationship with other species.
            </p>
          </section>
        </FadeIn>

        {/* Gallery batch 2 */}
        <div className="mt-16 mb-0">
          <ImageGrid images={batch2} columns={3} />
        </div>

        <SectionDivider />

        <FadeIn>
          <section className="mb-0">
            <h2 className="font-serif text-2xl text-text-primary mb-8">
              Touch as Language
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              I see touch not only as a special form of meaningful language, connection, and interaction, but also as a representation of the human being — one which effects profoundly in human society and the larger world.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              In a world increasingly mediated by screens, this exploration asked a fundamental question: what do we lose when we replace embodied presence with digital proximity? And how might we design technology that restores, rather than replaces, the depth of physical human connection?
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
              Molding Life — Graduate Thesis
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              This body of research culminated in my RISD graduate thesis and installation, <em>Molding Life</em>. The thesis extended the inquiry from touch into a broader question about human senses and mortality.
            </p>

            <PullQuote>
              Our physical bodies are limited and impermanent. But our senses are boundless, rich, and even immortal. Our senses are the extension of our physical bodies.
            </PullQuote>

            <p className="text-text-secondary text-base leading-relaxed mb-6">
              The smell, touch, and impression you leave on people could affect them for a long period of time — or even their whole life. In our day-to-day existence, we often send information out in multiple ways we may not notice. We affect other lives, and others affect us in the same ways.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              The installation explored how developing technologies have changed human existence — and how the sensory traces we leave behind persist far beyond the physical encounter itself.
            </p>
          </section>
        </FadeIn>

        {/* Thesis installation images */}
        <div className="mt-16 mb-0">
          <ImageGrid images={thesisImages} columns={3} />
        </div>

        {/* Gallery batch 4 */}
        <div className="mt-6 mb-0">
          <ImageGrid images={batch4} />
        </div>

        <SectionDivider />

        <FadeIn>
          <section className="mb-0">
            <h2 className="font-serif text-2xl text-text-primary mb-8">
              Why This Still Matters
            </h2>
            <p className="text-text-secondary text-base leading-relaxed mb-6">
              This early research into touch and embodied interaction planted a seed that runs through all of my work — the conviction that great design is about what people <em>feel</em>, not just what they accomplish. Whether it&rsquo;s the warmth of an AI agent&rsquo;s tone, the trust a clinician feels using a CRM, or the subtle friction that tells a user they&rsquo;re in control — the sensory and emotional layer is what makes people stay.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              The question I asked in 2012 — <em>how does touch shape human connection?</em> — evolved into the question I ask today: <em>how does the feeling of a product shape whether people trust it?</em>
            </p>
          </section>
        </FadeIn>

        <div className="flex flex-wrap gap-2 mt-16">
          {["Sensory Research", "Cultural Analysis", "Embodied Design", "Installation Art", "Thesis Research", "Exhibition Design"].map((skill) => (
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
            href="/#project-touch-experience"
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            All Projects
          </Link>
        </nav>
      </div>
    </article>
  );
}
