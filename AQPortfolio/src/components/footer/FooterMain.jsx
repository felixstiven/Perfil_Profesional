import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "Sobre Mí",
      section: "about",
    },
    {
      name: "Habilidades",
      section: "skills",
    },
    {
      name: "Experiencia",
      section: "experience",
    },
    {
      name: "Proyectos",
      section: "projects",
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto  ">
        <p className="text-3xl text-lightGrey ">Stiven Felix</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={2500}
                  offset={-220}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2024 Stiven Felix | Todos los Derechos Reservados.
      </p>
    </div>
  );
};

export default FooterMain;
