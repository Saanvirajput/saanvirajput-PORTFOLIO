'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Users, Lightbulb, ShieldCheck, Download } from 'lucide-react';
import profilePic from '../../public/profile.png';

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
              <span className="text-zinc-500">Backend & Systems Engineer.</span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Passionate about building scalable, high-performance distributed systems. Specialized in Spring Boot, FastAPI, and Cloud-Native architectures with a focus on observability and system reliability.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/projects"
                className="px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                View Project Directory
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
          <div className="absolute inset-0 flex items-center justify-center text-zinc-400 text-xs font-bold text-center p-8 bg-zinc-100 dark:bg-zinc-900">
            <img 
              src={profilePic.src} 
              alt="Saanvi Rajput" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = 'Add your photo as /public/profile.png';
                }
              }}
            />
          </div>
        </div>
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-zinc-900 dark:bg-zinc-50 rounded-full flex items-center justify-center shadow-lg"
            >
              <span className="text-[10px] font-bold text-white dark:text-zinc-900 uppercase tracking-tighter">BE</span>
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
              <h3 className="text-xl font-bold">Scalability</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Designing systems that grow seamlessly, from monolithic foundations to distributed microservices meshes.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl w-fit shadow-sm">
                <BarChart3 className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="text-xl font-bold">Performance</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Optimizing API latency and database throughput using advanced caching, indexing, and JVM tuning.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-3 bg-white dark:bg-zinc-800 rounded-xl w-fit shadow-sm">
                <ShieldCheck className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
              </div>
              <h3 className="text-xl font-bold">Reliability</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Ensuring high availability through robust error handling, monitoring, and automated failover mechanisms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex justify-between items-end mb-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">Technical Projects</h2>
            <p className="text-zinc-500 dark:text-zinc-400">Featured selection from my 25+ repositories.</p>
          </div>
          <Link href="/projects" className="text-sm font-medium hover:underline flex items-center gap-1 group">
            Project Directory <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "ApexStack",
              subtitle: "Enterprise FastAPI Template",
              desc: "Full-stack template with FastAPI, SQLModel, and React. Optimized for production with Docker & Traefik.",
              tags: ["FastAPI", "PostgreSQL", "React"],
              link: "https://github.com/Saanvirajput/apex-stack-fastapi",
              demo: "https://saanvirajput.github.io/apex-stack-fastapi/"
            },
            {
              title: "Nexus Platform",
              subtitle: "Spring Boot Microservices",
              desc: "Enterprise platform demonstrating DDD, CQRS, and Clean Architecture with Spring Boot & Kotlin.",
              tags: ["Spring Boot", "Kotlin", "DDD"],
              link: "https://github.com/Saanvirajput/nexus-backend-platform",
              demo: "https://saanvirajput.github.io/nexus-backend-platform/"
            },
            {
              title: "FinTrack",
              subtitle: "Distributed Finance suite",
              desc: "Microservices suite for financial tracking using Spring Cloud, OAuth2, and Docker multi-stage builds.",
              tags: ["Spring Cloud", "Microservices", "Docker"],
              link: "https://github.com/Saanvirajput/fintrack-microservices",
              demo: "https://saanvirajput.github.io/fintrack-microservices/"
            },
            {
              title: "OmniMall",
              subtitle: "E-Commerce Ecosystem",
              desc: "High-concurrency retail system with Elasticsearch search, Redis caching, and RabbitMQ messaging.",
              tags: ["Spring Boot", "Elasticsearch", "RabbitMQ"],
              link: "https://github.com/Saanvirajput/omnimall-ecommerce",
              demo: "https://saanvirajput.github.io/omnimall-ecommerce/"
            },
            {
              title: "Architect Challenges",
              subtitle: "Backend Design Patterns",
              desc: "Curated collection of backend system architecture challenges with parallel CI/CD pipelines.",
              tags: ["Architecture", "CI/CD", "Security"],
              link: "https://github.com/Saanvirajput/architect-backend-challenges",
              demo: "https://saanvirajput.github.io/architect-backend-challenges/"
            },
            {
              title: "CloudNative Demo",
              subtitle: "AI-Integrated Microservices",
              desc: "Cloud-native blueprint with JVM container tuning and integrated AI service endpoints.",
              tags: ["Cloud Native", "JVM", "AI Integration"],
              link: "https://github.com/Saanvirajput/cloudnative-micro-demo",
              demo: "https://saanvirajput.github.io/cloudnative-micro-demo/"
            }
          ].map((project, i) => (
            <div key={i} className="group block p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl transition-all hover:shadow-xl">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3">
                  {project.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-[10px] rounded-md font-medium text-zinc-600 dark:text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xs font-bold hover:underline">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs font-bold hover:underline">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Resume Download Section */}
      <section className="max-w-5xl mx-auto px-4 w-full">
        <div className="p-12 bg-zinc-900 dark:bg-zinc-50 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 dark:bg-black/10 rounded-full blur-3xl" />
          <div className="flex flex-col gap-4 relative z-10 max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white dark:text-zinc-900">
              Download My Resume
            </h2>
            <p className="text-zinc-400 dark:text-zinc-600 text-lg">
              Get a detailed overview of my experience, skills, and technical background. Available in PDF format for easy sharing and review.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <a
              href="/saanvirajput-PORTFOLIO/SaanviRajput.pdf"
              download="SaanviRajput.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-lg"
            >
              <Download className="h-5 w-5" />
              Download PDF
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
