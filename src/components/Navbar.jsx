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
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="relative w-9 h-9 rounded-xl p-[2px] bg-gradient-to-br from-cyan-500 via-indigo-500 to-pink-500 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 group-hover:scale-105 transition-all duration-300">
            <div className="w-full h-full rounded-[10px] bg-white dark:bg-slate-900 overflow-hidden flex items-center justify-center">
              <img
                src="./favicon.png"
                alt="Woradech Mascot"
                className="w-full h-full object-cover p-0.5 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-white tracking-tight leading-none text-base sm:text-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              Woradech A. <span className="text-cyan-500 text-sm font-normal">({personal.nickname})</span>
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono tracking-wider uppercase">
              {t.role}
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-1 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Controls (Lang, Theme, Resume & CV) */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 transition-all"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-500" />
            <span>{lang === 'th' ? 'EN' : 'TH'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700/60 transition-all"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* Combined Clean Document Buttons */}
          <div className="flex items-center p-0.5 rounded-lg bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60">
            <a
              href={personal.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition-all"
              title="เรซูเม่ 1 หน้า A4"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-500" />
              <span>Resume</span>
            </a>
            <div className="w-[1px] h-3.5 bg-slate-300 dark:bg-slate-700"></div>
            <a
              href={personal.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-xs hover:opacity-95 transition-all"
              title="Curriculum Vitae ฉบับเต็ม 3 หน้า"
            >
              <span>Full CV</span>
              <ArrowUpRight className="w-3 h-3 opacity-80" />
            </a>
          </div>
        </div>

        {/* Mobile / Tablet menu trigger (below lg breakpoint) */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 md:hidden"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>
          <button
            onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
            className="px-2 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 md:hidden"
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
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.resume}</span>
            </a>
            <a
              href={personal.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{t.cv}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
