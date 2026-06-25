import { profile } from '../data/profile';
import { FaDownload, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';

const socialLinks = [
  { label: 'GitHub', href: profile.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, Icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: FaEnvelope },
  { label: 'Instagram', href: profile.instagram, Icon: FaInstagram },
];

function CodeSignal() {
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
        <p className="pt-2">
          build(usefulSystems)
          <span className="cursor-blink ml-1 inline-block h-4 w-px translate-y-0.5 bg-neutral-950 dark:bg-white" />
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
        <p className="eyebrow">{profile.location}</p>
        <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-neutral-950 dark:text-white min-[375px]:text-5xl sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-tight tracking-[-0.02em] text-neutral-900 dark:text-neutral-100 min-[375px]:text-2xl sm:text-3xl">
          {profile.title}
        </p>
        <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg">
          {profile.hero}
        </p>
        <div className="mt-10">
          <a
            href={profile.cvUrl}
            download
            className="focus-ring inline-flex w-fit max-w-full items-center justify-center gap-3 whitespace-nowrap border border-neutral-950 bg-neutral-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-neutral-950 dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-950 dark:hover:text-white sm:px-6 sm:tracking-[0.16em]"
          >
            <FaDownload aria-hidden="true" className="h-4 w-4" />
            Download CV
          </a>
          <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4" aria-label="Social links">
            {socialLinks.map(({ Icon, ...link }) => (
              <a
                key={link.label}
                href={link.href}
                className="focus-ring inline-flex h-9 w-9 items-center justify-center text-neutral-500 transition duration-300 hover:-translate-y-0.5 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
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
