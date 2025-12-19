import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GitHub from './components/GitHub';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import './App.css';

// Sections array moved outside the component to avoid ESLint warning
const sections = ['home', 'about', 'experience', 'projects', 'github', 'certifications', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollPos >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // ✅ no dependencies, ESLint warning gone

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Navigation 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isScrolled={isScrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Projects />
      <GitHub />
      <Certifications />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-slate-800">
        <p>© 2025 Abdulwahab Alnemer. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
