import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = ['hero', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS, 120);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-300">
      {/* Header / Navbar */}
      <Header
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
