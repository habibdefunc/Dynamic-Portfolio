import { FiArrowUpRight } from 'react-icons/fi';
import aerosphere from '../assets/AeroSphere.png';
import bjaCoatings from '../assets/bjacoatings-com.png';
import lpmdashboard from '../assets/LPM-Monitor.png';
import pesonaSumut from '../assets/pesona-sumut-trans.png';
import rahmatNauli from '../assets/rahmatnauliflora.png';

const projects = [
  { title: 'LPM Monitor', year: '2026', description: 'A quality assurance dashboard that makes campus activity easier to keep an eye on.', image: lpmdashboard, type: 'Dashboard', href: 'https://lpm-monitor-dashboard-web.vercel.app', tech: ['TypeScript', 'Express', 'PostgreSQL', 'React', 'Tailwind'], demo: true },
  { title: 'AeroSense', year: '2026', description: 'A friendly little window into the weather and air quality around you.', image: aerosphere, type: 'Web app', href: 'https://aerosenses.vercel.app', tech: ['React', 'Tailwind', 'WAQI API'] },
  { title: 'Rahmat Nauli Flora', year: '2026', description: 'A warm online home for a local plant and landscaping business.', image: rahmatNauli, type: 'Company site', href: 'https://rahmatnauli.com', tech: ['React', 'Tailwind'] },
  { title: 'Pesona Sumut Trans', year: '2025', description: 'A welcoming website for a local travel and transportation service.', image: pesonaSumut, type: 'Company site', href: 'https://pesonasumuttrans.com', tech: ['React', 'Tailwind'] },
  { title: 'BJA Coatings', year: '2025', description: 'A simple, polished showcase for a floor coating specialist.', image: bjaCoatings, type: 'Company site', href: 'https://epoxylantaimedan.com', tech: ['React', 'Tailwind'] },
];

function ProjectCard({ project, index }) {
  return <article className="project-card reveal" style={{ '--card-index': index }}>
    <a aria-label={`Visit ${project.title}`} className="project-image-link" href={project.href} rel="noopener noreferrer" target="_blank"><div className="project-image"><img alt={`${project.title} website preview`} decoding="async" loading="lazy" src={project.image} /><span className="project-type">{project.type}</span><span className="project-arrow"><FiArrowUpRight /></span></div></a>
    <div className="project-info"><div className="project-title-row"><h3>{project.title}</h3><span>{project.year}</span></div><p>{project.description}</p><div aria-label="Technologies" className="project-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>{project.demo && <div className="demo-accounts"><strong>Demo logins</strong><span>Admin: admin123 / admin123</span><span>Staff: test123 / test123</span></div>}</div>
  </article>;
}

export function Projects() {
  return <div className="projects-grid">{projects.map((project, index) => <ProjectCard index={index} key={project.title} project={project} />)}</div>;
}

export default Projects;
