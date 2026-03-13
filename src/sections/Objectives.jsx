// src/sections/Objectives.jsx
import { OBJECTIVES } from '../data/content'
import SectionLabel from '../components/SectionLabel'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import styles from './Objectives.module.css'

function ObjCard({ obj, index }) {
  const isEven    = index % 2 === 1
  const isFeatured = obj.featured

  return (
    <div className={`${styles.card} ${isFeatured ? styles.cardFeatured : ''}`}>
      <div className={`${styles.accent} ${isEven && !isFeatured ? styles.accentBlue : styles.accentGreen}`} />
      <div className={`${styles.num} ${isEven && !isFeatured ? styles.numBlue : styles.numGreen}`}>
        {obj.num}
      </div>
      <div className={styles.body}>
        <h3 className={`${styles.title} ${isFeatured ? styles.titleGreen : ''}`}>{obj.title}</h3>
        <p className={styles.text}>{obj.text}</p>
      </div>
    </div>
  )
}

export default function Objectives() {
  const labelRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const subRef   = useScrollReveal()
  const gridRef  = useStaggerReveal()

  return (
    <section id="objectives" className={`${styles.section} grid-bg`}>
      <div className="section-wrapper">
        <div ref={labelRef} className="reveal">
          <SectionLabel num="02" text="CORE OBJECTIVES" />
        </div>
        <h2 ref={titleRef} className="section-title reveal">
          WHAT WE <span className="gradient-text">SET OUT</span> TO DO
        </h2>
        <p ref={subRef} className="section-sub reveal">
          Five clear objectives that drive our work — and one mission that runs deeper than all of them.
        </p>

        <div ref={gridRef} className={styles.grid}>
          {OBJECTIVES.map((obj, i) => (
            <ObjCard key={obj.num} obj={obj} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
