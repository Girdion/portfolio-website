import { profile } from '../data/profile';

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
      className="section-shell animate-page-load grid min-h-[calc(100svh-73px)] content-center gap-14 lg:grid-cols-[1.08fr_0.92fr]"
    >
      <div className="max-w-3xl">
        <p className="eyebrow">{profile.location}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-neutral-950 dark:text-white sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-3xl text-2xl leading-tight tracking-[-0.02em] text-neutral-900 dark:text-neutral-100 sm:text-3xl">
          {profile.title}
        </p>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-300">
          {profile.hero}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="focus-ring inline-flex justify-center border border-neutral-950 bg-neutral-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-neutral-950 dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-950 dark:hover:text-white"
          >
            Contact
          </a>
          <a
            href="#experience"
            className="focus-ring inline-flex justify-center border border-neutral-950 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-950"
          >
            View Experience
          </a>
          <a
            href={profile.cvUrl}
            download
            className="focus-ring inline-flex justify-center border border-neutral-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-700 transition duration-300 hover:-translate-y-0.5 hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white"
          >
            Download CV
          </a>
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
