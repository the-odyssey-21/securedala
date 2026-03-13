// src/sections/Membership.jsx
import { TIERS } from '../data/content'
import SectionLabel from '../components/SectionLabel'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'
import styles from './Membership.module.css'

function TierCard({ tier }) {
  const scrollToCta = () =>
    document.querySelector('#cta')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className={`${styles.card} ${styles[tier.id]}`}>
      {tier.featured && <span className={styles.featuredBadge}>FEATURED</span>}
      <div className={`${styles.badge} ${styles[`badge_${tier.id}`]}`}>
        {tier.badge}
      </div>
      <h3 className={styles.name}>{tier.name}</h3>
      <ul className={styles.perks}>
        {tier.perks.map((perk) => (
          <li key={perk} className={styles.perk}>
            {perk}
          </li>
        ))}
      </ul>
      <button
        className={`${styles.cta} ${styles[`cta_${tier.id}`]}`}
        onClick={scrollToCta}
      >
        {tier.cta}
      </button>
    </div>
  )
}

export default function Membership() {
  const labelRef = useScrollReveal()
  const titleRef = useScrollReveal()
  const subRef   = useScrollReveal()
  const gridRef  = useStaggerReveal()

  return (
    <section id="membership" className={`${styles.section} grid-bg`}>
      <div className="section-wrapper">
        <div ref={labelRef} className="reveal">
          <SectionLabel num="04" text="MEMBERSHIP" />
        </div>
        <h2 ref={titleRef} className="section-title reveal">
          WHO IS <span className="gradient-text">SECUREDALA</span> FOR?
        </h2>
        <p ref={subRef} className="section-sub reveal">
          Whether you're just starting out, an established professional, or simply passionate about
          digital security — there's a place for you here.
        </p>

        <div ref={gridRef} className={styles.grid}>
          {TIERS.map((tier) => (
            <TierCard key={tier.id} tier={tier} />
          ))}
        </div>
      </div>
    </section>
  )
}
