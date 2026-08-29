import about from '../data/about.json'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-shape shape-ring-sm pos-tr" />
      <div className="section-shape shape-dot-sm pos-bl" />
      <div className="container about-grid">
        <div>
          <p className="section-label">00 / About</p>
          <h2 className="about-heading">
            {about.heading}
            <em>{about.highlight}</em>
            {about.headingEnd}
          </h2>
        </div>

        <div className="about-content">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="about-paragraph">
              {p}
            </p>
          ))}

          <div className="about-facts">
            {about.facts.map((fact) => (
              <div key={fact.label} className="about-fact">
                <span className="about-fact-label">{fact.label}</span>
                <span className="about-fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
