import React from 'react'
import { useInView } from '../hooks/useInView'

const ACHIEVEMENTS = [
  {
    rank: '1st', label: 'Place',
    title: 'Innoverse 12-Hour Hackathon',
    org: 'Woxsen University',
    year: '2024',
    stat: '50+ teams',
    description:
      'Built and delivered a complete IoT system within 12 hours, outperforming 50+ teams to secure 1st place.',
  },
  {
    rank: 'Top', label: '10',
    title: 'Codeathon - Algorithmic Competition',
    org: 'Forge Alumnus × Microsoft, Hyderabad',
    year: '2026',
    stat: '200+ participants',
    description:
      'Ranked top 10 among 200+ participants in an algorithmic coding competition run in collaboration with Microsoft.',
  },
]

const CERTS = [
  { title: 'Crash Course on Python',                  issuer: 'Google – Coursera' },
  { title: 'Programming with JavaScript, HTML & CSS', issuer: 'Duke University – Coursera' },
  { title: 'Introduction to NoSQL Databases',         issuer: 'IBM – Coursera' },
  { title: 'Introduction to Java',                    issuer: 'LearnQuest – Coursera' },
]

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
         className="shrink-0 text-accent mt-0.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

export default function Achievements() {
  const [ref, visible] = useInView()
  const [certRef, certVisible] = useInView()

  return (
    <section id="achievements" className="py-[88px] bg-alt-gradient border-t border-border">
      <div className="max-w-content mx-auto px-6">

        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="mb-12">
            <p className="section-label mb-2.5">Achievements</p>
            <h2 className="section-heading">Recognition</h2>
          </div>

          {/* achievement cards */}
          <div className="grid gap-5 sm:grid-cols-2 mb-14">
            {ACHIEVEMENTS.map((a) => (
              <div key={a.title} className="card relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-accent rounded-t-xl" />
                <div className="flex items-start gap-4 pt-1">
                  <div className="shrink-0 flex flex-col items-center justify-center
                                  w-14 h-14 rounded-xl bg-accent-light border border-accent-border">
                    <span className="font-bold text-accent text-[13px] leading-tight">{a.rank}</span>
                    <span className="font-bold text-accent text-[11px] leading-tight">{a.label}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-mono text-[11px] text-text-muted">{a.year}</span>
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-bg-section
                                      border border-border text-text-muted font-medium">
                        {a.stat}
                      </span>
                    </div>
                    <h3 className="text-[15px] font-bold text-text-primary leading-snug">{a.title}</h3>
                    <p className="text-[12px] font-mono text-accent mt-0.5 mb-2">{a.org}</p>
                    <p className="text-text-secondary text-sm leading-relaxed">{a.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* certifications */}
        <div ref={certRef} className={`reveal ${certVisible ? 'visible' : ''}`}>
          <p className="text-[11px] font-mono text-text-muted tracking-widest uppercase mb-4">
            Certifications
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {CERTS.map(({ title, issuer }) => (
              <div key={title}
                   className="flex items-start gap-3 px-4 py-3.5 rounded-xl
                              border border-border bg-white
                              hover:border-accent-border hover:bg-accent-light
                              transition-all duration-200">
                <Check />
                <div>
                  <p className="text-[13px] font-semibold text-text-primary leading-snug">{title}</p>
                  <p className="text-[12px] text-text-muted mt-0.5">{issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
