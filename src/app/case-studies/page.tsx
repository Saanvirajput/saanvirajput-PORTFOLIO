'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 pb-40 flex flex-col gap-12 items-center text-center">
      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Case Studies</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I&apos;m currently documenting detailed technical deep dives into my architecture and implementation strategies.
        </p>
      </div>

      <div className="p-12 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-3xl w-full max-w-2xl">
        <p className="text-zinc-500 mb-8 font-medium">
          Detailed case studies for Nexus, FinTrack, and other high-performance systems are in progress.
        </p>
        <Link 
          href="/projects" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-bold hover:opacity-90 transition-opacity"
        >
          Browse Project Directory <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
