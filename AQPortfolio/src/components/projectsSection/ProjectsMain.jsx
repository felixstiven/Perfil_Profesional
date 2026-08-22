import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";

const projects = [
  {
    name: "GOSYT - Gestión de Órdenes & Arquitectura Real-Time",
    category: "Proyecto Insignia — Construcción Paso a Paso & Entorno Real",
    description:
      "Plataforma en desarrollo activo para la creación, seguimiento y gestión del ciclo de vida de órdenes de trabajo en tiempo real. No es una plantilla estática: se construye paso a paso para dominar cada flujo y arquitectura, aplicando metodologías de nivel empresarial (GitFlow con ramas main, develop y features, CI/CD) y aprendizaje asistido con IA para comprender la lógica profunda de cada módulo.",
    architecture:
      "Servidor de staging on-premise 'La Torre' (hardware rescatado y puesto en valor con Docker Compose y Tailscale VPN). Proxy inverso unificado con Nginx, eventos síncronos con Socket.io y base de datos dual (PostgreSQL para transacciones + MongoDB 4.4.29 optimizado para recursos).",
    tags: ["Docker & Staging", "Socket.io", "Nginx", "GitFlow & CI/CD", "PostgreSQL", "MongoDB", "Tailscale", "React"],
    year: "2025 - 2026 | Desarrollo Activo & Staging",
    image: "./images/gosyt.png",
    link: "https://gosyt.vercel.app/",
    isFeatured: true,
  },
  {
    name: "AQPortfolio - Portafolio Profesional & Agente IA",
    category: "Arquitectura Frontend & Agente Conversacional LLM",
    description: "Sitio web profesional con diseño Bento Grid, estética SaaS de alta legibilidad, ventanas modales interactivas y Agente de Inteligencia Artificial integrado.",
    architecture: "Desarrollado con React 18, Tailwind CSS, Framer Motion y Vite. Agente conversacional LLM implementado y funcional (respuestas dinámicas en vivo actualmente pausadas por límite de cuota/tokens de API, demostrando competencia en Prompt Engineering e integración de IA).",
    tags: ["React 18", "Agente IA / LLM", "Tailwind CSS", "Vite", "Framer Motion", "EmailJS", "Railway"],
    year: "2026",
    image: "./images/certificates/protfolio.png",
    link: "https://perfilprofesional-production-2e21.up.railway.app/",
    isFeatured: false,
  },
];

const ProjectsMain = () => {
  return (
    <section id="projects" className="max-w-[1200px] mx-auto my-24 px-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#ffff]">
          Casos de Estudio & <span className="text-gradient-teal">Proyectos</span>
        </h2>
        <p className="text-slate-100 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Demostración de decisiones de ingeniería, soluciones de arquitectura e implementación de código.
        </p>
      </motion.div>

      <div className="flex flex-col gap-12 max-w-[1100px] mx-auto">
        {projects.map((project, index) => (
          <SingleProject key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsMain;
