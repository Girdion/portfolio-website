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
            Projects I've Built
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-300">
            Here are a few projects I've enjoyed building over the years. Some come from professional work, while others were built to learn, experiment, or solve a problem I found interesting.
          </p>
        </div>
        <Link
          to="/"
          className="focus-ring inline-flex w-fit border border-neutral-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-950 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-neutral-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-950"
        >
          Back Home
        </Link>
      </div>

      <div className="grid gap-px bg-neutral-200 dark:bg-neutral-800 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
