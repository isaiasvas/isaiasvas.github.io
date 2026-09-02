import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import ThemeToggle from './ThemeToggle';
import { profileData } from '../data/profile';

const NAV_ITEMS = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Tecnologias', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Formação', href: '#education' },
  { label: 'Contato', href: '#contact' },
];

export default function Header({ activeSection, theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    }
    return () => {
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
    };
  }, [mobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 dark:bg-dark-bg/85 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800/80 py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
          aria-label="Isaias Silva - Início"
        >
          <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:bg-brand-500 transition-colors">
            IS
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-white text-base tracking-tight leading-none group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              Isaias Silva
            </span>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 leading-none mt-1">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/70 dark:border-slate-800/70 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-brand-600 shadow-sm dark:bg-brand-600 dark:text-white font-semibold'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={profileData.pdfResumeUrl}
            download="curriculo-isaias-silva.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/70 rounded-xl transition-all"
            title="Download Currículo em PDF"
          >
            <FileText className="w-3.5 h-3.5 text-brand-500" />
            <span>CV (PDF)</span>
          </a>

          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/70 transition-all"
            aria-label="Perfil do GitHub de Isaias Silva"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/70 transition-all"
            aria-label="Perfil do LinkedIn de Isaias Silva"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        {/* Mobile Controls & Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2.5 rounded-xl bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Overlay */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[61px] bottom-0 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-xl z-50 p-6 flex flex-col justify-between border-b border-slate-200 dark:border-slate-800 animate-fade-in overflow-y-auto">
          <nav className="flex flex-col gap-2">
            <span className="text-xs font-mono uppercase text-slate-400 dark:text-slate-500 px-3 mb-1">
              Navegação
            </span>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-brand-500" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <a
              href={profileData.pdfResumeUrl}
              download="curriculo-isaias-silva.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Baixar Currículo PDF</span>
            </a>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
