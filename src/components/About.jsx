import React from 'react';
import { Quote, GraduationCap, Sparkles, CheckCircle } from 'lucide-react';

export default function About({ data, personal }) {
  const t = data.about;

  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-[#080D18]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            // {t.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Card 1: The Quote Bento Box (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-white via-white to-cyan-50/30 dark:from-[#0E1628] dark:via-[#0E1628] dark:to-cyan-950/20 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <Quote className="absolute top-4 right-4 w-20 h-20 text-cyan-500/10 dark:text-cyan-500/15 pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-100/70 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                <span>Life &amp; Engineering Philosophy</span>
              </span>

              <blockquote className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-100 italic leading-relaxed pt-2">
                "{t.quote}"
              </blockquote>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-slate-900 dark:text-white">
                  {t.quoteAuthor}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {t.quoteNote}
                </div>
              </div>
              <div className="text-2xl">🌱</div>
            </div>
          </div>

          {/* Card 2: Academic Background & GPA 3.88 (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0E1628] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
                  GPA {personal.gpa}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t.educationTitle}
              </h3>
              <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="font-semibold text-slate-900 dark:text-white text-base">
                  {t.university}
                </div>
                <div>{t.faculty}</div>
                <div className="text-cyan-600 dark:text-cyan-400 font-medium">
                  {t.major}
                </div>
                <div className="text-slate-500 text-xs pt-1">{t.degree}</div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>{t.gpaLabel}</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 font-mono text-sm">
                {t.gpaBadge}
              </span>
            </div>
          </div>

          {/* Card 3: Target Roles & 3 Core Strengths Bento Box (12 cols) */}
          <div className="lg:col-span-12 rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0E1628] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            
            {/* Top row: Target Roles */}
            {t.targetRoles && (
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
                  🎯 {t.targetRolesTitle}
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {t.targetRoles.map((role, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60 flex items-center gap-2 shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Middle row: 3 Core Strengths */}
            {t.strengths && (
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <h4 className="text-sm font-bold uppercase tracking-wider font-mono text-slate-500 dark:text-slate-400 mb-4">
                  // {t.strengthsTitle}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {t.strengths.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                            {item.num}
                          </span>
                          <span className="font-bold text-slate-900 dark:text-white text-sm">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom row: Soft Skills */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <h4 className="text-xs font-bold uppercase tracking-wider font-mono text-slate-400 dark:text-slate-500 mb-3">
                // {t.softskillsTitle}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {t.softskills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-slate-100/60 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
