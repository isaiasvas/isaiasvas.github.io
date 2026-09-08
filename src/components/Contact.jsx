import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import SectionHeading from './SectionHeading';
import Toast from './Toast';
import { profileData } from '../data/profile';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setShowToast(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);

    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 dark:bg-dark-bg relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Conexão Profissional"
          title="Vamos conversar?"
          subtitle="Disponível para novos projetos de desenvolvimento de software, consultoria em arquitetura de sistemas e oportunidades de engenharia."
        />

        {/* Contact Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-slate-800 shadow-card-light dark:shadow-card-dark text-center flex flex-col items-center">
          {/* Central Email Action */}
          <div className="w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6 shadow-sm border border-brand-200/60 dark:border-brand-800/60">
            <Mail className="w-7 h-7" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {profileData.email}
          </h3>

          <p className="max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Seja para estruturar uma nova aplicação web, modernizar microsserviços ou debater soluções de tecnologia, fique à vontade para entrar em contato.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <a
              href={`mailto:${profileData.email}?subject=Contato%20via%20Portfolio%20-%20Isaias%20Silva`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-brand-600/25 transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              <span>Enviar e-mail diretamente</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm sm:text-base border border-slate-200 dark:border-slate-700 transition-all transform hover:-translate-y-0.5"
              aria-label="Copiar endereço de e-mail"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>E-mail copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-brand-500" />
                  <span>Copiar e-mail</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Social Cards Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-100 dark:border-slate-800">
            {/* LinkedIn */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-slate-50 dark:bg-dark-surface/60 hover:bg-slate-100 dark:hover:bg-dark-surface border border-slate-200/80 dark:border-slate-800 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3 text-left">
                <LinkedinIcon className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                <div>
                  <span className="block text-xs font-semibold text-slate-900 dark:text-white">LinkedIn</span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">/in/isaiasvasilva</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* GitHub */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-slate-50 dark:bg-dark-surface/60 hover:bg-slate-100 dark:hover:bg-dark-surface border border-slate-200/80 dark:border-slate-800 flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3 text-left">
                <GithubIcon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                <div>
                  <span className="block text-xs font-semibold text-slate-900 dark:text-white">GitHub</span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">/isaiasvas</span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Location */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-dark-surface/60 border border-slate-200/80 dark:border-slate-800 flex items-center gap-3 text-left">
              <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
              <div>
                <span className="block text-xs font-semibold text-slate-900 dark:text-white">Localização</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">Araraquara – SP (Remoto)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copied Feedback Toast */}
      <Toast
        message="Endereço de e-mail copiado para a área de transferência!"
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </section>
  );
}
