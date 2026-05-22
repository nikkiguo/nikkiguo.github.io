import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand" onClick={handleLinkClick}>
          <span className="brand-bracket">[</span>
          Nikki Guo
          <span className="brand-bracket">]</span>
        </Link>
        
        <button 
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/#home" className="nav-link" onClick={handleLinkClick}>Home</a></li>
          <li><a href="/#about" className="nav-link" onClick={handleLinkClick}>About</a></li>
          <li><a href="/#experience" className="nav-link" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="/#projects" className="nav-link" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="/#art" className="nav-link" onClick={handleLinkClick}>Art</a></li>
          <li><Link to="/blog" className="nav-link" onClick={handleLinkClick}>Blog</Link></li>
        </ul>
      </div>
    </nav>
  )
}
