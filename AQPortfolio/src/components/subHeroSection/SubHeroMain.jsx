const SubHeroMain = () => {
  const techList = [
    { name: 'JS / React',         icon: "/ReactJs.png" },
    { name: 'Typescript',         icon: "/Typescript.png" },
    { name: 'Express/WebSockets', icon: "/Express.png" },
    { name: 'Servidor/BD',        icon: "/BD.png" },
    { name: 'Arquitectura',       icon: "/Arquitectura.png" },
    { name: 'SSH',                icon: "/SSH.png" },
    { name: 'Linux',              icon: "/Linux.png" },
    { name: 'Nginx',              icon: "/Nginx.png" },
    { name: 'AI Agents',          icon: "/AgentesIA.png" },
    { name: 'Docker',             icon: "/Docker.png" },

  ];

  return (
    <div className="w-full overflow-hidden py-4 relative shadow-[0_0_15px_rgba(0,240,255,0.15)]">
      {/* Contenedor animado */}
      <div className="flex w-max h-[120px] animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((groupIndex) => (
          <div key={groupIndex} className="flex shrink-0 gap-5 pr-5">
            {techList.map((item, index) => (
              <div
                key={`${groupIndex}-${index}`}
                className="flex flex-col items-center justify-end h-[118px] w-[130px] shrink-0 group cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-[150px] w-auto object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
                  />
                  <span className="text-cyan-400 text-xs font-semibold tracking-wider mt-1 text-center whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeroMain;
