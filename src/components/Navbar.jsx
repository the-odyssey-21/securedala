// src/components/Navbar.jsx
import { useState, useEffect } from 'react'
import LogoMark from './LogoMark'
import { NAV_LINKS } from '../data/content'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      {/* Logo */}
      <a
        href="#hero"
        className={styles.logo}
        onClick={(e) => { e.preventDefault(); handleNav('#hero') }}
      >
        <LogoMark size={36} />
        <span className={styles.logoText}>SECUREDALA</span>
      </a>

      {/* Desktop links */}
      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={styles.link}
              onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`btn btn-green-outline ${styles.cta}`}
        onClick={() => handleNav('#cta')}
      >
        JOIN NOW
      </button>

      {/* Hamburger */}
      <button
        className={`${styles.hamburger} ${menuOpen ? styles.hamOpen : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}
