import { Metadata } from 'next';
import { Code, Brain, Target, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Saanvi Portfolio',
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 pb-40 flex flex-col gap-24">
      <section className="flex flex-col gap-8 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I&apos;m Saanvi, a Backend Developer with a deep interest in distributed systems and microservices architecture. I specialize in building robust, scalable server-side applications that power complex web platforms.
        </p>
        <p className="text-lg text-zinc-500 dark:text-zinc-500 leading-relaxed">
          My journey in Computer Science and Engineering led me to discover a passion for the mechanics of high-performance systems. I thrive on solving architectural challenges, optimizing database performance, and ensuring the security and reliability of backend services.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Skills & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { icon: Target, title: 'Spring Boot & Java', desc: 'Enterprise-grade microservices and REST APIs.' },
               { icon: Brain, title: 'System Design', desc: 'Scalable architecture, DDD, and CQRS patterns.' },
               { icon: Code, title: 'Databases & ORM', desc: 'PostgreSQL, MongoDB, and MyBatis/Prisma.' },
               { icon: Rocket, title: 'DevOps & Cloud', desc: 'Docker, AWS (EC2/S3), and GitHub Actions.' }
             ].map((skill) => (
               <div key={skill.title} className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                 <skill.icon className="h-5 w-5 text-zinc-900 dark:text-zinc-100 mb-3" />
                 <h4 className="font-bold mb-1">{skill.title}</h4>
                 <p className="text-xs text-zinc-500 dark:text-zinc-400">{skill.desc}</p>
               </div>
             ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Career Goal</h2>
          <div className="p-8 bg-zinc-900 text-white rounded-3xl flex flex-col gap-4">
             <p className="text-lg text-zinc-300 italic">
               &quot;Engineering backends that are built to last. My goal is to develop high-impact, distributed systems where I can apply my expertise in microservices and system design to build the foundation for modern digital experiences.&quot;
             </p>
             <div className="h-px bg-zinc-800 my-4" />
             <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Currently Open for Backend Roles</p>
          </div>
        </div>
      </section>
    </div>
  );
}
