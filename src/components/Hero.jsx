import hero from '../data/hero.json'
import photo from '../assets/mypic.jpg'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-shape hero-shape-ring" />
      <div className="hero-shape hero-shape-dot" />
      <div className="hero-shape hero-shape-square" />
      <svg className="hero-shape hero-shape-spark" viewBox="0 0 24 24" fill="none" stroke="var(--brand-dark)" strokeWidth="1.6">
        <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
      </svg>
      <span className="hero-shape hero-shape-plus">+</span>
      <div className="hero-shape hero-shape-dot2" />

      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">{hero.availability}</p>
          <h1 className="hero-title">
            {hero.name}
          </h1>
          <p className="hero-role">{hero.role}</p>
          <p className="hero-tagline">{hero.tagline}</p>
          <div className="hero-actions">
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-secondary">
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-blob" />
          <img src={photo} alt={hero.name} className="hero-photo" />
        </div>
      </div>
    </section>
  )
}
