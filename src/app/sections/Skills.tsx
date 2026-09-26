const skillGroups = [
  {
    category: 'Languages',
    icon: '💻',
    skills: ['Java 8/11/17', 'JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: '🖥️',
    skills: ['React.js', 'React Hooks', 'Redux', 'Context API', 'Angular', 'Material UI', 'Tailwind CSS', 'HTML5 / CSS3', 'Axios'],
  },
  {
    category: 'Backend & Frameworks',
    icon: '⚙️',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA', 'Hibernate / JPA', 'REST API Design', 'Microservices', 'JWT / OAuth2'],
  },
  {
    category: 'AI & Generative AI',
    icon: '🤖',
    skills: ['Spring AI', 'OpenAI API', 'AWS Bedrock', 'RAG (Retrieval-Augmented Generation)', 'Embeddings', 'Vector Search', 'Document Ingestion', 'Context Preparation'],
  },
  {
    category: 'Databases & Storage',
    icon: '🗄️',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'pgvector', 'JDBC', 'Query Optimization', 'Indexing', 'Transaction Management'],
  },
  {
    category: 'Messaging & Integration',
    icon: '📨',
    skills: ['Apache Kafka', 'Kafka Producers / Consumers', 'Async Messaging', 'REST Service Integration', 'SendGrid API'],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    skills: ['AWS (EC2, S3, ECS, Lambda, IAM)', 'AWS CloudWatch', 'AWS OpenSearch', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines'],
  },
  {
    category: 'Testing & QA',
    icon: '🧪',
    skills: ['JUnit 5', 'Mockito', 'Postman', 'JMeter', 'Integration Testing', 'RAG Evaluation Testing'],
  },
  {
    category: 'Tools & Collaboration',
    icon: '🧰',
    skills: ['Git / GitHub', 'Maven', 'IntelliJ IDEA', 'SLF4J / Logback', 'Jira / Confluence', 'Agile / Scrum'],
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
            Across the full stack - from data access layers to CI/CD pipelines to AI-powered feature integrations.
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
