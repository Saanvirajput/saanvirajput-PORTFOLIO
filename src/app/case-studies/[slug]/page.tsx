import { ArrowLeft, Clock, Tag, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { caseStudiesData, CaseStudy, Section } from '@/data/caseStudies';

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

          {/* Dynamic Content Sections */}
          <div className="flex flex-col gap-24">
            {study.sections.map((section: Section) => (
              <section key={section.id} id={section.id} className="flex flex-col gap-6 scroll-mt-32">
                {section.title !== 'Final Takeaways' && (
                  <h2 className="text-3xl font-bold tracking-tight">{section.title}</h2>
                )}
                <div className="w-full">
                  {section.content}
                </div>
              </section>
            ))}

            <section className="p-8 bg-zinc-50 dark:bg-zinc-900/50 rounded-3xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-4 mt-12">
              <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100 font-bold">
                <span className="text-xl">⚙️</span> Engineering Signal
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium italic">
                {slug === 'zepto' && "System Design → Real-time Consistency → Distributed Orchestration"}
                {slug === 'nexus' && "Architecture → Scalability → CI/CD → Performance"}
                {slug === 'fintrack' && "Distributed Systems → Security → Real-time Analytics"}
                {slug === 'learned-index' && "Systems Programming → Optimization → Measurable Impact"}
              </p>
            </section>
          </div>
        </div>

        {/* Sticky Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-32 flex flex-col gap-8">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400">Navigation</h4>
            <nav className="flex flex-col gap-3">
              {study.sections.map((section: Section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors py-1 font-medium"
                >
                  {section.title}
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
