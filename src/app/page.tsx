import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";
import { bustImageCache } from "@/lib/image-cache-bust";

export default function Home() {
  const freshProjects = projects.map((p) => ({
    ...p,
    cardImage: p.cardImage
      ? { ...p.cardImage, src: bustImageCache(p.cardImage.src) }
      : undefined,
    images: p.images.map((img) => ({ ...img, src: bustImageCache(img.src) })),
  }));

  return (
    <>
      <Hero />
      <ProjectGrid projects={freshProjects} />
    </>
  );
}
