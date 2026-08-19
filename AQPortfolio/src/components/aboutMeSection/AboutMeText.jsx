const AboutMeText = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[#0A192F] text-2xl md:text-3xl font-display font-bold">
        Ingeniería de Software & Desarrollo Potenciado con IA
      </h2>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
        Desarrollador Full Stack con formación tecnológica en el SENA. Construyo soluciones integrando <strong className="text-[#0A192F]">Inteligencia Artificial de forma estratégica</strong>: no como un simple copia y pega, sino entendiendo la ingeniería detrás de cada solución, dirigiendo la arquitectura técnica y formulando instrucciones precisas para crear sistemas robustos y escalables.
      </p>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
        Lideré el desarrollo del ecosistema <strong className="text-[#0A192F]">GOSYT</strong>, una plataforma SaaS orientada a la sincronización en tiempo real con WebSockets (Socket.io), containerización con Docker y despliegues confiables en servidores de staging local y la nube.
      </p>
    </div>
  );
};

export default AboutMeText;
