import { useState } from "react";
import { FaUserGraduate, FaTimes, FaRocket, FaCheckCircle } from "react-icons/fa";

const AboutMeMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="max-w-[1200px] mx-auto my-16 px-4">
      {/* Light Card Banner */}
      <div className="light-card p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-[#0A192F] text-[#00C8C8] flex items-center justify-center text-3xl font-bold shrink-0 mx-auto md:mx-0 shadow-md">
            SF
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#00A797]/10 text-[#00A797] text-xs font-mono font-semibold mb-1">
              Perfil Profesional & Filosofía
            </div>
            <h3 className="text-2xl font-display font-bold text-[#0A192F]">
              Sobre Mí — Stiven Felix Alvis
            </h3>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Desarrollador Full Stack & Arquitecto de Sistemas enfocado en soluciones mantenibles, rendimiento en producción e integración de IA.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="btn-gosyt-primary px-6 py-3 rounded-xl text-sm flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <FaUserGraduate />
          <span>Leer Historia Completa</span>
        </button>
      </div>

      {/* Modal Sobre Mí */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0A192F] text-[#00C8C8] flex items-center justify-center font-bold text-lg">
                  SF
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#0A192F]">Sobre Stiven Felix Alvis</h3>
                  <p className="text-xs text-[#00A797] font-mono">Full Stack Developer | Entornos Reales & IA</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="space-y-4 text-slate-700 text-sm md:text-base leading-relaxed font-sans">
              <p>
                Soy desarrollador Full Stack y tecnólogo en <strong>Análisis y Desarrollo de Software (SENA)</strong>, apasionado por la ingeniería rigurosa, las arquitecturas limpias y la optimización de procesos de software.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h4 className="font-bold text-[#0A192F] flex items-center gap-2 text-sm">
                  <FaRocket className="text-[#00A797]" />
                  Enfoque en GOSYT & Arquitectura Real-Time
                </h4>
                <p className="text-xs text-slate-600">
                  Lidero el diseño e implementación de <strong>GOSYT</strong>, una plataforma síncrona en tiempo real utilizando WebSockets (Socket.io), Nginx como proxy inverso unificado, Docker en servidor de staging local (`La Torre`) y arquitectura de base de datos híbrida (PostgreSQL + MongoDB).
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h4 className="font-bold text-[#0A192F]">Principios de Desarrollo:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm">
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#00A797]" />
                    <span>Entender el `por qué ` y la lógica detrás de cada línea</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#00A797]" />
                    <span>Cero parches superficiales en producción</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#00A797]" />
                    <span>Optimización de arquitectura, latencia y memoria</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCheckCircle className="text-[#00A797]" />
                    <span>Construcción con IA: guiando la arquitectura con instrucciones técnicas precisas</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="btn-gosyt-secondary px-5 py-2 text-xs font-semibold cursor-pointer"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMeMain;
