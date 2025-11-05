// Menu
export interface MenuItem {
  texto: string;
  href?: string;
  style?: string;
  submenu?: MenuItem[];
  
}
export const menuItems: MenuItem[] = [
  {
    texto: "¿Quienes Somos?",
    style:
      "text-letras font-medium px-2 py-3 inline-block transition duration-300 group-hover:text-menu group-hover:border-b-2 border-bordes",
    submenu: [
      {
        texto: "Misión y Visión",
        href: "/misionyvision",
      },
      {
        texto: "Nuestros Valores",
        href: "/nuestrosvalores",
      },
      {
        texto: "Video Institucional",
        href: "/videoinstitucional",
      },
    ],
  },
  {
    texto: "Liceo Aytue",
    style:
      "text-white font-medium px-2 py-3 inline-block transition duration-300 group-hover:text-menu group-hover:border-b-2 border-red-500",
    submenu: [
      {
        texto: "Equipo Aytue",
        href: "/equipoaytue",
      },
      {
        texto: "Historia",
        href: "/historia",
      },
      {
        texto: "Emblemas",
        href: "/emblemas",
      },
      {
        texto: "Curriculum Vitae",
        href: "/cv",
      },
      {
        texto: "Contacto",
        href: "/contacto",
      },
    ],
  },
  {
    texto: "PEI",
    style:
      "text-white font-medium px-2 py-3 inline-block transition duration-300 group-hover:text-menu group-hover:border-b-2 border-red-500",
    href: "public/pdf/PEI.pdf",
  },
  {
    texto: "Reglamento",
    style:
      "text-white font-medium px-2 py-3 inline-block transition duration-300 group-hover:text-menu group-hover:border-b-2 border-red-500",
    submenu: [
      {
        texto: "Manual de Convivencia Escolar",
        href: "public/pdf/ManualConvivencia.pdf",
      },
      {
        texto: "Reglamento de Evaluación",
        href: "public/pdf/REGLAMENTOEVALUACIÓN.pdf",
      },
      {
        texto: "RICE",
        href: "public/pdf/RICE.pdf",
      },
      {
        texto: "Marco Normativo Para Empleados Públicos",
        href: "public/pdf/marco-normativo-empleados-publicos.pdf",
      },
    ],
  },
  {
    texto: "Sello Tecnológico",
    style:
      "text-white font-medium px-2 py-3 inline-block transition duration-300 group-hover:text-menu group-hover:border-b-2 border-red-500",
    submenu: [
      {
        texto: "Nuestro aporte y apuesta de futuro",
        href: "/aporte",
      },
      {
        texto: "Centro de producción audiovisual",
        href: "/produccionaudiovisual",
      },
    ],
  },
  {
    texto: "Niveles Educacionales",
    style:
      "text-white font-medium px-2 py-3 inline-block transition duration-300 group-hover:text-menu group-hover:border-b-1 border-red-500",
    submenu: [
      {
        texto: "Educación Parvularia",
        submenu: [
          { texto: "Pre-Kínder A",},
          { texto: "Pre-Kínder B",},
          { texto: "Kinder A",},
          { texto: "Kinder B",},
        ],
      },
      {
        texto: "Educación Básica",
        submenu: [
          { texto: "1º A",},
          { texto: "1º B",},
          { texto: "2º A",},
          { texto: "2º B",},
          { texto: "3º A",},
          { texto: "3º B",},
          { texto: "4º A",},
          { texto: "4º B",},
          { texto: "5º A",},
          { texto: "5º B",},
          { texto: "6º A",},
          { texto: "6º B",},
        ],
      },
      {
        texto: "Educación Media",
        submenu: [
          { texto: "7º A",},
          { texto: "7º B",},
          { texto: "8º A",},
          { texto: "8º B",},
          { texto: "1º Medio A",},
          { texto: "1º Medio B",},
          { texto: "2º Medio A",},
          { texto: "2º Medio B",},
          { texto: "3º Medio HC",},
          { texto: "3º Medio TP",},
          { texto: "4º Medio HC",},
          { texto: "4º Medio TP",},
        ],
      },
      {
        texto: "Educación Adulta",
        submenu: [
          { texto: "1º y 2º Medio",},
          { texto: "3º y 4º Medio",},
        ],
      },
    ],
  },
  {
    texto: "Técnico Profesional",
    style:
      "text-white font-medium px-2 py-3 inline-block transition duration-300 group-hover:text-menu group-hover:border-b-2 border-red-500",
    submenu: [
      {
        texto: "Conectividad y Redes",
        href: "/conectividadyredes",
      },
      {
        texto: "Infraestructura Disponible para TP",
        href: "/infraestructura",
      },
      {
        texto: "Salidas Pedagógicas de la Especialidad",
        href: "/salidaspedagogica",
      },
      {
        texto: "Convenio Interinstitucional IFR, Universidad de los Lagos",
        href: "/convenioulagos",
      },
    ],
  },
];

