'use client'
import { useEffect, useState } from 'react'

const words = ['Microservices', 'REST APIs', 'Cloud Systems', 'Full Stack Apps', 'AI-Powered Tools']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = words[wordIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayText.length < word.length) {
        timeout = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 45)
      } else {
        setWordIndex((i) => (i + 1) % words.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, typing, wordIndex])

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-12 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6EE7B7 0%, transparent 70%)' }}
      />
      {/* Grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#6EE7B7 1px, transparent 1px), linear-gradient(90deg, #6EE7B7 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            &gt; Available for new roles
          </span>
        </div>

        <h1
          className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight animate-fade-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          Kavya Burugu
        </h1>

        <div
          className="mt-4 text-xl sm:text-2xl lg:text-3xl font-light text-text-dim animate-fade-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          I build{' '}
          <span className="text-accent font-mono font-medium">
            {displayText}
            <span className="animate-blink text-accent">|</span>
          </span>
        </div>

        <p
          className="mt-6 max-w-2xl text-muted leading-relaxed text-base sm:text-lg animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          Full Stack Engineer with 4 years shipping production systems — cutting API latency by 45%, 
          automating CI/CD from weekly releases to daily, and integrating practical AI features into real-world applications. 
          Holds an M.S. in Computer Science from Campbellsville University.
        </p>

        {/* Stats row */}
        <div
          className="mt-10 flex flex-wrap gap-6 animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
        >
          {[
            { value: '4+', label: 'Years experience' },
            { value: '45%', label: 'API latency cut' },
            { value: '96%', label: 'Test coverage' },
            { value: '50K+', label: 'Peak concurrent users' },
          ].map(({ value, label }) => (
            <div key={label} className="stat-card min-w-[120px]">
              <div className="text-2xl font-bold text-accent font-mono">{value}</div>
              <div className="text-xs text-muted mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: '0.6s', animationFillMode: 'both' }}
        >
          <a
            href="#projects"
            className="glow-btn px-6 py-3 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-dim transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="glow-btn px-6 py-3 rounded-lg border border-border text-text-dim font-medium text-sm hover:border-accent/50 hover:text-accent transition-colors"
          >
            Get in touch
          </a>
          <a
            href="https://www.linkedin.com/in/kavyaburugu"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-btn px-6 py-3 rounded-lg border border-border text-text-dim font-medium text-sm hover:border-accent/50 hover:text-accent transition-colors flex items-center gap-2"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'both' }}>
        <span className="text-xs text-muted font-mono tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
