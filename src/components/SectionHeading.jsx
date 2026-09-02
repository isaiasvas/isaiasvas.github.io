import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className = ""
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 
          bg-brand-50 text-brand-600 border border-brand-200/60 
          dark:bg-brand-950/60 dark:text-brand-300 dark:border-brand-800/60`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed ${
          isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
