import { projects } from '../data/profile';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="section-reveal border-t border-neutral-200 dark:border-neutral-800">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work with operational weight."
          description="Company work is summarized at a high level to respect confidentiality while still showing the engineering problems, systems, and outcomes involved."
        />

        <div className="mb-12 border border-neutral-950 p-6 dark:border-white sm:p-8">
          <p className="eyebrow">Featured Case Study</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-neutral-950 dark:text-white">
            Reducing report generation from 40s to under 3s
          </h3>
          <div className="mt-8 grid gap-7 md:grid-cols-4">
            {[
              ['Problem', 'A production banking report was slow enough to cause timeouts and failed downloads.'],
              ['Investigation', 'Analyzed SQL joins, stored procedures, and data retrieval patterns to locate the bottleneck.'],
              ['Solution', 'Optimized query and stored procedure logic while preserving expected reporting output.'],
              ['Result', 'Average response time improved by approximately 92%, from about 40 seconds to under 3 seconds.'],
            ].map(([label, text]) => (
              <div key={label} className="border-t border-neutral-200 pt-4 dark:border-neutral-800">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-neutral-950 dark:text-white">
                  {label}
                </p>
                <p className="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-px bg-neutral-200 dark:bg-neutral-800 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="bg-white p-6 dark:bg-neutral-950 sm:p-8">
              <p className="text-sm uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">{project.type}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-neutral-950 dark:text-white">
                {project.name}
              </h3>
              <p className="mt-4 text-base leading-7 text-neutral-600 dark:text-neutral-300">{project.summary}</p>
              <ul className="mt-6 space-y-3">
                {project.impact.map((item) => (
                  <li key={item} className="text-sm leading-7 text-neutral-700 dark:text-neutral-200">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">
                {project.stack.join(' / ')}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
