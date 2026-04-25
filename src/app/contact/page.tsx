'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:saanvirajput10@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
    setStatus('success');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 pb-40 grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Get in Touch</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Interested in collaborating or hiring? I&apos;m always open to discussing backend architecture or engineering opportunities.
          </p>
        </div>

        <div className="flex flex-col gap-6 pt-8">
          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
            <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full">
              <Mail className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">Email</span>
              <a href="mailto:saanvirajput10@gmail.com" className="hover:text-zinc-900 dark:hover:text-zinc-100 font-medium">saanvirajput10@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
            <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full">
              <Linkedin className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">LinkedIn</span>
              <a href="https://linkedin.com/in/saanvirajput" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 font-medium">linkedin.com/in/saanvirajput</a>
            </div>
          </div>

          <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
            <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-full">
              <Github className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest font-bold text-zinc-400">GitHub</span>
              <a href="https://github.com/Saanvirajput" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 font-medium">github.com/Saanvirajput</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-zinc-100 dark:border-zinc-800">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Full Name</label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-zinc-900 dark:text-zinc-100"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Email Address</label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-zinc-900 dark:text-zinc-100"
              placeholder="your@email.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Subject</label>
            <input
              id="subject"
              type="text"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-zinc-900 dark:text-zinc-100"
              placeholder="How can I help?"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Message</label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-4 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-100 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 dark:focus:ring-zinc-100 transition-all text-zinc-900 dark:text-zinc-100 resize-none"
              placeholder="Your message details..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full p-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50 mt-4"
          >
            {status === 'loading' ? 'Sending...' : (
              <>
                Send Message <Send className="h-4 w-4" />
              </>
            )}
          </button>

          {status === 'success' && (
            <p className="text-green-600 dark:text-green-400 text-sm text-center font-medium">Opening your email client...</p>
          )}
          {status === 'error' && (
            <p className="text-red-600 dark:text-red-400 text-sm text-center font-medium">Failed to send message. Please try again.</p>
          )}
        </form>
      </div>
    </div>
  );
}
