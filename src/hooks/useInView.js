import { useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, isVisible].
 * Once the element enters the viewport it stays "visible" — no toggle-back.
 */
export function useInView(rootMargin = '-50px 0px -50px 0px', threshold = 0.08) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { rootMargin, threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin, threshold])

  return [ref, visible]
}
