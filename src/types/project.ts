export type Category =
  | "Branding"
  | "Diseño editorial"
  | "Packaging"
  | "Diseño web"
  | "Ilustración";

export interface ProjectImage {
  src: string;
  alt: string;
  seed: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: Category;
  year: number;
  coverSeed: string;
  accent: string;
  tagline: string;
  summary: string;
  description: string[];
  objectives: string[];
  process: { name: string; detail: string }[];
  gallery: ProjectImage[];
  palette: { name: string; hex: string }[];
  typography: { label: string; value: string }[];
  results: string[];
  services: string[];
}