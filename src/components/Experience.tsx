import { experiences } from '../data/profile';
import { IconList } from './icons/IconList';
import { SectionHeading } from './SectionHeading';

export function Experience() {
  return (
    <section id="experience" className="section-reveal border-t border-neutral-200 dark:border-neutral-800">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Enterprise systems, production issues, measurable impact."
          description="The work below is written for recruiters and engineering interviewers: what was built, what improved, and what technical judgment it required."
        />
        <div className="divide-y divide-neutral-200 border-y border-neutral-950 dark:divide-neutral-800 dark:border-white">
          {experiences.map((experience) => (
            <article key={experience.company} className="grid gap-8 py-10 lg:grid-cols-[0.36fr_0.64fr]">
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{experience.period}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-neutral-950 dark:text-white">
                  {experience.role}
                </h3>
                <p className="mt-2 text-base text-neutral-600 dark:text-neutral-300">{experience.company}</p>
              </div>
              <div>
                <p className="text-lg leading-8 text-neutral-800 dark:text-neutral-100">{experience.summary}</p>
                <ul className="mt-7 space-y-4">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-4 text-base leading-7 text-neutral-600 dark:text-neutral-300">
                      <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-neutral-950 dark:bg-white" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <IconList technologies={experience.stack} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
