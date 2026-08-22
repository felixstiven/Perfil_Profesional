import ContactForm from "./ContactForm";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactMeMain = () => {
  const whatsappUrl = "https://wa.me/573107729036?text=Hola%20Stiven,%20vi%20tu%20portafolio%20de%20arquitectura%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.";

  return (
    <section id="contact" className="max-w-[1200px] mx-auto my-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-50">
          Iniciemos una <span className="text-gradient-teal">Conversación</span>
        </h2>
        <p className="text-slate-100 text-sm md:text-base mt-2 max-w-lg mx-auto">
          ¿Tienes un proyecto en mente o buscas un Desarrollador Full Stack / Arquitecto de Sistemas?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start  ">
        {/* Tarjeta WhatsApp & Redes */}
        <div className="light-card p-8 rounded-2xl  flex flex-col justify-between h-full shadow-[0_0_15px_rgba(0,240,255,0.15)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] text-xs font-mono font-semibold mb-4">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              Respuesta Rápida por WhatsApp (&lt; 1 hora)
            </div>

            <h3 className="text-2xl font-display font-bold text-slate-50 mb-3">
              Contacto Directo en Tiempo Real
            </h3>
            <p className="text-slate-100 text-sm leading-relaxed mb-6">
              La vía más rápida para agendar una llamada o conversar sobre oportunidades de desarrollo.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-base flex items-center justify-center gap-3 shadow-md transition-all duration-300 hover:scale-[1.01]"
            >
              <FaWhatsapp className="text-2xl" />
              Abrir Chat en WhatsApp
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 space-y-3 text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#00A797] text-base" />
              <span className="text-slate-100">stivensena2017@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#00A797] text-base" />
              <span className="text-slate-100">Bogotá D.C., Colombia (Remoto / Presencial)</span>
            </div>

            <div className="flex gap-4 pt-3">
              <a
                href="https://www.linkedin.com/in/stiven-felix-495273335/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all cursor-pointer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/felixstiven"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all cursor-pointer"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Formulario Compacto Gmail */}
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactMeMain;
