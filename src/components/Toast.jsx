import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export default function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-24 right-6 sm:bottom-6 sm:left-6 sm:right-auto z-50 flex items-center gap-3 px-4 py-3 rounded-xl 
        bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xl border border-slate-700/40 
        dark:border-slate-200 animate-fade-up text-sm font-medium"
    >
      <CheckCircle2 className="w-5 h-5 text-emerald-400 dark:text-emerald-600 flex-shrink-0" />
      <span>{message}</span>
      <button
        onClick={onClose}
        className="p-1 -mr-1 rounded-lg opacity-70 hover:opacity-100 transition-opacity"
        aria-label="Fechar notificação"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
