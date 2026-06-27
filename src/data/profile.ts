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
    company: 'Bank Negara Indonesia',
    role: 'Backend Developer',
    period: 'Apr 2026 - Present',
    summary:
      'Working on enterprise banking applications with a focus on SQL-backed reporting, production debugging, security remediation, and backend maintainability.',
    bullets: [
      'Optimized a critical SQL query and stored procedure, reducing average report response time by approximately 92%, from around 40 seconds to under 3 seconds.',
      'Investigated production data issues by debugging SQL joins, stored procedures, and cross-system integration flows.',
      'Integrated SonarQube for .NET Framework applications and remediated SAST/DAST findings to improve security and code quality compliance.',
      'Contributed to ASP.NET modernization and migration work across enterprise banking systems.',
    ],
    stack: ['csharp', 'aspnet', 'sqlserver', 'git'],
  },
  {
    company: 'Asuransi Astra Buana',
    role: 'Frontend Developer Intern',
    period: 'Mar 2025 - Mar 2026',
    summary:
      'Built enterprise internal applications for employee services, approval workflows, branch queue management, dashboards, and secure authentication flows.',
    bullets: [
      'Built responsive React, Redux, and Tailwind CSS interfaces for RIANG, an employee super app supporting reimbursements, approvals, service requests, and internal operations.',
      'Owned request modules for reimbursement, office car, and meeting snack workflows, including multi-step forms, validation logic, and backend API integration.',
      'Integrated multi-factor authentication using Microsoft Identity and Azure for secure login flows.',
      'Built queue management interfaces for branch offices, including real-time dashboards, TV display views, frontliner status, and automated queue announcements.',
      'Contributed to micro-frontend architecture and deployment using Nginx.',
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
