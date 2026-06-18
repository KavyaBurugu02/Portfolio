const projects = [
  {
    name: 'MedSync',
    subtitle: 'AI-Powered Hospital Management System',
    description:
      'Production-grade microservices platform for hospital operations — appointment booking, patient management, and AI-generated discharge summaries. Built to demonstrate the full lifecycle of a distributed Spring Boot system.',
    highlights: [
      '6 independently deployable microservices (Auth, Doctor, Patient, Appointment, Notification, Storage)',
      'Spring AI + OpenAI API integration — context-aware dietary & prescription suggestions cut manual documentation by 35%',
      'JWT + RBAC security with method-level @PreAuthorize across all 3 roles (Admin, Doctor, Receptionist)',
      '42% query improvement via Hibernate fetch-type tuning, HQL named queries & composite indexing',
      'Async email pipeline (Spring @Async + SendGrid) improved booking API throughput by 30%',
      'Discharge PDFs auto-generated with Thymeleaf + FlyingSaucer, stored on AWS S3 via pre-signed URLs',
      '88%+ code coverage across 85+ JUnit 5 / Mockito unit tests',
    ],
    tech: ['Spring Boot', 'Spring AI', 'OpenAI API', 'JWT', 'MySQL', 'AWS S3', 'SendGrid', 'JUnit', 'Docker'],
    badge: 'Featured',
    color: '#6EE7B7',
    github: 'https://github.com/KavyaBurugu02',
    featured: true,
  },
  {
    name: 'Greenway Residents Portal',
    subtitle: 'Gated Community Maintenance Platform',
    description:
      'Full-stack Java web app replacing phone calls and WhatsApp chains with a structured complaint workflow for gated community residents and admins. No frameworks — demonstrates raw Jakarta EE request/response lifecycle.',
    highlights: [
      'Role-based session management — residents raise & track complaints, admins own the status pipeline',
      'Complaint lifecycle: Open → In Progress → Resolved with single-admin-view across all units',
      'Built on Jakarta Servlets 6.0, JSP, and Hibernate 6.4 — no Spring, deliberate dependency wiring',
      'Server-side form validation with consistent user-facing error messaging',
      'MVC architecture: JPA entity models, DAO layer, Servlet controllers, JSP views',
    ],
    tech: ['Java 17', 'Jakarta Servlets', 'Hibernate 6.4', 'MySQL 8', 'Maven', 'JSP', 'CSS3'],
    badge: 'Open Source',
    color: '#818CF8',
    github: 'https://github.com/KavyaBurugu02/Greenway-Residents-Portal',
    featured: true,
  },
  {
    name: 'Enterprise CI/CD Automation',
    subtitle: 'Release Pipeline Optimization @ Wipro',
    description:
      'Redesigned the deployment pipeline for three enterprise applications, collapsing weekly release cycles into consistent bi-daily deployments through Jenkins, Docker, and GitHub Actions automation.',
    highlights: [
      '70% of deployment activities fully automated — from build trigger to production push',
      'Release cadence: weekly → bi-daily with zero increase in incident rate',
      '8 major releases delivered with on-time consistency and 96% automated test coverage',
      'Orchestrated across 7-member cross-functional team with clear ownership boundaries',
    ],
    tech: ['Jenkins', 'Docker', 'GitHub Actions', 'Kubernetes', 'AWS EC2', 'Nginx'],
    badge: 'Enterprise',
    color: '#F59E0B',
    github: 'https://github.com/KavyaBurugu02',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">Selected work</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Projects</h2>
          <p className="mt-3 text-muted max-w-xl">
            Systems built end-to-end — from architecture decisions to production deployments.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="section-fade project-card p-6 sm:p-8"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-bold text-text">{project.name}</h3>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-full border"
                      style={{
                        color: project.color,
                        borderColor: `${project.color}40`,
                        background: `${project.color}10`,
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>
                  <div className="text-sm text-muted mt-0.5 font-mono">{project.subtitle}</div>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors border border-border hover:border-accent/40 rounded-lg px-3 py-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>

              <p className="mt-4 text-muted text-sm leading-relaxed">{project.description}</p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-text-dim">
                    <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="skill-pill text-xs">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
