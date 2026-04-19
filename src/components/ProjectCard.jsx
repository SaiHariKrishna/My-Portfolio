import React from 'react'
import { useInView } from '../hooks/useInView'

function GHIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function ExtIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

export default function ProjectCard({ project, delay = 0 }) {
  const [ref, visible] = useInView('-30px 0px -30px 0px')

  return (
    <article
      ref={ref}
      className={`project-card reveal ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="project-preview" style={{ background: project.preview.gradient }}>
        <div className="rounded-[22px] border border-white/75 bg-white/60 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300"></span>
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
            </div>
            <span className="rounded-full border border-white/80 bg-white/75 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-text-secondary">
              {project.preview.label}
            </span>
          </div>

          <div className="mt-3 rounded-[18px] border border-slate-200/80 bg-white/70 p-3">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                  {project.preview.note}
                </p>
                <p className="mt-1 text-sm font-semibold text-text-primary">
                  {project.subtitle}
                </p>
              </div>
              <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                {project.preview.accent}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              {project.metrics.slice(0, 2).map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/90 bg-white/85 px-3 py-2 shadow-sm"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted">
                    {label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-text-primary">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-2.5 w-full rounded-full bg-white/95"></div>
              <div className="h-2.5 w-4/5 rounded-full bg-white/80"></div>
              <div className="h-2.5 w-3/5 rounded-full bg-white/70"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[11px] text-text-muted">{project.year}</span>
            {project.badge && (
              <span className="inline-flex items-center rounded-full border border-accent-border bg-accent-light px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent">
                {project.badge}
              </span>
            )}
          </div>
          <h3 className="text-[20px] font-semibold leading-tight text-text-primary">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-text-secondary">
            {project.subtitle}
          </p>
        </div>
      </div>

      <p className="text-[14px] leading-relaxed text-text-secondary">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.metrics.map(({ value, label }) => (
          <span key={label} className="project-chip">
            <strong>{value}</strong>
            <span>{label}</span>
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tool) => (
          <span key={tool} className="tag">{tool}</span>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-3 border-t border-border pt-5 sm:flex-row">
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full justify-center px-5 py-3 sm:w-auto"
          >
            <ExtIcon />
            Live
          </a>
        ) : (
          <span className="btn-outline w-full justify-center px-5 py-3 opacity-70 sm:w-auto">
            <ExtIcon />
            Live Soon
          </span>
        )}

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline w-full justify-center px-5 py-3 sm:w-auto"
        >
          <GHIcon />
          GitHub
        </a>
      </div>
    </article>
  )
}
