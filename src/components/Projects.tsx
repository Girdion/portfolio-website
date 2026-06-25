import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/projects';
import { ProjectCard } from './projects/ProjectCard';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="section-reveal border-t border-neutral-200 dark:border-neutral-800">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Projects I've Built"
          description="A collection of systems, applications, and technical work I've built, maintained, and improved throughout my journey as a software engineer."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/projects"
            className="focus-ring inline-flex border border-neutral-950 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-neutral-950 hover:-translate-y-0.5 hover:bg-neutral-950 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-950"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
