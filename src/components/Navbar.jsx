import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    margin: '0 1rem',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background 0.3s'
  }
  
  const activeLinkStyle = {
    ...linkStyle,
    background: '#3498db'
  }

  return (
    <nav>
      <Link 
        to="/" 
        style={location.pathname === '/' ? activeLinkStyle : linkStyle}
      >
        Bosh Sahifa
      </Link>
      <Link 
        to="/about" 
        style={location.pathname === '/about' ? activeLinkStyle : linkStyle}
      >
        Men haqimda
      </Link>
      <Link 
        to="/portfolio" 
        style={location.pathname === '/portfolio' ? activeLinkStyle : linkStyle}
      >
        Portfolio
      </Link>
      <Link 
        to="/contact" 
        style={location.pathname === '/contact' ? activeLinkStyle : linkStyle}
      >
        Bog'lanish
      </Link>
    </nav>
  )
}

export default Navbar