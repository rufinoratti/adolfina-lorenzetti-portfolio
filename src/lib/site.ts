export const site = {
  name: "Adolfina Lorenzetti",
  shortName: "Adolfina",
  role: "Diseñadora de interiores",
  tagline: "Espacios pensados para ser habitados.",
  initials: "AL",
  url: "https://adolfina-lorenzetti-portfolio.vercel.app/",
  email: "designadolfina@gmail.com",
  location: "Buenos Aires, Argentina",
  phone: "+54 9 2227440244",
  description:
    "Estudio de interiorismo a cargo de Adolfina Lorenzetti. Diseño residencial y comercial, remodelaciones y espacios corporativos: ambientes que equilibran luz, materialidad y funcionalidad.",
  social: {
    instagram: "https://instagram.com/designadolfina",
    linkedin: "https://www.linkedin.com/in/adolfinalorenzetti/",
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