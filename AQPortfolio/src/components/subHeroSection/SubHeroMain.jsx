const SubHeroMain = () => {
  const highlights = [
    { icon: "⚡", title: "Real-Time WebSockets" },
    { icon: "🐳", title: "Docker & Hybrid Staging" },
    { icon: "🚀", title: "Full Stack Architecture" },
    { icon: "🏆", title: "Hackathon Master 2024 Winner" },
  ];

  return (
    <div className="w-full border-y border-slate-200 bg-white py-5 px-4 shadow-sm">
      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-around items-center gap-6 text-slate-700 font-display">
        {highlights.map((item, index) => (
          <div key={index} className="flex items-center gap-2.5 hover:text-[#00A797] transition-colors">
            <span className="text-xl">{item.icon}</span>
            <span className="font-semibold text-sm md:text-base tracking-wide">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeroMain;
