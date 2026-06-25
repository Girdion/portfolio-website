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
  visibility: 'Public' | 'Professional';
};

export const projects: Project[] = [
  {
    title: 'BNI Housing Subsidy Financing Platform',
    category: 'Banking platform',
    description:
      'Enterprise banking platform supporting application processing, monitoring, and reporting for housing subsidy financing workflows.',
    technologies: ['aspnet', 'csharp', 'sqlserver', 'javascript'],
    achievements: [
      'Implemented backend features and maintained ASP.NET MVC functionality.',
      'Resolved production issues across reporting and data flows.',
      'Optimized report generation from approximately 40 seconds to under 3 seconds.',
    ],
    visibility: 'Professional',
  },
  {
    title: 'RIANG Employee Super App',
    category: 'Enterprise workflow app',
    description:
      'Internal employee platform for reimbursements, approval workflows, service requests, and day-to-day company operations.',
    technologies: ['react', 'javascript', 'tailwind', 'azure'],
    achievements: [
      'Built responsive interfaces for multi-step request workflows.',
      'Implemented validation logic and backend API integration.',
      'Supported secure login through Microsoft Identity and Azure MFA.',
    ],
    visibility: 'Professional',
  },
  {
    title: 'Service Traffic System',
    category: 'Queue management system',
    description:
      'Queue management system for insurance branch offices, supporting customer check-ins, frontliner status, real-time monitoring, and TV display views.',
    technologies: ['react', 'javascript', 'mui', 'aspnet', 'nginx'],
    achievements: [
      'Built real-time dashboard and queue status interfaces.',
      'Integrated APIs for check-in, walk-in services, and frontliner status tracking.',
      'Developed TV display views and automated voice announcement flows.',
    ],
    visibility: 'Professional',
  },
  {
    title: 'Asuransi Astra Anniversary Digital Display',
    category: 'Event display system',
    description:
      'Interactive large-screen display application presented on an 80-inch LED screen during Asuransi Astra’s corporate anniversary event.',
    technologies: ['react', 'typescript', 'tailwind'],
    achievements: [
      'Built dynamic attendance and employee birthday visualization components.',
      'Optimized layout and rendering for an 80-inch LED display.',
      'Rendered real-time data to support participant engagement during the event.',
    ],
    visibility: 'Professional',
  },
];

export const featuredProjects = projects.slice(0, 2);
