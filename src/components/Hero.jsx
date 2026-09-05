import React from 'react';
import { ArrowDown, Github, Mail, Sparkles, Award, Layers, Bot } from 'lucide-react';

export default function Hero({ data, personal }) {
  const t = data.hero;

  return (
    <section id="top" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & Intro (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-5">
            
            {/* Academic Badge with pulse */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.badge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <div className="text-sm sm:text-base font-mono font-medium text-slate-500 dark:text-slate-400">
                Hi, I'm <span className="text-slate-900 dark:text-white font-semibold">{personal.name}</span> ({personal.nickname})
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Full-Stack Developer &amp;{' '}
                <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                  Automation
                </span>{' '}
                Enthusiast
              </h1>
            </div>

            {/* Subheadline description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {t.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
              >
                <span>{t.ctaProjects}</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:-translate-y-0.5 transition-all w-full sm:w-auto shadow-sm"
              >
                <Github className="w-4 h-4 text-slate-700 dark:text-slate-300" />
                <span>{t.ctaGithub}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-500 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{t.ctaContact}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Sci-Fi Glowing Avatar Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-indigo-600 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl bg-white dark:bg-[#0E1628] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl">
                
                {/* Photo */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-900">
                  <img
                    src="./profile.jpg"
                    alt={personal.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1534972195531-a756b1126975?w=600&auto=format&fit=crop&q=80";
                    }}
                  />
                  
                  {/* Subtle Sci-Fi Overlay Grid & Scanline aesthetic */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1628] via-transparent to-transparent opacity-80" />
                  
                  {/* Floating HUD status on photo */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-cyan-500/40 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                    <span>ONLINE // DEV_MODE</span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="font-semibold text-white tracking-wide drop-shadow-md">
                      {personal.name}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-[10px]">
                      GPA {personal.gpa}
                    </span>
                  </div>
                </div>

                {/* Bottom Quick Info strip */}
                <div className="p-4 bg-slate-50 dark:bg-[#121C33] border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 font-mono">
                  <span>📍 Bangkok, TH</span>
                  <span className="text-cyan-600 dark:text-cyan-400">#FullStack #N8N #AI</span>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bento Stats Strip below Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          
          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#0E1628]/60 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/50 transition-all flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono leading-none">
                {t.stats.gpaValue}
              </div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-1">
                {t.stats.gpa}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                {t.stats.gpaSub}
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#0E1628]/60 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/50 transition-all flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 border border-cyan-500/20">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {t.stats.fullstack}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                React • Node.js • C# • PHP
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                REST API &amp; JWT Auth
              </div>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-white dark:bg-[#0E1628]/60 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/50 transition-all flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 border border-indigo-500/20">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {t.stats.automation}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                N8N • Scrapers • Discord Bots
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                Data Science &amp; Predictive ML
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
