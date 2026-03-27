'use client';

import { useState, useMemo } from 'react';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { Search, X } from 'lucide-react';

const caseStudies = [
  {
    slug: 'professional-experience',
    title: 'Professional Product Management Experience',
    excerpt: 'Deep dives into my roles, stakeholder management, and product strategy across different domains.',
    tags: ['Strategy', 'Leadership', 'Product'],
    imageText: 'Professional Journey',
  }
];

const allTags = Array.from(new Set(caseStudies.flatMap(s => s.tags)));

export default function WorkPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        study.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => study.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 pb-40">
      <div className="flex flex-col gap-4 mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Case Studies</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          A collection of projects where I&apos;ve applied product thinking, user research, and technical understanding to solve complex problems.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 mb-16 items-start md:items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${selectedTags.includes(tag)
                  ? 'bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
            >
              {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="px-4 py-2 rounded-full text-xs font-bold bg-red-50 text-red-500 flex items-center gap-1 hover:bg-red-100 transition-all"
            >
              <X className="h-3 w-3" /> Clear
            </button>
          )}
        </div>
      </div>

      {filteredStudies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredStudies.map((study) => (
            <CaseStudyCard key={study.slug} {...study} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="text-zinc-500">No matching case studies found.</p>
        </div>
      )}
    </div>
  );
}
