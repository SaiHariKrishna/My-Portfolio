import React from 'react'
import { useInView } from '../hooks/useInView'

const FACTS = [
  { label: 'University',  value: 'Woxsen University, Hyderabad' },
  { label: 'Degree',      value: 'B.Tech - Computer Science' },
  { label: 'CGPA',        value: '8.91 / 10.0' },
  { label: 'Graduation',  value: 'March 2027' },
]

const COURSEWORK = [
  'Data Structures & Algorithms', 'DBMS', 'OOPS', 'Cloud Computing',
  'Operating Systems', 'Computer Networks',
  'Web Technologies', 'Machine Learning', 'Design and Analysis of Algorithms', 'DevOps'
]

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about" className="py-[88px] bg-section-gradient border-t border-border">
      <div className="max-w-content mx-auto px-6">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 xl:gap-20 items-start
                      reveal ${visible ? 'visible' : ''}`}
        >
          {/* Left: text */}
          <div>
            <p className="section-label mb-2.5">About</p>
            <h2 className="section-heading mb-6">Building systems, not just features.</h2>
            <div className="space-y-4 text-text-secondary text-base leading-relaxed">
              <p>
                I'm a third-year CS student genuinely interested in the parts most people
                skip - query latency, WebSocket reconnection logic, model caching, and why
                that API call is slow.
              </p>
              <p>
                Over the past year I've shipped a full MERN placement portal used by 100+
                people, a distributed IoT monitoring system that won a hackathon, and an
                ML-powered phishing detector running at 99.5% uptime. Each one taught me
                something a classroom can't.
              </p>
            </div>
          </div>

          {/* Right: education card */}
          <div className="card">
            <h3 className="text-xs font-mono text-text-muted tracking-widest uppercase mb-5">
              Education
            </h3>
            <div className="divide-y divide-border">
              {FACTS.map(({ label, value }) => (
                <div key={label}
                     className="flex items-baseline justify-between gap-4
                                py-3.5 first:pt-0 last:pb-0">
                  <span className="text-sm text-text-secondary shrink-0">{label}</span>
                  <span className="text-sm font-semibold text-text-primary text-right">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-border">
              <h3 className="text-xs font-mono text-text-muted tracking-widest uppercase mb-3.5">
                Relevant Coursework
              </h3>
              <div className="flex flex-wrap gap-2">
                {COURSEWORK.map(c => <span key={c} className="tag">{c}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
