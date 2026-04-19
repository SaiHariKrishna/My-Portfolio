import React, { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About',        href: 'about' },
  { label: 'Projects',     href: 'projects' },
  { label: 'Skills',       href: 'skills' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Contact',      href: 'contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeId,  setActiveId]  = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href)
    const observers = []
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { rootMargin: '-64px 0px -60% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleNav = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm
                        transition-shadow duration-200 ${scrolled ? 'shadow-nav' : ''}`}>
      <nav className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-bold text-[15px] text-text-primary hover:text-accent
                     transition-colors tracking-tight shrink-0"
        >
          Sai Hari Krishna KV
        </button>

        {/* Desktop links — centered */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className={`nav-link pb-px ${activeId === href ? 'active' : ''}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop contact CTA */}
        <button
          onClick={() => handleNav('contact')}
          className="hidden md:inline-flex btn-primary shrink-0 px-4 py-2"
        >
          Get in touch
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
        >
          <span className={`block h-0.5 bg-text-primary rounded transition-all duration-200
                           ${menuOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5'}`} />
          <span className={`block h-0.5 bg-text-primary rounded transition-all duration-200
                           ${menuOpen ? 'opacity-0 w-5' : 'w-4'}`} />
          <span className={`block h-0.5 bg-text-primary rounded transition-all duration-200
                           ${menuOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-5'}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden bg-white transition-all duration-200
                       ${menuOpen ? 'max-h-72 border-b border-border' : 'max-h-0'}`}>
        <ul className="px-6 pt-2 pb-4 flex flex-col gap-0.5">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className={`w-full text-left py-2.5 text-sm font-medium transition-colors
                           ${activeId === href
                             ? 'text-accent'
                             : 'text-text-secondary hover:text-text-primary'}`}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="pt-3 border-t border-border mt-2">
            <button
              onClick={() => handleNav('contact')}
              className="text-sm font-medium text-text-primary hover:text-accent transition-colors"
            >
              Get in touch
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}
