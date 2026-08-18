import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";

const projects = [
  {
    name: "GOSYT — Sistema de Órdenes & Tiempo Real",
    category: "Proyecto Insignia — SaaS & Real-Time Architecture",
    description: "Plataforma enterprise para la gestión de órdenes de trabajo, sincronización síncrona en tiempo real y arquitectura contenerizada.",
    architecture: "Proxy inverso Nginx unificado, WebSockets bi-direccionales con Socket.io, base de datos híbrida (PostgreSQL + MongoDB 4.4.29 para hardware legacy) y despliegue en servidor físico 'La Torre' con Tailscale VPN.",
    tags: ["Docker", "Socket.io", "Nginx", "PostgreSQL", "MongoDB", "Tailscale", "React"],
    year: "2025 – En Producción / Staging",
    image: "./images/gosyt.png",
    link: "https://github.com/Proteccion-de-Ramas-Principales/GOSYT",
    isFeatured: true,
  },
  {
    name: "AQPortfolio — Portafolio Profesional & IA",
    category: "Arquitectura Frontend & Agente Conversacional",
    description: "Sitio web profesional con diseño Bento Grid, estética SaaS de alta legibilidad, ventanas modales interactivas y agente conversacional flotante.",
    architecture: "Desarrollado con React 18, Tailwind CSS, Framer Motion y Vite. Integración con EmailJS y WhatsApp API.",
    tags: ["React 18", "Tailwind CSS", "Vite", "Framer Motion", "EmailJS", "Railway"],
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
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-[#0A192F]">
          Casos de Estudio & <span className="text-gradient-teal">Proyectos</span>
        </h2>
        <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto">
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
