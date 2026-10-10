import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiInstagram, FiMail } from 'react-icons/fi';
import avatar from '../assets/pp5.jpeg';
import { Button } from './ui/Button';
import { SectionLabel } from './ui/SectionLabel';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/habibdefunc', Icon: FiGithub },
  { label: 'Instagram', href: 'https://www.instagram.com/mhdnaufalhartg', Icon: FiInstagram },
  { label: 'Email', href: 'mailto:devdothabib@gmail.com', Icon: FiMail },
];

export function Hero() {
  return <section className="hero" id="home">
    <div className="hero-copy reveal"><SectionLabel>Hey there, I’m HabibFnc <span className="wave">✳</span></SectionLabel><h1>I make the internet feel a little <span className="highlight-word">friendlier.</span></h1><p className="hero-description">A web developer from Indonesia, turning good ideas into thoughtful websites and useful little tools.</p><div className="hero-actions"><Button as="a" href="#projects">See what I make <FiArrowDownRight /></Button><a className="text-link" href="#about">A bit about me <FiArrowUpRight /></a></div><div aria-label="Social links" className="hero-socials"><span className="social-caption">Find me around</span>{socialLinks.map(({ label, href, Icon }) => <a aria-label={label} href={href} key={label} rel="noreferrer" target="_blank"><Icon /></a>)}</div></div>
    <div aria-label="Illustrated profile portrait" className="hero-art reveal"><div className="art-sparkle sparkle-one">✳</div><div className="art-sparkle sparkle-two">✳</div><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-card"><div className="art-card-top"><span>currently creating</span><span className="online-dot" />online-ish</div><div className="portrait-frame"><img src={avatar} alt="Habib Ritonga" /></div><div className="art-card-caption"><span className="caption-emoji">(｡•̀ᴗ-)✧</span><strong>web dev &amp; daydreamer</strong><span>Medan, Indonesia ↗</span></div></div><div className="sticker-note note-top">good ideas<br />live here <span>↘</span></div><div className="sticker-note note-bottom"><span>✿</span> made with care</div></div>
    <a aria-label="Scroll to about" className="scroll-cue" href="#about"><span />a little further</a>
  </section>;
}