// Cards
export interface CardMisionyVision {
  title: string;
  description: string;
  class?: string; 
}
export interface CardTextProps {  //arreglar aun no esta completo
  description: string;
  class?: string;
}
export interface CardAporte {
  title: string;
  description: string;
  class?: string; 
}
// Imagenes
export interface ImageProps {
  name: string;
  class: string;
  title: string;
}
export interface ImageFooterProps {
  name: 'instagram' | 'facebook' | 'youtube' | 'gmail';
  class: string;
  href: string;
}
// Equipo Aytue
export interface TeamMember {
  src: string;
  text: string;
  class?: string; 
}
export const directivo: TeamMember[] = [
  { src: 'src/assets/images/liceo-aytue/equipo-directivo.jpg', text: 'Equipo directivo' }
];
export const gestion: TeamMember[] = [
  { src: 'src/assets/images/liceo-aytue/equipo-gestion.jpg', text: 'Equipo de Gestion' },
  { src: 'src/assets/images/liceo-aytue/equipo-gestion2.jpg', text: 'Equipo de Gestion' },
  { src: 'src/assets/images/liceo-aytue/equipo-gestion3.jpg', text: 'Equipo de Gestion', class: '!gap-4' },
];
export const profesores: TeamMember[] = [
  { src: 'src/assets/images/liceo-aytue/profesor.jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (2).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (3).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (4).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (5).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (6).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (7).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (11).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (12).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (13).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (14).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (8).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (9).jpg', text: 'Equipo de Profesores' },  
  { src: 'src/assets/images/liceo-aytue/profesor (10).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (11).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (12).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (13).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (14).jpg', text: 'Equipo de Profesores' },
  { src: 'src/assets/images/liceo-aytue/profesor (15).jpg', text: 'Equipo de Profesores' },
];
export const asistentes: TeamMember[] = [
  { src: 'src/assets/images/liceo-aytue/asistente.jpg', text: 'Equipo de Asistentes' },
  { src: 'src/assets/images/liceo-aytue/asistente2.jpg', text: 'Equipo de Asistentes' },
  { src: 'src/assets/images/liceo-aytue/asistente3.jpg', text: 'Equipo de Asistentes', class: '!gap-4' },
  { src: 'src/assets/images/liceo-aytue/asistente4.jpg', text: 'Equipo de Asistentes', class: '!gap-4' },
  { src: 'src/assets/images/liceo-aytue/asistente5.jpg', text: 'Equipo de Asistentes', class: '!gap-4' },
  { src: 'src/assets/images/liceo-aytue/asistente6.jpg', text: 'Equipo de Asistentes', class: '!gap-4' },
];

export const articulosDeNoticias = [
  {
    href: "../blog/articulo-1.html",
    titulo: "Convenio en acción: Liceo Aytue y Universidad de Los Lagos",
    autor: "cmunoz",
    fecha: "12 Sep 2025",
    resumen: "Esta semana, la profesora de la Universidad de Los Lagos Catalina Sánchez llegó junto a estudiantes en práctica de Técnico Deportivo de 2° año..."
  },
  {
    href: "../blog/articulo-2.html",
    titulo: "Celebrando nuestras tradiciones",
    autor: "cmunoz",
    fecha: "10 Sep 2025",
    resumen: "Esta mañana, 09 de septiembre de 2025, dimos inicio a las muestras de bailes típicos en el marco de la celebración de nuestras Fiestas Patrias."
  },
  {
    href: "../blog/articulo-3.html",
    titulo: "Visita al Planetario del Liceo Aytue",
    autor: "cmunoz",
    fecha: "10 Sep 2025",
    resumen: "Durante esta semana, los cursos de 3° a 5° básico tuvieron la oportunidad de visitar el Planetario de nuestro Liceo Aytue, actividad con la que se dio cierre a la unidad del Sistema Solar."
  },
  {
    href: "../blog/articulo-4.html",
    titulo: "Visita al Planetario (Cursos 3° a 5°)",
    autor: "cmunoz",
    fecha: "10 Sep 2025",
    resumen: "Durante esta semana, los cursos de 3° a 5° básico tuvieron la oportunidad de visitar el Planetario de nuestro Liceo Aytue, actividad con la que se dio cierre a la unidad del Sistema Solar."
  }
];
export const imagenesCarrusel = [
  "src/assets/images/index/imgi_14_RECREO-2-1800PX.jpg",
  "src/assets/images/index/imgi_15_Copia-de-IMG_2853-2.jpg",
  "src/assets/images/index/imgi_16_aula-2-1800px.jpg",
  "src/assets/images/index/imgi_17_BIBLIOTECA-1800PX.jpg",
  "src/assets/images/index/imgi_18_4to-medio-hc.jpg",
  "src/assets/images/index/imgi_19_COMPUTACION-1800PX.jpg",
  "src/assets/images/index/imgi_20_LABORATORIO-1800PX.jpg",
  "src/assets/images/index/imgi_21_RECREO-1800PX.jpg",
  "src/assets/images/index/imgi_23_TV-AYTUE-1800PX.jpg",
  "src/assets/images/index/imgi_24_PROYECCION-1800PX_.jpg"
];