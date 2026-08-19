import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";
import { Link } from "react-scroll";
import { FaWhatsapp, FaCodeBranch } from "react-icons/fa";

const HeroText = () => {
  const whatsappUrl = "https://wa.me/573107729036?text=Hola%20Stiven,%20vi%20tu%20portafolio%20de%20arquitectura%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.";

  return (
    <div className="flex flex-col gap-5 h-full justify-center md:text-left sm:text-center max-w-[650px]">
      {/* Live Badge */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 w-fit sm:mx-auto md:mx-0 shadow-sm"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
        <span className="text-xs font-mono font-semibold text-[#00A797]">
          Staging Server  &apos;La Torre&apos; Active & Online
        </span>
      </motion.div>

      <motion.h2
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-[#00A797] font-semibold text-sm tracking-widest uppercase"
      >
        Full Stack & Systems Architect
      </motion.h2>

      <motion.h1
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-5xl lg:text-6xl sm:text-4xl font-display font-extrabold text-[#0A192F] leading-tight"
      >
        Stiven Felix <span className="text-gradient-teal">Alvis</span>
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-slate-600 text-base md:text-lg leading-relaxed font-sans"
      >
        Especializado en diseñar e implementar <strong className="text-[#0A192F]">aplicaciones distribuidas en tiempo real</strong>, arquitecturas híbridas (Local + Nube), infraestructura con Docker/Nginx y sistemas escalables de alta disponibilidad.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="flex flex-wrap gap-4 mt-2 sm:justify-center md:justify-start"
      >
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          to="projects"
          className="btn-gosyt-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 cursor-pointer text-sm"
        >
          <FaCodeBranch className="text-base" />
          Ver Proyectos Insignia
        </Link>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gosyt-secondary px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 text-sm"
        >
          <FaWhatsapp className="text-lg text-[#10B981]" />
          Chat por WhatsApp
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;
