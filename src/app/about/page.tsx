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
          I&apos;m Saanvi, an aspiring Product Manager with a technical foundation in Computer Science and Engineering. I bridges the gap between complex engineering and user-centric product requirements.
        </p>
        <p className="text-lg text-zinc-500 dark:text-zinc-500 leading-relaxed">
          My journey started with coding, but I soon realized that my real strength lies in understanding the &quot;Why&quot; behind the code. I thrive in environments where I can analyze user needs, define product strategy, and work closely with cross-functional teams to deliver value.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Skills & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {[
               { icon: Target, title: 'Product Thinking', desc: 'Strategy, prioritization, and roadmapping.' },
               { icon: Brain, title: 'User Research', desc: 'Interviews, surveys, and usability testing.' },
               { icon: Code, title: 'Technical Logic', desc: 'Understanding APIs, databases, and system design.' },
               { icon: Rocket, title: 'Agile execution', desc: 'Scrum, PRDs, and stakeholder management.' }
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
               &quot;Building products that don&apos;t just work, but feel essential. My goal is to work on high-impact products where I can use my technical background to better represent engineering constraints while advocating fiercely for the end-user.&quot;
             </p>
             <div className="h-px bg-zinc-800 my-4" />
             <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Currently Open for APM Roles</p>
          </div>
        </div>
      </section>
    </div>
  );
}
