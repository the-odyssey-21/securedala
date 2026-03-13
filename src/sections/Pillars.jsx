// src/sections/Pillars.jsx
import { PILLARS } from '../data/content'
import SectionLabel from '../components/SectionLabel'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import styles from './Pillars.module.css'

const ICONS = {
  connect: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  learn: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  collaborate: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8m-4-4v4" />
      <path d="M6 8h4m-2-2v4" />
    </svg>
  ),
  contribute: (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
}

function PillarCard({ pillar, index }) {
  const isEven = index % 2 === 1
  return (
    <div className={`${styles.card} ${isEven ? styles.cardEven : styles.cardOdd}`}>
      <span className={styles.numBg}>{pillar.num}</span>
      <div className={`${styles.iconWrap} ${isEven ? styles.iconBlue : styles.iconGreen}`}>
        <span className={isEven ? styles.svgBlue : styles.svgGreen}>
          {ICONS[pillar.icon]}
        </span>
      </div>
      <h3 className={`${styles.heading} ${isEven ? styles.headingBlue : styles.headingGreen}`}>
        {pillar.title}
      </h3>
      <p className={styles.text}>{pillar.text}</p>
    </div>
  )
}

export default function Pillars() {
  const labelRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const subRef   = useScrollReveal()
  const gridRef  = useStaggerReveal()

  return (
    <section id="pillars" className={styles.section}>
      <div className="section-wrapper">
        <div ref={labelRef} className="reveal">
          <SectionLabel num="01" text="THE FOUR PILLARS" />
        </div>
        <h2 ref={titleRef} className="section-title reveal">
          BUILD LASTING <span className="gradient-text">CONNECTIONS</span>
          <br />BEYOND THE SCREEN
        </h2>
        <p ref={subRef} className="section-sub reveal">
          Our community is built on four core principles that guide everything we do —
          from local meetups to international impact.
        </p>

        <div ref={gridRef} className={styles.grid}>
          {PILLARS.map((p, i) => (
            <PillarCard key={p.num} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
