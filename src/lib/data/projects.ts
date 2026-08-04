import type { Project } from "@/types/project";

const img = (id: string, w: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects: Project[] = [
  {
    slug: "casa-vento",
    title: "Casa Vento",
    type: "Residencial",
    location: "Palermo Soho, Buenos Aires",
    year: 2025,
    area: "320 m²",
    client: "Familia privada",
    cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    tagline: "Una casa que se abre a la luz y al jardín.",
    summary:
      "Remodelación integral de una casa de los años cuarenta: planta abierta, materiales cálidos y una relación continua con el exterior.",
    description: [
      "Casa Vento era una casa clásica de barrio con habitaciones cerradas y escasa conexión con el jardín. La intervención reordenó el programa alrededor de un eje de luz y de verde.",
      "La planta baja se abrió por completo: cocina, comedor y estar convergen en un gran espacio que desemboca en el patio. La luz del norte entra hasta el fondo de la casa.",
      "Trabajamos con materiales honestos y atemporales: madera de roble claro, microcemento, piedra caliza y lana. Cada textura responde a una decisión, no a una tendencia.",
    ],
    objectives: [
      "Abrir los espacios sin perder la intimidad de las habitaciones.",
      "Crear una cocina generosa que funcionara como centro de reunión de la familia.",
      "Ordenar la circulación y ganar metros a patios interiores que no se usaban.",
    ],
    concept: [
      "La casa se leyó como un jardín que se atraviesa. Los ambientes se organizan en galerías que enmarcan el verde, y cada paso por la casa revela un recorte distinto del exterior.",
      "La idea rectora fue la «casa-materia»: superficies táctiles, luz filtrada y una paleta neutra que deja hablar a las plantas y a las vistas.",
    ],
    layout: [
      {
        name: "Planta baja",
        detail:
          "Estar, comedor y cocina integrados; baño de visitas y hall de acceso que distribuye hacia la galería.",
      },
      {
        name: "Planta alta",
        detail:
          "Tres dormitorios, dos en suite, y un estar de trabajo que aprovecha la doble altura del fondo.",
      },
      {
        name: "Exterior",
        detail:
          "Patio semicubierto con quincho, pileta lineal y una franja de vegetación que amortigua la calle.",
      },
    ],
    materials: [
      "Roble europeo cepillado",
      "Microcemento gris piedra",
      "Piedra caliza Mataró",
      "Lino y lana natural",
      "Hierro en esmalte negro mate",
      "Cristales de seguridad al piso",
    ],
    palette: [
      { name: "Hueso", hex: "#f5f1e8" },
      { name: "Arena", hex: "#ddd4c3" },
      { name: "Gris piedra", hex: "#a9a59b" },
      { name: "Madera clara", hex: "#c3a77e" },
      { name: "Olivillo", hex: "#7c815b" },
      { name: "Detalle negro", hex: "#26231d" },
    ],
    furniture: [
      "Sofá modular en lino arena, diseño propio",
      "Mesa de roble de 3 m. con tablón único",
      "Butaca vintage restaurada, cuero natural",
      "Estantería de acero y roble de paso al patio",
      "Lámpara de pie de fibra natural tejida",
    ],
    lighting: [
      "Luz de día norte filtrada por celosía de madera",
      "Barras lineales embutidas para una luz continua y suave",
      "Iluminación puntual sobre la mesa y las superficies de trabajo",
      "Regulación en varios escenarios: mañana, sobremesa y noche",
    ],
    services: ["Interiorismo integral", "Dirección de obra", "Mobiliario a medida"],
    role: "Dirección creativa y proyecto integral",
    gallery: [
      {
        src: img("1600585154340-be6161a56a0c", 1800, 1200),
        alt: "Estar de Casa Vento con sofá de lino y vista al jardín",
        seed: "casa-vento-1",
      },
      {
        src: img("1618221195710-dd6b41faaea6", 1200, 1500),
        alt: "Esquina de lectura en madera y luz natural",
        seed: "casa-vento-2",
      },
      {
        src: img("1600210492486-724fe5c67fb0", 1200, 1500),
        alt: "Dormitorio principal con cabecero en roble",
        seed: "casa-vento-3",
      },
      {
        src: img("1513694203232-719a280e022f", 1500, 1000),
        alt: "Rincón verde junto al ventanal de la galería",
        seed: "casa-vento-4",
      },
      {
        src: img("1493809842364-78817add7ffb", 1500, 1000),
        alt: "Cocina y comedor integrados de Casa Vento",
        seed: "casa-vento-5",
      },
    ],
    plans: [
      {
        src: img("1581092160562-40aa08e78837", 1400, 1000),
        alt: "Plano de distribución de planta baja de Casa Vento",
        label: "Planta baja · escala 1:100",
      },
      {
        src: img("1600585153490-76fb20a32601", 1400, 1000),
        alt: "Render de la cocina integrada de Casa Vento",
        label: "Render · cocina y comedor",
      },
    ],
    results: [
      "La planta abierta multiplicó la sensación de metros y de luz en cada ambiente.",
      "La familia convive hoy alrededor de la cocina y el jardín, que antes eran dos espacios aislados.",
      "El proyecto se ejecutó sin modificar la estructura, dentro del plazo y del presupuesto.",
    ],
  },
  {
    slug: "atico-norte",
    title: "Ático Norte",
    type: "Residencial",
    location: "Recoleta, Buenos Aires",
    year: 2024,
    area: "210 m²",
    client: "Pareja de profesionales",
    cover: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    tagline: "Materialidad serena en altura, con vistas abiertas.",
    summary:
      "Puesta en valor de un ático nuevo: distribución serena, madera y piedra, y un diálogo continuo con la terraza y la ciudad.",
    description: [
      "Un ático con buena estructura pero sin carácter: techos nuevos, espacios neutros y ninguna decisión emocional. El encargo era convertirlo en un hogar silencioso, elegante y personal.",
      "El proyecto se apoyó en tres materialidades: madera de nogal para la calidez, piedra caliza para la permanencia y tela de lino para la textura. El color se reservó para el arte y la vegetación.",
      "La terraza, antes un pasillo técnico, se transformó en un segundo estar al aire libre que completa el programa de la casa.",
    ],
    objectives: [
      "Dotar de textura y temperatura a un espacio que se sentía frío por lo neutro.",
      "Integrar la terraza a la vida diaria, no solo al verano.",
      "Crear zonas de guardado inteligentes sin restar superficie aparente.",
    ],
    concept: [
      "Nogal, caliza y lienzo: tres materiales con cuatro cifras de historia propia, combinados como elementos de una sola composición.",
      "La luz del atardecer guió la orientación de cada ambiente; los espacios de estar miran al oeste para aprovechar el sol bajo.",
    ],
    layout: [
      {
        name: "Área social",
        detail:
          "Salón principal de doble altura con galería interior, comedor y estar de lectura contiguos.",
      },
      {
        name: "Área privada",
        detail:
          "Suite principal con vestidor y baño completo; segundo dormitorio con estudio.",
      },
      {
        name: "Terraza",
        detail:
          "Estar exterior con parrilla cubierta, living de borde y macetones de olivo y jacarandá.",
      },
    ],
    materials: [
      "Nogal americano natural",
      "Piedra caliza pulida",
      "Lino y lana tejida",
      "Microcemento en los baños",
      "Cobre y latón en detalles",
    ],
    palette: [
      { name: "Linaza", hex: "#f3efe6" },
      { name: "Nogal", hex: "#6b4f33" },
      { name: "Caliza", hex: "#d8d2c4" },
      { name: "Humo", hex: "#84807a" },
      { name: "Olivillo", hex: "#7c815b" },
      { name: "Tinta", hex: "#26231d" },
    ],
    furniture: [
      "Sillón italiano de cuero, pieza clave del salón",
      "Alfombra de lana tejida a mano",
      "Mesa de apoyo en piedra caliza",
      "Cama baja de nogal con dosel de lino",
      "Estantería a medida del piso al techo",
    ],
    lighting: [
      "Plafones cálidos a diferentes alturas para evitar sombras duras",
      "Guirnaldas LED en la doble altura que resaltan la textura de la madera",
      "Luminarias de acento sobre el arte y la biblioteca",
      "Exterior con regaderas indirigidas y velas en la terraza",
    ],
    services: ["Interiorismo integral", "Mobiliario a medida", "Paisajismo de terraza"],
    role: "Dirección creativa y proyecto integral",
    gallery: [
      {
        src: img("1600566753190-17f0baa2a6c3", 1800, 1200),
        alt: "Salón de doble altura de Ático Norte en nogal y caliza",
        seed: "atico-norte-1",
      },
      {
        src: img("1615873968403-89e068629265", 1500, 1000),
        alt: "Estar de lectura con sofá de lino y arte",
        seed: "atico-norte-2",
      },
      {
        src: img("1616486338812-3dadae4b4ace", 1500, 1000),
        alt: "Comedor de Ático Norte con lamparón sobre la mesa",
        seed: "atico-norte-3",
      },
      {
        src: img("1616594039964-ae9021a400a0", 1200, 1500),
        alt: "Detalle de boiserie y materialidad serena",
        seed: "atico-norte-4",
      },
      {
        src: img("1567016432779-094069958ea5", 1200, 1500),
        alt: "Suite principal con cama baja de nogal",
        seed: "atico-norte-5",
      },
    ],
    plans: [
      {
        src: img("1600585153490-76fb20a32601", 1400, 1000),
        alt: "Render del salón de doble altura de Ático Norte",
        label: "Render · salón principal",
      },
      {
        src: img("1581092160562-40aa08e78837", 1400, 1000),
        alt: "Plano de planta del nivel social de Ático Norte",
        label: "Planta nivel social · 1:100",
      },
    ],
    results: [
      "El ático pasó de un espacio neutro a una pieza de arquitectura con carácter propio.",
      "La terraza sumó un área de uso diario equivalente a un ambiente más de la casa.",
      "Cada material elegido con los clientes se documentó con muestras reales antes de la obra.",
    ],
  },
  {
    slug: "cafe-terra-fina",
    title: "Café Terra Fina",
    type: "Comercial",
    location: "Villa Crespo, Buenos Aires",
    year: 2024,
    area: "140 m²",
    client: "Terra Fina Coffee",
    cover: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
    tagline: "Un café de especialidad que se siente como un living.",
    summary:
      "Proyecto integral de un café de especialidad: atmósfera cálida, materialidad noble y un guiño a la casa de barrio.",
    description: [
      "Terra Fina quería diferenciarse del café de cadena: un local chico donde cada objeto tuviera sentido y donde quedarse fuera el plan. Necesitaba una atmósfera, no un salón más.",
      "Trabajamos la escala íntima: mesas de madera maciza, una barra de piedra, yeso con textura en las paredes y luz baja que acompaña la sobremesa.",
      "El resultado es un espacio que recibe a cualquiera como invitado, con una barra generosa que invita al diálogo con el barista.",
    ],
    objectives: [
      "Diferenciar la propuesta con una atmósfera de hospitalidad, no de pasillo de consumo.",
      "Optimizar la operación: 24 posiciones, barra de servicio eficiente y espera cómoda.",
      "Reducir el mantenimiento con materiales nobles y de bajo desgaste.",
    ],
    concept: [
      "«Vine de visita»: cada decisión apunta a que el cliente se sienta en una casa prestada, con barra propia y sin apuro.",
      "Las superficies altas de contacto se esculpen; las de tránsito se limpian con una sola pasada.",
    ],
    layout: [
      {
        name: "Planta baja",
        detail:
          "Barra de servicio en piedra a la vista, mesas de dos y cuatro, banco corrido junto al ventanal.",
      },
      {
        name: "Contra-bar",
        detail:
          "Zona de descanso con estanterías y plantas, orientada a la luz de la tarde.",
      },
      {
        name: "Exterior",
        detail:
          "Fila de mesas de madera sobre la vereda, contenida por macetones de olivo.",
      },
    ],
    materials: [
      "Piedra caliza en la barra",
      "Madera de iroko en mesas y bancos",
      "Yeso rústico en paredes",
      "Hierro negro en la carpintería",
      "Cerámica artesanal en platos y aislantes",
    ],
    palette: [
      { name: "Crema", hex: "#f2eddf" },
      { name: "Piedra", hex: "#b9b2a3" },
      { name: "Madera", hex: "#8a5a33" },
      { name: "Espresso", hex: "#5b4028" },
      { name: "Olivillo", hex: "#7c815b" },
    ],
    furniture: [
      "Barra de piedra con vertientes redondeadas",
      "Mesas redondas de iroko de 70 cm",
      "Sillas de madera apilables",
      "Banco corrido tapizado en lino",
      "Estantería de servicio en hierro negro",
    ],
    lighting: [
      "Luz cálida individual por mesa para la sobremesa",
      "Regaderas sobre la barra que destacan el contacto",
      "Luz natural de la vereda, tamizada por cortinas de lino",
    ],
    services: ["Interiorismo comercial", "Dirección de obra", "Estudio de operación"],
    role: "Proyecto integral y dirección de arte de espacio",
    gallery: [
      {
        src: img("1554118811-1e0d58224f24", 1800, 1200),
        alt: "Interior cálido del Café Terra Fina con barra de piedra",
        seed: "cafe-terra-fina-1",
      },
      {
        src: img("1555396273-367ea4eb4db5", 1200, 1500),
        alt: "Mesa de madera y banco corrido junto al ventanal",
        seed: "cafe-terra-fina-2",
      },
      {
        src: img("1521017432531-fbd92d768814", 1200, 1500),
        alt: "Barra de servicio y detalle de mesas de café",
        seed: "cafe-terra-fina-3",
      },
      {
        src: img("1445116572660-236099ec97a0", 1500, 1000),
        alt: "Atmósfera cálida de sobremesa en Terra Fina",
        seed: "cafe-terra-fina-4",
      },
    ],
    plans: [
      {
        src: img("1581092160562-40aa08e78837", 1400, 1000),
        alt: "Plano de planta del Café Terra Fina",
        label: "Planta · 1:100",
      },
    ],
    results: [
      "El local pasó a tener la mayor ocupación media de mesas del barrio en horario de tarde.",
      "La barra de contacto acortó los tiempos de servicio durante las horas pico.",
      "Los materiales nobles redujeron a la mitad el presupuesto de mantenimiento mensual.",
    ],
  },
  {
    slug: "hall-torre-oceanica",
    title: "Hall Torre Oceánica",
    type: "Corporativo",
    location: "Puerto Madero, Buenos Aires",
    year: 2023,
    area: "640 m²",
    client: "Grupo Oceánica",
    cover: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80",
    tagline: "Un hall corporativo que recibe con gravedad y calma.",
    summary:
      "Rediseño del hall e islas de encuentro de una torre de oficinas: materialidad sobria, escala humana y privacidad sonora.",
    description: [
      "El hall de la Torre Oceánica era un vestíbulo impersonal de doble altura donde nadie se detenía. El grupo quería un espacio que recibiera a clientes e invitados con seriedad y calidez.",
      "Proyectamos islas de espera en madera y tela, una recepción baja de piedra y un juego de planos verticales que tamiza la luz e introduce calma acústica.",
      "El resultado equilibra la escala monumental de la torre con la escala humana del encuentro: se puede trabajar, reunirse o simplemente esperar en silencio.",
    ],
    objectives: [
      "Fomentar el encuentro informal entre plantas y empresas del grupo.",
      "Reducir la reverberación propia de la doble altura.",
      "Comunicar solidez y sobriedad, acorde a la marca corporativa.",
    ],
    concept: [
      "«Gravedad vertical»: planos de madera encementada construyen una secuencia de umbrales que ordenan los flujos.",
      "La calma sonora se logra con paneles acústicos textiles integrados a la arquitectura, no con elementos pegados.",
    ],
    layout: [
      {
        name: "Acceso",
        detail:
          "Recepción en piedra con registro visual directo a los ascensores y al café.",
      },
      {
        name: "Islas de encuentro",
        detail:
          "Módulos de espera con toma eléctrica y USB, mesas bajas y butacas de descanso.",
      },
      {
        name: "Área de café",
        detail:
          "Coffee spot self-service con barra de madera y asientos altos para reuniones informales.",
      },
    ],
    materials: [
      "Madera de roble teñida en gris",
      "Piedra caliza pulida",
      "Paneles acústicos de lana",
      "Microcemento en zonas de paso",
      "Acero negro en la carpintería",
    ],
    palette: [
      { name: "Nieve", hex: "#f3f1ec" },
      { name: "Gris antracita", hex: "#5a5c5a" },
      { name: "Roble gris", hex: "#8f877a" },
      { name: "Olivillo", hex: "#7c815b" },
      { name: "Tinta", hex: "#26231d" },
    ],
    furniture: [
      "Butacas de espera de cuero y madera",
      "Módulos de trabajo individuales con contacto",
      "Mesas de apoyo en piedra pulida",
      "Barra de café en roble",
    ],
    lighting: [
      "Cielorraso de luz difusa que evita sombras duras en los rostros",
      "Regaderas sobre la recepción y las áreas de café",
      "Iluminación perimetral vertical que acentúa los planos de madera",
    ],
    services: ["Interiorismo corporativo", "Diseño acústico", "Dirección de obra"],
    role: "Proyecto integral de interiorismo corporativo",
    gallery: [
      {
        src: img("1497366754035-f200968a6e72", 1800, 1200),
        alt: "Vestíbulo de la Torre Oceánica con islas de madera",
        seed: "hall-torre-1",
      },
      {
        src: img("1497366811353-6870744d04b2", 1500, 1000),
        alt: "Recepción en piedra y planos verticales de madera",
        seed: "hall-torre-2",
      },
      {
        src: img("1524758631624-e2822e304c36", 1500, 1000),
        alt: "Área de encuentro y café de la torre",
        seed: "hall-torre-3",
      },
      {
        src: img("1521737604893-d14cc237f11d", 1200, 1500),
        alt: "Detalle de butacas y materiales cálidos del hall",
        seed: "hall-torre-4",
      },
    ],
    plans: [
      {
        src: img("1581092160562-40aa08e78837", 1400, 1000),
        alt: "Plano del hall y las áreas de encuentro de la torre",
        label: "Planta hall · 1:150",
      },
    ],
    results: [
      "El espacio pasó de ser un lugar de tránsito a un punto de reunión utilizado por todas las plantas.",
      "Las mediciones de reverberación pos-obra cayeron por debajo del estándar de confort acústico.",
      "El café y las islas son hoy el lugar elegido para las reuniones informales del grupo.",
    ],
  },
  {
    slug: "piso-bruma",
    title: "Departamento Bruma",
    type: "Remodelación",
    location: "Mar del Plata, Buenos Aires",
    year: 2024,
    area: "95 m²",
    client: "Pareja joven",
    cover: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    tagline: "Rediseño completo de un departamento frente al mar.",
    summary:
      "Un departamento clásico remodelado de raíz: se demolieron muros, se recompuso el programa y se puso el horizonte al centro.",
    description: [
      "El departamento tenía una distribución cuadriculada que daba la espalda al mar: la vista se repartía en varios ambientes y se perdía en los corredores.",
      "La remodelación eliminó los tabiques intermedios para crear un gran espacio continuo que abre el horizonte. La cocina, antes un pasillo, se convirtió en el eje del departamento.",
      "El blanco roto y la madera clara amplifican la luz; el verde de los postigos evoca el paisaje costero sin competir con él.",
    ],
    objectives: [
      "Maximizar la vista al mar desde todas las áreas de estar.",
      "Ganar un dormitorio en suite dentro de la misma superficie.",
      "Rehacer instalaciones eléctricas y pluviales sin alterar la estructura del edificio.",
    ],
    concept: [
      "«Todo hacia el horizonte»: los ambientes se escorzan hacia el ventanal y el programa privado se compacta detrás.",
      "La costanera inspira una paleta de hueso, arena, madera y postigos verdes.",
    ],
    layout: [
      {
        name: "Área de día",
        detail:
          "Salón, comedor y cocina integrados en un solo espacio orientado al mar, con isla de trabajo.",
      },
      {
        name: "Área de noche",
        detail:
          "Suite principal con vestidor camino; segundo dormitorio de huéspedes con baño propio.",
      },
      {
        name: "Estudio",
        detail:
          "Rincón de trabajo junto al ventanal del salón, con mesa de madera y contacto oculto.",
      },
    ],
    materials: [
      "Madera clara de fresno",
      "Hormigón alisado",
      "Pintura de cal",
      "Postigos de madera verde olivo",
      "Cerámica de gran formato en los baños",
    ],
    palette: [
      { name: "Hueso", hex: "#f5f1e8" },
      { name: "Arena", hex: "#e3d7c0" },
      { name: "Fresno", hex: "#cbb492" },
      { name: "Verde olivo", hex: "#6d7353" },
      { name: "Tinta", hex: "#26231d" },
    ],
    furniture: [
      "Sofá de lino gris arena de tres cuerpos",
      "Tablón de fresno sobre ménsulas ocultas",
      "Isla de cocina en madera y mármol",
      "Cama de plataforma con cabecero de fresno",
      "Sillón de descanso junto al ventanal",
    ],
    lighting: [
      "Luz norte natural que acompaña todo el día de estar",
      "Regaderas LED ocultas en el cielorraso para la cocina",
      "Apliques de lectura junto a los rincones de descanso",
    ],
    services: ["Remodelación integral", "Cocinas y baños", "Mobiliario a medida"],
    role: "Dirección de obra y proyecto integral",
    gallery: [
      {
        src: img("1600607687939-ce8a6c25118c", 1800, 1200),
        alt: "Salón integrado del Departamento Bruma con vista al mar",
        seed: "piso-bruma-1",
      },
      {
        src: img("1600607687644-aac4c3eac7f4", 1500, 1000),
        alt: "Cocina con isla en madera y mármol, abierta al salón",
        seed: "piso-bruma-2",
      },
      {
        src: img("1600121848594-d8644e57abab", 1500, 1000),
        alt: "Comedor y ventanal de piso a techo sobre la costanera",
        seed: "piso-bruma-3",
      },
      {
        src: img("1598928506311-c55ded91a20c", 1200, 1500),
        alt: "Dormitorio principal de Bruma con cabecero de fresno",
        seed: "piso-bruma-4",
      },
    ],
    plans: [
      {
        src: img("1581092160562-40aa08e78837", 1400, 1000),
        alt: "Plano de la distribución remodelada de Bruma",
        label: "Planta remodelada · 1:100",
      },
    ],
    beforeAfter: [
      {
        before: img("1600607687939-ce8a6c25118c", 1400, 1000),
        after: img("1600607687644-aac4c3eac7f4", 1400, 1000),
        alt: "Antes y después de la cocina y salón integrados",
      },
      {
        before: img("1600121848594-d8644e57abab", 1400, 1000),
        after: img("1493809842364-78817add7ffb", 1400, 1000),
        alt: "Antes y después del espacio de día",
      },
    ],
    results: [
      "La vista al mar ahora acompaña todos los momentos del día, no solo el salón.",
      "El dormitorio en suite resolvió la necesidad de un baño propio sin restar metros.",
      "La obra se ejecutó en cuatro meses con el departamento deshabitado.",
    ],
  },
  {
    slug: "panaderia-masa",
    title: "Panadería Masa",
    type: "Comercial",
    location: "Coghlan, Buenos Aires",
    year: 2023,
    area: "80 m²",
    client: "Masa Panadería",
    cover: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1600&q=80",
    tagline: "Una panadería que huele a casa y se ve como oficio.",
    summary:
      "Interiorismo para una panadería de barrio con horno a la vista: la producción como espectáculo y el pan como protagonista.",
    description: [
      "Masa es una panadería de fermentación natural en el corazón de Coghlan. El local debía hacer visible el oficio: el pan se amasa, se hornea y se vende a la vista del vecino.",
      "Diseñamos una línea visual que conduce la mirada del mostrador al horno. La madera clara, el yeso y el hierro negro sostienen una atmósfera artesanal, sin nostalgia.",
      "El espacio prioriza la velocidad de la venta y, a la vez, invita a quedarse: una barra larga y un banco junto al ventanal convierten la compra en pausa.",
    ],
    objectives: [
      "Mostrar el proceso de elaboración como valor del producto.",
      "Acomodar la fila de la mañana y de la tarde sin chocar con la operación.",
      "Generar una atmósfera de barrio que invite a quedarse y a volver.",
    ],
    concept: [
      "«El pan se hace delante de todos». El horno, piedra angular, se trata como una pieza escenográfica del local entero.",
      "La madera de árbol del pan, el yeso y el hierro negro crean una materialidad que envejece bien con el uso.",
    ],
    layout: [
      {
        name: "Frente",
        detail:
          "Mostrador de servicio con vitrina embutida, zona de pago y banco corrido frente al ventanal.",
      },
      {
        name: "Producción",
        detail:
          "Horno y bacha a la vista, separados por una carpintería de hierro y vidrio.",
      },
      {
        name: "Molienda",
        detail:
          "Molinillo de exhibición y estantería de granos que explica el origen del harina.",
      },
    ],
    materials: [
      "Madera de iroko",
      "Hormigón pulido",
      "Yeso y cal en paredes",
      "Hierro negro en carpinterías",
      "Ladrillo a la vista refractario",
    ],
    palette: [
      { name: "Miga", hex: "#f4efe3" },
      { name: "Harina", hex: "#e7dfd1" },
      { name: "Madera", hex: "#9a683a" },
      { name: "Corteza", hex: "#6a4526" },
      { name: "Olivillo", hex: "#7c815b" },
    ],
    furniture: [
      "Banco corrido de madera tapizado",
      "Mesa alta de degustación junto al mostrador",
      "Estantería de molienda en hierro negro",
      "Cestos de exhibición de pan artesanales",
    ],
    lighting: [
      "Luz cálida sobre el horno que acentúa el calor de la producción",
      "Regaderas sobre la vitrina para la lectura del color del pan",
      "Luz natural del ventanal tamizada por cortinas de lino",
    ],
    services: ["Interiorismo comercial", "Dirección de obra", "Mobiliario a medida"],
    role: "Proyecto integral de interiorismo comercial",
    gallery: [
      {
        src: img("1509440159596-0249088772ff", 1800, 1200),
        alt: "Mostrador de Panadería Masa con pan artesanal expuesto",
        seed: "panaderia-masa-1",
      },
      {
        src: img("1517430816045-df4b7de11d1d", 1200, 1500),
        alt: "Detalle del pan y la vitrina de Masa",
        seed: "panaderia-masa-2",
      },
      {
        src: img("1555507036-ab1f4038808a", 1200, 1500),
        alt: "Barra y banco junto al ventanal de la panadería",
        seed: "panaderia-masa-3",
      },
      {
        src: img("1453614512568-c4024d13c247", 1500, 1000),
        alt: "Ambiente cálido de la panadería de barrio",
        seed: "panaderia-masa-4",
      },
    ],
    plans: [
      {
        src: img("1581092160562-40aa08e78837", 1400, 1000),
        alt: "Plano de planta de la Panadería Masa",
        label: "Planta · 1:100",
      },
    ],
    results: [
      "La fila de la mañana se ordenó sin interferir con la producción.",
      "El horno a la vista se convirtió en el lugar que detiene a los vecinos y atrae curiosos.",
      "Masa duplicó la permanencia media de sus clientes, y con ella la compra por visita.",
    ],
  },
  {
    slug: "estudio-ruka",
    title: "Estudio Ruka",
    type: "Especiales",
    location: "Palermo Hollywood, Buenos Aires",
    year: 2025,
    area: "180 m²",
    client: "Ruka Yoga & Bienestar",
    cover: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80",
    tagline: "Un estudio de yoga y bienestar que se siente como un retiro.",
    summary:
      "Proyecto de bienestar: salas de práctica, vestidores y recepción en un registro de calma y materialidad terrestre.",
    description: [
      "Ruka buscaba un espacio que preparara la mente antes de entrar a las salas: nada de luces fuertes ni superficies frías. Un lugar donde la calma se percibiera desde el umbral.",
      "Diseñamos una secuencia de descanso: recepción en madera, corredor de transición con luz baja y salas de práctica en tonos tierra.",
      "La madera de roble, el hormigón teñido y el textil de lino dominan la materialidad. La vegetación interior aporta humedad y vida a cada sala.",
    ],
    objectives: [
      "Amortiguar el ruido de la calle y lograr privacidad acústica entre salas.",
      "Crear una zona de transición que apacigüe a quien entra.",
      "Resolver vestidores compactos pero confortables para clases consecutivas.",
    ],
    concept: [
      "«Retiro dentro de la ciudad»: una progresión de umbrales que baja el ritmo del visitante paso a paso.",
      "Tonos tierra y madera clara evocan el piso del bosque; la luz es siempre indirecta y tibia.",
    ],
    layout: [
      {
        name: "Salas de práctica",
        detail:
          "Una sala principal de 60 m² con espejos laterales y una segunda de 35 m² para talleres.",
      },
      {
        name: "Recepción",
        detail:
          "Mostrador bajo de madera, zona de tisana y estantería de accesorios.",
      },
      {
        name: "Vestidores",
        detail:
          "Taquillas de roble, bancos y tres duchas por sexo, con iluminación tenue.",
      },
    ],
    materials: [
      "Roble natural cepillado",
      "Hormigón teñido",
      "Lino y algodón en textiles",
      "Barro y cal en revoques",
      "Vidrio esmerilado de privacidad",
    ],
    palette: [
      { name: "Crema", hex: "#f2ede0" },
      { name: "Arena", hex: "#d9cfb8" },
      { name: "Tierra", hex: "#a1835f" },
      { name: "Roble", hex: "#b99a72" },
      { name: "Olivillo", hex: "#7c815b" },
    ],
    furniture: [
      "Bancos bajos de roble en los vestidores",
      "Sillones de descanso en la recepción",
      "Estantería de accesorios de yoga",
      "Lámparas de papel y lino de luz difusa",
    ],
    lighting: [
      "Luz indirecta regulable en las salas de práctica",
      "Focos cálidos en la recepción que acompañan el descanso",
      "Iluminación de acento sobre la vegetación y las paredes de barro",
    ],
    services: ["Interiorismo comercial", "Acústica", "Diseño de iluminación"],
    role: "Proyecto integral y dirección de iluminación",
    gallery: [
      {
        src: img("1544161515-4ab6ce6db874", 1800, 1200),
        alt: "Sala principal del Estudio Ruka con suelo de madera",
        seed: "estudio-ruka-1",
      },
      {
        src: img("1519167758481-83f550bb49b3", 1500, 1000),
        alt: "Espacio de práctica con luz indirecta tibia",
        seed: "estudio-ruka-2",
      },
      {
        src: img("1596178065887-1198b6148b2b", 1200, 1500),
        alt: "Detalle de materialidad en barro y madera",
        seed: "estudio-ruka-3",
      },
      {
        src: img("1598300042247-d088f8ab3a91", 1200, 1500),
        alt: "Rincón de descanso en la recepción de Ruka",
        seed: "estudio-ruka-4",
      },
    ],
    plans: [
      {
        src: img("1600585153490-76fb20a32601", 1400, 1000),
        alt: "Render de la sala de práctica del Estudio Ruka",
        label: "Render · sala principal",
      },
    ],
    results: [
      "Los vecinos describen el ingreso como un cambio de ritmo inmediato respecto a la calle.",
      "La sala principal funciona en régimen continuo de clases sin solaparse ni ensordecer.",
      "La iluminación regulable permite adaptar la atmósfera a cada tipo de práctica.",
    ],
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