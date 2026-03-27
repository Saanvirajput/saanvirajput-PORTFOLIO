'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Plus, Edit, Trash2, ExternalLink } from 'lucide-react';

export default function AdminDashboard() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (!auth) {
      router.push('/admin/login');
      return;
    }

    fetch('/api/case-studies')
      .then(res => res.json())
      .then(data => {
        setCaseStudies(data);
        setLoading(false);
      });
  }, [router]);

  const handleDelete = async (_id: string) => {
    if (confirm('Are you sure you want to delete this case study?')) {
      // Logic would go here to delete from API
      alert('Delete logic would be implemented here in a full production app.');
    }
  };

  if (loading) return <div className="p-20 text-center">Loading dashboard...</div>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-12">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-zinc-500 text-sm">Manage your portfolio content</p>
        </div>
        <Link
          href="/admin/new"
          className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <Plus className="h-4 w-4" /> New Case Study
        </Link>
      </div>

      <div className="bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 rounded-3xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-100 dark:border-zinc-800">
              <th className="p-6 text-xs uppercase tracking-widest font-bold text-zinc-400">Title</th>
              <th className="p-6 text-xs uppercase tracking-widest font-bold text-zinc-400">Slug</th>
              <th className="p-6 text-xs uppercase tracking-widest font-bold text-zinc-400">Date</th>
              <th className="p-6 text-xs uppercase tracking-widest font-bold text-zinc-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {caseStudies.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-12 text-center text-zinc-500 italic">No case studies found. Create your first one!</td>
              </tr>
            ) : (
              caseStudies.map((study: { _id: string, title: string, slug: string, createdAt: string }) => (
                <tr key={study._id} className="border-b border-zinc-100 dark:border-zinc-800 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/50 transition-colors">
                  <td className="p-6 font-bold">{study.title}</td>
                  <td className="p-6 text-zinc-500 text-sm">{study.slug}</td>
                  <td className="p-6 text-zinc-500 text-sm">{new Date(study.createdAt).toLocaleDateString()}</td>
                  <td className="p-6 text-right">
                    <div className="flex justify-end gap-3">
                      <Link href={`/case-studies/${study.slug}`} target="_blank" className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                      <button className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button onClick={() => handleDelete(study._id)} className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-zinc-500 hover:text-red-500 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
