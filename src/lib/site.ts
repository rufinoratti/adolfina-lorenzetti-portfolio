export const site = {
  name: "Adolfina Lorenzetti",
  shortName: "Adolfina Lorenzetti",
  role: "Diseñadora gráfica",
  initials: "AL",
  url: "https://adolfinalorenzetti.com",
  email: "hola@adolfinalorenzetti.com",
  location: "Buenos Aires, Argentina",
  description:
    "Portfolio de Adolfina Lorenzetti, diseñadora gráfica especializada en branding, diseño editorial, packaging e identidad visual.",
  social: {
    instagram: "https://instagram.com/adolfinalorenzetti",
    behance: "https://behance.net/adolfinalorenzetti",
    linkedin: "https://linkedin.com/in/adolfinalorenzetti",
  },
  cv: "/cv-adolfina-lorenzetti.pdf",
  nav: [
    { label: "Trabajo", href: "/portfolio" },
    { label: "Estudio", href: "/#estudio" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Contacto", href: "/#contacto" },
  ],
} as const;

export type Site = typeof site;
