import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const FooterMain = () => {
  const footerLinks = [
    { name: "Sobre Mí", section: "about" },
    { name: "Habilidades", section: "skills" },
    { name: "Experiencia", section: "experience" },
    { name: "Certificados", section: "certificates" },
    { name: "Proyectos", section: "projects" },
    { name: "Contacto", section: "contact" },   
    
  ];

  return (
    <footer className="border-t border-slate-200 bg-card-gradient py-12 px-4 mt-20 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div> 
          <h3 className="text-xl font-display font-bold text-slate-100 flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-[#0A192F] text-[#00C8C8] flex items-center justify-center text-xs font-bold">
              SF
            </span>
            Stiven Felix Alvis
          </h3>
          <p className="text-xs text-brand-live mt-1 font-mono">
            Full Stack Developer | GOSYT Ecosystem
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm text-slate-100">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                to={item.section}
                className="hover:text-[#00A797] transition-colors cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/stiven-felix-495273335/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 border border-brand-accent flex items-center justify-center text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all cursor-pointer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/felixstiven"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-slate-100 border border-brand-accent flex items-center justify-center text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all cursor-pointer"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto text-center mt-8 pt-6 border-t border-brand-accent text-xs text-slate-400">
        © {new Date().getFullYear()} Stiven Felix Alvis. Diseñado con arquitectura GOSYT & React.
      </div>
    </footer>
  );
};

export default FooterMain;
