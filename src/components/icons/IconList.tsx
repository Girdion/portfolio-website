import type { Technology } from '../../data/projects';
import { TechIcon } from './TechIcon';

export function IconList({ technologies }: { technologies: Technology[] }) {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Technologies used">
      {technologies.map((technology) => (
        <TechIcon key={technology} technology={technology} />
      ))}
    </div>
  );
}
