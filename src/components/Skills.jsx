import { FaReact } from 'react-icons/fa';
import { SiExpress, SiMysql, SiNodedotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
 { name: 'Node.js', group: 'Backend', Icon: SiNodedotjs, color: 'green' },
  { name: 'TypeScript', group: 'Backend', Icon: SiTypescript, color: 'blue' },
   { name: 'Express', group: 'Backend', Icon: SiExpress, color: 'plain' },
    { name: 'MySQL', group: 'Database', Icon: SiMysql, color: 'orange' },
  { name: 'PostgreSQL', group: 'Database', Icon: SiPostgresql, color: 'blue' },
   { name: 'React', group: 'Frontend', Icon: FaReact, color: 'blue' },
  { name: 'Tailwind CSS', group: 'Frontend', Icon: SiTailwindcss, color: 'cyan' },
 
];

export function Skills() {
  return <div className="skills-grid reveal">{skills.map(({ name, group, Icon, color }) => <article className="skill-chip" key={name}><span className={`skill-icon icon-${color}`}><Icon /></span><span className="skill-name">{name}</span><span className="skill-group">{group}</span></article>)}</div>;
}

export default Skills;
