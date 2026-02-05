import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
      <h2 className="text-6xl text-cyan mb-10">Sobre Mí</h2>
      <p>
        Soy Stiven, Desarrollador Full Stack Junior apasionado por el código limpio y la innovación. Me especializo en Node.js para el backend y React.js + TypeScript para el frontend, construyendo soluciones con arquitectura sólida y mantenible.

        <br /> Actualmente estudio Desarrollo de Software en SENA y fortalezco mi práctica diaria con proyectos como GOSYT y un portfolio con agente de IA. Estoy profundizando en contenedorización con Docker y en el mundo de la Inteligencia Artificial aplicada al desarrollo web, explorando LLM Agents, Prompt Engineering y Machine Learning para crear sistemas inteligentes y escalables.

        <br /> Mi filosofía: no copiar y pegar, sino entender el “por qué” detrás de cada solución, optimizando procesos con IA y asegurando calidad y mantenibilidad en cada línea de código.

      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          Mis Proyectos
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
