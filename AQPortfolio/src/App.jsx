import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import CertificatesMain from "./components/certificates/CertificatesMain";
import FooterMain from "./components/footer/FooterMain";
import HackathonImages from "./components/hackathon/HackathonImages";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubHeroMain from "./components/subHeroSection/SubHeroMain";
import ChatWindow from "./components/agenteIa/chatWindow";

function App() {
  return (
    <main className="bg-[#F8FAFC] font-sans text-slate-800 relative overflow-hidden selection:bg-[#00A797] selection:text-white min-h-screen">
      <NavbarMain />
      <HeroMain />
      <SubHeroMain />
      <AboutMeMain />
      <SkillsMain />
      <ExperienceMain />
      <CertificatesMain />
      <ProjectsMain />
      <HackathonImages />
      <ContactMeMain />
      <FooterMain />

      {/* Chat Inteligente IA */}
      <ChatWindow />
    </main>
  );
}

export default App;
