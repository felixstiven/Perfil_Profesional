import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="max-w-[1200px] mx-auto w-full px-4 fixed left-[50%] -translate-x-[50%] z-50 mt-4">
      {/* Contenedor Principal (Pill Container) */}
      <div className="flex justify-between items-center w-full bg-gradient-to-tr from-[#040404] via-[#626565] to-slate-100  backdrop-blur-md px-4 md:px-6 py-2.5 md:py-3.5 rounded-full border border-[#B8C0C8] shadow-[#535A62]">
        {/* Logo a la Izquierda */}
        <NavbarLogo />

        {/* Links de Escritorio en el Centro */}
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>

        {/* Botón CTA a la Derecha en Escritorio */}
        <div className="hidden lg:block">
          <NavbarBtn />
        </div>

        {/* Botón Toggler en Móvil (Integrado a la derecha dentro del contenedor) */}
        <div className="lg:hidden flex items-center">
          <NavbarToggler />
        </div>
      </div>

      {/* Menú Desplegable Flotante en Móvil */}
      {menuOpen && (
        <div className="lg:hidden mt-3 w-full animate-fadeIn">
          <NavbarLinks />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
