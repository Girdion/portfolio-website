import { skillGroups } from '../data/profile';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="section-reveal border-t border-neutral-200 dark:border-neutral-800">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for backend and full stack work."
          description="Grouped by how the skills show up in real work, not as a wall of disconnected badges."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label} className="border-t border-neutral-950 pt-5 dark:border-white">
              <h3 className="text-lg font-semibold text-neutral-950 dark:text-white">{group.label}</h3>
              <p className="mt-4 text-base leading-8 text-neutral-600 dark:text-neutral-300">
                {group.items.join(' / ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
