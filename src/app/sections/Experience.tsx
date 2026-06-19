const experiences = [
  {
    company: 'Wipro',
    role: 'Full Stack Developer',
    period: 'Jan 2022 — Jun 2024',
    location: 'Hyderabad, India',
    description:
      'Delivered 8 major production releases on enterprise-scale applications serving 50,000+ concurrent users. Owned end-to-end feature development across backend services, frontend UIs, and deployment pipelines.',
    achievements: [
      'Rewrote critical API endpoints, cutting average latency from ~180ms to ~100ms — a 45% reduction — under peak load conditions',
      'Automated 70% of deployment activities via Jenkins + Docker + GitHub Actions pipelines, collapsing release cadence from weekly to bi-daily',
      'Migrated ~15,000 lines of legacy monolith code to a modular, component-driven architecture across 3 enterprise applications, reducing production incidents measurably',
      'Designed and executed 120+ automated test scenarios (Jest, Postman, Selenium) achieving 96% code coverage across distributed services',
      'Optimized MySQL and MongoDB schemas with query profiling and index restructuring — 38% improvement in data retrieval across 4 high-transaction domains',
      'Reviewed 60+ pull requests monthly on a 7-member cross-functional team, enforcing architectural consistency and clean-code standards',
      'Collaborated with Product, QA, and DevOps to ship 12 high-impact features, driving a 32% improvement in user engagement metrics',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'Node.js', 'MySQL', 'MongoDB', 'Jenkins', 'Docker', 'AWS'],
  },
  {
    company: 'Monas Soft Solutions',
    role: 'Software Engineer',
    period: 'Jul 2020 — Dec 2021',
    location: 'Hyderabad, India',
    description:
      'Contributed to 12+ feature enhancements across Java-based enterprise modules in a 5-member Agile team. Focused on backend reliability, test coverage, and code quality.',
    achievements: [
      'Debugged and resolved ~30 software defects through systematic root-cause analysis, improving application performance by 18%',
      'Authored ~2,500 lines of maintainable, well-documented code across reusable UI components and backend utilities',
      'Executed 40+ regression and functional test cases with QA engineers, cutting post-deployment defects by 22%',
      'Automated data validation workflows with Python scripts, reducing manual verification time by 35% across 3 client projects',
      'Managed version control across 6 repositories — resolved merge conflicts and maintained structured commit histories across a full year-long cycle',
    ],
    tech: ['Java', 'REST APIs', 'SQL', 'Python', 'Git', 'Agile/Scrum'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">Work history</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Experience</h2>
        </div>

        <div className="mt-12 space-y-12">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              className="section-fade"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-8">
                {/* Left: meta */}
                <div>
                  <div className="font-mono text-xs text-accent tracking-wide uppercase">{exp.period}</div>
                  <div className="text-xs text-muted mt-1">{exp.location}</div>
                </div>

                {/* Right: content */}
                <div className="border-l border-border pl-6 relative">
                  <div
                    className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-accent"
                    style={{ boxShadow: '0 0 8px rgba(110, 231, 183, 0.6)' }}
                  />
                  <h3 className="text-xl font-bold text-text">{exp.role}</h3>
                  <div className="text-accent-dim font-semibold text-sm mt-0.5">{exp.company}</div>
                  <p className="mt-3 text-muted text-sm leading-relaxed">{exp.description}</p>

                  <ul className="mt-4 space-y-2">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex gap-2 text-sm text-text-dim">
                        <span className="text-accent flex-shrink-0 mt-0.5">→</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="skill-pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
