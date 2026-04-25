import { Metadata } from 'next';
import { 
  Rocket, 
  Brain, 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  Github, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  Terminal, 
  Activity,
  Zap,
  BarChart3
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects | Saanvi Portfolio',
  description: 'A comprehensive list of my technical projects, ranging from enterprise microservices to AI models and system utilities.',
};

const projectCategories = [
  {
    id: 'backend',
    name: 'Backend & Microservices',
    icon: Database,
    description: 'Scalable distributed systems, API design, and cloud-native architectures.'
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    icon: Brain,
    description: 'Predictive modeling, data science, and intelligent automation.'
  },
  {
    id: 'fullstack',
    name: 'Full-Stack & Web',
    icon: Globe,
    description: 'End-to-end applications with modern frontend and robust backends.'
  },
  {
    id: 'systems',
    name: 'Systems & Utilities',
    icon: Terminal,
    description: 'High-performance computing, CLI tools, and core algorithms.'
  }
];

const allProjects = [
  // Backend & Microservices
  {
    title: 'Nexus Backend Platform',
    category: 'backend',
    desc: 'Enterprise Spring Boot Microservices Platform using DDD, CQRS, and Caffeine Caching.',
    tech: ['Java', 'Spring Boot', 'MyBatis', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Saanvirajput/nexus-backend-platform',
    isHighImpact: true
  },
  {
    title: 'FinTrack Microservices',
    category: 'backend',
    desc: 'Distributed Financial Microservices suite with Spring Cloud and Docker Multi-stage builds.',
    tech: ['Java', 'Spring Cloud', 'Netflix OSS', 'MongoDB', 'Docker'],
    github: 'https://github.com/Saanvirajput/fintrack-microservices',
    isHighImpact: true
  },
  {
    title: 'OmniMall E-Commerce',
    category: 'backend',
    desc: 'Omnichannel system with Elasticsearch Bulk Indexing and Redis Session management.',
    tech: ['Java', 'Spring Boot', 'Elasticsearch', 'Redis', 'MySQL'],
    github: 'https://github.com/Saanvirajput/omnimall-ecommerce',
    isHighImpact: true
  },
  {
    title: 'Cloud-Native Micro Demo',
    category: 'backend',
    desc: 'AI-integrated microservices blueprint with JVM Container tuning and CI/CD.',
    tech: ['Java', 'Spring Cloud', 'AI Integration', 'Kubernetes'],
    github: 'https://github.com/Saanvirajput/cloudnative-micro-demo'
  },
  {
    title: 'Architect Backend Challenges',
    category: 'backend',
    desc: 'Curated collection of Backend System Architecture challenges with Parallel CI/CD.',
    tech: ['System Design', 'CI/CD', 'Architecture'],
    github: 'https://github.com/Saanvirajput/architect-backend-challenges'
  },
  {
    title: 'DSA Java',
    category: 'backend',
    desc: 'Optimized implementations of core data structures and algorithms in Java.',
    tech: ['Java', 'Algorithms', 'Data Structures'],
    github: 'https://github.com/Saanvirajput/dsa-java'
  },

  // AI & Machine Learning
  {
    title: 'AI Chatbot',
    category: 'ai',
    desc: 'Intelligent conversational agent built with Python and NLP frameworks.',
    tech: ['Python', 'NLP', 'TensorFlow'],
    github: 'https://github.com/Saanvirajput/AI-Chatbot',
    isHighImpact: true
  },
  {
    title: 'Calorie Expenditure Model',
    category: 'ai',
    desc: 'Machine Learning model to predict daily calorie expenditure based on activity metrics.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
    github: 'https://github.com/Saanvirajput/Predict-Calorie-Expenditure-ML-model'
  },
  {
    title: 'House Price Prediction',
    category: 'ai',
    desc: 'Regression model for accurate property valuation based on multi-variate analysis.',
    tech: ['Python', 'ML Regression', 'Data Analysis'],
    github: 'https://github.com/Saanvirajput/House-Price-Prediction-model'
  },
  {
    title: 'Titanic Sink Analysis',
    category: 'ai',
    desc: 'Exploratory data analysis and survival prediction for the Titanic dataset.',
    tech: ['Python', 'EDA', 'Visualization'],
    github: 'https://github.com/Saanvirajput/titanic_sink'
  },
  {
    title: 'AI Procrastination Manager',
    category: 'ai',
    desc: 'Intelligent task prioritization utility using simple AI heuristics.',
    tech: ['Python', 'Logic Engines', 'Task Management'],
    github: 'https://github.com/Saanvirajput/AI_Procrastination_Manager'
  },

  // Full-Stack & Web
  {
    title: 'Apex Stack FastAPI',
    category: 'fullstack',
    desc: 'Premium Full-Stack Enterprise Template with FastAPI, Redis, and PostgreSQL.',
    tech: ['FastAPI', 'TypeScript', 'Redis', 'Next.js'],
    github: 'https://github.com/Saanvirajput/apex-stack-fastapi',
    isHighImpact: true
  },
  {
    title: 'PolicyHub',
    category: 'fullstack',
    desc: 'Full-stack insurance policy management platform with automated reminders.',
    tech: ['TypeScript', 'Node.js', 'React', 'MongoDB'],
    github: 'https://github.com/Saanvirajput/POLICYHUB',
    link: 'https://saanvirajput.github.io/POLICYHUB/',
    isHighImpact: true
  },
  {
    title: 'PAWLOFT Website',
    category: 'fullstack',
    desc: 'Animal Rescue & Adoption platform connecting rescuers and NGOs.',
    tech: ['JavaScript', 'Firebase', 'React', 'Tailwind'],
    github: 'https://github.com/Saanvirajput/PAWLOFT_WEBSITE'
  },
  {
    title: 'Farmshare',
    category: 'fullstack',
    desc: 'Agriculture platform for peer-to-peer equipment sharing and management.',
    tech: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    github: 'https://github.com/Saanvirajput/Farmshare'
  },
  {
    title: 'Beauty Website',
    category: 'fullstack',
    desc: 'Modern e-commerce storefront for beauty products with admin portal.',
    tech: ['React 19', 'Next.js 16', 'Mongoose', 'Glassmorphism'],
    github: 'https://github.com/Saanvirajput/beautywebsite'
  },
  {
    title: 'Golf Website',
    category: 'fullstack',
    desc: 'Interactive platform for golf enthusiasts with booking and tracking.',
    tech: ['TypeScript', 'Next.js', 'Tailwind'],
    github: 'https://github.com/Saanvirajput/golf-website'
  },
  {
    title: 'Task Manager',
    category: 'fullstack',
    desc: 'Clean, minimalist task management app with real-time sync.',
    tech: ['TypeScript', 'React', 'Supabase'],
    github: 'https://github.com/Saanvirajput/task-manager'
  },
  {
    title: 'Mind Flip',
    category: 'fullstack',
    desc: 'Interactive card-matching game focusing on memory and UX.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    github: 'https://github.com/Saanvirajput/Mind-Flip'
  },

  // Systems & Utilities
  {
    title: 'Learned Index Search',
    category: 'systems',
    desc: 'High-performance lookup system using predictive models to improve search efficiency.',
    tech: ['C++20', 'Predictive Models', 'TCP API'],
    github: 'https://github.com/Saanvirajput/cpp-learned-index',
    link: 'https://saanvirajput.github.io/cpp-learned-index/',
    isHighImpact: true
  },
  {
    title: 'CPP Chat Server',
    category: 'systems',
    desc: 'Concurrent chat server built with C++ and socket programming.',
    tech: ['C++', 'Networking', 'Threads'],
    github: 'https://github.com/Saanvirajput/cpp-chat-server'
  },
  {
    title: 'Brain Tease',
    category: 'systems',
    desc: 'Multiplayer word game with robust state management and retention mechanics.',
    tech: ['Game Engine', 'State Management'],
    github: 'https://github.com/Saanvirajput/Brain_Tease'
  },
  {
    title: 'Procrastination Manager',
    category: 'systems',
    desc: 'Command-line utility for managing time and avoiding distractions.',
    tech: ['Python', 'CLI', 'Automation'],
    github: 'https://github.com/Saanvirajput/Procrastination_Manager'
  },
  {
    title: 'Portfolio Site',
    category: 'systems',
    desc: 'My professional developer portfolio built with Next.js and Framer Motion.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/Saanvirajput/saanvirajput-PORTFOLIO'
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 pb-40 flex flex-col gap-32">
      <section className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Full Project Directory</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          A comprehensive collection of my work across backend systems, AI, and full-stack development. Every repository represents a step in my engineering journey.
        </p>
      </section>

      {projectCategories.map((category) => (
        <section key={category.id} className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg">
                <category.icon className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">{category.name}</h2>
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-xl">{category.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.filter(p => p.category === category.id).map((project) => (
              <div 
                key={project.title} 
                className={`group p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl transition-all hover:bg-white dark:hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-none flex flex-col justify-between ${project.isHighImpact ? 'md:col-span-1 lg:col-span-1' : ''}`}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-bold leading-tight group-hover:text-zinc-500 transition-colors">
                      {project.title}
                    </h3>
                    {project.isHighImpact && (
                      <span className="px-2 py-0.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[8px] uppercase tracking-widest font-black rounded-md">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-md text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[10px] font-bold hover:text-zinc-500 transition-colors"
                    >
                      <Github className="h-3 w-3" /> GitHub
                    </a>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-[10px] font-bold hover:text-zinc-500 transition-colors"
                      >
                        <ExternalLink className="h-3 w-3" /> Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
