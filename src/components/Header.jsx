import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Button } from './ui/Button';

const navItems = [['Home', '#home'], ['About', '#about'], ['Stack', '#skills'], ['Projects', '#projects']];
const sectionIds = [...navItems.map(([, href]) => href.slice(1)), 'contact'];

export function Header({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visibleSections = entries.filter((entry) => entry.isIntersecting);
      if (visibleSections.length) {
        const currentSection = visibleSections.reduce((closest, entry) =>
          Math.abs(entry.boundingClientRect.top) < Math.abs(closest.boundingClientRect.top) ? entry : closest,
        );
        setActiveSection(currentSection.target.id);
      }
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header"><div className="header-inner">
      <a aria-label="HabibFnc home" className="brand brand-name" href="#home" onClick={closeMenu}><span className="brand-habib">Habib</span><span className="brand-fnc">Fnc</span></a>
      <nav aria-label="Main navigation" className={`header-nav ${menuOpen ? 'is-open' : ''}`}>
        {navItems.map(([label, href]) => <a aria-current={activeSection === href.slice(1) ? 'location' : undefined} className={`nav-link ${activeSection === href.slice(1) ? 'is-active' : ''}`} href={href} key={label} onClick={closeMenu}>{label}</a>)}
        <a className="nav-link nav-contact-mobile" href="#contact" onClick={closeMenu}>Say hello <FiArrowUpRight /></a>
      </nav>
      <div className="header-actions"><button aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} className="theme-toggle" onClick={onToggleTheme} type="button">{theme === 'light' ? <FiMoon /> : <FiSun />}</button><Button as="a" className="header-cta" href="#contact">Say hello <FiArrowUpRight /></Button><button aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'} className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} type="button">{menuOpen ? <FiX /> : <FiMenu />}</button></div>
    </div></header>
  );
}
