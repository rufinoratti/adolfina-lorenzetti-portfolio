import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "marea-estudio",
    title: "Marea Estudio",
    client: "Marea Estudio",
    category: "Branding",
    year: 2024,
    coverSeed: "marea-branding-coast",
    accent: "#d8502f",
    tagline: "Identidad para un estudio de cerámica frente al mar.",
    summary:
      "Sistema de identidad completo para un taller de cerámica y objetos de la costa, construido alrededor del ritmo de las mareas.",
    description: [
      "Marea es un estudio de cerámica artesanal en Mar del Plata que buscaba salir de la estética de «arte para la casa» y posicionarse como un taller con voz propia. Trabajamos juntos desde el nombre hasta la papelería.",
      "La identidad parte de una idea simple: el borde entre la arena y el agua. Ese límite aparece como línea continua en el logotipo, como textura en el empaque y como sistema de color que cambia con cada colección.",
      "El resultado es una marca que se siente hecha a mano y, a la vez, precisa. Una que puede vivir en un sello de barro y en una pantalla.",
    ],
    objectives: [
      "Construir una identidad que comunicara el origen artesanal del estudio sin caer en lo folclórico.",
      "Crear un sistema flexible que conviviera con la imperfección de la cerámica.",
      "Desarrollar una línea de empaque y papelería que se sintiera tan cuidada como los objetos.",
    ],
    process: [
      {
        name: "Descubrimiento",
        detail:
          "Tres semanas de inmersión: visitas al taller, entrevistas con la fundadora y muestreo de piezas, esmaltes y texturas que hoy son parte del vocabulario visual.",
      },
      {
        name: "Exploración",
        detail:
          "Más de cuarenta direcciones de marca dibujadas a mano. Filtramos hasta cuatro caminos que probamos en piezas reales antes de elegir.",
      },
      {
        name: "Sistema",
        detail:
          "Definición del logotipo, paleta, tipografía, fotografía y un manual de uso que permite crecer sin perder consistencia.",
      },
    ],
    gallery: [
      {
        src: "https://picsum.photos/seed/marea-branding-1/1600/1100",
        alt: "Papelería de Marea Estudio sobre superficie de cerámica",
        seed: "marea-branding-1",
      },
      {
        src: "https://picsum.photos/seed/marea-branding-2/1200/1600",
        alt: "Tarjetas de presentación de Marea Estudio",
        seed: "marea-branding-2",
      },
      {
        src: "https://picsum.photos/seed/marea-branding-3/1600/900",
        alt: "Marca de agua estampada en piezas de cerámica",
        seed: "marea-branding-3",
      },
      {
        src: "https://picsum.photos/seed/marea-branding-4/1600/1200",
        alt: "Manual de marca abierto sobre un banco de trabajo",
        seed: "marea-branding-4",
      },
    ],
    palette: [
      { name: "Arena", hex: "#efe9de" },
      { name: "Esmalte", hex: "#2e4a46" },
      { name: "Arcilla", hex: "#c06b3c" },
      { name: "Tinta", hex: "#201d1a" },
    ],
    typography: [
      { label: "Título", value: "Söhne / Grotesk" },
      { label: "Texto", value: "Neue Haas Grotesk" },
      { label: "Marca", value: "Dibujo a mano" },
    ],
    results: [
      "Identidad renovada aplicada a empaque, papelería y fachada.",
      "Incremento del 30% en ventas directas por taller durante el primer trimestre.",
      "Colección presentada en dos ferias de diseño nacionales.",
    ],
    services: ["Identidad", "Dirección de arte", "Packaging"],
  },
  {
    slug: "revista-horizonte",
    title: "Revista Horizonte",
    client: "Editorial Horizonte",
    category: "Diseño editorial",
    year: 2023,
    coverSeed: "horizonte-editorial-print",
    accent: "#2f5f8f",
    tagline: "Rediseño editorial para una revista de cultura latinoamericana.",
    summary:
      "Rediseño completo de una publicación trimestral: retícula, tipografía, portadas y sistema de infografías.",
    description: [
      "Horizonte es una revista de cultura que lleva más de veinte años publicándose. Su diseño arrastraba decisiones de la era de la fotocopia: tipografías sin carácter y una retícula que nadie sabía usar.",
      "El rediseño partió de la entrevista con editores y diseñadores de cada sección. El objetivo no era embellecer, sino construir un sistema que hiciera más fácil el trabajo de quienes producen la revista cada tres meses.",
      "Definimos una retícula de 6 columnas con un sistema de escalas tipográficas que da dos registros: uno sereno para los ensayos largos y otro ágil para la agenda de eventos.",
    ],
    objectives: [
      "Recuperar un carácter editorial propio frente al ruido de las redes.",
      "Construir una retícula modular que acortara los tiempos de armado.",
      "Diseñar portadas que funcionaran impresas y como piezas digitales.",
    ],
    process: [
      {
        name: "Auditoría",
        detail:
          "Revisamos doce números para entender los patrones reales de uso: qué secciones cambiaban, cuáles eran fijas y dónde se rompía el sistema.",
      },
      {
        name: "Retícula",
        detail:
          "Prototipamos la nueva retícula con contenido real durante tres meses en paralelo a la edición vigente.",
      },
      {
        name: "Lanzamiento",
        detail:
          "Publicación del primer número rediseñado y entrenamiento del equipo interno para sostener el sistema.",
      },
    ],
    gallery: [
      {
        src: "https://picsum.photos/seed/horizonte-editorial-1/1200/1600",
        alt: "Portada del primer número rediseñado de Horizonte",
        seed: "horizonte-editorial-1",
      },
      {
        src: "https://picsum.photos/seed/horizonte-editorial-2/1600/1000",
        alt: "Doble página con ensayo tipográfico",
        seed: "horizonte-editorial-2",
      },
      {
        src: "https://picsum.photos/seed/horizonte-editorial-3/1600/1100",
        alt: "Sistema de infografías de la revista Horizonte",
        seed: "horizonte-editorial-3",
      },
      {
        src: "https://picsum.photos/seed/horizonte-editorial-4/1600/1200",
        alt: "Pliegos de la revista en la imprenta",
        seed: "horizonte-editorial-4",
      },
    ],
    palette: [
      { name: "Hueso", hex: "#f4f0e7" },
      { name: "Azul profundo", hex: "#2f5f8f" },
      { name: "Sangre", hex: "#9c1f1a" },
      { name: "Negro tinta", hex: "#191714" },
    ],
    typography: [
      { label: "Ensayo", value: "Editorial New" },
      { label: "Infografía", value: "IBM Plex Sans" },
      { label: "Portada", value: "Mazius Display" },
    ],
    results: [
      "Premio a la mejor dirección editorial en los premios de diseño 2023.",
      "Tiempo de armado de cada número reducido a la mitad.",
      "Renovación del 100% de la suscripción existente durante el primer año.",
    ],
    services: ["Dirección de arte", "Diseño editorial", "Sistema gráfico"],
  },
  {
    slug: "terra-skincare",
    title: "Terra Botánica",
    client: "Terra Botánica",
    category: "Packaging",
    year: 2024,
    coverSeed: "terra-packaging-skincare",
    accent: "#3f6b4f",
    tagline: "Packaging para una línea de cuidado natural, honesto y despojado.",
    summary:
      "Sistema de packaging para seis productos de cuidado de la piel, con estructura de vidrio reutilizable y una identidad botánica.",
    description: [
      "Terra Botánica nació como una línea de aceites y cremas elaborados con vegetales de huerta propia. El desafío del packaging era doble: comunicar lo natural sin caer en el cliché del «verde orgánico», y resolver la reutilización de los envases.",
      "Diseñamos un sistema en vidrio color ámbar con etiquetas de una sola tinta que se quitan con agua. Cada producto lleva una ilustración de la planta protagonista dibujada con tinta, una por una.",
      "El envase está pensado para no desecharse: la etiqueta sale sin dejar residuo y el vidrio se devuelve al local a cambio de un descuento.",
    ],
    objectives: [
      "Diferenciar la línea en un mercado saturado de promesas de pureza.",
      "Reducir el desperdicio con un envase reutilizable y una etiqueta removible.",
      "Contar el origen real de cada ingrediente sin letra chica.",
    ],
    process: [
      {
        name: "Materialidad",
        detail:
          "Probamos dieciséis combinaciones de vidrio, papel y tinta hasta encontrar la que resistía el aceite sin perder legibilidad.",
      },
      {
        name: "Ilustración",
        detail:
          "Las seis plantas fueron dibujadas a tinta a partir de ejemplares reales del huerto, no de bancos de imágenes.",
      },
      {
        name: "Validación",
        detail:
          "Testeamos la experiencia de devolución del envase con clientes reales durante el lanzamiento piloto.",
      },
    ],
    gallery: [
      {
        src: "https://picsum.photos/seed/terra-skincare-1/1600/1100",
        alt: "Botellas ámbar de Terra Botánica en hilera",
        seed: "terra-skincare-1",
      },
      {
        src: "https://picsum.photos/seed/terra-skincare-2/1600/1200",
        alt: "Detalle de etiqueta con ilustración botánica",
        seed: "terra-skincare-2",
      },
      {
        src: "https://picsum.photos/seed/terra-skincare-3/1200/1600",
        alt: "Caja de regalo de Terra Botánica",
        seed: "terra-skincare-3",
      },
      {
        src: "https://picsum.photos/seed/terra-skincare-4/1600/900",
        alt: "Stand de Terra Botánica en feria de diseño",
        seed: "terra-skincare-4",
      },
    ],
    palette: [
      { name: "Ámbar", hex: "#c8956c" },
      { name: "Bosque", hex: "#3f6b4f" },
      { name: "Hueso", hex: "#f2eee5" },
      { name: "Tinta", hex: "#1d1c18" },
    ],
    typography: [
      { label: "Título", value: "Canela Text" },
      { label: "Texto", value: "Helvetica Now" },
      { label: "Ilustración", value: "Tinta china" },
    ],
    results: [
      "El 40% de las ventas del primer semestre fueron envases devueltos y rellenados.",
      "Cobertura en dos publicaciones de diseño especializadas en packaging.",
      "Línea completa en vidrio reciclado, sin plástico.",
    ],
    services: ["Packaging", "Ilustración", "Estrategia de producto"],
  },
  {
    slug: "cafe-nube",
    title: "Café Nube",
    client: "Café Nube",
    category: "Branding",
    year: 2022,
    coverSeed: "cafenube-brand-coffee",
    accent: "#a05a2c",
    tagline: "Identidad y packaging para un tostador de café de especialidad.",
    summary:
      "Desde el nombre hasta la bolsa: una marca que le habla al consumidor con la honestidad de un tostador de barrio.",
    description: [
      "Café Nube es un tostador de especialidad que abrió su primer local en 2022. Venían del café de autor, pero la marca no: el nombre y la gráfica no acompañaban la calidad del producto.",
      "Propuse una identidad que se apoya en la máquina de tostado, el corazón del negocio. El logotipo es una abstracción del tambor de la tostadora girando, con una sola «nube» de humo.",
      "Cada origen lleva una etiqueta distinta que cambia de color con el nivel de tostado. El sistema creció después hacia el menú del local, la app y los productos de regalo.",
    ],
    objectives: [
      "Crear una identidad reconocible en el mostrador y en la góndola de supermercado.",
      "Explicar el nivel de tostado con un código simple que cualquiera lea.",
      "Construir una marca que pudiera expandirse a varios locales sin perder el carácter.",
    ],
    process: [
      {
        name: "Nombre",
        detail:
          "Taller de naming con los fundadores. De cuarenta candidatos, «Nube» ganó por la imagen del humo del tostado, la más honesta del oficio.",
      },
      {
        name: "Sistema",
        detail:
          "Definimos el logotipo, la retícula de etiquetas y la escala de color por nivel de tostado.",
      },
      {
        name: "Crecimiento",
        detail:
          "Acompañé la apertura del segundo local y la línea de productos de regalo con la misma identidad.",
      },
    ],
    gallery: [
      {
        src: "https://picsum.photos/seed/cafenube-brand-1/1600/1100",
        alt: "Bolsa de Café Nube con etiqueta de tostado",
        seed: "cafenube-brand-1",
      },
      {
        src: "https://picsum.photos/seed/cafenube-brand-2/1200/1600",
        alt: "Taza con el logo de Café Nube",
        seed: "cafenube-brand-2",
      },
      {
        src: "https://picsum.photos/seed/cafenube-brand-3/1600/1000",
        alt: "Mostrador del local de Café Nube",
        seed: "cafenube-brand-3",
      },
      {
        src: "https://picsum.photos/seed/cafenube-brand-4/1600/1200",
        alt: "Serie de etiquetas por nivel de tostado",
        seed: "cafenube-brand-4",
      },
    ],
    palette: [
      { name: "Tostado claro", hex: "#d9a05f" },
      { name: "Tostado medio", hex: "#a05a2c" },
      { name: "Tostado oscuro", hex: "#4a2b1a" },
      { name: "Crema", hex: "#f0e9dd" },
    ],
    typography: [
      { label: "Marca", value: "Grotesk condensada" },
      { label: "Etiqueta", value: "Futura" },
      { label: "Soporte", value: "Times Roman" },
    ],
    results: [
      "De un local a tres en dos años, con la misma identidad.",
      "Café Nube elegida como mejor marca emergente de 2022 por la asociación de tostadores.",
      "Línea de regalo que se convirtió en el 25% de la facturación.",
    ],
    services: ["Naming", "Identidad", "Packaging"],
  },
  {
    slug: "atelier-sur",
    title: "Atelier Sur",
    client: "Atelier Sur",
    category: "Diseño editorial",
    year: 2021,
    coverSeed: "ateliersur-editorial-monograph",
    accent: "#7a5233",
    tagline: "Monografía para una artista textil, veinte años de obra.",
    summary:
      "Monografía de 240 páginas que documenta dos décadas de trabajo textil, diseñada como objeto de colección.",
    description: [
      "Atelier Sur es el taller de una artista textil cuya obra se ha tejido, en sentido literal, durante veinte años. La monografía debía hacer honor a esa escala de tiempo.",
      "Diseñamos un libro en el que el papel imita la textura de los materiales: un papel de algodón para las obras, un papel más liso para los textos. La retícula se quiebra solo cuando la obra lo pide.",
      "Cada capítulo abre con un primer plano de la pieza y una cronología marginal que permite leer la evolución de la artista sin salir de la imagen.",
    ],
    objectives: [
      "Diseñar un objeto que se sintiera tan cuidado como las obras que documenta.",
      "Ordenar veinte años de producción sin perder la intensidad de cada pieza.",
      "Integrar fotografía, texto y material en un solo sistema visual.",
    ],
    process: [
      {
        name: "Archivo",
        detail:
          "Trabajo con el archivo completo de la artista: más de trescientas piezas, bocetos y registros de exposiciones.",
      },
      {
        name: "Papel",
        detail:
          "Selección y prueba de cinco papeles de impresión hasta encontrar el que reproducía la densidad del tejido.",
      },
      {
        name: "Edición",
        detail:
          "Coedición con la artista: la selección de imágenes y los textos se revisaron pieza por pieza.",
      },
    ],
    gallery: [
      {
        src: "https://picsum.photos/seed/ateliersur-1/1600/1200",
        alt: "Portada en tela de la monografía Atelier Sur",
        seed: "ateliersur-1",
      },
      {
        src: "https://picsum.photos/seed/ateliersur-2/1600/900",
        alt: "Doble página con detalle de tejido",
        seed: "ateliersur-2",
      },
      {
        src: "https://picsum.photos/seed/ateliersur-3/1200/1600",
        alt: "Capítulo de la monografía sobre la mesa",
        seed: "ateliersur-3",
      },
      {
        src: "https://picsum.photos/seed/ateliersur-4/1600/1100",
        alt: "Página de cronología de la obra textil",
        seed: "ateliersur-4",
      },
    ],
    palette: [
      { name: "Lino", hex: "#e7e0d2" },
      { name: "Siena", hex: "#7a5233" },
      { name: "Añil", hex: "#2b3a4a" },
      { name: "Carbón", hex: "#26241f" },
    ],
    typography: [
      { label: "Texto", value: "Iowan Old Style" },
      { label: "Títulos", value: "Fraunces" },
      { label: "Cronología", value: "Gill Sans" },
    ],
    results: [
      "Primera edición agotada en tres meses.",
      "El libro fue seleccionado en la lista de mejores libros de diseño del año.",
      "Exposición itinerante que acompaña el lanzamiento de la monografía.",
    ],
    services: ["Diseño editorial", "Dirección de arte", "Producción gráfica"],
  },
  {
    slug: "botanica-illustration",
    title: "Botánica",
    client: "Publicación de autor",
    category: "Ilustración",
    year: 2023,
    coverSeed: "botanica-illustration-botanical",
    accent: "#4c6b4a",
    tagline: "Serie de ilustraciones botánicas de la flora rioplatense.",
    summary:
      "Veinticuatro láminas de plantas nativas, dibujadas a tinta y digitalizadas, reunidas en una colección impresa.",
    description: [
      "Botánica es un proyecto personal que nació durante el encierro, cuando empecé a dibujar las plantas del barrio que podía ver desde la ventana. Lo que empezó como ejercicio terminó en una colección de veinticuatro láminas.",
      "Cada planta está dibujada a tinta sobre papel, una sola toma, sin corrección. El error queda, porque la planta también es así: imperfecta.",
      "La colección se imprimió en tres ediciones de cincuenta ejemplares numerados, y dio lugar a un calendario y a una serie de posters que se vendieron online.",
    ],
    objectives: [
      "Desarrollar una voz de ilustración propia, fuera del encargo comercial.",
      "Documentar la flora nativa con respeto y precisión.",
      "Convertir el proyecto en una pieza impresa de valor.",
    ],
    process: [
      {
        name: "Observación",
        detail:
          "Salidas a registrar cada especie en su hábitat: el dibujo empezaba a lápiz en el lugar.",
      },
      {
        name: "Tinta",
        detail:
          "Trazado final a tinta china en una sola pasada, sin boceto encima.",
      },
      {
        name: "Edición",
        detail:
          "Digitalización, retoque mínimo y diseño de la lámina completa con datos de la especie.",
      },
    ],
    gallery: [
      {
        src: "https://picsum.photos/seed/botanica-1/1200/1600",
        alt: "Lámina de la serie Botánica con planta nativa",
        seed: "botanica-1",
      },
      {
        src: "https://picsum.photos/seed/botanica-2/1600/1200",
        alt: "Herramientas de tinta sobre la mesa de dibujo",
        seed: "botanica-2",
      },
      {
        src: "https://picsum.photos/seed/botanica-3/1600/1000",
        alt: "Exposición de las láminas de Botánica",
        seed: "botanica-3",
      },
      {
        src: "https://picsum.photos/seed/botanica-4/1600/1100",
        alt: "Posters de la serie Botánica colgados",
        seed: "botanica-4",
      },
    ],
    palette: [
      { name: "Verde vegetal", hex: "#4c6b4a" },
      { name: "Hueso", hex: "#f1eee6" },
      { name: "Pizarra", hex: "#3a3f3c" },
      { name: "Ocre", hex: "#b5913f" },
    ],
    typography: [
      { label: "Lámina", value: "Centaur" },
      { label: "Datos", value: "Univers" },
      { label: "Marca", value: "Tinta china" },
    ],
    results: [
      "Tres ediciones agotadas de cincuenta ejemplares cada una.",
      "Participación en tres ferias de ilustración independientes.",
      "La serie dio origen a una línea de papelería que sigue vendiéndose.",
    ],
    services: ["Ilustración", "Diseño editorial", "Serigrafía"],
  },
  {
    slug: "vela-web",
    title: "Vela",
    client: "Vela",
    category: "Diseño web",
    year: 2024,
    coverSeed: "vela-web-candles",
    accent: "#c98a3b",
    tagline: "Dirección de arte y diseño web para una marca de velas.",
    summary:
      "Sitio web de comercio con dirección de arte propia: fotografía editorial, tipografía generosa y una experiencia de compra serena.",
    description: [
      "Vela es una marca de velas de cera de soja con un local pequeño y una historia grande. El sitio debía traducir esa cercanía a la pantalla, sin caer en el e-commerce genérico.",
      "La dirección de arte partió de una decisión: mostrar las velas encendidas, en contextos reales, no sobre fondos neutros. La fotografía es el producto.",
      "Diseñé el sistema visual y la interfaz: una retícula amplia, tipografía grande y una paleta cálida. La compra se resuelve en tres pasos, sin distracciones.",
    ],
    objectives: [
      "Crear una experiencia de compra serena que refleje la calma de la marca.",
      "Poner la fotografía editorial al frente, no el catálogo.",
      "Lograr tiempos de carga rápidos en móvil, donde se genera la mayor parte de la venta.",
    ],
    process: [
      {
        name: "Dirección de arte",
        detail:
          "Construcción del set de fotografía con la marca: luz cálida, materialidad y encuadres editoriales.",
      },
      {
        name: "Sistema",
        detail:
          "Tipografía, retícula y paleta que trasladan la identidad física al entorno digital.",
      },
      {
        name: "Desarrollo",
        detail:
          "Prototipo en alta fidelidad, iteración con el equipo y puesta en producción con estándares de performance.",
      },
    ],
    gallery: [
      {
        src: "https://picsum.photos/seed/vela-web-1/1600/1000",
        alt: "Pantalla de inicio del sitio de Vela",
        seed: "vela-web-1",
      },
      {
        src: "https://picsum.photos/seed/vela-web-2/1600/1200",
        alt: "Detalle de tipografía del sitio de Vela",
        seed: "vela-web-2",
      },
      {
        src: "https://picsum.photos/seed/vela-web-3/1200/1600",
        alt: "Vela encendida fotografiada para el sitio",
        seed: "vela-web-3",
      },
      {
        src: "https://picsum.photos/seed/vela-web-4/1600/1100",
        alt: "Ficha de producto del sitio de Vela",
        seed: "vela-web-4",
      },
    ],
    palette: [
      { name: "Cera", hex: "#f5efe3" },
      { name: "Miel", hex: "#c98a3b" },
      { name: "Carbón", hex: "#2a2622" },
      { name: "Piedra", hex: "#8a857c" },
    ],
    typography: [
      { label: "Display", value: "ABC Diatype" },
      { label: "Texto", value: "Inter Tight" },
      { label: "Etiquetas", value: "JetBrains Mono" },
    ],
    results: [
      "Conversión de visita a compra duplicada en los primeros tres meses.",
      "Puntuación de 98 en desempeño móvil en auditoría de performance.",
      "El sitio pasó a ser el canal de venta principal de la marca.",
    ],
    services: ["Dirección de arte", "Diseño web", "Sistema de diseño"],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjects(slugs: string[]) {
  return slugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => Boolean(project));
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const previous = projects[(index + projects.length - 1) % projects.length];
  const next = projects[(index + 1) % projects.length];
  return { previous, next };
}
