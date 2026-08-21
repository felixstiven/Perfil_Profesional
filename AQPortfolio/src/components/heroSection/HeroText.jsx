import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";
import { Link } from "react-scroll";
import { FaWhatsapp, FaCodeBranch, FaUserGraduate } from "react-icons/fa";

const HeroText = () => {
  const whatsappUrl =
    "https://wa.me/573107729036?text=Hola%20Stiven,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.";

  return (
    <div className="flex flex-col gap-5 h-full  w-full bg-cover bg-center bg-no-repeat justify-center md:text-left sm:text-center">
      {/* Live Badge */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="inline-flex items-center bg-card-gradient gap-2 px-4 py-1.5 rounded-full   border border-slate-200 w-fit sm:mx-auto md:mx-0 shadow-sm"
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
        className=" relative w-full p-6  md:p-8 rounded-2xl  shadow-[0_0_15px_rgba(0,240,255,0.15)] flex flex-col gap-5 justify-center"
      >
        <div className="relative z-10 flex flex-col gap-5 hover:scale-105 transition-transform duration-500">
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
            className="md:text-5xl lg:text-6xl sm:text-4xl font-display font-extrabold text-brand-title drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]leading-tight"
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
            Desarrollador Full Stack enfocado en construir y aprender mediante{" "}
            <strong className="text-[#00f0FF] ">
              proyectos de entorno real paso a paso
            </strong>
            . Comprendo los fundamentos desde el codigo en React/Node.js hasta
            la infraestructura local usando{" "}
            <strong className="text-[#00f0FF]">
              Docker, CI/CD Y Servidores de Staging
            </strong>
            , pontenciando mi aprendizaje con IA y Principios de Arquitectura de
            Software.
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
              className="btn-gosyt-primary  bg-[#00F0FF] px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 cursor-pointer text-sm hover:scale-[1.03] duration-300"
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
              className="px-5 py-2.5 rounded-xl font-semibold border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:text-[#0A192F] hover:scale-[1.03] duration-300 transition-all flex items-center gap-2 cursor-pointer text-sm shadow-xs"
            >
              <FaUserGraduate className="text-sm text-[#00A797]" />
              Sobre Mí
            </Link>

            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl font-bold cursor-pointer bg-card-gradient overflow-hidden relative z-100 group px-8 py-2 inline-flex items-center"
            >
                <span className="relative z-10 duration-500 flex items-center text-slate-100 text-sm gap-2">
                  <FaWhatsapp className="text-lg text-[#10B981]" />
                  WhatsApp
                </span>
                <span className="absolute w-full h-full bg-[#626565] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500 pointer-events-none"></span>
                <span className="absolute w-full h-full bg-card-gradient -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500 pointer-events-none"></span>
            </a>
 
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
