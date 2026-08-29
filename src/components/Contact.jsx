import { useState } from 'react'
import contact from '../data/contact.json'
import { MailIcon, GithubIcon, SendIcon } from './Icons'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-shape shape-ring-sm pos-bl" />
      <div className="section-shape shape-dot-sm pos-tr" />
      <div className="container contact-grid">
        <div>
          <p className="section-label">03 / Contact</p>
          <h2 className="contact-heading">
            Let's build something <em>great.</em>
          </h2>
          <p className="contact-message">{contact.message}</p>

          <div className="contact-links">
            <a href={`mailto:${contact.email}`} className="contact-link">
              <MailIcon />
              {contact.email}
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="contact-link">
              <GithubIcon />
              {contact.github.replace('https://', '')}
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Your Name
            <input name="name" value={form.name} onChange={handleChange} placeholder="Juan Dela Cruz" required />
          </label>
          <label>
            Email Address
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            Send Message <SendIcon />
          </button>
        </form>
      </div>
    </section>
  )
}
