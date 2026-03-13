// src/sections/Hero.jsx
import { HERO, STATS } from '../data/content'
import styles from './Hero.module.css'

function HexDecoration() {
  return (
    <svg className={styles.hexBg} width="700" height="700" viewBox="0 0 700 700" fill="none" aria-hidden="true">
      {[35, 90, 145, 200, 255].map((offset, i) => (
        <polygon
          key={i}
          points={`350,${offset} ${640-offset/2},${175+offset/3} ${640-offset/2},${525-offset/3} 350,${665-offset} ${60+offset/2},${525-offset/3} ${60+offset/2},${175+offset/3}`}
          fill="none"
          stroke={i % 2 === 0 ? 'var(--cyber-green)' : 'var(--cyber-blue)'}
          strokeWidth="0.8"
        />
      ))}
    </svg>
  )
}

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero}>
      {/* Animated grid */}
      <div className={styles.grid} aria-hidden="true" />

      {/* Decorative hexagon */}
      <HexDecoration />

      {/* Main content */}
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          {HERO.badge}
        </div>

        <h1 className={styles.title}>
          <span className={styles.line1}>{HERO.titleLine1}</span>
          <br />
          <span className={`${styles.line2} gradient-text`}>{HERO.titleLine2}</span>
          <br />
          <span className={styles.line3}>{HERO.titleLine3}</span>
        </h1>

        <p className={styles.desc}>{HERO.description}</p>

        <div className={styles.actions}>
          <button className="btn btn-primary" onClick={() => scrollTo('#membership')}>
            JOIN THE COMMUNITY
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('#objectives')}>
            LEARN MORE →
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        {STATS.map((s) => (
          <div key={s.label} className={styles.stat}>
            <div className={styles.statNum}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollInd} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>SCROLL TO EXPLORE</span>
      </div>
    </section>
  )
}
