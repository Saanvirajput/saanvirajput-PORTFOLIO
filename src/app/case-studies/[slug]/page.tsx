import { ArrowLeft, Clock, Tag, ChevronRight, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface StudyContent {
  problemStatement: string;
  targetUsers: string;
  painPoints: string;
  solution: string;
  features: string[];
  userFlow: string;
  metrics: string;
  tradeOffs: string;
}

interface CaseStudy {
  title: string;
  tags: string[];
  readingTime: string;
  content: StudyContent;
}

const caseStudiesData: Record<string, CaseStudy> = {
  'nexus': {
    title: 'Nexus — Enterprise Spring Boot Microservices Platform',
    tags: ['Backend', 'Spring Boot', 'DDD', 'CQRS'],
    readingTime: '6 min read',
    content: {
      problemStatement: 'Managing cross-domain coupling and scalability in large-scale enterprise applications. Traditional monolithic architectures or poorly designed microservices lead to maintenance nightmares and deployment bottlenecks.',
      targetUsers: 'Enterprise-level applications requiring high scalability and maintainable codebases.',
      painPoints: 'High coupling between services, inconsistent data models, and complex deployment cycles.',
      solution: 'Architected a production-grade backend using Domain-Driven Design (DDD) and Command Query Responsibility Segregation (CQRS). Implemented stateless JWT authentication and containerized the entire stack for seamless CI/CD.',
      features: [
        'Domain-Driven Design (DDD) Architecture',
        'CQRS Pattern for Read/Write Separation',
        'Stateless JWT Authentication with Spring Security',
        'Dockerized Multi-stage Builds',
        'GitHub Actions CI/CD Pipeline',
        'Caffeine In-memory Caching'
      ],
      userFlow: 'Request → API Gateway → Service Registry (Eureka) → Domain Service → DB (PostgreSQL) → Cached Response.',
      metrics: 'Reduced cross-domain coupling across 5+ services; achieved consistent build times under 3 minutes.',
      tradeOffs: 'Increased initial architectural complexity to ensure long-term scalability and independent service evolution.'
    }
  },
  'fintrack': {
    title: 'FinTrack — Distributed Financial Microservices Suite',
    tags: ['Fintech', 'Microservices', 'OAuth2', 'Security'],
    readingTime: '5 min read',
    content: {
      problemStatement: 'Building a secure, distributed financial platform that handles real-time data analytics while ensuring machine-to-machine and user-to-service security.',
      targetUsers: 'Financial institutions and users requiring real-time cash flow insights.',
      painPoints: 'Security vulnerabilities in service communication, high latency in financial reporting, and complex multi-service orchestration.',
      solution: 'Built a 6-service distributed fintech platform using Spring Cloud. Implemented OAuth2-based authentication and real-time cash flow analytics with environment-aware configuration management.',
      features: [
        '6-Service Distributed Architecture',
        'OAuth2-based M2M and User Auth',
        'Real-time Cash Flow Analytics',
        'Service Discovery & Circuit Breakers (Hystrix)',
        'Centralized Environment Configuration',
        'Docker Compose Multi-service Deployment'
      ],
      userFlow: 'User Auth (OAuth2) → Gateway → Statistics Service → Real-time Analytics Engine → Dashboard.',
      metrics: 'Reduced environment spin-up time from ~20 minutes to under 60 seconds; integrated circuit breakers for 90% reduced failure impact.',
      tradeOffs: 'Prioritized real-time analytics accuracy over supporting extremely high legacy data imports in the MVP.'
    }
  },
  'learned-index': {
    title: 'Learned Index Search Engine — High-Performance Lookup',
    tags: ['Systems', 'C++20', 'Backend'],
    readingTime: '4 min read',
    content: {
      problemStatement: 'Performance bottlenecks in standard search approaches (like binary search) when dealing with large-scale data systems. Traditional methods struggle with lookup efficiency at scale.',
      targetUsers: 'Large-scale data systems requiring ultra-fast lookup operations.',
      painPoints: 'High latency in traditional index lookups and suboptimal memory/CPU usage during heavy search loads.',
      solution: 'Built a high-performance alternative using predictive model-based indexing. Optimized lookup speed by leveraging C++20 for maximum efficiency.',
      features: [
        'Predictive Model-based Indexing',
        'C++20 High-Performance Core',
        'TCP-based API for real-time querying',
        'Benchmarking tool suite',
        'Scalable lookup architecture'
      ],
      userFlow: 'System receives data → Model predicts location → Direct memory lookup → Ultra-fast result delivery.',
      metrics: 'Achieved ~8–10× performance improvement in benchmark scenarios compared to traditional search methods.',
      tradeOffs: 'Invested more in initial model training time to achieve significantly lower lookup latency.'
    }
  }
};

export async function generateStaticParams() {
  return Object.keys(caseStudiesData).map((slug) => ({
    slug,
  }));
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudiesData[slug];

  if (!study) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-40 text-center">
        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
        <Link href="/case-studies" className="text-zinc-500 hover:underline">Return to Work</Link>
      </div>
    );
  }

  const sections = [
    { id: 'problem', label: 'Problem Statement' },
    { id: 'target', label: 'Target Users' },
    { id: 'pain-points', label: 'Pain Points' },
    { id: 'solution', label: 'Solution' },
    { id: 'features', label: 'Key Features' },
    { id: 'user-flow', label: 'User Flow' },
    { id: 'metrics', label: 'Metrics' },
    { id: 'trade-offs', label: 'Trade-offs' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 pb-40 relative">
      <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-12 group transition-colors">
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Back to Results
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-16">
        <div className="flex flex-col gap-12">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag: string) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {study.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-zinc-500">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {study.readingTime}</span>
            </div>
          </div>

          <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

          {/* Main Content */}
          <div className="flex flex-col gap-20">
            <section id="problem" className="flex flex-col gap-4 scroll-mt-32">
              <h2 className="text-2xl font-bold">The Problem</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {study.content.problemStatement}
              </p>
            </section>

            <section id="target" className="flex flex-col gap-4 scroll-mt-32">
              <h2 className="text-2xl font-bold">Target Users</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {study.content.targetUsers}
              </p>
            </section>

            <section id="pain-points" className="flex flex-col gap-4 scroll-mt-32">
              <h2 className="text-2xl font-bold">Real-world Pain Points</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {study.content.painPoints}
              </p>
            </section>

            <section id="solution" className="flex flex-col gap-4 scroll-mt-32 border-l-4 border-zinc-900 dark:border-zinc-100 pl-8 py-4">
              <h2 className="text-2xl font-bold">The Solution</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {study.content.solution}
              </p>
            </section>

            <section id="features" className="flex flex-col gap-6 scroll-mt-32">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {study.content.features.map((feature: string) => (
                  <div key={feature} className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800 flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-zinc-400 mt-0.5 shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="user-flow" className="flex flex-col gap-4 scroll-mt-32">
              <h2 className="text-2xl font-bold">User Flow</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {study.content.userFlow}
              </p>
            </section>

            <section id="metrics" className="flex flex-col gap-4 scroll-mt-32 p-8 bg-zinc-900 text-white rounded-3xl">
              <h2 className="text-2xl font-bold">The Impact (Metrics)</h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {study.content.metrics}
              </p>
            </section>

            <section id="trade-offs" className="flex flex-col gap-4 scroll-mt-32">
              <h2 className="text-2xl font-bold">Final Trade-offs</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed underline decoration-zinc-200 dark:decoration-zinc-800 underline-offset-8">
                {study.content.tradeOffs}
              </p>
            </section>

            <section className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-bold">
                <span className="text-xl">⚙️</span> Engineering Signal
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium italic">
                {slug === 'nexus' && "Architecture → Scalability → CI/CD → Performance"}
                {slug === 'fintrack' && "Distributed Systems → Security → Real-time Analytics"}
                {slug === 'learned-index' && "Systems Programming → Optimization → Measurable Impact"}
              </p>
            </section>
          </div>
        </div>

        {/* Sticky Sidebar Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 flex flex-col gap-8">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors py-1"
                >
                  {section.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Project Links</h4>
              <div className="flex flex-col gap-2">
                <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-zinc-500 transition-colors">
                  <Github className="h-4 w-4" /> GitHub Repository
                </a>
                <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-zinc-500 transition-colors">
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </div>
            <div className="h-px bg-zinc-100 dark:bg-zinc-800" />
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Project Tags</h4>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag: string) => (
                   <span key={tag} className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                     <Tag className="h-3 w-3" /> {tag}
                   </span>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
