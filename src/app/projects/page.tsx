import { Metadata } from 'next';
import { Layout, Map, Rocket, Brain, Github, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Projects | Saanvi Portfolio',
};

const projectIdeas = [
  {
    title: 'PawLoft — Animal Rescue & Adoption Platform',
    desc: 'A centralized platform connecting rescuers, NGOs, and adopters to streamline animal rescue and adoption workflows.',
    journey: 'Ideation → User Research (Surveys) → Low-fi Wireframes → Feature Prioritization (MoSCoW)',
    features: ['Real-time status updates', 'Verified listings', 'Adoption workflows', 'Firebase integration'],
    icon: Rocket,
    github: 'https://github.com/Saanvirajput/PAWLOFT_WEBSITE',
  },
  {
    title: 'Learned Index Search Engine — High-Performance Lookup',
    desc: 'A high-performance lookup system using predictive models to improve search efficiency by 8–10×.',
    journey: 'Pain point mapping (Search bottlenecks) → Solution design (Predictive models) → Performance benchmarking',
    features: ['Predictive indexing', 'C++20 kernel', 'TCP-based API', 'Ultra-low latency'],
    icon: Brain,
    github: 'https://github.com/Saanvirajput/cpp-learned-index',
    link: 'https://saanvirajput.github.io/cpp-learned-index/',
  },
  {
    title: 'Divine Blessings — Astrology E-Commerce Platform',
    desc: 'An astrology-based e-commerce platform focused on spiritual products and daily guidance.',
    journey: 'Requirement definition → User persona mapping → MVP design → Stakeholder collaboration',
    features: ['Product discovery', 'Daily predictions', 'Seamless checkout', 'Auth integration'],
    icon: Layout
  },
  {
    title: 'Brain Tease — Multiplayer Word Game',
    desc: 'A 2-player interactive word game focusing on engagement and replayability.',
    journey: 'Core gameplay loop design → UX prototyping → Multiplayer state management',
    features: ['Turn-based engine', 'Real-time scoring', 'User retention mechanics'],
    icon: Rocket
  },
  {
    title: 'PolicyHub — Insurance Management App',
    desc: 'A centralized solution for tracking multiple insurance policies and missing payment deadlines.',
    journey: 'Problem identification (Missed payments) → Utility design → Alert system automation',
    features: ['Policy storage', 'Automated notifications', 'Premium tracking'],
    icon: Layout,
    github: 'https://github.com/Saanvirajput/POLICYHUB',
    link: 'https://saanvirajput.github.io/POLICYHUB/',
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 pb-40 flex flex-col gap-24">
      <section className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Product Ideas</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Beyond completed case studies, I constantly brainstorm and deconstruct product ideas. These are early-stage concepts where I focus on problem validation and user journey mapping.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectIdeas.map((project) => (
          <div key={project.title} className="group p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl transition-all hover:bg-white dark:hover:bg-zinc-800 hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-none">
            <div className="flex flex-col gap-6">
              <div className="p-4 bg-zinc-900 dark:bg-zinc-700 text-white rounded-2xl w-fit">
                <project.icon className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{project.desc}</p>
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                  <Map className="h-3 w-3" /> User Journey
                </div>
                <p className="text-sm font-medium">{project.journey}</p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                  <Layout className="h-3 w-3" /> Core Features
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.features.map(f => (
                    <span key={f} className="px-3 py-1 bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-full text-xs font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {(project.github || project.link) && (
                <div className="flex gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold hover:text-zinc-500 transition-colors"
                    >
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-bold hover:text-zinc-500 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
