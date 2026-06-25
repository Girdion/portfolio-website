import type { Technology } from '../../data/projects';
import { TechIcon, TechLabel } from './TechIcon';

type IconListProps = {
  showLabels?: boolean;
  technologies: Technology[];
};

export function IconList({ showLabels = false, technologies }: IconListProps) {
  return (
    <div className="flex flex-wrap gap-2" aria-label={showLabels ? 'Skills' : 'Technologies used'}>
      {technologies.map((technology) =>
        showLabels ? (
          <TechLabel key={technology} technology={technology} />
        ) : (
          <TechIcon key={technology} technology={technology} />
        ),
      )}
    </div>
  );
}
