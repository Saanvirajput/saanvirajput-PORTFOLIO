'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Lightbulb } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 py-20 pb-40">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Hi, I&apos;m Saanvi. <br />
              <span className="text-zinc-500">Aspiring Product Manager.</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Technical background in CSE with a passion for building products that solve real user pain points. Focused on structured thinking, user-centric design, and data-driven decisions.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/case-studies"
                className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                Read My Journey
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2
            }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-zinc-200 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 rounded-[2.5rem] -z-10 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="aspect-square w-full bg-zinc-100 dark:bg-zinc-800 rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl relative">
              {/* Profile image placeholder - user should name it profile.jpg */}
              <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs font-bold text-center p-8 bg-zinc-100 dark:bg-zinc-900">
                <img 
                  src="/profile.jpg" 
                  alt="Saanvi Rajput" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as any).style.display = 'none';
                    (e.target as any).parentElement.innerHTML = 'Add your photo as /public/profile.jpg';
                  }}
                />
              </div>
            </div>
            {/* Animated accent circle */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-zinc-900 dark:bg-zinc-50 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-[10px] font-bold text-white dark:text-zinc-900 uppercase tracking-tighter">PM</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-24">
        <div className="max-w-5xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl w-fit shadow-sm">
                <Users className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="text-xl font-bold">User-Centric</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                I believe in starting with the user pain point and building solutions that actually simplify lives.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl w-fit shadow-sm">
                <BarChart3 className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="text-xl font-bold">Data-Driven</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Defining the right metrics and using data to validate hypotheses and measure success.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl w-fit shadow-sm">
                <Lightbulb className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="text-xl font-bold">Product Thinking</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Understanding the &apos;why&apos; behind every feature to ensure it aligns with business goals and user needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Catcher */}
      <section className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex justify-between items-end mb-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
            <p className="text-zinc-500 dark:text-zinc-400">Hand-picked selection of case studies.</p>
          </div>
          <Link href="/case-studies" className="text-sm font-medium hover:underline flex items-center gap-1 group">
            All Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Static placeholders for now, will fetch from DB later */}
          <Link href="/case-studies/student-marketplace" className="group block">
            <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden mb-6 transition-all group-hover:shadow-xl group-hover:shadow-zinc-200/50 dark:group-hover:shadow-none">
              <div className="w-full h-full flex items-center justify-center text-zinc-400 font-medium">
                Student Marketplace Platform
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Product</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">UX</span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-zinc-500 transition-colors">Improving peer-to-peer commerce in universities</h3>
              <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2">
                A case study on building a trust-based marketplace for students to buy, sell, and trade.
              </p>
            </div>
          </Link>

          <Link href="/case-studies/event-management" className="group block">
            <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-2xl overflow-hidden mb-6 transition-all group-hover:shadow-xl group-hover:shadow-zinc-200/50 dark:group-hover:shadow-none">
              <div className="w-full h-full flex items-center justify-center text-zinc-400 font-medium">
                Campus Event Management
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Metrics</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">Execution</span>
              </div>
              <h3 className="text-xl font-bold group-hover:text-zinc-500 transition-colors">Streamlining event discovery on campus</h3>
              <p className="text-zinc-500 dark:text-zinc-400 line-clamp-2">
                How we increased event attendance by 40% through a consolidated discovery platform.
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
