import React from 'react';
import { ArrowUp, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { profileData } from '../data/profile';
import { trackResumeDownload } from '../utils/webhook';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-slate-800 relative z-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Headline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#hero"
              className="text-lg font-bold text-slate-900 dark:text-white tracking-tight hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              Isaias Silva
            </a>
            <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
              Full Stack Developer & Docente de Tecnologia
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="GitHub de Isaias Silva"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="LinkedIn de Isaias Silva"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Enviar e-mail para Isaias Silva"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href={profileData.pdfResumeUrl}
              download="curriculo-isaias-silva.pdf"
              onClick={() => trackResumeDownload('footer')}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
              aria-label="Baixar Currículo em PDF"
              title="Baixar Currículo PDF"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
            aria-label="Voltar ao topo da página"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright & Credit Line */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 font-normal">
          <p>© {currentYear} Isaias Silva. Todos os direitos reservados.</p>
          <p className="font-mono text-[11px]">
            Hospedado no GitHub Pages • Projetado com React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
