export type ProjectType =
  | "Residencial"
  | "Comercial"
  | "Remodelación"
  | "Corporativo"
  | "Especiales";

export interface ProjectImage {
  src: string;
  alt: string;
  seed: string;
}

export interface Plan {
  src: string;
  alt: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  type: ProjectType;
  location: string;
  year: number;
  area: string;
  client?: string;
  cover: string;
  coverFocus?: string;
  tagline: string;
  summary: string;
  description: string[];
  objectives?: string[];
  concept?: string[];
  layout?: { name: string; detail: string }[];
  materials?: string[];
  palette?: { name: string; hex: string }[];
  furniture?: string[];
  lighting?: string[];
  services?: string[];
  role: string;
  gallery: ProjectImage[];
  plans: Plan[];
  beforeAfter?: { before: string; after: string; alt: string }[];
  results?: string[];
}