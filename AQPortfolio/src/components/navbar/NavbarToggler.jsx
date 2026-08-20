import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <button
      className="p-2.5 rounded-xl border border-slate-300/65 bg-slate-400 text-[#353738] hover:bg-slate-300/90 transition-colors cursor-pointer text-lg flex items-center justify-center"
      onClick={setToggleMenu}
      aria-label="Toggle navigation menu"
    >
      {menuOpen ? <FaTimes /> : <GiHamburgerMenu />}
    </button>
  );
};

export default NavbarToggler;
