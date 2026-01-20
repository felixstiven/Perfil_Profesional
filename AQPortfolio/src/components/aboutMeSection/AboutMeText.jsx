import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center ">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm Stiven, a web developer passionate about programming. I specialize in Node.js for the backend and React for the frontend.

        <br /> Currently, I'm strengthening my technical foundation by studying Software Development at SENA, which I combine with my daily practice.
        <br /> My current strategic workflow revolves around Antigravity and the implementation of Docker, a tool I'm integrating to master containerization and ensure professional development environments. My work philosophy isn't based on 'copy and paste'; I use AI through analytical alerts that allow me to optimize processes while auditing and learning from every line of code. My goal is always to understand the 'why' behind solutions to guarantee quality and maintainability.
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
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
