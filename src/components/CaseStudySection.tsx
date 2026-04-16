import FadeIn from "./FadeIn";

type Props = {
  title: string;
  paragraphs: string[];
};

export default function CaseStudySection({ title, paragraphs }: Props) {
  return (
    <FadeIn>
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-text-primary mb-6">{title}</h2>
        <div className="flex flex-col gap-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>
    </FadeIn>
  );
}
