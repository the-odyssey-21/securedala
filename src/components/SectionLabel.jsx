// src/components/SectionLabel.jsx

export default function SectionLabel({ num, text }) {
  return (
    <div className="section-label">
      <span className="section-label__num">{num} //</span>
      <div className="section-label__line" />
      <span className="section-label__text">{text}</span>
    </div>
  )
}
