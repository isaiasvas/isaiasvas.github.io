import React, { useEffect } from 'react';
import { X, Cpu, CheckCircle2, AlertCircle, Clock, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  // Always invoke hooks at top level
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // Save previous overflow state
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      // Reliable cleanup
      document.body.style.overflow = prevBodyOverflow || '';
      document.documentElement.style.overflow = prevHtmlOverflow || '';
      document.body.style.removeProperty('overflow');
      document.documentElement.style.removeProperty('overflow');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleClose = () => {
    // Explicitly restore scroll before calling onClose
    document.body.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('overflow');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-dark-surface rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 my-8 animate-fade-up max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-dark-card/50 flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold border ${project.badgeColor}`}>
                {project.category}
              </span>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${
                project.status === 'Concluído'
                  ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30'
                  : 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'
              }`}>
                {project.status === 'Concluído' ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Clock className="w-3 h-3 text-amber-500" />
                )}
                Status: {project.status}
              </span>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono font-semibold bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white border border-slate-700/60 shadow-sm transition-all hover:scale-105 active:scale-95"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Ver no GitHub</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              )}
            </div>

            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-brand-600 dark:text-brand-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={handleClose}
            type="button"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 flex-shrink-0"
            aria-label="Fechar janela de detalhes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          {/* Problem & Objective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-dark-card/60 border border-slate-200 dark:border-slate-800">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                O Desafio / Problema
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {project.problem}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-dark-card/60 border border-slate-200 dark:border-slate-800">
              <h3 className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500" />
                Objetivo do Sistema
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {project.objective}
              </p>
            </div>
          </div>

          {/* Architecture Details */}
          <div className="p-5 rounded-xl bg-brand-50/50 dark:bg-brand-950/20 border border-brand-200/60 dark:border-brand-900/40">
            <h3 className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300 mb-2">
              <Cpu className="w-4 h-4" />
              Arquitetura & Engenharia Planejada
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              {project.architecture}
            </p>
          </div>

          {/* Full Tech Stack */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Stack Tecnológica Completa
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Principais Módulos & Funcionalidades
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-300">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-dark-card/50 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {project.github ? 'Código-fonte e documentação disponíveis no GitHub.' : '* Repositório e documentação técnica serão disponibilizados conforme início dos sprints.'}
          </span>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold border border-slate-700/60 shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Acessar Código no GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-75" />
              </a>
            )}

            <button
              onClick={handleClose}
              type="button"
              className="px-5 py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors"
            >
              Fechar Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
