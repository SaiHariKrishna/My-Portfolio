import React, { useEffect, useState } from 'react'

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const SOCIALS = [
  {
    label: 'GitHub',
    href: 'https://github.com/SaiHariKrishna',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504..." />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/kvsaiharikrishna',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569..." />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:kvsaiharikrishna123@gmail.com',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16..." />
      </svg>
    ),
  },
]

const TECH_TAGS = ['IoT pipelines', 'ML systems', 'Realtime dashboards', 'Full-stack UX']

const METRICS = [
  { label: 'Users', value: '100+', note: 'active platform usage' },
  { label: 'Latency', value: '150ms', note: 'avg API response' },
  { label: 'Throughput', value: '10K+/hr', note: 'IoT data processed' },
]

const PIPELINE = [
  {
    label: 'Frontend experience',
    progress: '92%',
    fill: '92%',
    tone: 'from-blue-500 to-cyan-400',
  },
  {
    label: 'Realtime infrastructure',
    progress: '88%',
    fill: '88%',
    tone: 'from-indigo-500 to-blue-500',
  },
  {
    label: 'ML systems',
    progress: '81%',
    fill: '81%',
    tone: 'from-cyan-500 to-sky-400',
  },
]

function useTypewriter(text, speed = 85) {
  const [value, setValue] = useState('')

  useEffect(() => {
    setValue('')
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setValue(text.slice(0, index))
      if (index >= text.length) {
        window.clearInterval(timer)
      }
    }, speed)

    return () => window.clearInterval(timer)
  }, [text, speed])

  return value
}

export default function Hero() {
  const typedName = useTypewriter("Hi,\nI'm Sai Hari Krishna")

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-20 sm:pt-24">
      <div className="hero-bg"></div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-content items-center px-6 py-16 sm:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT */}
          <div className="fade-left max-w-[590px] text-left">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-border bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-accent opacity-60" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                Open to opportunities
              </span>
            </div>

            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-accent">
              Aspiring Software Engineer
            </p>

            <h1 className="text-[clamp(34px,4.8vw,54px)] font-bold tracking-[-0.04em] text-text-primary whitespace-pre-line">
               {typedName}
               <span className="type-cursor" />
            </h1>

            <p className="mt-6 max-w-[600px] text-[clamp(34px,5.6vw,62px)] font-semibold leading-[1.02] tracking-[-0.045em] text-text-primary">
              I build premium web products that feel sharp in the interface and reliable in production.
            </p>

            <p className="mt-5 max-w-[560px] text-base leading-relaxed text-text-secondary sm:text-[17px]">
              I build end-to-end systems - from real-time data pipelines and backend APIs to clean, reliable user interfaces - with a focus on performance, stability, and real-world usage.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollTo('projects')} className="btn-primary px-8 py-3">
                View Projects
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-outline px-8 py-3">
                Contact Me
              </button>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {TECH_TAGS.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              {SOCIALS.map(({ label, href, icon }, index) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="social-fade flex items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-text-primary"
                  style={{ animationDelay: `${0.45 + index * 0.08}s` }}
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="fade-right relative lg:pl-8" style={{ animationDelay: '0.12s' }}>

            <div className="hero-card mx-auto w-full max-w-[520px]">

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                    System Snapshot
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-text-primary">
                    Real-time System Surface
                  </h2>
                </div>
                <div className="rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-600">
                  Production-ready
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-800/90 bg-slate-950 p-4 text-slate-100">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 font-mono text-[11px] uppercase tracking-widest text-slate-400">
                    system-architecture.ts
                  </span>
                </div>

                <div className="space-y-2 font-mono text-[12px] leading-6 sm:text-[13px]">
                  <div>1 const system = {'{'}</div>
                  <div>2 &nbsp;&nbsp;api: 'rate-limited + validated',</div>
                  <div>3 &nbsp;&nbsp;realtime: 'websockets + event streams',</div>
                  <div>4 &nbsp;&nbsp;auth: 'jwt + otp verification',</div>
                  <div>5 &nbsp;&nbsp;data: 'optimized queries (aggregation)',</div>
                  <div>6 &nbsp;&nbsp;ml: 'deployed inference pipeline',</div>
                  <div>7 {'}'}</div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {METRICS.map(({ label, value, note }) => (
                  <div key={label} className="rounded-2xl border border-border bg-slate-50/90 px-4 py-4">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-text-secondary">
                      {label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-text-primary">
                      {value}
                    </p>
                    <p className="mt-1 text-xs text-text-secondary">
                      {note}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl border border-border bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-text-primary">
                      Build Priorities
                    </p>
                    <p className="text-xs text-text-secondary">
                      What I focus on when building systems that handle real users and real workloads.
                    </p>
                  </div>
                  <div className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-text-secondary">
                    Current Focus
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {PIPELINE.map(({ label, progress, fill, tone }) => (
                    <div key={label}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium text-text-primary">{label}</span>
                        <span className="text-text-secondary">{progress}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${tone}`}
                          style={{ width: fill }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}