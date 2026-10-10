import { useEffect, useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { SectionHeading } from './components/SectionHeading';
import { Skills } from './components/Skills';

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  } catch {
    // The system theme remains available when browser storage is disabled.
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Session preference still applies. */ }
  }, [theme]);

  return (
    <div className="min-h-screen">
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <main className="site-shell">
        <Hero />
        <section className="content-section" id="about"><SectionHeading eyebrow="A little intro" title="The person behind the pixels." /><About /></section>
        <section className="content-section" id="skills"><SectionHeading eyebrow="My toolbox" title="Things I like to build with." /><Skills /></section>
        <section className="content-section" id="projects"><SectionHeading eyebrow="A few favorites" title="Little ideas, out in the world." /><Projects /></section>
        <section className="content-section" id="contact"><SectionHeading eyebrow="Your turn" title="Have a good one in mind?" /><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
