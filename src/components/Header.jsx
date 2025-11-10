import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import Navbar from './Navbar'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Code2 className="logo-icon" />
          <span>Azizjon.N</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <Navbar />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-nav">
            <Navbar mobile onLinkClick={() => setIsMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header