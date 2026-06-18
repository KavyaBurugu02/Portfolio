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
                My career started in Hyderabad, where I spent 2.5 years at Wipro building enterprise applications 
                that real users depended on every day — systems handling 50,000+ concurrent users, with uptime and 
                latency that couldn't slip. I learned quickly that the difference between code that works in staging 
                and code that works in production is everything.
              </p>
              <p>
                On the backend, I think deeply about service boundaries, data access patterns, and what happens 
                when things fail. On the frontend, I care about the experience connecting cleanly to the API layer — 
                no leaky abstractions, no surprising behavior. More recently, I've been integrating Spring AI with 
                OpenAI APIs to build features that reduce real manual work, not just demos.
              </p>
              <p>
                I'm currently finishing my M.S. in Computer Science at Campbellsville University and actively 
                targeting full-stack and backend engineering roles where I can own meaningful systems end-to-end.
              </p>
            </div>
          </div>

          {/* Quick facts */}
          <div className="space-y-4">
            {[
              { icon: '🎓', label: 'Education', value: 'M.S. Computer Science — Campbellsville University' },
              { icon: '🏢', label: 'Last role', value: 'Full Stack Developer @ Wipro, Hyderabad (2022–2024)' },
              { icon: '📍', label: 'Location', value: 'Atlanta, GA — open to remote & hybrid' },
              { icon: '⚙️', label: 'Core stack', value: 'Java · Spring Boot · React.js · AWS · Docker' },
              { icon: '🤖', label: 'Current focus', value: 'Spring AI · OpenAI API · Microservices at scale' },
              { icon: '📜', label: 'Certified', value: 'AI Skills Fest 2026' },
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
