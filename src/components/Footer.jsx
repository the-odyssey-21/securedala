// src/components/Footer.jsx
import LogoMark from './LogoMark'
import { FOOTER_LINKS } from '../data/content'
import styles from './Footer.module.css'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand column */}
        <div>
          <button className={styles.logoBtn} onClick={scrollTop} aria-label="Back to top">
            <LogoMark size={32} />
            <span className={styles.logoText}>SECUREDALA</span>
          </button>
          <p className={styles.brandText}>
            Kenya's growing network of cybersecurity professionals, students, and enthusiasts.
            Building a safer digital future — from grassroots to global.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(FOOTER_LINKS).map(([col, links]) => (
          <div key={col}>
            <div className={styles.colTitle}>{col.toUpperCase()}</div>
            <ul className={styles.links}>
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          © 2025 SECUREDALA — CYBERSECURITY COMMUNITY KENYA. ALL RIGHTS RESERVED.
        </span>
        <div className={styles.badges}>
          <span className={`${styles.badge} ${styles.badgeGreen}`}>NAIROBI, KE</span>
          <span className={`${styles.badge} ${styles.badgeBlue}`}>EST. 2025</span>
          <span className={`${styles.badge} ${styles.badgeGreen}`}>VISION 2030</span>
        </div>
      </div>
    </footer>
  )
}
