import React, { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  UserCheck, 
  Sparkles, 
  Presentation, 
  Smartphone, 
  Star,
  Layers,
  FileText
} from 'lucide-react';
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

  const featuredProject = projectsList.find(p => p.isFeatured);
  const regularProjects = filter === 'all'
    ? projectsList.filter(p => !p.isFeatured)
    : projectsList.filter(p => p.category === filter);

  // If filtered category matches featured project, we also include it
  const showFeaturedTop = filter === 'all' && featuredProject;

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
            {t.filterOther && (
              <button
                onClick={() => setFilter('other')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === 'other'
                    ? 'bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {t.filterOther}
              </button>
            )}
          </div>
        </div>

        {/* 🌟 1. FEATURED PROJECT SHOWCASE (เมื่อเลือกฟิลเตอร์ทั้งหมด) */}
        {showFeaturedTop && (
          <div className="mb-12">
            <div className="rounded-3xl p-6 sm:p-8 md:p-10 bg-gradient-to-br from-white via-cyan-50/20 to-slate-50 dark:from-[#0E1628] dark:via-[#0B1323] dark:to-[#080D18] border-2 border-cyan-500/40 dark:border-cyan-500/30 shadow-2xl relative overflow-hidden group">
              {/* Background ambient glow */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Thumbnail */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg relative">
                    <img
                      src={featuredProject.thumbnail}
                      alt={resolveText(featuredProject.title)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold font-mono bg-emerald-500 text-white shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                      LIVE PRODUCTION
                    </div>
                  </div>

                  {/* Quick Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {featuredProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Project Story & Evidence */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-extrabold bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {t.featuredBadge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold uppercase bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800">
                      {featuredProject.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {resolveText(featuredProject.title)}
                  </h3>

                  <p className="text-sm sm:text-base text-cyan-600 dark:text-cyan-400 font-medium leading-relaxed">
                    {resolveText(featuredProject.tagline)}
                  </p>

                  {/* Evidence: Role & Outcome */}
                  <div className="space-y-3 pt-2">
                    {featuredProject.role && (
                      <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                        <UserCheck className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm">
                          <span className="font-bold text-slate-900 dark:text-white block sm:inline mr-1.5">
                            {t.roleLabel}
                          </span>
                          <span className="text-slate-600 dark:text-slate-300">
                            {resolveText(featuredProject.role)}
                          </span>
                        </div>
                      </div>
                    )}

                    {featuredProject.outcome && (
                      <div className="p-3.5 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/50 flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <div className="text-xs sm:text-sm">
                          <span className="font-bold text-emerald-900 dark:text-emerald-300 block sm:inline mr-1.5">
                            {t.outcomeLabel}
                          </span>
                          <span className="text-slate-600 dark:text-slate-300">
                            {resolveText(featuredProject.outcome)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Problem & Solution Accordion/Summary */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm pt-2">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">{t.problemLabel}</span>{' '}
                        {resolveText(featuredProject.problem)}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-cyan-50/40 dark:bg-cyan-950/20 border border-cyan-100 dark:border-cyan-900/40 text-slate-600 dark:text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white">{t.solutionLabel}</span>{' '}
                        {resolveText(featuredProject.solution)}
                      </div>
                    </div>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    {featuredProject.demo && (
                      <a
                        href={featuredProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                      >
                        <Smartphone className="w-4 h-4" />
                        <span>{resolveText(featuredProject.demoLabel) || t.demoButton}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {featuredProject.pdfLink && (
                      <a
                        href={featuredProject.pdfLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-lg transition-all hover:scale-[1.02]"
                      >
                        <FileText className="w-4 h-4 text-cyan-400 dark:text-cyan-600" />
                        <span>{lang === 'en' ? 'View Slide Presentation (PDF)' : 'ดูสไลด์นำเสนอ (PDF 13 หน้า)'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

        {/* 📦 2. OTHER PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {regularProjects.map((project) => {
            const title = resolveText(project.title);
            const tagline = resolveText(project.tagline);
            const role = resolveText(project.role);
            const outcome = resolveText(project.outcome);
            const problem = resolveText(project.problem);
            const solution = resolveText(project.solution);
            const hasGithub = Boolean(project.github && project.github.trim() !== '');
            const hasDemo = Boolean(project.demo && project.demo.trim() !== '');
            const hasSlide = Boolean(project.slideLink && project.slideLink.trim() !== '');
            const hasExtraLink = Boolean(project.extraLink && project.extraLink.trim() !== '');

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

                  {/* Evidence: Role & Outcome */}
                  <div className="space-y-2.5 my-4">
                    {role && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                        <UserCheck className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">{t.roleLabel}</span>{' '}
                          {role}
                        </div>
                      </div>
                    )}

                    {outcome && (
                      <div className="p-3 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                        <Sparkles className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-emerald-900 dark:text-emerald-300">{t.outcomeLabel}</span>{' '}
                          {outcome}
                        </div>
                      </div>
                    )}

                    {problem && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">{t.problemLabel}</span>{' '}
                          {problem}
                        </div>
                      </div>
                    )}

                    {solution && (
                      <div className="p-3 rounded-xl bg-cyan-50/40 dark:bg-cyan-950/20 border border-cyan-100 dark:border-cyan-900/40 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white">{t.solutionLabel}</span>{' '}
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

                  {/* Multi-action Link Buttons */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {hasDemo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[130px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-600 text-white shadow-sm transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{resolveText(project.demoLabel) || t.demoButton}</span>
                      </a>
                    )}

                    {hasExtraLink && (
                      <a
                        href={project.extraLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{resolveText(project.extraLinkLabel) || "Extra Demo"}</span>
                      </a>
                    )}

                    {hasSlide && (
                      <a
                        href={project.slideLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200 dark:border-indigo-800/60 transition-colors"
                      >
                        <Presentation className="w-3.5 h-3.5 text-indigo-500" />
                        <span>{resolveText(project.slideLabel) || "Canva Slide"}</span>
                      </a>
                    )}

                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>{t.repoButton}</span>
                      </a>
                    )}

                    {!hasGithub && !hasDemo && !hasSlide && !hasExtraLink && (
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

