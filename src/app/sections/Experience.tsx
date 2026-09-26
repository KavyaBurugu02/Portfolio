const experiences = [
  {
    company: 'Medtronic',
    role: 'Full Stack Java Developer with AI Integration',
    period: 'Nov 2024 — Present',
    location: 'USA',
    description:
      'Building AI-assisted enterprise platforms — a service management system and a clinical procedure guidance tool — combining Spring Boot backends with Retrieval-Augmented Generation pipelines powered by AWS Bedrock.',
    achievements: [
      'Built REST APIs connecting React applications to Spring Boot services, PostgreSQL, and RAG components, with Spring Security JWT authentication gating document access before it enters AI workflows',
      'Developed the RAG document ingestion pipeline — content extraction, chunking, embedding generation, and metadata tagging — using AWS OpenSearch and PostgreSQL/pgvector for vector search and retrieval',
      'Integrated AWS Bedrock for AI-assisted knowledge search, summaries, and draft generation, returning generated content with supporting document citations to the frontend',
      'Added handling for insufficient or missing documentation so responses return an information-not-found result instead of unsupported answers',
      'Built React SPA features (Hooks, Redux, Context API, Material UI) for submitting questions, reviewing AI-generated responses, expanding citations, and editing drafts',
      'Wrote JUnit 5/Mockito tests plus RAG evaluation and regression suites covering retrieval accuracy and citation correctness; used AWS CloudWatch for production troubleshooting and added timeouts/retries for Bedrock and downstream dependencies',
    ],
    tech: ['Java 17', 'Spring Boot', 'Spring Security','RAG', 'PostgreSQL', 'pgvector', 'AWS Bedrock', 'AWS OpenSearch', 'React', 'JWT', 'AWS ECS', 'Docker'],
  },
  {
    company: 'Wipro',
    role: 'Java Full Stack Developer',
    period: 'Feb 2022 — Jul 2024',
    location: 'Hyderabad, India',
    description:
      'Contributed to an enterprise service management platform built on independently deployable Spring Boot microservices with React and Angular SPAs, spanning an HP client engagement and a customer service & order management system.',
    achievements: [
      'Built and enhanced Spring Boot microservices (Spring MVC, Spring Data JPA, Hibernate) with RESTful APIs, request validation, and centralized exception handling',
      'Developed React and Angular SPA features — dashboards, searchable tables, filtering, and pagination — using Redux, Context API, Angular services, and TypeScript',
      'Implemented Spring Security with JWT-based authentication and role-based authorization across both React and Angular frontends',
      'Implemented Kafka producers and consumers for asynchronous order-status and service-request events, decoupling background workflows from synchronous APIs',
      'Optimized SQL/JPA/Hibernate queries with joins, indexes, and pagination, and used MongoDB for workflow data requiring flexible document structures',
      'Wrote JUnit/Mockito tests and supported Jenkins CI/CD pipelines building Docker images for deployment to AWS EC2, monitored via CloudWatch',
    ],
    tech: ['Java 11', 'Spring Boot', 'React.js', 'Angular', 'TypeScript', 'Kafka', 'MongoDB', 'MySQL', 'Jenkins', 'Docker', 'AWS EC2'],
  },
  {
    company: 'Bajaj Finserv',
    role: 'Java Developer',
    period: 'Feb 2020 — Jan 2022',
    location: 'Hyderabad, India',
    description:
      'Developed and maintained backend modules for a loan servicing application used to manage customer loan accounts, repayment information, and servicing requests.',
    achievements: [
      'Built REST APIs for retrieving loan and customer details, updating repayment information, and handling servicing requests',
      'Implemented business logic with Java OOP, Collections, and Streams, and used Hibernate/JPA and SQL across customer, loan, and repayment tables',
      'Added request validation and exception handling to enforce business rules before processing',
      'Wrote JUnit/Mockito tests and used Postman to verify REST APIs during development',
      'Fixed defects reported during QA/UAT and supported releases by validating changes and monitoring logs post-deployment',
    ],
    tech: ['Java 8', 'Spring Boot', 'Hibernate/JPA', 'SQL', 'JUnit', 'Mockito', 'Git', 'Maven'],
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
