import type { IconType } from 'react-icons';
import { FaMicrosoft } from 'react-icons/fa6';
import {
  SiBitbucket,
  SiDocker,
  SiDotnet,
  SiGit,
  SiGithub,
  SiGo,
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedis,
  SiSharp,
  SiSonarqubeserver,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbApi, TbBrandAzure, TbDatabase } from 'react-icons/tb';
import type { Technology } from '../../data/projects';

type IconMeta = {
  label: string;
  Icon: IconType;
};

const iconMap: Record<Technology, IconMeta> = {
  aspnet: { label: 'ASP.NET', Icon: SiDotnet },
  azure: { label: 'Microsoft Azure', Icon: TbBrandAzure },
  bitbucket: { label: 'Bitbucket', Icon: SiBitbucket },
  csharp: { label: 'C#', Icon: SiSharp },
  docker: { label: 'Docker', Icon: SiDocker },
  git: { label: 'Git', Icon: SiGit },
  github: { label: 'GitHub', Icon: SiGithub },
  go: { label: 'Go', Icon: SiGo },
  javascript: { label: 'JavaScript', Icon: SiJavascript },
  mui: { label: 'Material UI', Icon: SiMui },
  nextjs: { label: 'Next.js', Icon: SiNextdotjs },
  nginx: { label: 'Nginx', Icon: SiNginx },
  postgresql: { label: 'PostgreSQL', Icon: SiPostgresql },
  postman: { label: 'Postman', Icon: SiPostman },
  python: { label: 'Python', Icon: SiPython },
  react: { label: 'React', Icon: SiReact },
  redis: { label: 'Redis', Icon: SiRedis },
  rest: { label: 'REST APIs', Icon: TbApi },
  sonarqube: { label: 'SonarQube', Icon: SiSonarqubeserver },
  sqlserver: { label: 'SQL Server', Icon: TbDatabase },
  tailwind: { label: 'Tailwind CSS', Icon: SiTailwindcss },
  typescript: { label: 'TypeScript', Icon: SiTypescript },
};

export function TechIcon({ technology }: { technology: Technology }) {
  const meta = iconMap[technology];
  const { Icon } = meta;

  return (
    <span
      className="group relative inline-flex h-9 w-9 items-center justify-center border border-neutral-200 text-neutral-700 transition duration-300 hover:border-neutral-950 hover:text-neutral-950 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white"
      aria-label={meta.label}
      title={meta.label}
    >
      <Icon aria-hidden="true" className="h-4 w-4" />
      <span className="sr-only">{meta.label}</span>
    </span>
  );
}

export function TechLabel({ technology }: { technology: Technology }) {
  const meta = iconMap[technology];
  const { Icon } = meta;

  return (
    <span
      className="inline-flex items-center gap-3 border border-neutral-200 px-3 py-2 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
      title={meta.label}
    >
      <Icon aria-hidden="true" className="h-4 w-4 shrink-0" />
      <span>{meta.label}</span>
    </span>
  );
}

export function MicrosoftIcon({ label }: { label: string }) {
  return (
    <span
      className="inline-flex h-9 w-9 items-center justify-center border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
      aria-label={label}
      title={label}
    >
      <FaMicrosoft aria-hidden="true" className="h-4 w-4" />
      <span className="sr-only">{label}</span>
    </span>
  );
}
