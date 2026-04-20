import React, { useEffect, useState } from 'react'

const scrollTo = (id) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

function useTypewriter(text, speed = 85, start = true) {
  const [value, setValue] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!start) return

    setValue('')
    setDone(false)

    let index = 0
    const timer = setInterval(() => {
      index++
      setValue(text.slice(0, index))

      if (index >= text.length) {
        clearInterval(timer)
        setDone(true)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed, start])

  return { text: value, done }
}

export default function Hero() {
  const hi = useTypewriter("Hi,")
  const name = useTypewriter("Sai Hari Krishna KV", 85, hi.done)

  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-20 sm:pt-24">
      <div className="hero-bg"></div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-5rem)] max-w-content items-center px-6 py-16 sm:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

          {/* LEFT */}
          <div className="fade-left max-w-[590px] text-left">

            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.22em] text-accent">
              Aspiring Software Engineer
            </p>

            {/* 🔥 FIXED HERO TEXT */}
            <div>
              <p className="text-lg text-text-secondary">
                {hi.text}
              </p>

              {hi.done && (
                <h1 className="text-[clamp(34px,4.8vw,54px)] font-bold tracking-[-0.04em] text-text-primary">
                  {name.text}
                  <span className="type-cursor" />
                </h1>
              )}
            </div>

            <p className="mt-6 max-w-[600px] text-[clamp(34px,5.6vw,62px)] font-semibold leading-[1.02] tracking-[-0.045em] text-text-primary">
              I build premium web products that feel sharp in the interface and reliable in production.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollTo('projects')} className="btn-primary px-8 py-3">
                View Projects
              </button>
              <button onClick={() => scrollTo('contact')} className="btn-outline px-8 py-3">
                Contact Me
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}