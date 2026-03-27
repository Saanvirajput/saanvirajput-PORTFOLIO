import * as React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Saanvi Portfolio',
};

const experience = [
  {
    role: 'Founding Engineer (Product-Focused)',
    company: 'Corporate Cruise',
    period: 'Feb 2026 – Mar 2026',
    location: 'Remote',
    highlights: [
      'Led product development from idea to MVP, defining core features and user workflows',
      'Identified user pain points and translated them into product requirements',
      'Collaborated on feature prioritization balancing user needs and technical feasibility',
      'Contributed to building a scalable platform for multi-user interactions'
    ]
  },
  {
    role: 'Rescue Lead (Operations & Product Thinking)',
    company: 'Little Paws Care',
    period: 'Jan 2024 – Jan 2026',
    location: 'Bhubaneswar',
    highlights: [
      'Managed end-to-end rescue operations, coordinating between rescuers, NGOs, and adopters',
      'Identified inefficiencies in rescue and adoption workflows, inspiring product ideas like PawLoft',
      'Streamlined communication processes, improving response time and coordination',
      'Led a team of volunteers and handled real-world user needs in high-pressure situations'
    ]

  },
  {
    role: 'Administration Team Member',
    company: 'IoT Lab, KIIT',
    period: 'Oct 2022 – Oct 2024',
    location: 'Bhubaneswar',
    highlights: [
      'Managed operations for 30+ members and multiple ongoing projects',
      'Coordinated between teams to ensure smooth execution of lab activities',
      'Mentored juniors and supported project development workflows',
      'Developed organizational and stakeholder coordination skills'
    ]
  }
];

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 pb-40 flex flex-col gap-24">
      <section className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight">Professional Experience</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Operationalizing production systems and leading collaborative teams with a product-driven mindset.
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
