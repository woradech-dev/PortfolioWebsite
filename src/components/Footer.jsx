import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ data }) {
  const t = data.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-[#060A12] text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-center sm:text-left space-y-1">
          <p className="font-medium text-slate-700 dark:text-slate-300">
            {t.copyright}
          </p>
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            {t.builtWith}
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200/70 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          aria-label="Back to top"
        >
          <span>{t.backToTop}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
