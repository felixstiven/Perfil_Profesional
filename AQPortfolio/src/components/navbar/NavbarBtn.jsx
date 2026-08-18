import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-5 py-2.5 rounded-full text-sm font-bold text-white bg-[#0A192F] hover:bg-[#00A797] transition-all duration-300 hover:scale-105 flex items-center gap-2 cursor-pointer shadow-sm whitespace-nowrap">
      <Link spy={true} smooth={true} duration={500} offset={-100} to="contact">
        Contactar
      </Link>
      <LuArrowDownRight className="text-lg stroke-[2.5]" />
    </button>
  );
};

export default NavbarBtn;
