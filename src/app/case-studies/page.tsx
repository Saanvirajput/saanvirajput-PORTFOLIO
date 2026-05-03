import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import Link from 'next/link';
import { caseStudiesData } from '@/data/caseStudies';

export default function CaseStudiesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 pb-40 flex flex-col gap-16">
      <div className="flex flex-col gap-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Case Studies</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Deep dives into my architecture and implementation strategies. Detailed explorations of complex technical challenges, trade-offs, and solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(caseStudiesData).map(([slug, study]) => (
          <Link 
            key={slug}
            href={`/case-studies/${slug}`}
            className="group flex flex-col gap-6 p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4">{study.title}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3">
                {study.description}
              </p>
            </div>

            <div className="mt-auto flex items-center justify-between pt-6 border-t border-zinc-100 dark:border-zinc-800">
              <span className="flex items-center gap-1.5 text-sm text-zinc-500 font-medium">
                <Clock className="h-4 w-4" /> {study.readingTime}
              </span>
              <span className="flex items-center gap-1 text-sm font-bold text-zinc-900 dark:text-zinc-100 group-hover:translate-x-1 transition-transform">
                Read Study <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
