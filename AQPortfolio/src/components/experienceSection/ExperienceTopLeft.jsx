import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Desde 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="6" text="Meses" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="2" text="Proyectos" />
      </div>
      <p className="text-center">
        Con 6 meses de experiencia construyendo aplicaciones web dinámicas y fáciles de usar, la plataforma Gosyt en desarrollo (gestión de pedidos, solicitudes y trabajos) y mi portafolio web muy pronto integrando IA para optimizar procesos y mejorar la experiencia del usuario.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
