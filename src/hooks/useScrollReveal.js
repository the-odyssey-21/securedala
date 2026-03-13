import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to the returned ref.
 * When the element enters the viewport it gets the class "visible",
 * which triggers the CSS reveal transition defined in globals.css.
 *
 * @param {object} options - IntersectionObserver options
 * @returns {React.RefObject}
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target) // animate once
        }
      },
      { threshold: 0.12, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

/**
 * Reveals a list of children with staggered delays.
 * Apply class "reveal" + optional "reveal-delay-N" to each child.
 *
 * @returns {React.RefObject}  attach to a parent element
 */
export function useStaggerReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const parent = ref.current
    if (!parent) return

    const children = Array.from(parent.children)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * 80)
          })
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, ...options }
    )

    // Give children the base reveal class if not already set
    children.forEach(child => child.classList.add('reveal'))

    observer.observe(parent)
    return () => observer.disconnect()
  }, [])

  return ref
}
