import { useEffect, useRef } from 'react'

/**
 * Renders a custom lagging cursor.
 * Returns refs for the outer ring and the dot.
 */
export function useCursor() {
  const ringRef = useRef(null)
  const dotRef  = useRef(null)
  const mouse   = useRef({ x: 0, y: 0 })
  const pos     = useRef({ x: 0, y: 0 })
  const raf     = useRef(null)

  useEffect(() => {
    const ring = ringRef.current
    const dot  = dotRef.current
    if (!ring || !dot) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
    }

    const onEnterLink = () => {
      ring.style.width        = '28px'
      ring.style.height       = '28px'
      ring.style.borderColor  = 'var(--cyber-blue)'
    }

    const onLeaveLink = () => {
      ring.style.width        = '12px'
      ring.style.height       = '12px'
      ring.style.borderColor  = 'var(--cyber-green)'
    }

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12
      ring.style.left = pos.current.x + 'px'
      ring.style.top  = pos.current.y + 'px'
      raf.current = requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)
    document.addEventListener('mousemove', onMove)

    const links = document.querySelectorAll('a, button')
    links.forEach(l => {
      l.addEventListener('mouseenter', onEnterLink)
      l.addEventListener('mouseleave', onLeaveLink)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      links.forEach(l => {
        l.removeEventListener('mouseenter', onEnterLink)
        l.removeEventListener('mouseleave', onLeaveLink)
      })
    }
  }, [])

  return { ringRef, dotRef }
}
