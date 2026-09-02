import React from 'react';
import { Award, Briefcase, GraduationCap, Code2, CheckCircle, ShieldCheck, Cpu } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-dark-surface/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Trajetória & Perfil"
          title="Engenharia de Software com Propósito"
          subtitle="Unindo experiência sólida em desenvolvimento full stack, sistemas corporativos de missão crítica e docência técnica."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story / Text Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white leading-snug">
              {profileData.about.lead}
            </p>

            {profileData.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate-600 dark:text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Core Values / Engineering Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-dark-card/60 border border-slate-200/80 dark:border-slate-800">
                <ShieldCheck className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white">Ambientes Críticos</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Experiência com operações Petrobras e alta disponibilidade.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-dark-card/60 border border-slate-200/80 dark:border-slate-800">
                <Cpu className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-sm text-slate-900 dark:text-white">Arquitetura Limpa</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">POO consistente, microsserviços e padrões MVC/REST.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights & Metrics Cards Column */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-card dark:to-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  9+ anos
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 block">
                  Trajetória em Tecnologia (desde 2016)
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-card dark:to-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  5+ anos
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 block">
                  Experiência Registrada (desde 2020)
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-card dark:to-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Docente
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 block">
                  SENAC — Dev de Sistemas & Redes
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-dark-card dark:to-dark-surface border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  20+
                </span>
                <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1 block">
                  Sistemas, Portais & Microsserviços
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
