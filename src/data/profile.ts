export type Experience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

export type Project = {
  name: string;
  type: string;
  summary: string;
  impact: string[];
  stack: string[];
};

export const profile = {
  name: 'Jonathan Djoko',
  title: 'Backend-Focused Full Stack Software Engineer',
  location: 'Jakarta, Indonesia',
  email: 'jonathandjoko28@gmail.com',
  phone: '+6281253735427',
  linkedin: 'https://linkedin.com/in/jonathandjoko',
  hero:
    'I build reliable APIs, SQL-backed systems, and enterprise workflows, with production experience across banking and insurance.',
  intro: [
    'I am drawn to software engineering because it sits between logic and usefulness: small decisions in code can make work clearer, faster, and less frustrating for real people.',
    'I like learning new technologies, taking systems apart to understand them, and bringing a sense of creativity from art and music into how I think about product and engineering problems.',
    'Long term, I want to build meaningful products with teams that care about reliability, craft, and continuous improvement.',
  ],
  about:
    'I am a software engineer focused on backend and full stack roles where reliability, clear data flows, and practical product delivery matter. My experience spans enterprise banking systems, insurance operations platforms, production issue investigation, SQL optimization, ASP.NET modernization, secure authentication, and React-based internal tools.',
  thesis:
    'IEEE-published thesis research demonstrating technical writing, experimentation, and the ability to communicate engineering work beyond implementation.',
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
    stack: ['C#', 'ASP.NET', 'SQL Server', 'Stored Procedures', 'SonarQube', 'REST APIs'],
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
    stack: ['React', 'TypeScript', 'Redux', 'Tailwind CSS', 'MUI', 'Azure', 'Nginx'],
  },
];

export const projects: Project[] = [
  {
    name: 'BNI Housing Subsidy Financing Platform',
    type: 'Banking platform',
    summary:
      'Enterprise banking platform supporting application processing, monitoring, and reporting for housing subsidy financing workflows.',
    impact: [
      'Implemented backend features and maintained ASP.NET MVC functionality.',
      'Resolved production issues across reporting and data flows.',
      'Optimized report generation from approximately 40 seconds to under 3 seconds.',
    ],
    stack: ['ASP.NET MVC', 'C#', 'SQL Server', 'REST API', 'jQuery'],
  },
  {
    name: 'RIANG Employee Super App',
    type: 'Enterprise workflow app',
    summary:
      'Internal employee platform for reimbursements, approval workflows, service requests, and day-to-day company operations.',
    impact: [
      'Built responsive React interfaces for multi-step request workflows.',
      'Implemented validation logic and backend API integration.',
      'Supported secure login through Microsoft Identity and Azure MFA.',
    ],
    stack: ['React', 'Redux', 'Tailwind CSS', 'REST APIs', 'Azure MFA'],
  },
  {
    name: 'Service Traffic System',
    type: 'Queue management system',
    summary:
      'Queue management system for insurance branch offices, supporting customer check-ins, frontliner status, real-time monitoring, and TV display views.',
    impact: [
      'Built real-time dashboard and queue status interfaces.',
      'Integrated APIs for check-in, walk-in services, and frontliner status tracking.',
      'Developed TV display views and automated voice announcement flows.',
    ],
    stack: ['React', 'Redux', 'MUI', 'ASP.NET', 'REST APIs', 'Nginx'],
  },
  {
    name: 'Asuransi Astra Anniversary Digital Display',
    type: 'Event display system',
    summary:
      'Interactive large-screen display application presented on an 80-inch LED screen during Asuransi Astra’s corporate anniversary event.',
    impact: [
      'Built dynamic attendance and employee birthday visualization components.',
      'Optimized layout and rendering for a large-screen environment.',
      'Rendered real-time data to support participant engagement during the event.',
    ],
    stack: ['React', 'TypeScript', 'REST API', 'Tailwind CSS'],
  },
];

export const skillGroups = [
  {
    label: 'Backend',
    items: ['C#', 'ASP.NET', 'REST APIs', 'SQL Server', 'Stored procedures', 'Python'],
  },
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'Material UI', 'Next.js'],
  },
  {
    label: 'Data and Systems',
    items: ['Query optimization', 'Relational data modeling', 'Production debugging', 'API integration'],
  },
  {
    label: 'Engineering Practice',
    items: ['SonarQube', 'SAST/DAST remediation', 'Git', 'Bitbucket', 'Postman', 'Agile collaboration', 'Nginx'],
  },
];
