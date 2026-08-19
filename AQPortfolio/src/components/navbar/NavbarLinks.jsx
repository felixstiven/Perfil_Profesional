import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";
import { LuArrowDownRight } from "react-icons/lu";

const links = [
  { link: "Sobre Mí", section: "about" },
  { link: "Habilidades", section: "skills" },
  { link: "Experiencia", section: "experience" },
  { link: "Proyectos", section: "projects" },
  { link: "Contacto", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="w-full">
      {/* Desktop View */}
      <ul className="hidden lg:flex flex-row gap-6 text-slate-700 font-sans font-medium text-sm">
        {links.map((item, index) => (
          <li key={index} className="group relative">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              to={item.section}
              className="cursor-pointer text-slate-700 hover:text-[#00A797] transition-colors duration-300 py-1 inline-block whitespace-nowrap"
            >
              {item.link}
            </Link>
            <div className="mx-auto bg-[#00A797] w-0 group-hover:w-full h-[2px] rounded-full transition-all duration-300"></div>
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown Card */}
      <div className="lg:hidden bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl p-5 shadow-2xl flex flex-col gap-4 text-center">
        <ul className="flex flex-col gap-3 text-slate-700 font-sans font-semibold text-base">
          {links.map((item, index) => (
            <li key={index} className="border-b border-slate-100 pb-2.5 last:border-none last:pb-0">
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                to={item.section}
                onClick={handleLinkClick}
                className="cursor-pointer hover:text-[#00A797] transition-colors block py-1"
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Contact Button */}
        <div className="pt-2">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            to="contact"
            onClick={handleLinkClick}
            className="w-full py-3 rounded-xl font-bold text-white bg-[#0A192F] hover:bg-[#00A797] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md text-sm"
          >
            <span>Contactar</span>
            <LuArrowDownRight className="text-base" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarLinks;
