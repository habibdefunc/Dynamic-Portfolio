import { useState } from 'react';
import { FiArrowUpRight, FiGithub, FiInstagram, FiMail, FiX } from 'react-icons/fi';
import { Button } from './ui/Button';

const socials = [
  { label: 'GitHub', href: 'https://github.com/habibdefunc', Icon: FiGithub },
  { label: 'Instagram', href: 'https://www.instagram.com/mhdnaufalhartg', Icon: FiInstagram },
  { label: 'Email', href: 'mailto:devdothabib@gmail.com', Icon: FiMail },
];

export function Contact() {
  const [formOpen, setFormOpen] = useState(false);

  return <div className="contact-panel reveal">
    <div className="contact-copy"><span className="contact-doodle">✿</span><h3>Let’s make something<br /><span>people love using.</span></h3><p>I’ve got room for a new project and I’d love to hear what you’re thinking.</p><Button aria-expanded={formOpen} aria-controls="contact-form" onClick={() => setFormOpen(!formOpen)} type="button">{formOpen ? 'Close message form' : 'Send me a message'} {formOpen ? <FiX /> : <FiArrowUpRight />}</Button></div>
    <div className="contact-side"><span className="contact-note">Or drop by here</span><a className="contact-email" href="mailto:devdothabib@gmail.com">devdothabib@gmail.com <FiArrowUpRight /></a><div className="contact-socials">{socials.map(({ label, href, Icon }) => <a aria-label={label} href={href} key={label} rel="noreferrer" target="_blank"><Icon /></a>)}</div><span className="availability"><span className="online-dot" />Open to nice projects</span></div>
    {formOpen && <form action="https://getform.io/f/ajjeopwa" className="contact-form" encType="multipart/form-data" id="contact-form" method="POST" target="_blank">
      <input name="_subject" type="hidden" value="New Message From Portfolio Website!" />
      <label>Name<input autoComplete="name" name="name" required /></label>
      <label>Email<input autoComplete="email" name="email" required type="email" /></label>
      <label className="contact-form-message">Message<textarea name="message" required rows="4" /></label>
      <Button type="submit">Send message <FiArrowUpRight /></Button>
    </form>}
  </div>;
}

export default Contact;
