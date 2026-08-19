import { useState } from "react";
import { FaBriefcase, FaTimes, FaCalendarAlt, FaBuilding, FaCheck } from "react-icons/fa";

const experiences = [
  {
    role: "Full Stack Developer (Lead Developer)",
    company: "Proyecto GOSYT (Plataforma SaaS & Real-Time)",
    period: "2025 – Presente",
    responsibilities: [
      "Diseño de arquitectura de microservicios con Node.js, Express y TypeScript.",
      "Implementación de WebSockets bi-direccionales con Socket.io para actualización instantánea de órdenes.",
      "Configuración de proxy unificado Nginx y despliegue en servidor físico 'La Torre' con Docker y Tailscale VPN.",
      "Ajuste de compatibilidad para hardware legacy en MongoDB 4.4.29 evitando instrucciones AVX.",
    ],
  },
  {
    role: "Desarrollador de Software en Formación",
    company: "SENA — Tecnólogo ADSO",
    period: "2024 – En Curso",
    responsibilities: [
      "Modelado de bases de datos relacionales y no relacionales (PostgreSQL, MongoDB).",
      "Construcción de interfaces modernas con React, Tailwind CSS y gestión de estado con Redux Toolkit.",
      "Implementación de buenas prácticas de código, pruebas de integración y Git workflow profesional.",
    ],
  },
];

const ExperienceMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="experience" className="max-w-[1200px] mx-auto my-16 px-4">
      {/* Light Card Banner */}
      <div className="light-card p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-[#00A797]/10 text-[#00A797] flex items-center justify-center text-3xl shrink-0 mx-auto md:mx-0">
            <FaBriefcase />
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#0A192F]/10 text-[#0A192F] text-xs font-mono font-semibold mb-1">
              Trayectoria Profesional
            </div>
            <h3 className="text-2xl font-display font-bold text-[#0A192F]">
              Experiencia & Desarrollo de Proyectos
            </h3>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl">
              Proyectos reales de ingeniería de software, arquitectura de sistemas y formación técnica especializada.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="btn-gosyt-primary px-6 py-3 rounded-xl text-sm flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <FaBriefcase />
          <span>Ver Trayectoria Detallada</span>
        </button>
      </div>

      {/* Modal Experiencia */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#00A797]/10 text-[#00A797] text-xl">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#0A192F]">Experiencia Laboral & Proyectos</h3>
                  <p className="text-xs text-slate-500 font-mono">Historial de Ingeniería</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h4 className="font-bold text-lg text-[#0A192F]">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-xs font-semibold text-[#00A797] mt-0.5">
                        <FaBuilding />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 flex items-center gap-1.5">
                      <FaCalendarAlt className="text-slate-400" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-slate-200/80">
                    {exp.responsibilities.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs md:text-sm text-slate-700 flex items-start gap-2">
                        <FaCheck className="text-[#00A797] text-xs shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

export default ExperienceMain;
