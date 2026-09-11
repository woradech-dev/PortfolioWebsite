import React, { useState } from 'react';
import { Sun, Moon, Globe, FileText, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ lang, setLang, theme, toggleTheme, data, personal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = data.nav;

  const navLinks = [
    { href: '#about', label: t.about },
    { href: '#skills', label: t.skills },
    { href: '#projects', label: t.projects },
    { href: '#experience', label: t.experience || (lang === 'th' ? 'ประสบการณ์' : 'Experience') },
    { href: '#contact', label: t.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 dark:bg-[#0B0F19]/80 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-mono font-bold shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-white tracking-tight leading-none text-base sm:text-lg">
              Woradech A. <span className="text-cyan-500 text-sm font-normal">({personal.nickname})</span>
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono tracking-wider uppercase">
              {t.role}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1 relative"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Controls (Lang, Theme, Resume) */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 transition-all"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-500" />
            <span>{lang === 'th' ? 'EN' : 'TH'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 transition-all"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Resume Download / View Button */}
          <a
            href={personal.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-sm shadow-cyan-500/20 hover:opacity-95 hover:shadow-cyan-500/30 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.resume}</span>
            <ArrowUpRight className="w-3 h-3 opacity-70" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
          <button
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
          >
            {lang === 'th' ? 'EN' : 'TH'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-3 pb-6 bg-white dark:bg-[#0E1526] border-b border-slate-200 dark:border-slate-800 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <a
              href={personal.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.resume}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
