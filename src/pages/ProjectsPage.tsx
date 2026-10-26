import { Link } from 'react-router-dom';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

export function ProjectsPage() {
  return (
    <section className="section-shell animate-page-load">
      <div className="mb-12 flex flex-col gap-8 border-b border-neutral-950 pb-10 dark:border-white lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="eyebrow">Projects</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-neutral-950 dark:text-white sm:text-6xl">
            Built to solve real problems
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            A selection of professional systems focused on dependable workflows, clearer operations, and better experiences for the people who use them every day.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400 lg:text-right">
            {String(projects.length).padStart(2, '0')} selected projects
          </p>
          <Link
            to="/"
            className="focus-ring inline-flex w-fit border border-neutral-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-950 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-neutral-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-950"
          >
            Back Home
          </Link>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
