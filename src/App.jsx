import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  // Theme state: dark (default) or light
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('siteTheme');
    return saved ? saved : 'dark';
  });

  // Language state: th (default) or en
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('siteLang');
    return saved ? saved : 'th';
  });

  // Apply theme class to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('siteTheme', theme);
  }, [theme]);

  // Persist language setting
  useEffect(() => {
    localStorage.setItem('siteLang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const currentData = portfolioData[lang];
  const personal = portfolioData.personal;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-cyan-500 selection:text-white">
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        data={currentData}
        personal={personal}
      />
      
      <main className="flex-1">
        <Hero data={currentData} personal={personal} />
        <Skills data={currentData} />
        <Projects data={currentData} lang={lang} />
        <About data={currentData} personal={personal} />
        <Contact data={currentData} personal={personal} />
      </main>

      <Footer data={currentData} />
    </div>
  );
}
