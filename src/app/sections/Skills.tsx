const skillGroups = [
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Java (Core, OOP, Streams)', 'Spring Boot', 'Spring Security', 'Spring AI', 'Hibernate / JPA', 'Node.js', 'Express.js', 'REST API Design', 'Microservices', 'JWT / OAuth2'],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'Redux', 'Tailwind CSS', 'HTML5 / CSS3', 'Responsive Design', 'Webpack / Babel'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Query Optimization', 'Indexing Strategy', 'Transaction Management', 'JDBC / ORM'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    skills: ['AWS (EC2, S3, Lambda)', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD Pipelines', 'Nginx'],
  },
  {
    category: 'Testing & QA',
    icon: '🧪',
    skills: ['JUnit 5', 'Mockito', 'Selenium', 'Jest', 'Cypress', 'Postman', 'Integration Testing', 'Code Coverage'],
  },
  {
    category: 'AI & Tooling',
    icon: '🤖',
    skills: ['Spring AI', 'OpenAI API', 'Prompt Engineering', 'IntelliJ IDEA', 'VS Code', 'Maven / Gradle', 'Git / GitHub', 'Jira / Confluence'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade">
          <span className="font-mono text-accent text-xs tracking-widest uppercase">Capabilities</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">Skills</h2>
          <p className="mt-3 text-muted max-w-xl">
            Across the full stack — from data access layers to CI/CD pipelines to AI-powered feature integrations.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.category}
              className="section-fade p-5 rounded-xl border border-border bg-surface hover:border-accent/30 transition-colors"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{group.icon}</span>
                <h3 className="font-semibold text-sm text-text-dim uppercase tracking-wider font-mono">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
