import type { Technology } from './projects';

export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: Technology[];
};

export type SkillGroup = {
  label: string;
  items: Technology[];
};

export const profile = {
  name: 'Jonathan Djoko',
  title: 'Backend-Focused Full Stack Software Engineer',
  location: 'Jakarta, Indonesia',
  email: 'jonathandjoko28@gmail.com',
  phone: '+6281253735427',
  linkedin: 'https://linkedin.com/in/jonathandjoko',
  github: 'https://github.com/Girdion',
  instagram: 'https://www.instagram.com/jonathandjoko/',
  cvUrl: '/files/jonathan-djoko-cv.pdf',
  hero:
    'I build reliable APIs, SQL-backed systems, and enterprise workflows, with a growing interest in Go-based backend development.',
  intro: [
  'I enjoy building software that solves real problems through thoughtful engineering.',
  'I am naturally curious and enjoy learning new technologies, understanding how systems work, and continuously improving my craft.',
  'Long term, I want to build meaningful products with teams that value quality, collaboration, and continuous learning.',
  ],
  about:
    'I am a software engineer focused on backend and full stack roles where reliability, clear data flows, and practical product delivery matter. My experience spans enterprise banking systems, insurance operations platforms, production issue investigation, SQL optimization, ASP.NET modernization, secure authentication, and React-based internal tools. I am also interested in growing toward Go-based backend engineering roles.',
  thesis:
    'Conducted research on DDoS detection in Software-Defined Networks (SDN) during my undergraduate studies. The work was later published through IEEE.',
};

export const experiences: Experience[] = [
  {
    company: 'PT Bank Negara Indonesia (Persero) Tbk.',
    role: 'Backend Engineer',
    period: 'Apr 2026 - Dec 2026',
    summary:
      'Engineered and enhanced business-critical backend services and REST APIs for a housing subsidy platform serving 2,000+ branches and 15+ user roles.',
    bullets: [
      'Integrated the platform with Tapera, a government service, using C#, .NET, Dapper, and SQL Server.',
      'Optimized report-generation queries and stored procedures, cutting load time from several minutes to approximately 0-5 seconds and resolving recurring production timeouts.',
      'Owned Developer on Duty investigations, tracing data inconsistencies and service failures across application logic, SQL queries, stored procedures, and system integrations.',
      'Built database-backed logging for Tapera integration calls, speeding up production troubleshooting and reducing dependency on other teams for logs.',
      'Integrated SonarQube and remediated 10+ SAST/DAST findings across .NET Framework applications.',
    ],
    stack: ['csharp', 'aspnet', 'sqlserver', 'git'],
  },
  {
    company: 'Asuransi Astra Buana',
    role: 'Application Developer Intern',
    period: 'Mar 2025 - Mar 2026',
    summary:
      'Built internal applications for employee services, approval workflows, branch operations, and secure authentication flows.',
    bullets: [
      'Built responsive React, Redux, and Tailwind CSS interfaces for RIANG, an employee super app used by 1,500+ employees.',
      'Owned end-to-end development of reimbursement, office car, and snack-meeting modules, including multi-step forms and approval workflows integrated with RIANG OPEX.',
      'Built a branch-office queue management system from scratch, replacing a manual process and reducing frontliner idle time by 87.5%.',
      'Engineered 10+ C# (ASP.NET) APIs for customer check-in, walk-in services, and frontliner status tracking; deployed with a micro-frontend architecture on Nginx.',
      'Integrated multi-factor authentication with Microsoft Identity and Azure for secure login.',
    ],
    stack: ['react', 'javascript', 'tailwind', 'mui', 'git'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Backend',
    items: ['csharp', 'aspnet', 'go', 'python', 'sqlserver'],
  },
  {
    label: 'Frontend',
    items: ['react', 'redux', 'typescript', 'javascript', 'tailwind', 'mui', 'nextjs'],
  },
  {
    label: 'Data and Systems',
    items: ['mongodb', 'postgresql', 'redis', 'docker'],
  },
  {
    label: 'Engineering Practice',
    items: ['microservices', 'microfrontend', 'sonarqube', 'git', 'github', 'gitlab', 'bitbucket', 'postman', 'nginx'],
  },
];
