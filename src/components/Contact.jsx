import React, { useState } from 'react';
import { Mail, Copy, Check, Phone, MapPin, Github, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

export default function Contact({ data, personal }) {
  const [copied, setCopied] = useState(false);
  const t = data.contact;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            // {t.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl mx-auto">
            {t.subtitle}
          </p>
          <div className="mt-4 inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
            {t.availability}
          </div>
        </div>

        {/* Minimal Bento Contact Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-[#0E1628] border border-slate-200 dark:border-slate-800 shadow-xl space-y-8">
          
          {/* Email Highlight Box with One-Click Copy */}
          <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#121C33] border border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {t.emailCardTitle}
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base sm:text-lg font-bold font-mono text-slate-900 dark:text-white hover:text-cyan-500 transition-colors"
                >
                  {personal.email}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                copied
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t.copied : t.copyEmail}</span>
            </button>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3">
              <Phone className="w-4 h-4 text-indigo-500" />
              <div>
                <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-mono">{t.phoneLabel}</span>
                <a href={`tel:${personal.phone}`} className="font-semibold text-slate-900 dark:text-white hover:text-cyan-500">
                  {personal.phone}
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50/70 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-emerald-500" />
              <div>
                <span className="text-slate-500 dark:text-slate-400 block text-[11px] font-mono">{t.locationLabel}</span>
                <span className="font-semibold text-slate-900 dark:text-white">
                  {t.locationValue}
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-mono font-semibold uppercase text-slate-500 dark:text-slate-400 mb-3 text-center sm:text-left">
              {t.socialTitle}
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={personal.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-500" />
                <span>Facebook</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-sky-500" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
