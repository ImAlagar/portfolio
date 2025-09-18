import Navbar from "./components/Navbar";
import AboutSection from "./components/Sections/AboutSection";
import ContactSection from "./components/Sections/ContactSection";
import Footer from "./components/Sections/Footer";
import HeroSection from "./components/Sections/HeroSection";
import ProjectSection from "./components/Sections/ProjectSection";
import SkillsSection from "./components/Sections/SkillsSection";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
  <ThemeProvider>
      <div>
        <Navbar />
        <HeroSection />
        <SkillsSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection /> 
        <Footer />
      </div>
  </ThemeProvider>
  )
}
