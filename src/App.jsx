import { useState } from "react";
import About from "./components/About";
import Download from "./components/Download";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  const [showProjects, setShowProjects] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "cv dark" : "cv"}>
      <Header darkMode={darkMode} onToggleDarkMode={() => setDarkMode(!darkMode)} />
      <nav className="main-nav" aria-label="Navegación principal">
        <a href="#about">Sobre mí</a>
        <a href="#experience">Experiencia</a>
        <a href="#education">Formación</a>
        <a href="#skills">Skills</a>
        <a href="#projects" onClick={() => setShowProjects(true)}>Proyectos</a>
      </nav>
      <main className="cv-content">
        <About />
        <button className="projects-toggle" onClick={() => setShowProjects(!showProjects)}>
          {showProjects ? "Ocultar proyectos" : "Mostrar proyectos"}
        </button>
        {showProjects && (
          <Projects />
        )}
        <div className="cv-grid">
          <div className="cv-column">
            <Experience />
            <Education />
          </div>
          <aside className="cv-column">
            <Skills />
            <Languages />
          </aside>
        </div>
      </main>
      <Download />
      <Footer />
    </div>
  );
}

export default App;