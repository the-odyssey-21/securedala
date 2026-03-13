// src/sections/Goals.jsx
import { GOALS } from '../data/content'
import SectionLabel from '../components/SectionLabel'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import styles from './Goals.module.css'

function GoalCard({ goal, index }) {
  const isEven = index % 2 === 1
  return (
    <div className={`${styles.card} ${isEven ? styles.cardBlue : styles.cardGreen}`}>
      <div className={`${styles.dot} ${isEven ? styles.dotBlue : styles.dotGreen}`} />
      <div className={`${styles.value} ${isEven ? styles.valueBlue : styles.valueGreen}`}>
        {goal.value}
      </div>
      <div className={styles.label}>{goal.label}</div>
      <p className={styles.desc}>{goal.desc}</p>
    </div>
  )
}

export default function Goals() {
  const labelRef    = useScrollReveal()
  const titleRef    = useScrollReveal()
  const subRef      = useScrollReveal()
  const timelineRef = useScrollReveal()
  const cardsRef    = useStaggerReveal()

  return (
    <section id="goals" className={styles.section}>
      <div className="section-wrapper">
        <div ref={labelRef} className="reveal">
          <SectionLabel num="03" text="VISION 2030" />
        </div>
        <h2 ref={titleRef} className="section-title reveal">
          5-YEAR GOALS — <span className="gradient-text">WHERE WE'RE HEADED</span>
        </h2>
        <p ref={subRef} className="section-sub reveal">
          Concrete, measurable targets that define success for SecureDala by the year 2030.
        </p>

        <div ref={timelineRef} className={`${styles.timeline} reveal`}>
          <div className={styles.bar}>
            <span className={styles.barStart}>TODAY</span>
            <span className={styles.barEnd}>2030</span>
          </div>

          <div ref={cardsRef} className={styles.grid}>
            {GOALS.map((goal, i) => (
              <GoalCard key={goal.label} goal={goal} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
