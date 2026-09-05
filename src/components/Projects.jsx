import React, { useState } from 'react';
import { Github, ExternalLink, AlertCircle, CheckCircle2, Image as ImageIcon, FolderGit2 } from 'lucide-react';
import { projectsList } from '../data/projectsData';

export default function Projects({ data, lang }) {
  const [filter, setFilter] = useState('all');
  const t = data.projectsSection;

  // Helper function to resolve multilingual or string values seamlessly
  const resolveText = (value) => {
    if (!value) return '';
    if (typeof value === 'object') {
      return value[lang] || value.th || value.en || '';
    }
    return String(value);
  };

  const filteredProjects = filter === 'all' 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
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

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.filterAll}
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'fullstack'
                  ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.filterFullstack}
            </button>
            <button
              onClick={() => setFilter('automation')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'automation'
                  ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.filterAutomation}
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'ai'
                  ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {t.filterAi}
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => {
            const title = resolveText(project.title);
            const tagline = resolveText(project.tagline);
            const problem = resolveText(project.problem);
            const solution = resolveText(project.solution);
            const hasGithub = Boolean(project.github && project.github.trim() !== '');
            const hasDemo = Boolean(project.demo && project.demo.trim() !== '');

            return (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-white dark:bg-[#0E1628] border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <div>
                  {/* Thumbnail Image (if provided) */}
                  {project.thumbnail && project.thumbnail.trim() !== '' ? (
                    <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden mb-5 bg-slate-900 border border-slate-200 dark:border-slate-800 relative">
                      <img
                        src={project.thumbnail}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  ) : null}

                  {/* Header tag & title */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60">
                      {project.category}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      {hasGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          title="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {hasDemo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {title}
                  </h3>
                  {tagline && (
                    <p className="text-xs sm:text-sm text-cyan-600 dark:text-cyan-400 font-medium mt-1 mb-4">
                      {tagline}
                    </p>
                  )}

                  {/* Problem Statement Box */}
                  <div className="space-y-2.5 text-xs sm:text-sm my-4">
                    {problem && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-slate-900 dark:text-white">{t.problemLabel}</span>{' '}
                          {problem}
                        </div>
                      </div>
                    )}

                    {solution && (
                      <div className="p-3 rounded-xl bg-cyan-50/40 dark:bg-cyan-950/20 border border-cyan-100 dark:border-cyan-900/40 text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-slate-900 dark:text-white">{t.solutionLabel}</span>{' '}
                          {solution}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom: Tech Tags and Action Buttons */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-1">
                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{t.repoButton}</span>
                      </a>
                    )}
                    {hasDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-600 text-white shadow-sm transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{t.demoButton}</span>
                      </a>
                    )}
                    {!hasGithub && !hasDemo && (
                      <div className="w-full py-1.5 text-center text-xs font-mono text-slate-400 dark:text-slate-500">
                        {t.privateProjectBadge}
                      </div>
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
