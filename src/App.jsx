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
import { resumeBaseData } from './data/resumeData';

const SECTION_IDS = [
  'hero',
  'about',
  'experience',
  'skills',
  'projects',
  'education',
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
      <main id="main-content" className="flex-1 no-print">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Folha de Impressão Nativa (Oculta na tela, renderizada apenas ao acionar Ctrl+P / window.print, idêntica ao .docx) */}
      <article
        id="ats-resume-sheet"
        aria-hidden="true"
        className="hidden print:block bg-white text-[#282828] w-full"
        style={{
          fontFamily: "'Calibri', 'Plus Jakarta Sans', 'Inter', Arial, sans-serif",
          lineHeight: 1.38
        }}
      >
        <header className="mb-3">
          <h1 className="text-[22pt] font-bold tracking-tight leading-tight text-[#0F2D5A]">
            {resumeBaseData.header.name}
          </h1>
          <p className="text-[11pt] font-bold text-[#464646] mt-0.5">
            {resumeBaseData.header.targetRole}
          </p>
          <p className="text-[9.5pt] text-[#464646] mt-1 leading-snug">
            <span>{resumeBaseData.header.location} | </span>
            <span>{resumeBaseData.header.phone} | </span>
            <span>{resumeBaseData.header.email} | </span>
            <strong className="font-bold text-[#0F2D5A]">{resumeBaseData.header.linkedin}</strong>
            <span> | </span>
            <strong className="font-bold text-[#0F2D5A]">{resumeBaseData.header.github}</strong>
          </p>
        </header>

        <section className="mt-3.5">
          <h2 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-2 tracking-wide">
            RESUMO PROFISSIONAL
          </h2>
          <p className="text-[9.5pt] text-[#282828] leading-[1.42]">
            {resumeBaseData.summary}
          </p>
        </section>

        <section className="mt-3.5">
          <h2 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-2 tracking-wide">
            HABILIDADES TÉCNICAS
          </h2>
          <div className="space-y-1 text-[9.5pt] leading-[1.38]">
            {resumeBaseData.technicalSkills.map((skill) => (
              <p key={skill.id} className="text-[#323232]">
                <strong className="font-bold text-[#1E1E1E]">{skill.category}: </strong>
                <span>{skill.items}</span>
              </p>
            ))}
          </div>
        </section>

        <section className="mt-3.5">
          <h2 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-2 tracking-wide">
            EXPERIÊNCIA PROFISSIONAL
          </h2>
          <div className="space-y-3">
            {resumeBaseData.experiences.map((exp) => (
              <div key={exp.id} className="break-inside-avoid">
                <h3 className="text-[10pt] leading-snug mb-1">
                  <strong className="font-bold text-[#0F2D5A]">
                    {exp.role} | {exp.company}
                  </strong>
                  <span className="italic text-[9.5pt] text-[#5A5A5A] font-normal">
                    {' '}
                    — {exp.period} ({exp.modality})
                  </span>
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-[9.5pt] text-[#282828] leading-[1.38]">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <strong className="font-bold text-[#1E1E1E]">{bullet.label}: </strong>
                      <span>{bullet.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-3.5 break-inside-avoid">
          <h2 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-1.5 tracking-wide">
            PROJETOS RELEVANTES DE ENGENHARIA &amp; PORTFÓLIO
          </h2>
          <p className="italic text-[9pt] text-[#505050] mb-1.5">
            {resumeBaseData.projectsIntro}
          </p>
          <ul className="list-disc pl-5 space-y-1 text-[9.5pt] text-[#282828] leading-[1.38]">
            {resumeBaseData.projects.map((proj) => (
              <li key={proj.id}>
                <strong className="font-bold text-[#1E1E1E]">{proj.label}: </strong>
                <span>{proj.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-3.5 break-inside-avoid">
          <h2 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-1.5 tracking-wide">
            FORMAÇÃO ACADÊMICA
          </h2>
          <div className="space-y-1 text-[9.5pt] leading-[1.38]">
            {resumeBaseData.education.map((edu) => (
              <p key={edu.id} className="text-[#3C3C3C]">
                <strong className="font-bold text-[#1E1E1E]">{edu.degree}</strong>
                <span>
                  {' '}
                  | {edu.institution} ({edu.period})
                </span>
              </p>
            ))}
          </div>
        </section>

        <section className="mt-3.5 break-inside-avoid">
          <h2 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-1.5 tracking-wide">
            IDIOMAS
          </h2>
          <p className="text-[9.5pt] text-[#282828] leading-[1.38]">
            {resumeBaseData.languages}
          </p>
        </section>
      </article>

      {/* Floating WhatsApp Action Button */}
      <div className="no-print">
        <WhatsAppButton />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
