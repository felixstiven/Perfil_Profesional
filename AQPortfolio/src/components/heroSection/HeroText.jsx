import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";
import { Link } from "react-scroll";
import { FaWhatsapp, FaCodeBranch, FaUserGraduate } from "react-icons/fa";

const HeroText = () => {
  const whatsappUrl = "https://wa.me/573107729036?text=Hola%20Stiven,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.";

  return (
    <div className="flex flex-col gap-5 h-full  w-full bg-cover bg-center bg-no-repeat justify-center md:text-left sm:text-center">
      {/* Live Badge */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-tr from-[#040404] via-[#626565] to-slate-100  border border-slate-200 w-fit sm:mx-auto md:mx-0 shadow-sm"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse"></span>
        <span className="text-xs font-mono font-semibold text-slate-300">
          Staging Server &apos;La Torre&apos; Active & Online
        </span>
      </motion.div>

      <motion.div
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=" relative w-full p-6 bg-gradient-to-tr from-[#040404] via-[#626565] to-slate-100 backdrop-blur-md md:p-8 rounded-2xl border-2 border-slate-600/60 shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_0_15px_rgba(56,189,248,0.15)] flex flex-col gap-5 justify-center" 
      >
  
        <div className="relative z-10 flex flex-col gap-5 hover:scale-105 transition-transform duration-500" >
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="text-[#56f2e2] font-semibold text-sm tracking-widest uppercase"
          >
            Full - Stack Developer
          </motion.h2>
    
          <motion.h1
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="md:text-5xl lg:text-6xl sm:text-4xl font-display font-extrabold text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]leading-tight"
          >
            Stiven Felix <span className="text-gradient-teal">Alvis</span>
          </motion.h1>
    
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="text-[#E2E8F0] text-base md:text-lg leading-relaxed font-sans"
          >
            Desarrollador Full Stack enfocado en construir y aprender mediante <strong className="text-[#00f0FF] ">proyectos de entorno real paso a paso</strong>. Comprendo los fundamentos desde el codigo en React/Node.js hasta la infraestructura local usando <strong className="text-[#00f0FF]">Docker, CI/CD Y Servidores de Staging</strong>, pontenciando mi aprendizaje con IA y Principios de Arquitectura de Software.
          </motion.p>
    
          {/* Action Buttons */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="flex flex-wrap gap-3 mt-2 sm:justify-center md:justify-start"
          >
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              to="projects"
              className="btn-gosyt-primary px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 cursor-pointer text-sm"
            >
              <FaCodeBranch className="text-base" />
              Ver Proyectos
            </Link>
    
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              to="about"
              className="px-5 py-2.5 rounded-xl font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:text-[#0A192F] transition-all flex items-center gap-2 cursor-pointer text-sm shadow-xs"
            >
              <FaUserGraduate className="text-sm text-[#00A797]" />
              Sobre Mí
            </Link>
    
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gosyt-secondary px-5 py-2.5 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 text-sm"
            >
              <FaWhatsapp className="text-lg text-[#10B981]" />
              WhatsApp
            </a>
          </motion.div>
        </div>  
      </motion.div>  
    </div>
  );
};

export default HeroText;
