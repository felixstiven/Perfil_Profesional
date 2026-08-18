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

      <div className="w-full lg:w-[420px] h-[240px] md:h-[280px] rounded-xl overflow-hidden border border-slate-200 shadow-md relative group shrink-0 bg-slate-100">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </motion.div>
  );
};

export default SingleProject;
