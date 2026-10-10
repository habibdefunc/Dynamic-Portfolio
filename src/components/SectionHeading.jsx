import { SectionLabel } from './ui/SectionLabel';

export function SectionHeading({ eyebrow, title }) {
  return <div className="section-heading reveal"><SectionLabel>{eyebrow}</SectionLabel><h2>{title}</h2></div>;
}
