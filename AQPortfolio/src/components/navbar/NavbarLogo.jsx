const NavbarLogo = () => {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-[#0A192F] text-[#00C8C8] flex items-center justify-center font-bold text-sm md:text-lg shadow-sm shrink-0">
        SF
      </div>
      <div className="flex flex-col">
        <h1 className="text-[#0A192F] font-display font-bold text-base md:text-lg leading-tight whitespace-nowrap">
          Stiven Felix
        </h1>
        <div className="hidden sm:flex items-center gap-1.5 text-[10px] md:text-xs text-[#00A797] font-mono font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
          <span>Full Stack Developer</span>
        </div>
      </div>
    </div>
  );
};

export default NavbarLogo;
