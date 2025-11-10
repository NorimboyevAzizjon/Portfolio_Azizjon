import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Navbar({ mobile, onLinkClick }) {
  const location = useLocation()
  
  const links = [
    { path: '/', label: 'Bosh Sahifa' },
    { path: '/about', label: 'Men haqimda' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Bog\'lanish' }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <motion.nav 
      className={mobile ? 'nav-mobile' : 'nav-desktop'}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {links.map((link) => (
        <motion.div key={link.path} variants={item}>
          <Link
            to={link.path}
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            onClick={onLinkClick}
          >
            {link.label}
            {location.pathname === link.path && (
              <motion.div className="active-indicator" layoutId="active" />
            )}
          </Link>
        </motion.div>
      ))}
    </motion.nav>
  )
}

export default Navbar