import { SectionHeading } from './SectionHeading';
import { profile } from '../data/profile';

export function Education() {
  return (
    <section id="education" className="section-reveal border-t border-neutral-200 dark:border-neutral-800">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education"
          title="Computer Science foundation with strong academic performance."
        />
        <div className="grid gap-10 border-y border-neutral-950 py-8 dark:border-white md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-neutral-950 dark:text-white">
              Bina Nusantara University
            </h3>
            <p className="mt-3 text-base leading-7 text-neutral-600 dark:text-neutral-300">
              Computer Science, Aug 2022 - Sep 2026
            </p>
            <p className="mt-5 text-xl font-semibold text-neutral-950 dark:text-white">CGPA 3.85 / 4.00</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-neutral-950 dark:text-white">
              IEEE-Published Thesis
            </h3>
            <p className="mt-3 text-base leading-8 text-neutral-600 dark:text-neutral-300">
              {profile.thesis}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
