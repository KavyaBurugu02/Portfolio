export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-fade grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="font-mono text-accent text-xs tracking-widest uppercase">About me</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
              Engineering systems that hold up under pressure
            </h2>
            <div className="mt-6 space-y-4 text-muted leading-relaxed">
              <p>
                I've spent over six years building enterprise applications and microservices in Java and
                Spring Boot — starting with a loan servicing platform at Bajaj Finserv, then service and
                order-management systems at Wipro built with React, Angular, and Kafka-driven messaging.
              </p>
              <p>
                Since late 2024, I've been at Medtronic working on AI-assisted platforms - Retrieval-Augmented
                Generation pipelines built with Spring AI, AWS Bedrock, and OpenSearch, wired into secure,
                role-gated document workflows so the right people see the right information before it ever
                reaches an AI response.
              </p>
              <p>
               What I enjoy most is taking an idea from the initial requirements all the way to a working solution. Whether it’s building APIs, connecting services, working with cloud platforms, or integrating AI into an application, I like understanding how everything fits together and making it work reliably in practice.
            </div>
          </div>

          {/* Quick facts */}
          <div className="space-y-4">
            {[
              { icon: '🎓', label: 'Education', value: 'M.S. Computer Science — Campbellsville University' },
              { icon: '🏢', label: 'Current role', value: 'Full Stack Java Developer with AI Integration @ Medtronic' },
              { icon: '📍', label: 'Location', value: 'Atlanta, USA' },
              { icon: '⚙️', label: 'Core stack', value: 'Java · Spring Boot · React · Angular · AWS' },
              { icon: '🤖', label: 'Current focus', value: 'Spring AI · AWS Bedrock · RAG Workflows' },
              { icon: '⏳', label: 'Experience', value: '6+ years across Bajaj Finserv, Wipro, and Medtronic' },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex gap-4 p-4 rounded-xl border border-border bg-surface/50 hover:border-accent/30 transition-colors group"
              >
                <span className="text-xl flex-shrink-0">{icon}</span>
                <div>
                  <div className="text-xs text-muted font-mono uppercase tracking-wider">{label}</div>
                  <div className="text-text-dim text-sm mt-0.5 group-hover:text-text transition-colors">{value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
