'use client';

import { useParams } from 'next/navigation';
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
  'pawloft': {
    title: 'PawLoft — Animal Rescue & Adoption Platform',
    tags: ['Product', 'Development', 'Android'],
    readingTime: '5 min read',
    content: {
      problemStatement: 'fragmented communication and lack of adoption tracking in animal rescue workflows. Rescuers, NGOs, and adopters struggle to connect effectively, leading to delayed rescues and inefficient adoption processes.',
      targetUsers: 'Animal rescuers, NGOs/Shelters, and potential pet adopters.',
      painPoints: 'Fragmented communication, lack of centralized tracking for rescue cases, and high friction in the adoption request flow.',
      solution: 'Defined a centralized platform that streamlines rescue and adoption workflows. Designed end-to-end user journeys for animal listing, rescue case tracking, and adoption requests. Prioritized real-time status updates and verified listings.',
      features: [
        'Centralized Animal Listing',
        'Rescue Case Tracking (Real-time)',
        'Verified NGO/Rescuer listings',
        'Streamlined Adoption Workflows',
        'Multi-user interactions (Firebase backend)'
      ],
      userFlow: 'Rescuers list animals → NGOs track cases → Adopters request and undergo verified workflows → Real-time status updates keep everyone aligned.',
      metrics: 'Reduced adoption friction by simplifying request flow. (Currently iterating based on usability improvements).',
      tradeOffs: 'Focused on core rescue mechanics before adding advanced community features to ensure stability for production readiness.'
    }
  },
  'learned-index': {
    title: 'Learned Index Search Engine — High-Performance Lookup',
    tags: ['Systems', 'C++20', 'Product Thinking'],
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
  },
  'divine-blessings': {
    title: 'Divine Blessings — Astrology E-Commerce',
    tags: ['Freelance', 'Product', 'Android'],
    readingTime: '4 min read',
    content: {
      problemStatement: 'Spiritual seekers lacked a unified, trustworthy platform to discover products and receive daily astrology guidance in a seamless e-commerce experience.',
      targetUsers: 'Individuals interested in spiritual products, daily horoscopes, and daily guidance.',
      painPoints: 'Scattered sources for spiritual items, lack of daily engagement integrated with commerce, and complex purchase flows.',
      solution: 'Collaborated with stakeholders to define requirements and built an MVP focusing on product discovery and daily predictive content.',
      features: [
        'Daily Astrology Predictions',
        'Product Discovery Catalog',
        'Secure Purchase Flow/Checkout',
        'User Authentication',
        'Spiritual Content Hub'
      ],
      userFlow: 'User reads daily guidance → Discovers related products → Seamless add-to-cart → Integrated checkout.',
      metrics: 'Delivered a functional MVP that validated the business concept in under 4 months.',
      tradeOffs: 'Focused on the core commerce engine first; extended social sharing features were paused based on business priorities.'
    }
  },
  'brain-tease': {
    title: 'Brain Tease — Multiplayer Word Game',
    tags: ['Game Design', 'Engagement', 'Android'],
    readingTime: '3 min read',
    content: {
      problemStatement: 'Lack of interactive, turn-based word games that focus on both linguistic skill and high user engagement/retention for Android users.',
      targetUsers: 'Casual gamers and word puzzle enthusiasts looking for social competition.',
      painPoints: 'Boring single-player loops, lack of competitive mechanics, and poor state management in multiplayer sessions.',
      solution: 'Designed a 2-player interactive game loop focusing on replayability. Implemented smooth UX and robust state persistence.',
      features: [
        'Turn-based Multiplayer Engine',
        'Interactive Scoring System',
        'Gameplay State Persistence',
        'User Engagement Mechanics',
        'Real-time match notifications'
      ],
      userFlow: 'Join match → Play turn → Interactive scoring feedback → Progress tracking.',
      metrics: 'Improved user retention through optimized gameplay cycles and competitive feedback loops.',
      tradeOffs: 'Prioritized smooth 2-player interaction over a globally ranked leaderboard for the initial release.'
    }
  },
  'policyhub': {
    title: 'PolicyHub — Insurance Management App',
    tags: ['Utility', 'Product', 'Android'],
    readingTime: '3 min read',
    content: {
      problemStatement: 'Users struggle to manage multiple insurance policies from different providers, often missing payment deadlines due to a lack of centralized notifications.',
      targetUsers: 'Policy holders managing health, life, or vehicle insurance across multiple providers.',
      painPoints: 'Missed premium payments, fragmented policy documents, and lack of timely reminders.',
      solution: 'Built a centralized utility for tracking policies and automating reminders. Focused on structured data organization and timely alerts.',
      features: [
        'Centralized Policy Storage',
        'Automated Premium Reminders',
        'Insurance Provider Directory',
        'Payment History Tracking',
        'Document Cloud Sync'
      ],
      userFlow: 'Add policy details → Automated notification schedule → One-tap tracking → Timely premium payment.',
      metrics: 'Provided a practical solution to a real-world problem by reducing the rate of missed payments for beta users.',
      tradeOffs: 'Chose a simplified data entry flow over OCR scanning to ensure 100% accuracy in policy details for users.'
    }
  }
};

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params.slug as string;
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
                <span className="text-xl">👉</span> PM Signal
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium italic">
                {slug === 'pawloft' && "Problem → users → workflows → prioritization"}
                {slug === 'learned-index' && "Problem (performance) → solution → measurable impact"}
                {slug === 'divine-blessings' && "Stakeholder + user + MVP delivery"}
                {slug === 'brain-tease' && "Engagement + user experience"}
                {slug === 'policyhub' && "Real-world problem → practical solution"}
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
