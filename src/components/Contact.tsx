import { profile } from '../data/profile';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const links = [
  { label: 'Email', href: `mailto:${profile.email}`, Icon: FaEnvelope },
  { label: 'GitHub', href: profile.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedin },
  { label: 'Instagram', href: profile.instagram, Icon: FaInstagram },
];

export function Contact() {
  return (
    <footer id="contact" className="section-reveal border-t border-neutral-950 dark:border-white">
      <div className="section-shell">
        <p className="eyebrow">Contact</p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[0.7fr_0.3fr]">
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-neutral-950 dark:text-white sm:text-5xl">
              Open to backend, full stack, and software engineering roles.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
              I am especially interested in teams building reliable APIs, data-heavy products, enterprise systems, and workflow platforms.
            </p>
          </div>
          <address className="not-italic">
            <div className="space-y-3">
              {links.map(({ Icon, ...link }) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="focus-ring flex items-center gap-3 border-b border-neutral-200 pb-3 text-base font-medium text-neutral-950 hover:border-neutral-950 dark:border-neutral-800 dark:text-white dark:hover:border-white"
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm leading-7 text-neutral-500 dark:text-neutral-400">
              {profile.email}
              <br />
              {profile.location}
            </p>
          </address>
        </div>
        <div className="mt-16 border-t border-neutral-200 pt-6 dark:border-neutral-800">
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Jonathan Djoko / Software Engineering Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
}
