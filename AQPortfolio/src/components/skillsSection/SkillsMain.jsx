import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";
import { FaServer, FaDocker, FaDatabase, FaCode, FaBolt, FaNetworkWired } from "react-icons/fa";
import { SiSocketdotio, SiNginx, SiPostgresql, SiMongodb, SiTailwindcss, SiTypescript, SiReact, SiVite } from "react-icons/si";

const skillCategories = [
  {
    title: "Real-Time & Architecture",
    icon: <FaBolt className="text-[#00A797]" />,
    description: "Sistemas síncronos en tiempo real con WebSockets y proxies unificados.",
    tags: [
      { name: "Socket.io / WebSockets", icon: <SiSocketdotio /> },
      { name: "Nginx Reverse Proxy", icon: <SiNginx /> },
      { name: "Arquitectura Híbrida", icon: <FaNetworkWired /> },
      { name: "Event-Driven APIs", icon: <FaServer /> },
    ],
    highlight: "GOSYT Real-Time Sync",
  },
  {
    title: "DevOps & Infrastructure",
    icon: <FaDocker className="text-[#00A797]" />,
    description: "Contenedores, redes privadas y despliegues continuos en servidores físicos y nube.",
    tags: [
      { name: "Docker & Compose", icon: <FaDocker /> },
      { name: "Tailscale VPN Mesh", icon: <FaNetworkWired /> },
      { name: "Servidor 'La Torre'", icon: <FaServer /> },
      { name: "Railway Cloud Deploy", icon: <FaCode /> },
    ],
    highlight: "Staging + Production",
  },
  {
    title: "Backend & Databases",
    icon: <FaDatabase className="text-[#00A797]" />,
    description: "Servicios robustos, diseño de esquemas y optimización para hardware legacy.",
    tags: [
      { name: "Node.js & Express", icon: <FaServer /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB 4.4.29", icon: <SiMongodb /> },
    ],
    highlight: "Postgres + Mongo Dual DB",
  },
  {
    title: "Frontend & UI Engineering",
    icon: <SiReact className="text-[#00A797]" />,
    description: "Interfaces reactivas, estados globales estructurados y diseño profesional.",
    tags: [
      { name: "React 18", icon: <SiReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Vite Bundler", icon: <SiVite /> },
      { name: "Redux Toolkit", icon: <FaCode /> },
    ],
    highlight: "Interface Systems",
  },
];

const SkillsMain = () => {
  return (
    <section id="skills" className="w-full overflow-hidden relative mx-auto my-24 px-4">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-50">
          Stack Técnico & <span className="text-gradient-teal">Arquitectura</span>
        </h2>
        <p className="text-slate-100 text-sm md:text-base mt-2 max-w-xl mx-auto">
          Capacidades de ingeniería organizadas por módulos para construir aplicaciones escalables.
        </p>
      </motion.div>

      {/* Carrusel Infinito */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] py-4">
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className="flex shrink-0 gap-6 pr-6">
            {skillCategories.map((category, index) => (
              <div
                key={`${groupIndex}-${index}`}
                className="light-card w-[350px] md:w-[420px] shrink-0 p-6 rounded-2xl flex flex-col justify-between shadow-[0_0_15px_rgba(0,240,255,0.15)]"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3 text-xl font-display font-bold text-slate-50">
                      <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                        {category.icon}
                      </div>
                      <h3>{category.title}</h3>
                    </div>

                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#00A797]/30 text-[#00A797] border border-[#00A797]/20 font-semibold">
                      {category.highlight}
                    </span>
                  </div>

                  <p className="text-slate-100 text-sm mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {category.tags.map((tag, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-medium hover:border-[#00A797] transition-colors"
                      >
                        <span className="text-[#00A797] text-sm">{tag.icon}</span>
                        <span>{tag.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsMain;
