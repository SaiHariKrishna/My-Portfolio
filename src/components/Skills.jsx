import React from 'react'
import { useInView } from '../hooks/useInView'

const GROUPS = [
  {
    category: 'Frontend',
    eyebrow: 'Interface systems',
    description: 'I build responsive, fast interfaces with clear structure, smooth interactions, and a strong focus on usability.',
    skills: ['React.js', 'Tailwind CSS', 'HTML', 'Responsive Design', 'Chart.js', 'Vite', 'UI Architecture'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="14" rx="2"></rect>
        <path d="M8 20h8"></path>
        <path d="M12 18v2"></path>
      </svg>
    ),
  },
  {
    category: 'Backend & DB',
    eyebrow: 'API + infra',
    description: 'I build reliable backend systems and APIs with proper authentication, data handling, and performance in mind.',
    skills: ['Java', 'Node.js', 'Express.js', 'REST APIs', 'WebSockets', 'JWT', 'MongoDB', 'SQL'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="8" ry="3"></ellipse>
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"></path>
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path>
      </svg>
    ),
  },
  {
    category: 'Tools',
    eyebrow: 'Delivery stack',
    description: 'Tools I use to build, test, debug, and deploy real-world applications.',
    skills: ['Docker', 'Git', 'GitHub', 'Postman (API Testing)', 'VS Code', 'Linux/Bash', 'Virtualization (VirtualBox/VMware)', 'Kali Linux (Basic Security Testing)', 'MongoDB Atlas', 'Firebase', 'Streamlit Cloud', 'Vercel/Render'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 6l6 6-6 6"></path>
        <path d="M4 6h7a3 3 0 0 1 3 3v6"></path>
      </svg>
    ),
  },
  {
    category: 'ML',
    eyebrow: 'Decision systems',
    description: 'I build practical ML solutions focused on useful predictions, measurable performance, and real-world deployment.',
    skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'SciPy', 'QuantLib'],
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v18"></path>
        <path d="M5 9l7-6 7 6"></path>
        <path d="M5 15l7 6 7-6"></path>
      </svg>
    ),
  },
]

export default function Skills() {
  const [headRef, headVisible] = useInView()
  const [gridRef, gridVisible] = useInView('-20px 0px -20px 0px')

  return (
    <section id="skills" className="py-[88px] bg-section-gradient border-t border-border">
      <div className="max-w-content mx-auto px-6">

        <div ref={headRef} className={`mb-12 reveal ${headVisible ? 'visible' : ''}`}>
          <p className="section-label mb-2.5">Skills</p>
          <h2 className="section-heading">Product-ready technical stack</h2>
          <p className="section-sub">
            Organized by the core areas involved in building, deploying, and maintaining real-world software systems.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid gap-5 lg:grid-cols-2 reveal-stagger ${gridVisible ? 'visible' : ''}`}
        >
          {GROUPS.map(({ category, description, eyebrow, skills, icon }) => (
            <div key={category} className="skill-suite-card">
              <div className="flex items-start gap-4">
                <div className="skill-suite-icon">
                  {icon}
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-accent">
                    {eyebrow}
                  </p>
                  <h3 className="mt-1 text-[22px] font-semibold tracking-tight text-text-primary">
                    {category}
                  </h3>
                </div>
              </div>

              <p className="mt-5 max-w-[34rem] text-sm leading-relaxed text-text-secondary">
                {description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
