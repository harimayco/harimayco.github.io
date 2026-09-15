import { useEffect } from 'react'

/**
 * Custom hook to initialize IntersectionObserver for smooth scroll entrance animations
 * across elements tagged with .clay-reveal or [data-reveal].
 */
export function useScrollReveal(deps: any[] = []) {
  useEffect(() => {
    // Immediate reveal if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const revealElement = (el: Element) => {
      el.classList.add('is-revealed')
    }

    const selector = '[class*="clay-reveal"], [data-reveal]'

    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      document.querySelectorAll(selector).forEach(revealElement)
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target)
            obs.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
      }
    )

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => {
      if (!el.classList.contains('is-revealed')) {
        observer.observe(el)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, deps)
}
