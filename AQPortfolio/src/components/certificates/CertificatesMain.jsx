import { useState } from "react";
import { FaGraduationCap, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  { id: 0, title: "Tecnólogo en Análisis y Desarrollo de Software", institution: "SENA", date: "En formación", image: "/images/certificates/sena.jpeg" },
  { id: 1, title: "Desarrollo Web Front-End (HTML, CSS, JS)", institution: "Universidad de los Andes", date: "2025", image: "/images/certificates/full-stack-andes.png" },
  { id: 2, title: "Desarrollo Web Full Stack", institution: "Talento Tech Bogotá", date: "2024", image: "/images/certificates/full-stack-talento.png" },
  { id: 3, title: "Curso en JavaScript", institution: "Cisco Networking Academy", date: "2024", image: "/images/certificates/javascript-cisco.png" },
  { id: 4, title: "Curso en Python (Nivel 1)", institution: "Cisco Networking Academy", date: "2024", image: "/images/certificates/python-1.png" },
  { id: 5, title: "Curso en Python (Nivel 2)", institution: "Cisco Networking Academy", date: "2024", image: "/images/certificates/python-2.png" },
  { id: 6, title: "Introducción al Desarrollo Back-End", institution: "Coursera", date: "2024", image: "/images/certificates/backend-coursera.png" },
  { id: 7, title: "Masterclass en Ciberseguridad", institution: "Avanzatec", date: "2024", image: "/images/certificates/ciberseguridad.png" },
  { id: 8, title: "Power BI Microsoft", institution: "Intelligent Training", date: "2024", image: "/images/certificates/powerbi.png" },
  { id: 9, title: "Desarrollo con Inteligencia Artificial", institution: "BIG SCHOOL", date: "2026", image: "/images/certificates/desarollo-ia.png" },
];

const CertificatesMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certificates" className="max-w-[1200px] mx-auto my-16 px-4">
      {/* Light Card Banner */}
      <div className="light-card  p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
        <div className="flex items-center gap-5 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-[#00A797]/10 text-[#00A797] flex items-center justify-center text-3xl shrink-0 mx-auto md:mx-0">
            <FaGraduationCap />
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-card-gradient text-brand-live text-xs font-mono font-semibold mb-1">
              Educación & Certificaciones (10 Cursos)
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-50">
              Certificados de Especialización
            </h3>
            <p className="text-slate-100 text-sm mt-1 max-w-2xl">
              Acredita formación en UniAndes, SENA, Cisco Networking Academy, Coursera, Talento Tech e IA.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="rounded-xl font-bold cursor-pointer bg-card-gradient overflow-hidden relative z-100 group px-8 py-2 inline-flex items-center"
        >
          
          <span className="flex gap-2 items-center relative z-10 duration-500 text-slate-100 text-sm">
            <FaGraduationCap />
            Ver Certificados (10)
          </span>
          <span className="absolute w-full h-full bg-[#626565] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500 pointer-events-none "></span>
          <span className="absolute w-full h-full bg-card-gradient -right-32 top-0 -rotate-45 group-hover:rotate-0  group-hover:right-0 duration-500  pointer-events-none "></span>
        </button>
      </div>

      {/* Modal Galería de Certificados */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fadeIn">
          <div className="relative w-full max-w-5xl bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#00A797]/10 text-[#00A797] text-xl">
                  <FaGraduationCap />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#0A192F]">Certificaciones & Titulaciones</h3>
                  <p className="text-xs text-slate-500 font-mono">10 Acreditaciones Verificadas</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Grid Certificados */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setActiveCert(cert)}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#00A797] transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#00A797] font-semibold uppercase">
                      {cert.institution}
                    </span>
                    <h4 className="font-bold text-sm text-[#0A192F] mt-0.5 leading-snug group-hover:text-[#00A797] transition-colors">
                      {cert.title}
                    </h4>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-2 border-t border-slate-200 text-xs text-slate-400">
                    <span>{cert.date}</span>
                    <span className="text-[#00A797] font-semibold text-xs flex items-center gap-1 group-hover:underline">
                      Ver <FaExternalLinkAlt className="text-[10px]" />
                    </span>
                  </div>
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

      {/* Viewer Modal de Imagen Única */}
      {activeCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative max-w-3xl bg-white rounded-2xl p-4 shadow-2xl border border-slate-200">
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-900 rounded-full bg-slate-100 cursor-pointer"
            >
              <FaTimes className="text-lg" />
            </button>
            <h4 className="font-bold text-[#0A192F] text-base mb-2 pr-10">{activeCert.title}</h4>
            <div className="max-h-[70vh] overflow-hidden rounded-xl bg-slate-100 flex items-center justify-center">
              <img src={activeCert.image} alt={activeCert.title} className="max-h-full max-w-full object-contain rounded-lg" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesMain;
