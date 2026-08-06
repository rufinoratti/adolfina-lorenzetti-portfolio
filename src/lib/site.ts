export const site = {
  name: "Adolfina Lorenzetti",
  shortName: "Adolfina",
  role: "Diseñadora de interiores",
  tagline: "Espacios pensados para ser habitados.",
  initials: "AL",
  url: "https://adolfinalorenzetti.com",
  email: "hola@adolfinalorenzetti.com",
  location: "Buenos Aires, Argentina",
  address: "Bosque Alegre 452 · Palermo Soho",
  coordinates: "34.5721° S, 58.4258° O",
  phone: "+54 11 5555 0180",
  description:
    "Estudio de interiorismo a cargo de Adolfina Lorenzetti. Diseño residencial y comercial, remodelaciones y espacios corporativos: ambientes que equilibran luz, materialidad y funcionalidad.",
  social: {
    instagram: "https://instagram.com/adolfinalorenzetti",
    pinterest: "https://pinterest.com/adolfinalorenzetti",
    linkedin: "https://linkedin.com/in/adolfinalorenzetti",
  },
  cv: "/cv-adolfina-lorenzetti.pdf",
  nav: [
    { label: "Sobre mí", href: "/#sobre-mi" },
    { label: "Proyectos", href: "/portfolio" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Contacto", href: "/#contacto" },
  ],
} as const;

export type Site = typeof site;