import { skillGroups } from '../data/profile';
import { IconList } from './icons/IconList';
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
              <div className="mt-4">
                <IconList showLabels technologies={group.items} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
