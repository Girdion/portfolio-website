import { FaGithub } from 'react-icons/fa6';
import type { Project } from '../../data/projects';
import { IconList } from '../icons/IconList';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full min-w-0 flex-col border border-neutral-200 bg-white p-5 transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-neutral-950 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] dark:border-neutral-800 dark:bg-neutral-950 dark:hover:border-white dark:hover:shadow-[0_12px_28px_rgba(255,255,255,0.04)] sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            {project.category}
          </p>
          <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-neutral-950 dark:text-white sm:text-2xl">
            {project.title}
          </h3>
        </div>
        <p className="w-fit shrink-0 border border-neutral-200 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
          {project.visibility}
        </p>
      </div>

      <p className="mt-5 text-base leading-7 text-neutral-600 dark:text-neutral-300">{project.description}</p>

      <div className="mt-6">
        <IconList showLabels technologies={project.technologies} />
      </div>

      <ul className="mt-7 space-y-3">
        {project.achievements.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-neutral-700 dark:text-neutral-200">
            <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-neutral-950 dark:bg-white" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {(project.githubUrl || project.liveDemoUrl) ? (
        <div className="mt-8 flex flex-wrap gap-3 border-t border-neutral-200 pt-5 dark:border-neutral-800">
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
