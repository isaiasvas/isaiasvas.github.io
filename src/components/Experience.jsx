import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50 dark:bg-dark-bg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Carreira Profissional"
          title="Experiência & Trajetória"
          subtitle="Histórico cronológico de atuação em desenvolvimento de software, consultoria corporativa e formação técnica."
        />

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
          {experienceData.map((exp, index) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              {/* Timeline Node Icon */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-dark-surface border-2 border-brand-500 flex items-center justify-center text-brand-500 shadow-sm transition-transform duration-200 group-hover:scale-110">
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Experience Card */}
              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-slate-800 shadow-card-light dark:shadow-card-dark transition-all duration-300 hover:border-brand-500/40 hover:shadow-lg">
                {/* Header Info */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-brand-600 dark:text-brand-400 font-semibold block">
                      {exp.type}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {exp.role}
                    </h3>
                    <h4 className="text-base font-semibold text-slate-700 dark:text-slate-200">
                      {exp.company}
                    </h4>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-brand-500" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.modality} • {exp.location}
                    </span>
                  </div>
                </div>

                {/* Brief Summary */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Activities */}
                <div className="space-y-2 mb-6">
                  {exp.activities.map((act, actIdx) => (
                    <div key={actIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
