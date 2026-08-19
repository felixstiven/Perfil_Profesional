import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";
import { FaExternalLinkAlt, FaCogs } from "react-icons/fa";

const SingleProject = ({ project }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`light-card rounded-2xl border p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-center ${
        project.isFeatured ? "border-[#00A797]/40 shadow-lg" : "border-slate-200"
      }`}
    >
      <div className="flex-1 space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#00A797]/10 text-[#00A797] text-xs font-mono font-semibold">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-500">{project.year}</span>
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-bold text-[#0A192F]">
          {project.name}
        </h3>

        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          {project.description}
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00A797] font-semibold">
            <FaCogs className="text-sm" />
            <span>ARQUITECTURA & DECISIÓN TÉCNICA</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed font-sans">
            {project.architecture}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 text-xs font-mono"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gosyt-primary px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 cursor-pointer"
          >
            <span>Ver Proyecto</span>
            <FaExternalLinkAlt className="text-xs" />
          </a>
        </div>
      </div>

      {/* Frame de Navegador Profesional (Browser Mockup Completo) */}
      <div className="w-full lg:w-[500px] rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl group shrink-0 flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-[#00A797]/50">
        {/* Barra de Navegación del Browser (Estilo macOS) */}
        <div className="bg-slate-100/90 border-b border-slate-200 px-3.5 py-2 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-red-500/20"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-yellow-500/20"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-green-500/20"></span>
          </div>

          <div className="px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-mono text-slate-500 truncate max-w-[210px] flex items-center justify-center gap-1">
            <span className="text-[#10B981]">https://</span>
            <span>{project.name.includes("GOSYT") ? "gosyt.app/dashboard" : "stivenfelix.dev"}</span>
          </div>

          <div className="w-8"></div>
        </div>

        {/* Contenedor de Imagen Ajustado al 100% (Sin Recortes) */}
        <div className="w-full aspect-[16/10] overflow-hidden bg-[#F8FAFC] p-2 flex items-center justify-center relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain rounded-md group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProject;
