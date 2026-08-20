const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#00A797] text-[#ffff] flex items-center justify-center font-bold text-sm md:text-lg shadow-sm shrink-0">
        SF
      </div>
      <div className="flex flex-col">
        <h1 className="text-slate-100 font-display font-bold text-base md:text-lg leading-tight whitespace-nowrap">
          Stiven Felix
        </h1>
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] md:text-xs text-slate-300 font-mono font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A797] animate-pulse"></span>
          <span>Full Stack Developer</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogo;
