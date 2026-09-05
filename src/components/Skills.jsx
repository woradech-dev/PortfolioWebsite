import React from 'react';
import { Layout, Server, Database, Cpu, CheckCircle2 } from 'lucide-react';

export default function Skills({ data }) {
  const t = data.skills;

  const icons = {
    frontend: <Layout className="w-6 h-6 text-cyan-500" />,
    backend: <Server className="w-6 h-6 text-indigo-500" />,
    database: <Database className="w-6 h-6 text-emerald-500" />,
    automation_ai: <Cpu className="w-6 h-6 text-amber-500" />
  };

  const accentColors = {
    frontend: "border-cyan-500/30 hover:border-cyan-500/80",
    backend: "border-indigo-500/30 hover:border-indigo-500/80",
    database: "border-emerald-500/30 hover:border-emerald-500/80",
    automation_ai: "border-amber-500/30 hover:border-amber-500/80"
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-[#080D18]/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
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

        {/* Bento Grid Layout (4 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.categories.map((cat) => (
            <div
              key={cat.id}
              className={`relative group rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#0E1628] border transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 ${accentColors[cat.id]}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                  {icons[cat.id]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Badges list */}
              <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/60">
                {cat.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium font-mono bg-slate-100 dark:bg-slate-800/70 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-cyan-500 opacity-70" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
