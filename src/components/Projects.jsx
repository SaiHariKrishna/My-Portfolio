import React from 'react'
import { useInView } from '../hooks/useInView'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  {
    year: '2026',
    title: 'PlaceHub',
    subtitle: 'Job & Internship Portal',
    description:
      'A production-grade MERN placement platform with role-based access (Student / Admin), JWT + bcrypt auth, and real-time admin analytics. Designed around reliability - OTP email verification, TTL-indexed cleanup, and request rate limiting out of the box.',
    metrics: [
      { value: '100+',  label: 'Registered users' },
      { value: '150ms', label: 'Avg API response' },
      { value: '60%',   label: 'Query latency cut' },
      { value: '98%',   label: 'DB integrity' },
    ],
    highlights: [
      '12+ RESTful endpoints with Express.js middleware - validation, error handling, rate limiting',
      'MongoDB aggregation pipelines + indexed queries across 50+ job postings',
      'OTP email verification with TTL-indexed auto-cleanup of unverified accounts',
      'Server-sent events for live admin dashboard updates',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'bcrypt'],
    preview: {
      label: 'Hiring Ops',
      note: 'Role-based portal',
      accent: 'SSE',
      gradient: 'linear-gradient(135deg, rgba(37,99,235,0.20), rgba(56,189,248,0.10))',
    },
    badge: null,
    github: 'https://github.com/SaiHariKrishna/PlaceHub',
    demo: 'https://placehub.me/',
  },
  {
    year: '2024',
    title: 'IoT Water Monitoring',
    subtitle: 'End-to-end IoT System with Custom PCB & React Dashboard',
    description:
      'End-to-end IoT system - from custom PCB and NodeMCU firmware to a React dashboard with live charts. Processes 5 concurrent sensor streams with 200ms end-to-end latency over WebSockets, eliminating HTTP polling overhead entirely.',
    metrics: [
      { value: '200ms', label: 'End-to-end latency' },
      { value: '10K+',  label: 'Data points / hour' },
      { value: '90%',   label: 'Polling cut' },
      { value: '85%',   label: 'Manual effort saved' },
    ],
    highlights: [
      'Event-driven Node.js backend with WebSocket management, graceful reconnection and failover',
      'InfluxDB time-series pipeline - configurable retention, sub-second historical queries',
      'React + Chart.js dashboard with configurable real-time alert thresholds',
      'Custom PCB layout with NodeMCU firmware for Wi-Fi sensor-to-cloud communication',
    ],
    stack: ['React.js', 'Node.js', 'WebSockets', 'InfluxDB', 'NodeMCU', 'Chart.js'],
    preview: {
      label: 'Sensor Grid',
      note: 'Realtime telemetry',
      accent: '5 Streams',
      gradient: 'linear-gradient(135deg, rgba(14,165,233,0.20), rgba(37,99,235,0.08))',
    },
    badge: '🏆 1st Place - Innoverse Hackathon',
    github: 'https://github.com/SaiHariKrishna/Advanced-IoT-Enabled-Water-Monitoring-System-Hardware-',
    demo: null,
  },
  {
    year: '2025',
    title: 'SecureLink',
    subtitle: 'ML-Powered Phishing URL Detection',
    description:
      'Production phishing detector using a tuned Random Forest classifier trained on 10,000+ labeled URLs. Features 20+ lexical and domain-based signals, a REST API with 200ms inference latency, and is deployed on Streamlit Cloud with 99.5% uptime.',
    metrics: [
      { value: '94%',   label: 'Accuracy' },
      { value: '0.92',  label: 'F1-Score' },
      { value: '200ms', label: 'Inference latency' },
      { value: '99.5%', label: 'Uptime' },
    ],
    highlights: [
      'Random Forest with GridSearchCV tuning and 5-fold stratified cross-validation',
      '20+ features: URL entropy, subdomain depth, TLD analysis, IP-based detection',
      'False positive rate reduced 15% while recall held above 91%',
      'joblib model caching; 100+ daily predictions on Streamlit Cloud',
    ],
    stack: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit', 'joblib'],
    preview: {
      label: 'Trust Layer',
      note: 'Phishing analysis',
      accent: 'ML',
      gradient: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(56,189,248,0.10))',
    },
    badge: null,
    github: 'https://github.com/SaiHariKrishna/SecureLink',
    demo: 'https://securelink.streamlit.app/',
  },
  {
  year: '2026',
  title: 'OptiMarket',
  subtitle: 'Fixed-Income Portfolio Optimization System',
  description:
    'Built a quantitative decision-support system for fixed-income portfolio allocation, combining bond valuation models with constrained optimization to generate risk-aware investment strategies. Designed to simulate real-world interest rate scenarios and optimize allocations accordingly.',
  metrics: [
    { value: 'YTM',        label: 'Bond Valuation' },
    { value: 'Duration',   label: 'Risk Sensitivity' },
    { value: 'SciPy',      label: 'Optimization Engine' },
    { value: 'Multi-Scenario', label: 'Stress Testing' },
  ],
  highlights: [
    'Implemented core fixed-income metrics including Yield-to-Maturity (YTM), Modified Duration, and price sensitivity',
    'Formulated constrained optimization problems and solved using scipy.optimize for optimal portfolio allocation',
    'Designed stress-testing framework to evaluate portfolio performance under multiple interest rate shift scenarios',
    'Built interactive Streamlit interface for structured inputs and automated optimization outputs',
  ],
  stack: ['Python', 'QuantLib', 'SciPy', 'Streamlit'],
  preview: {
    label: 'Portfolio Lab',
    note: 'Optimization engine',
    accent: 'Quant',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.18), rgba(148,163,184,0.12))',
  },
  badge: null,
  github: 'https://github.com/SaiHariKrishna/portfolio-optimization-agent',
  demo: 'https://optimarket.streamlit.app/',
},
]

export default function Projects() {
  const [headRef, headVisible] = useInView()

  return (
    <section id="projects" className="py-[88px] bg-alt-gradient border-t border-border">
      <div className="max-w-content mx-auto px-6">

        <div ref={headRef} className={`mb-12 reveal ${headVisible ? 'visible' : ''}`}>
          <p className="section-label mb-2.5">Projects</p>
          <h2 className="section-heading">Things I've built</h2>
          <p className="section-sub">
            Build systems that go beyond demos - combining real-time data, reliable backend architecture, and clean UX to handle real users and real workloads.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
  {PROJECTS.map((p, i) => {
    const remainder = PROJECTS.length % 3
    const isLastRowStart = i >= PROJECTS.length - remainder

    let colClass = ''

    // Case: 1 item in last row → center it
    if (remainder === 1 && i === PROJECTS.length - 1) {
      colClass = 'xl:col-start-2'
    }

    // Case: 2 items in last row → center both
    if (remainder === 2 && isLastRowStart) {
      colClass = i === PROJECTS.length - 2
        ? 'xl:col-start-1'
        : 'xl:col-start-3'
    }

    return (
      <div key={p.title} className={colClass}>
        <ProjectCard project={p} delay={i * 80} />
      </div>
    )
  })}
</div>

      </div>
    </section>
  )
}
