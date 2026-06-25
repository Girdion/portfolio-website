import { useEffect, useState } from 'react';
import { profile } from '../data/profile';
import { FaDownload, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const socialLinks = [
  { label: 'GitHub', href: profile.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: FaEnvelope },
  { label: 'Instagram', href: profile.instagram, Icon: FaInstagram },
];

const heroPhrases = [
  'Building software that people actually use.',
  'Exploring backend systems.',
  'Learning one thing at a time.',
  'Trying not to break production.',
];

function CodeSignal() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setIsVisible(false);
      window.setTimeout(() => {
        setPhraseIndex((index) => (index + 1) % heroPhrases.length);
        setIsVisible(true);
      }, 220);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="code-card mt-10 border border-neutral-200 p-4 dark:border-neutral-800 sm:p-5"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-neutral-200 pb-4 dark:border-neutral-800">
        <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <span className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
      </div>
      <div className="mt-5 space-y-3 font-mono text-xs text-neutral-500 dark:text-neutral-400">
        <div className="code-line w-9/12" />
        <div className="code-line code-line-delay-1 w-7/12" />
        <div className="code-line code-line-delay-2 w-10/12" />
        <p
          className={`min-h-10 max-w-full break-words pt-2 leading-6 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-sm ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-1.5 opacity-0'
          }`}
        >
          {heroPhrases[phraseIndex]}
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="section-shell animate-page-load grid min-h-[calc(100svh-73px)] content-center gap-10 sm:gap-14 lg:grid-cols-[1.08fr_0.92fr]"
    >
      <div className="max-w-3xl">
        <p className="eyebrow stagger-in" style={{ animationDelay: '80ms' }}>
          {profile.location}
        </p>
        <h1
          className="stagger-in mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-neutral-950 dark:text-white min-[375px]:text-5xl sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '140ms' }}
        >
          {profile.name}
        </h1>
        <p
          className="stagger-in mt-6 max-w-3xl text-xl leading-tight tracking-[-0.02em] text-neutral-900 dark:text-neutral-100 min-[375px]:text-2xl sm:text-3xl"
          style={{ animationDelay: '210ms' }}
        >
          {profile.title}
        </p>
        <p
          className="stagger-in mt-7 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg"
          style={{ animationDelay: '280ms' }}
        >
          {profile.hero}
        </p>
        <div className="stagger-in mt-10" style={{ animationDelay: '350ms' }}>
          <a
            href={profile.cvUrl}
            download
            className="focus-ring inline-flex w-fit max-w-full items-center justify-center gap-3 whitespace-nowrap border border-neutral-950 bg-neutral-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-white hover:text-neutral-950 dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-950 dark:hover:text-white sm:px-6 sm:tracking-[0.16em]"
          >
            <FaDownload aria-hidden="true" className="h-4 w-4" />
            Download CV
          </a>
          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4" aria-label="Social links">
            {socialLinks.map(({ Icon, ...link }) => (
              <a
                key={link.label}
                href={link.href}
                className="focus-ring inline-flex h-9 w-9 items-center justify-center text-neutral-500 transition duration-300 hover:-translate-y-0.5 hover:scale-[1.06] hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={link.label}
                title={link.label}
              >
                <Icon aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <aside
        className="section-reveal border-y border-neutral-950 py-7 dark:border-white lg:self-end"
        aria-label="Personal introduction"
      >
        <p className="eyebrow">How I Think</p>
        <div className="mt-6 space-y-5">
          {profile.intro.map((item) => (
            <p key={item} className="text-base leading-8 text-neutral-700 dark:text-neutral-300">
              {item}
            </p>
          ))}
        </div>
        <CodeSignal />
      </aside>
    </section>
  );
}
