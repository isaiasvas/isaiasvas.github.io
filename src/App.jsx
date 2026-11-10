import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import ResumeGenerator from './components/ResumeGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

const SECTION_IDS = [
  'hero',
  'about',
  'experience',
  'skills',
  'projects',
  'education',
  'resume',
  'contact'
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(SECTION_IDS, 120);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-dark-bg dark:text-slate-100 transition-colors duration-300 print:bg-white print:text-black">
      {/* WCAG AA Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-xl focus:bg-[#0F2D5A] focus:text-white focus:font-semibold focus:shadow-lg no-print"
      >
        Pular para o conteúdo principal
      </a>

      {/* Header / Navbar */}
      <Header
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <ResumeGenerator />
        <Contact />
      </main>

      {/* Floating WhatsApp Action Button */}
      <div className="no-print">
        <WhatsAppButton />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
