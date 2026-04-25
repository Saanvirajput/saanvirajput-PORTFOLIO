import * as React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Saanvi Portfolio',
};

const experience = [
  {
    role: 'Founding Engineer',
    company: 'Corporate Cruise',
    period: 'Jan 2026 – Mar 2026',
    location: 'Remote',
    highlights: [
      'Architected scalable RESTful backend and 10+ database schemas from scratch',
      'Led end-to-end development from idea to deployed MVP within 8 weeks, shipping 3 major feature releases on schedule',
      'Coordinated CI/CD pipelines and frontend integration to ship a production-ready platform serving 50+ users'
    ]
  },
  {
    role: 'Administration Team Member',
    company: 'IoT Lab, KIIT',
    period: 'Jan 2023 – Jan 2024',
    location: 'Bhubaneswar',
    highlights: [
      'Managed lab operations for 30+ members across 10+ active projects',
      'Mentored 8+ juniors on hardware-software integration, reducing onboarding time by ~30%',
      'Supported project development workflows and handled resource allocation'
    ]
  }
];

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 pb-40 flex flex-col gap-24">
      <section className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Professional Experience</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Building scalable production systems and leading technical teams with a focus on engineering excellence.
        </p>
      </section>

      <div className="flex flex-col gap-16">
        {experience.map((item) => (
          <div key={item.role + item.company} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{item.period}</span>
              <span className="text-xs text-zinc-500">{item.location}</span>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold">{item.role}</h3>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium">{item.company}</span>
              </div>

              <ul className="flex flex-col gap-3">
                {item.highlights.map((h) => (
                  <li key={h} className="text-zinc-600 dark:text-zinc-400 flex gap-3">
                    <span className="text-zinc-300 dark:text-zinc-700 mt-1">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
