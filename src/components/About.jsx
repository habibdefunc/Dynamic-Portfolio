import { FiArrowUpRight, FiHeart } from 'react-icons/fi';
import { Button } from './ui/Button';

const facts = [
  { number: '01', title: 'Thoughtful by design', description: 'I care about the tiny details that make a site feel easy and lovely to use.' },
  { number: '02', title: 'Curious by default', description: 'From a new library to a better way of doing things, I love learning as I build.' },
  { number: '03', title: 'Good teammate energy', description: 'Clear communication, kind collaboration, and making things happen together.' },
];

export function About() {
  return <div className="about-layout reveal">
    <div className="about-story"><span className="about-emoji">( ˶ˆᗜˆ˵ )</span><p className="about-lead">I’m Habib, a developer who thinks the best websites feel <span>clear, warm, and human.</span></p><p className="about-copy">I started building for the fun of seeing ideas come to life. Since then, I’ve worked with small teams and businesses to make websites, dashboards, and digital products that solve real problems.</p><p className="about-copy">When I’m away from my editor, you’ll probably find me collecting ideas for the next thing to make. I’m currently open to freelance projects and good conversations.</p><Button as="a" className="about-link" href="mailto:devdothabib@gmail.com" variant="secondary">More good things ahead <FiArrowUpRight /></Button></div>
    <div className="fact-list">{facts.map((fact) => <article className="fact-card" key={fact.number}><span className="fact-number">{fact.number}</span><div><h3>{fact.title}</h3><p>{fact.description}</p></div><FiHeart className="fact-heart" /></article>)}</div>
  </div>;
}

export default About;
