import React, { useState } from 'react';
import {
  Printer,
  Copy,
  Check,
  Download,
  FileJson,
  FileText,
  Sparkles,
  ShieldCheck,
  Eye,
  Code2
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import Toast from './Toast';
import {
  resumeFocusProfiles,
  getResumeByFocus,
  generateAtsPlainText
} from '../data/resumeData';

export default function ResumeGenerator() {
  const [selectedFocus, setSelectedFocus] = useState('default');
  const [viewMode, setViewMode] = useState('docx'); // 'docx' | 'plaintext'
  const [copiedText, setCopiedText] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const currentResume = getResumeByFocus(selectedFocus);
  const plainTextResume = generateAtsPlainText(selectedFocus);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3800);
  };

  const handlePrintAtsPdf = () => {
    // Ensure we are in the canonical sheet view before printing
    if (viewMode !== 'docx') {
      setViewMode('docx');
      setTimeout(() => {
        window.print();
      }, 150);
    } else {
      window.print();
    }
  };

  const handleCopyPlainText = async () => {
    try {
      await navigator.clipboard.writeText(plainTextResume);
      setCopiedText(true);
      triggerToast('Texto puro ATS-Ready copiado! Pronto para colar na Gupy, Workday ou Word (.docx).');
      setTimeout(() => setCopiedText(false), 3000);
    } catch (err) {
      console.error('Erro ao copiar texto ATS:', err);
    }
  };

  const handleDownloadJson = () => {
    const payload = JSON.stringify(currentResume, null, 2);
    const blob = new Blob([payload], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resume-data-isaias-silva-${selectedFocus}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    triggerToast('Arquivo JSON de dados do currículo exportado com sucesso!');
  };

  return (
    <section
      id="resume"
      aria-labelledby="resume-generator-heading"
      className="py-20 md:py-28 bg-slate-100/70 dark:bg-dark-surface/30 relative border-y border-slate-200/80 dark:border-slate-800/80 print:p-0 print:bg-white print:border-none"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:p-0">
        {/* Section Heading (Hidden on Print) */}
        <div className="no-print">
          <SectionHeading
            badge="Suíte Otimizador ATS Pro • Metodologia dos 3 Leitores"
            title="Gerador & Exportador Nativo de Currículo (ATS-Ready)"
            subtitle="Estrutura em coluna única estrita, sincronizada com o documento .docx oficial e validada para parsers sintáticos (Gupy, Workday), IA semântica e recrutadores técnicos."
          />

          {/* Methodology Compliance Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  1. Parser Sintático (100%)
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Coluna única estrita, sem tabelas ou caixas flutuantes
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  2. IA Semântica & Keywords
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Títulos canônicos e competências com contexto de ação
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-dark-card border border-slate-200/90 dark:border-slate-800 shadow-xs">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                  3. Decisor Humano (STAR/XYZ)
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-400">
                  Fórmula [Domínio]: [Ação + Ferramenta + Escopo + Impacto]
                </span>
              </div>
            </div>
          </div>

          {/* Control Panel: Focus Selector + Quick Action Buttons */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-card-light dark:shadow-card-dark mb-8 space-y-5">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
              {/* Focus Switcher */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Alternar Foco de Otimização (Single Source of Truth):
                </label>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Modos de foco do currículo">
                  {Object.values(resumeFocusProfiles).map((profile) => {
                    const isActive = selectedFocus === profile.id;
                    return (
                      <button
                        key={profile.id}
                        type="button"
                        onClick={() => setSelectedFocus(profile.id)}
                        aria-pressed={isActive}
                        className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${
                          isActive
                            ? 'bg-[#0F2D5A] text-white border-[#0F2D5A] dark:bg-brand-600 dark:border-brand-500 shadow-sm'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 dark:bg-slate-800/70 dark:hover:bg-slate-800 dark:text-slate-300 border-slate-200/80 dark:border-slate-700'
                        }`}
                      >
                        {profile.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* View Mode Toggle: Folha DOCX vs Texto Puro Parser */}
              <div className="flex flex-col sm:items-end">
                <span className="block text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                  Modo de Inspeção:
                </span>
                <div className="inline-flex rounded-xl p-1 bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700">
                  <button
                    type="button"
                    onClick={() => setViewMode('docx')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      viewMode === 'docx'
                        ? 'bg-white dark:bg-dark-card text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5 text-brand-500" />
                    <span>Folha DOCX / Impressão</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewMode('plaintext')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      viewMode === 'plaintext'
                        ? 'bg-white dark:bg-dark-card text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5 text-brand-500" />
                    <span>Texto Puro (Visão Gupy/Parser)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2.5">
                {/* 1. Imprimir / Salvar em PDF (ATS-Ready) */}
                <button
                  type="button"
                  onClick={handlePrintAtsPdf}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F2D5A] hover:bg-[#163d77] dark:bg-brand-600 dark:hover:bg-brand-500 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimir / Salvar em PDF (ATS-Ready)</span>
                </button>

                {/* 2. Copiar Texto Puro para ATS */}
                <button
                  type="button"
                  onClick={handleCopyPlainText}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {copiedText ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span>Texto Puro Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-brand-500" />
                      <span>Copiar Texto Puro para ATS</span>
                    </>
                  )}
                </button>

                {/* 3. Baixar JSON de Dados */}
                <button
                  type="button"
                  onClick={handleDownloadJson}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm border border-slate-200 dark:border-slate-700 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  <FileJson className="w-4 h-4 text-brand-500" />
                  <span>Baixar JSON de Dados</span>
                </button>
              </div>

              {/* Direct Static Downloads (.docx & .pdf) */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="./Curriculo_Isaias_Silva_ATS_Pro.docx"
                  download="Curriculo_Isaias_Silva_ATS_Pro.docx"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-[#0F2D5A] dark:text-brand-300 bg-brand-50 dark:bg-brand-950/60 hover:bg-brand-100 dark:hover:bg-brand-900/60 border border-brand-200 dark:border-brand-800/70 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Word Oficial (.docx)</span>
                </a>
                <a
                  href={currentResume.header.pdfResumeUrl}
                  download="Curriculo_Isaias_Silva_ATS_Pro.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF Direto (.pdf)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== CURRÍCULO RENDERIZADO (DOCX CANÔNICO OU TEXTO PURO) ==================== */}
        {viewMode === 'plaintext' ? (
          <div className="no-print rounded-2xl bg-slate-900 text-slate-100 p-6 sm:p-8 border border-slate-800 shadow-lg font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <span className="text-emerald-400 font-semibold">
                // Saída Linear Estrita para Parsers ATS (Gupy / Workday / Greenhouse)
              </span>
              <button
                type="button"
                onClick={handleCopyPlainText}
                className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-sans font-medium transition-colors cursor-pointer"
              >
                {copiedText ? 'Copiado!' : 'Copiar Tudo'}
              </button>
            </div>
            <pre className="whitespace-pre-wrap break-words font-mono text-xs sm:text-[13px] leading-6">
              {plainTextResume}
            </pre>
          </div>
        ) : null}

        {/* Folha Canônica ATS (Sempre presente no DOM para @media print, oculta na tela apenas quando viewMode === 'plaintext') */}
        <article
          id="ats-resume-sheet"
          aria-label="Currículo Otimizado para ATS de Isaias Silva"
          className={`${
            viewMode === 'plaintext' ? 'hidden print:block' : 'block'
          } bg-white text-[#282828] rounded-2xl shadow-xl border border-slate-200/90 mx-auto max-w-[210mm] p-6 sm:p-10 md:p-[15.2mm] print:shadow-none print:border-none print:rounded-none print:max-w-none print:p-0`}
          style={{
            fontFamily: "'Calibri', 'Plus Jakarta Sans', 'Inter', Arial, sans-serif",
            lineHeight: 1.38
          }}
        >
          {/* CABEÇALHO CANÔNICO (3 LINHAS ESTRITAS IGUAIS AO DOCX) */}
          <header className="mb-3">
            <h2
              id="resume-generator-heading"
              className="text-[22pt] font-bold tracking-tight leading-tight text-[#0F2D5A]"
            >
              {currentResume.header.name}
            </h2>
            <p className="text-[11pt] font-bold text-[#464646] mt-0.5">
              {currentResume.header.targetRole}
            </p>
            <p className="text-[9.5pt] text-[#464646] mt-1 leading-snug">
              <span>{currentResume.header.location} | </span>
              <span>{currentResume.header.phone} | </span>
              <a
                href={`mailto:${currentResume.header.email}`}
                className="text-[#464646] hover:underline"
              >
                {currentResume.header.email}
              </a>
              <span> | </span>
              <a
                href={currentResume.header.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0F2D5A] hover:underline"
              >
                {currentResume.header.linkedin}
              </a>
              <span> | </span>
              <a
                href={currentResume.header.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0F2D5A] hover:underline"
              >
                {currentResume.header.github}
              </a>
            </p>
          </header>

          {/* 1. RESUMO PROFISSIONAL */}
          <section className="mt-3.5">
            <h3 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-2 tracking-wide">
              RESUMO PROFISSIONAL
            </h3>
            <p className="text-[9.5pt] text-[#282828] leading-[1.42] text-left">
              {currentResume.summary}
            </p>
          </section>

          {/* 2. HABILIDADES TÉCNICAS */}
          <section className="mt-3.5">
            <h3 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-2 tracking-wide">
              HABILIDADES TÉCNICAS
            </h3>
            <div className="space-y-1 text-[9.5pt] leading-[1.38]">
              {currentResume.technicalSkills.map((skill) => (
                <p key={skill.id} className="text-[#323232]">
                  <strong className="font-bold text-[#1E1E1E]">{skill.category}: </strong>
                  <span>{skill.items}</span>
                </p>
              ))}
            </div>
          </section>

          {/* 3. EXPERIÊNCIA PROFISSIONAL */}
          <section className="mt-3.5">
            <h3 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-2 tracking-wide">
              EXPERIÊNCIA PROFISSIONAL
            </h3>
            <div className="space-y-3">
              {currentResume.experiences.map((exp) => (
                <div key={exp.id} className="break-inside-avoid">
                  <h4 className="text-[10pt] leading-snug mb-1">
                    <strong className="font-bold text-[#0F2D5A]">
                      {exp.role} | {exp.company}
                    </strong>
                    <span className="italic text-[9.5pt] text-[#5A5A5A] font-normal">
                      {' '}
                      — {exp.period} ({exp.modality})
                    </span>
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-[9.5pt] text-[#282828] leading-[1.38]">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <strong className="font-bold text-[#1E1E1E]">{bullet.label}: </strong>
                        <span>{bullet.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 4. PROJETOS RELEVANTES DE ENGENHARIA & PORTFÓLIO */}
          <section className="mt-3.5 break-inside-avoid">
            <h3 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-1.5 tracking-wide">
              PROJETOS RELEVANTES DE ENGENHARIA & PORTFÓLIO
            </h3>
            <p className="italic text-[9pt] text-[#505050] mb-1.5">
              {currentResume.projectsIntro}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[9.5pt] text-[#282828] leading-[1.38]">
              {currentResume.projects.map((proj) => (
                <li key={proj.id}>
                  <strong className="font-bold text-[#1E1E1E]">{proj.label}: </strong>
                  <span>{proj.text}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. FORMAÇÃO ACADÊMICA */}
          <section className="mt-3.5 break-inside-avoid">
            <h3 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-1.5 tracking-wide">
              FORMAÇÃO ACADÊMICA
            </h3>
            <div className="space-y-1 text-[9.5pt] leading-[1.38]">
              {currentResume.education.map((edu) => (
                <p key={edu.id} className="text-[#3C3C3C]">
                  <strong className="font-bold text-[#1E1E1E]">{edu.degree}</strong>
                  <span>
                    {' '}
                    | {edu.institution} ({edu.period})
                  </span>
                </p>
              ))}
            </div>
          </section>

          {/* 6. IDIOMAS */}
          <section className="mt-3.5 break-inside-avoid">
            <h3 className="text-[11.5pt] font-bold uppercase text-[#0F2D5A] border-b border-[#0F2D5A] pb-0.5 mb-1.5 tracking-wide">
              IDIOMAS
            </h3>
            <p className="text-[9.5pt] text-[#282828] leading-[1.38]">
              {currentResume.languages}
            </p>
          </section>
        </article>
      </div>

      {/* Feedback Toast */}
      <div className="no-print">
        <Toast
          message={toastMessage}
          isVisible={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
    </section>
  );
}
