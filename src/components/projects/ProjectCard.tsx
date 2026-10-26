import { FaGithub } from 'react-icons/fa6';
import type { Project } from '../../data/projects';
import { IconList } from '../icons/IconList';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <article
      className="project-card group relative flex h-full min-w-0 flex-col overflow-hidden border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950 sm:p-8"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-neutral-950 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-within:scale-x-100 dark:bg-white"
      />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            <span>{projectNumber}</span>
            <span aria-hidden="true" className="h-px w-5 bg-current opacity-50" />
            <span>{project.category}</span>
          </div>
          <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-neutral-950 dark:text-white sm:text-2xl">
            {project.title}
          </h3>
        </div>
        <p className="w-fit shrink-0 border border-neutral-200 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
          {project.visibility}
        </p>
      </div>

      <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-300">{project.description}</p>

      <div className="mt-7 border-y border-neutral-100 py-5 dark:border-neutral-900">
        <IconList showLabels technologies={project.technologies} />
      </div>

      <div className="mt-7 flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-7 bg-neutral-950 dark:bg-white" />
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">Highlights</p>
      </div>
      <ul className="mt-4 space-y-3">
        {project.achievements.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-neutral-700 dark:text-neutral-200">
            <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-neutral-950 dark:bg-white" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {(project.githubUrl || project.liveDemoUrl) ? (
        <div className="mt-8 flex flex-wrap gap-4 border-t border-neutral-200 pt-5 dark:border-neutral-800">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              className="focus-ring inline-flex items-center gap-2 text-sm font-medium text-neutral-950 hover:-translate-y-px hover:opacity-70 dark:text-white"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub aria-hidden="true" className="h-4 w-4" />
              GitHub
            </a>
          ) : null}
          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              className="focus-ring text-sm font-medium text-neutral-950 hover:-translate-y-px hover:opacity-70 dark:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
