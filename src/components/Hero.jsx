import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profileData } from '../data/profile';
import { trackResumeDownload } from '../utils/webhook';

export default function Hero() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % profileData.rotatingPhrases.length);
        setIsFading(false);
      }, 350);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern-light dark:bg-grid-pattern-dark"
    >
      {/* Subtle Glow & Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide mb-8 bg-white/90 dark:bg-dark-surface/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-semibold text-slate-900 dark:text-white">Disponível</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>Projetos & Consultoria</span>
        </div>

        {/* Intro */}
        <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold mb-3 animate-fade-up">
          Olá, eu sou
        </p>

        {/* Main Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 animate-fade-up">
          ISAIAS SILVA
        </h1>

        {/* Headline */}
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 tracking-tight mb-4">
          Full Stack Developer
        </p>

        {/* Dynamic Rotating Tech Line */}
        <div className="h-10 flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-sm sm:text-base font-mono font-medium text-brand-600 dark:text-brand-300 transition-all duration-300">
            <Terminal className="w-4 h-4 text-brand-500 flex-shrink-0" />
            <span
              className={`transition-all duration-300 transform ${
                isFading ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
              }`}
            >
              {profileData.rotatingPhrases[currentPhraseIndex]}
            </span>
          </div>
        </div>

        {/* Subtitle / Description */}
        <p className="max-w-2xl text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed mb-10 animate-fade-up">
          {profileData.heroDescription}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12 animate-fade-up">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-brand-600/20 hover:shadow-brand-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
          >
            <span>Ver Projetos</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={profileData.pdfResumeUrl}
            download="curriculo-isaias-silva.pdf"
            onClick={() => trackResumeDownload('hero')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-semibold text-sm sm:text-base border border-slate-200 dark:border-slate-700 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <Download className="w-4 h-4 text-brand-500" />
            <span>Baixar Currículo</span>
          </a>

          <div className="flex items-center gap-2">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-700 shadow-sm transition-all transform hover:-translate-y-0.5"
              aria-label="Abrir perfil no GitHub"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-white dark:bg-dark-surface hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white border border-slate-200 dark:border-slate-700 shadow-sm transition-all transform hover:-translate-y-0.5"
              aria-label="Abrir perfil no LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-xs font-mono text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors pt-4 group"
          aria-label="Rolar para a seção Sobre"
        >
          <span className="tracking-widest uppercase text-[11px]">Role para explorar</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-brand-500 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
