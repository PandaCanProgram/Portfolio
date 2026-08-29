import hero from '../data/hero.json'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {hero.name}. All rights reserved.</span>
        <span>Built with React &amp; Vite.</span>
      </div>
    </footer>
  )
}
