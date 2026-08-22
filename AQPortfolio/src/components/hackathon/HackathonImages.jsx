import { useState } from "react";
import { FaTrophy, FaTimes, FaChevronLeft, FaChevronRight, FaImages } from "react-icons/fa";

const imageData = [
  { url: "/images/premio1.jpeg", caption: "Primer Lugar - Hackathon Master 2024" },
  { url: "/images/premio2.jpeg", caption: "Reconocimiento y Premiación del Equipo" },
  { url: "/images/hackathon.jpeg", caption: "Jornada de Desarrollo del Proyecto" },
];

export default function HackathonImages() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imageData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imageData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 my-16">
      {/* Light Card Banner */}
      <div className="light-card p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
        <div className="flex items-center gap-5 text-center md:text-left">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center text-3xl shrink-0 mx-auto md:mx-0">
            <FaTrophy />
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-mono font-semibold mb-1">
              1er Puesto — Reconocimiento de Ingeniería
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-50">
              Ganador Hackathon Challenger Master 2024
            </h3>
            <p className="text-slate-100 text-sm mt-1 max-w-2xl">
              Premiación por desarrollo de software en tiempo récord y arquitectura de alto rendimiento.
            </p>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="rounded-xl font-bold cursor-pointer bg-card-gradient overflow-hidden relative z-100 group px-8 py-2 inline-flex items-center"
        >
          <span className="flex gap-2 items-center relative z-10 duration-500 text-slate-100 text-sm">
            <FaImages />
            Ver Fotos & Evidencia
          </span>
          <span className="absolute w-full h-full bg-[#626565] -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500 pointer-events-none "></span>
          <span className="absolute w-full h-full bg-card-gradient -right-32 top-0 -rotate-45 group-hover:rotate-0  group-hover:right-0 duration-500  pointer-events-none "></span>
        </button>
      </div>

      {/* Modal Flotante Light Viewer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl">
            <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2 text-[#0A192F] font-display font-bold text-lg">
                <FaTrophy className="text-amber-500" />
                <span>Hackathon Challenger Master 2024</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="relative h-[350px] sm:h-[450px] flex items-center justify-center overflow-hidden rounded-xl bg-slate-900">
              <img
                src={imageData[currentIndex].url}
                alt={imageData[currentIndex].caption}
                className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
              />

              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#00A797] transition-colors cursor-pointer"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-white hover:bg-[#00A797] transition-colors cursor-pointer"
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm font-semibold text-slate-800">
                {imageData[currentIndex].caption}
              </p>
              <div className="flex justify-center gap-3 mt-3">
                {imageData.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-14 h-10 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      currentIndex === idx ? "border-[#00A797] scale-105" : "border-slate-200 opacity-60"
                    }`}
                  >
                    <img src={item.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
