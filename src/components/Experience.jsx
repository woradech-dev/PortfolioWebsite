import React from 'react';
import { Briefcase, Calendar, ExternalLink, CheckCircle2, Building2, Tag, ShieldCheck } from 'lucide-react';
import { experienceData } from '../data/experienceData';

export default function Experience({ lang }) {
  const t = experienceData[lang] || experienceData.th;

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070C16]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left">
          <div className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            // {t.tag}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Architecture */}
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 sm:ml-6 md:ml-8 pl-6 sm:pl-8 space-y-10">
          {t.items.map((item, idx) => {
            const hasLink = Boolean(item.link && item.link.trim() !== '');

            return (
              <div key={item.id} className="relative group">
                
                {/* Glowing Node Dot on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[39px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#0E1628] border-2 border-cyan-500 group-hover:scale-125 group-hover:bg-cyan-500 transition-all duration-300 shadow-sm shadow-cyan-500/30"></div>

                {/* Experience Card */}
                <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-[#0E1628] border border-slate-200 dark:border-slate-800/80 shadow-sm hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300">
                  
                  {/* Top Bar: Period & Client Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                        {item.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                        <Building2 className="w-3.5 h-3.5 text-indigo-500" />
                        {item.client}
                      </span>
                    </div>

                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono uppercase font-bold tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {t.badgeProduction}
                    </span>
                  </div>

                  {/* Role and Event Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {item.eventName}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1 mb-3">
                    <Briefcase className="w-4 h-4 shrink-0" />
                    <span>{item.role}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Context: About Event & Challenge */}
                  {(item.aboutEvent || item.challenge) && (
                    <div className="mb-5 grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {item.aboutEvent && (
                        <div className="p-3.5 rounded-xl bg-slate-50/90 dark:bg-slate-900/50 border border-slate-200/70 dark:border-slate-800/80">
                          <div className="text-[11px] font-bold font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1.5 flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-indigo-500" />
                            <span>{t.aboutEventLabel || "เกี่ยวกับงานและองค์กร"}</span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            {item.aboutEvent}
                          </p>
                        </div>
                      )}
                      {item.challenge && (
                        <div className="p-3.5 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40">
                          <div className="text-[11px] font-bold font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1.5 flex items-center gap-1.5">
                            <span className="text-amber-500 font-black">⚡</span>
                            <span>{t.challengeLabel || "โจทย์และความท้าทาย"}</span>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            {item.challenge}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Deliverables / Key Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mb-6 p-4 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80">
                      <div className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{t.deliverablesLabel}</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {item.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Bottom: Tags & Live Link */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 border border-slate-200/70 dark:border-slate-700/50"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {hasLink && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-600 text-white shadow-sm hover:shadow-cyan-500/20 transition-all hover:scale-[1.02]"
                      >
                        <span>{t.viewSite}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
