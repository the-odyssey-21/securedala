// src/sections/CTA.jsx
import { useScrollReveal } from '../hooks/useScrollReveal'
import styles from './CTA.module.css'

export default function CTA() {
  const ref = useScrollReveal()

  return (
    <section id="cta" className={styles.section}>
      {/* Decorative hex */}
      <svg className={styles.hexBg} width="500" height="500" viewBox="0 0 500 500" fill="none" aria-hidden="true">
        {[25, 65, 105].map((o, i) => (
          <polygon
            key={i}
            points={`250,${o} ${458 - o},${138 + o / 2} ${458 - o},${363 - o / 2} 250,${475 - o} ${42 + o},${363 - o / 2} ${42 + o},${138 + o / 2}`}
            fill="none"
            stroke={i % 2 === 0 ? 'var(--cyber-green)' : 'var(--cyber-blue)'}
            strokeWidth="0.6"
          />
        ))}
      </svg>

      <div ref={ref} className={`${styles.content} reveal`}>
        <div>
          <div className="section-label" style={{ marginBottom: '12px' }}>
            <span className="section-label__num">JOIN //</span>
            <div className="section-label__line" />
          </div>
          <h2 className={styles.title}>
            READY TO JOIN
            <br />THE MISSION?
          </h2>
          <p className={styles.sub}>
            Become part of Kenya's fastest-growing cybersecurity community.
            Secure the future — together.
          </p>
        </div>

        <div className={styles.actions}>
          <div className={styles.url}>
            <div className={styles.urlLabel}>COMMUNITY PLATFORM</div>
            <div className={styles.urlText}>securedala.ke</div>
          </div>
          <a href="#" className="btn btn-primary">JOIN SECUREDALA</a>
          <button
            className="btn btn-outline"
            onClick={() => document.querySelector('#pillars')?.scrollIntoView({ behavior: 'smooth' })}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  )
}
