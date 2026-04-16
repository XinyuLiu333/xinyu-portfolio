export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
  layout?: "side-by-side";
  slot?: 0 | 1 | 2 | 3;
  padded?: boolean;
};

export type ProjectContent = {
  overview: string;
  problem: string[];
  process: string[];
  solution: string[];
  impact: string[];
  liveLinks?: ProjectLink[];
};

export type Project = {
  slug: string;
  title: string;
  company: string;
  year: string;
  role: string;
  duration?: string;
  description: string;
  tags: string[];
  isGated: boolean;
  coverColor: string;
  cardImage?: ProjectImage;
  images: ProjectImage[];
  content?: ProjectContent;
};
