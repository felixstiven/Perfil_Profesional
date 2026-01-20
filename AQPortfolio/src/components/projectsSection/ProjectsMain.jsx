import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";

const projects = [
  {
    name: "Gosyt",
    name2: "Gestion de ordenes, solicitudes y trabajos",
    year: "2025 in development",
    align: "right",
    image: "./images/gosyt.png",
    link: "https://github.com/felixstiven/RedConectada",
  },
  {
    name: "Portafolio web",
    name2: "Desarrollado con React",
    year: "Sept2024",
    align: "left",
    image: "./images/certificates/protfolio.png",
    link: "https://perfilprofesional-production.up.railway.app/",
  },

];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              name2={project.name2}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
