// src/sections/Impact.jsx
import { PROJECTS, PARTNERSHIPS } from '../data/content'
import SectionLabel from '../components/SectionLabel'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import styles from './Impact.module.css'

function ProjectRow({ item }) {
  return (
    <div className={`${styles.row} ${item.color === 'green' ? styles.rowGreen : styles.rowBlue}`}>
      <span className={styles.rowName}>{item.name}</span>
      <span className={`${styles.tag} ${item.color === 'green' ? styles.tagGreen : styles.tagBlue}`}>
        {item.tag}
      </span>
    </div>
  )
}

function ImpactCard({ title, color, items }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.head} ${color === 'green' ? styles.headGreen : styles.headBlue}`}>
        <span
          className={styles.dot}
          style={{
            background: color === 'green' ? 'var(--cyber-green)' : 'var(--cyber-blue)',
            boxShadow: `0 0 8px ${color === 'green' ? 'var(--cyber-green)' : 'var(--cyber-blue)'}`,
          }}
        />
        {title}
      </div>
      {items.map((item) => (
        <ProjectRow key={item.name} item={item} />
      ))}
    </div>
  )
}

export default function Impact() {
  const labelRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const subRef   = useScrollReveal()
  const gridRef  = useStaggerReveal()

  return (
    <section id="impact" className={styles.section}>
      <div className="section-wrapper">
        <div ref={labelRef} className="reveal">
          <SectionLabel num="05" text="IMPACT AREAS" />
        </div>
        <h2 ref={titleRef} className="section-title reveal">
          INITIATIVES & <span className="gradient-text">PARTNERSHIPS</span>
        </h2>
        <p ref={subRef} className="section-sub reveal">
          The concrete work SecureDala does — projects, research, campaigns, and partnerships
          that create real-world impact.
        </p>

        <div ref={gridRef} className={styles.grid}>
          <ImpactCard title="COMMUNITY PROJECTS"    color="green" items={PROJECTS}     />
          <ImpactCard title="STRATEGIC PARTNERSHIPS" color="blue"  items={PARTNERSHIPS} />
        </div>
      </div>
    </section>
  )
}
