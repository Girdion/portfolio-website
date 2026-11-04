export type Technology =
  | 'aspnet'
  | 'azure'
  | 'bitbucket'
  | 'csharp'
  | 'docker'
  | 'git'
  | 'github'
  | 'gitlab'
  | 'go'
  | 'javascript'
  | 'microfrontend'
  | 'microservices'
  | 'mongodb'
  | 'mui'
  | 'nextjs'
  | 'nginx'
  | 'postgresql'
  | 'postman'
  | 'python'
  | 'react'
  | 'redis'
  | 'redux'
  | 'sonarqube'
  | 'sqlserver'
  | 'tailwind'
  | 'typescript';

export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: Technology[];
  achievements: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  visibility: 'Personal' | 'Professional';
};

export const projects: Project[] = [
  {
    title: 'BNI Housing Subsidy Financing Platform',
    category: 'Banking platform',
    description:
      'Business-critical housing subsidy platform serving 2,000+ branches and 15+ user roles, with application processing, monitoring, reporting, and Tapera integration.',
    technologies: ['csharp', 'aspnet', 'javascript', 'sqlserver'],
    achievements: [
      'Engineered backend services and REST APIs using C#, .NET, Dapper, and SQL Server.',
      'Reduced report-generation load time from several minutes to approximately 0-5 seconds, resolving recurring production timeouts.',
      'Built database-backed logging for Tapera calls to speed up production investigation.',
    ],
    visibility: 'Professional',
  },
  {
    title: 'RIANG Employee Super App',
    category: 'Enterprise workflow app',
    description:
      'Internal employee super app used by 1,500+ people for reimbursements, approvals, service requests, and operational workflows.',
    technologies: ['react', 'javascript', 'tailwind', 'mui', 'csharp', 'aspnet', 'sqlserver'],
    achievements: [
      'Built responsive React, Redux, and Tailwind CSS interfaces for multi-step employee requests.',
      'Owned reimbursement, office car, and snack-meeting modules integrated with RIANG OPEX finance workflows.',
      'Integrated multi-factor authentication with Microsoft Identity and Azure for secure login.',
    ],
    visibility: 'Professional',
  },
  {
    title: 'Service Traffic System',
    category: 'Queue management system',
    description:
      'Branch-office queue management system built from scratch to replace manual customer check-in, frontliner-status, and monitoring workflows.',
    technologies: ['react', 'javascript', 'tailwind', 'mui', 'nginx'],
    achievements: [
      'Reduced frontliner idle time by 87.5% with real-time dashboards and TV display views.',
      'Engineered 10+ C# (ASP.NET) APIs for check-in, walk-in services, and frontliner status tracking.',
      'Deployed through a micro-frontend architecture on Nginx.',
    ],
    visibility: 'Professional',
  },
  {
    title: 'Offerly',
    category: 'Backend job application platform',
    description:
      'A Go backend application for managing job applications, focused on RESTful API design and relational data modeling.',
    technologies: ['go', 'postgresql', 'redis', 'docker'],
    achievements: [
      'Developing the API with Go (Gin) and PostgreSQL for job application management.',
      'Building a modular architecture designed for caching, asynchronous processing, and file management.',
      'Planning Redis, RabbitMQ, and cloud object storage integrations as the platform evolves.',
    ],
    visibility: 'Personal',
  },
];

export const featuredProjects = projects.slice(0, 2);
