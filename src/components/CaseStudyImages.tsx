import Image from "next/image";
import FadeIn from "./FadeIn";
import ImageLightbox from "./ImageLightbox";
import { ProjectImage } from "@/lib/types";

type Props = {
  images: ProjectImage[];
  coverColor: string;
};

function SingleImage({ img, coverColor }: { img: ProjectImage; coverColor: string }) {
  return (
    <figure>
      <ImageLightbox
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        unoptimized={img.unoptimized}
      >
        <div
          className="overflow-hidden rounded-none sm:rounded-xl"
          style={{ backgroundColor: coverColor }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width ?? 1600}
            height={img.height ?? 900}
            sizes="(max-width: 768px) 100vw, 768px"
            className="w-full h-auto"
            unoptimized={img.unoptimized}
          />
        </div>
      </ImageLightbox>
      {img.caption && (
        <figcaption className="mt-3 px-6 sm:px-0 text-sm text-text-muted text-center">
          {img.caption}
        </figcaption>
      )}
    </figure>
  );
}

function SideBySideGroup({ imgs }: { imgs: ProjectImage[]; coverColor: string }) {
  const aspects = imgs.map((img) => (img.width ?? 800) / (img.height ?? 600));
  const totalAspect = aspects.reduce((a, b) => a + b, 0);

  return (
    <div className="-mx-6 sm:mx-0">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        {imgs.map((img, i) => (
          <figure
            key={img.src}
            className="flex flex-col"
            style={{ flex: `${aspects[i] / totalAspect}` }}
          >
            <ImageLightbox
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              unoptimized={img.unoptimized}
            >
              <div className="overflow-hidden rounded-none sm:rounded-xl border border-border">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width ?? 800}
                  height={img.height ?? 600}
                  sizes={`(max-width: 768px) 100vw, ${Math.round((aspects[i] / totalAspect) * 100)}vw`}
                  className="w-full h-auto"
                  unoptimized={img.unoptimized}
                />
              </div>
            </ImageLightbox>
            {img.caption && (
              <figcaption className="mt-2 text-xs text-text-muted text-center">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function CaseStudyImages({ images, coverColor }: Props) {
  if (images.length === 0) return null;

  // Group images: consecutive side-by-side images form a group, others are standalone
  const groups: (ProjectImage | ProjectImage[])[] = [];
  let sideBySideBuf: ProjectImage[] = [];

  for (const img of images) {
    if (img.layout === "side-by-side") {
      sideBySideBuf.push(img);
    } else {
      if (sideBySideBuf.length > 0) {
        groups.push(sideBySideBuf);
        sideBySideBuf = [];
      }
      groups.push(img);
    }
  }
  if (sideBySideBuf.length > 0) groups.push(sideBySideBuf);

  return (
    <FadeIn>
      <div className="mb-16 -mx-6 sm:mx-0 flex flex-col gap-10">
        {groups.map((group, i) =>
          Array.isArray(group) ? (
            <SideBySideGroup key={i} imgs={group} coverColor={coverColor} />
          ) : (
            <SingleImage key={group.src} img={group} coverColor={coverColor} />
          )
        )}
      </div>
    </FadeIn>
  );
}
