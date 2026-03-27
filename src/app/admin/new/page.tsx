'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function NewCaseStudy() {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    tags: '',
    problemStatement: '',
    targetUsers: '',
    painPoints: '',
    solution: '',
    metrics: '',
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const tagsArray = formData.tags.split(',').map(tag => tag.trim());
      const payload = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        tags: tagsArray,
        content: {
          problemStatement: formData.problemStatement,
          targetUsers: formData.targetUsers,
          painPoints: formData.painPoints,
          solution: formData.solution,
          features: [], // Simplified for now
          metrics: formData.metrics,
        }
      };

      const res = await fetch('/api/case-studies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        router.push('/admin/dashboard');
      } else {
        alert('Failed to save case study');
      }
    } catch (_err) {
      alert('Error saving case study');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 pb-40">
      <Link href="/admin/dashboard" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 mb-12">
        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
      </Link>

      <div className="flex flex-col gap-12">
        <h1 className="text-4xl font-bold tracking-tight">New Case Study</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-12">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-bold text-zinc-400">Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all font-medium"
                placeholder="Project Title"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest font-bold text-zinc-400">Slug</label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all font-medium"
                placeholder="project-slug-url"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest font-bold text-zinc-400">Excerpt (Short Summary)</label>
            <textarea
              required
              rows={2}
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all font-medium"
              placeholder="Brief overview of the project..."
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest font-bold text-zinc-400">Tags (Comma separated)</label>
            <input
              type="text"
              required
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all font-medium"
              placeholder="Product, UX, Metrics"
            />
          </div>

          <div className="h-px bg-zinc-100 dark:bg-zinc-800" />

          {/* Detailed Content */}
          <div className="grid grid-cols-1 gap-12">
             <div className="flex flex-col gap-2">
               <label className="text-xs uppercase tracking-widest font-bold text-zinc-400">The Problem</label>
               <textarea
                 required
                 rows={4}
                 value={formData.problemStatement}
                 onChange={(e) => setFormData({ ...formData, problemStatement: e.target.value })}
                 className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all font-medium"
                 placeholder="Describe the problem..."
               />
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="flex flex-col gap-2">
                 <label className="text-xs uppercase tracking-widest font-bold text-zinc-400">Target Users</label>
                 <textarea
                   required
                   rows={3}
                   value={formData.targetUsers}
                   onChange={(e) => setFormData({ ...formData, targetUsers: e.target.value })}
                   className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all font-medium"
                   placeholder="Who is this for?"
                 />
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-xs uppercase tracking-widest font-bold text-zinc-400">Pain Points</label>
                 <textarea
                   required
                   rows={3}
                   value={formData.painPoints}
                   onChange={(e) => setFormData({ ...formData, painPoints: e.target.value })}
                   className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all font-medium"
                   placeholder="Real-world pain points..."
                 />
               </div>
             </div>

             <div className="flex flex-col gap-2">
               <label className="text-xs uppercase tracking-widest font-bold text-zinc-400">The Solution</label>
               <textarea
                 required
                 rows={4}
                 value={formData.solution}
                 onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                 className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all font-medium"
                 placeholder="How did you solve it?"
               />
             </div>

             <div className="flex flex-col gap-2">
               <label className="text-xs uppercase tracking-widest font-bold text-zinc-400">Impact (Metrics)</label>
               <textarea
                 required
                 rows={3}
                 value={formData.metrics}
                 onChange={(e) => setFormData({ ...formData, metrics: e.target.value })}
                 className="p-4 bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all font-medium"
                 placeholder="Success metrics..."
               />
             </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full p-6 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? 'Saving...' : (
              <>
                <Save className="h-5 w-5" /> Save Case Study
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
