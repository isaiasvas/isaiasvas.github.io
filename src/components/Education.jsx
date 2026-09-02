import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 bg-white dark:bg-dark-surface/40 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Base Acadêmica"
          title="Formação & Qualificação"
          subtitle="Fundamentos de Ciência da Computação e especialização contínua em arquitetura de software."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-dark-card border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-1"
            >
              <div>
                {/* Degree Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                    <GraduationCap className="w-3.5 h-3.5" />
                    {edu.degree}
                  </span>

                  <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <Calendar className="w-3 h-3 text-brand-500" />
                    {edu.period}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-1">
                  {edu.course}
                </h3>

                {/* Institution */}
                <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-4">
                  {edu.institution} • <span className="text-slate-500 dark:text-slate-400 font-normal">{edu.modality}</span>
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Skills / Topics */}
              <div className="pt-4 border-t border-slate-200/70 dark:border-slate-800 flex flex-wrap gap-1.5">
                {edu.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
