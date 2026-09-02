import React from 'react';
import { ArrowUpRight, Layers, Clock, Code, Shield } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Django':
        return (
          <svg className="w-8 h-8 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 7V4h16v3M9 20h6M12 4v16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'Laravel':
        return (
          <svg className="w-8 h-8 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16.5 9.4 7.55 4.24a1.78 1.78 0 0 0-2.5 1.55v12.42a1.78 1.78 0 0 0 2.5 1.55L16.5 14.6a1.78 1.78 0 0 0 0-3.2Z" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'Spring Boot':
        return (
          <svg className="w-8 h-8 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return <Layers className="w-8 h-8 opacity-80" />;
    }
  };

  return (
    <article className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-slate-800 shadow-card-light dark:shadow-card-dark transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-1 overflow-hidden">
      {/* Abstract Tech Cover */}
      <div className={`relative h-44 w-full bg-gradient-to-br ${project.colorAccent} p-6 flex flex-col justify-between overflow-hidden border-b border-slate-100 dark:border-slate-800/60`}>
        {/* Abstract Geometric Grid Lines */}
        <div className="absolute inset-0 opacity-15 bg-grid-pattern-light dark:bg-grid-pattern-dark pointer-events-none" />
        <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/20 dark:bg-white/5 blur-xl pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold border ${project.badgeColor}`}>
            {project.category}
          </span>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium font-mono bg-slate-900/10 dark:bg-black/30 text-slate-700 dark:text-slate-300 backdrop-blur-sm border border-slate-300/40 dark:border-slate-700/40">
            <Clock className="w-3 h-3 text-amber-500" />
            {project.status}
          </span>
        </div>

        {/* Bottom Graphic & Tagline */}
        <div className="relative z-10 flex items-end justify-between">
          <div className="text-slate-700 dark:text-slate-200">
            {getCategoryIcon(project.category)}
          </div>
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
            {project.technologies[0]} + {project.technologies[1]}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs font-medium font-mono text-brand-600 dark:text-brand-400 mb-3">
            {project.tagline}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5 line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 5).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-500">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button
            onClick={() => onSelect(project)}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors focus:outline-none focus:underline"
          >
            <span>Ver Arquitetura e Detalhes</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
            Roadmap
          </span>
        </div>
      </div>
    </article>
  );
}
