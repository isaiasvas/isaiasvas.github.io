import React from 'react';
import { Server, Layout, Database, Cpu, GitBranch, Cloud, Network, Check } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { skillsData } from '../data/skills';

const ICON_MAP = {
  Server,
  Layout,
  Database,
  Cpu,
  GitBranch,
  Cloud,
  Network
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-white dark:bg-dark-surface/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Tecnologias & Ferramentas"
          title="Tech Stack & Especialidades"
          subtitle="Conjunto de linguagens, frameworks, ferramentas de infraestrutura e padrões de arquitetura aplicados no dia a dia."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((categoryGroup, index) => {
            const IconComponent = ICON_MAP[categoryGroup.icon] || Server;

            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-dark-card border border-slate-200/90 dark:border-slate-800 shadow-sm transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0 border border-brand-200/50 dark:border-brand-800/50">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        {categoryGroup.category}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {categoryGroup.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {categoryGroup.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-mono transition-colors ${
                          skill.highlight
                            ? 'bg-brand-500/10 text-brand-700 dark:text-brand-300 border border-brand-500/25 font-semibold'
                            : 'bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60'
                        }`}
                      >
                        {skill.highlight && <Check className="w-3 h-3 text-brand-500 flex-shrink-0" />}
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
