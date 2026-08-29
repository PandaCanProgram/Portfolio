import skills from '../data/skills.json'

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-shape shape-square-sm pos-tl" />
      <div className="section-shape shape-dot-sm pos-br" />
      <div className="container">
        <p className="section-label">02 / Skills</p>
        <h2 className="skills-heading">Toolkit &amp; Expertise</h2>

        <div className="skills-grid">
          {skills.map((category) => (
            <div key={category.name} className="skills-card">
              <h3 className="skills-card-title">{category.name}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item.name} className="skills-item">
                    <span>{item.name}</span>
                    {item.level && <span className="skills-level">{item.level}</span>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
