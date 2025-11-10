import { Github, Linkedin, Mail, Phone } from 'lucide-react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Azizjon Norimboyev</h3>
            <p>Frontend Dasturchi</p>
            <p>Zamonaviy va interaktiv veb ilovalar yarataman</p>
          </div>
          
          <div className="footer-section">
            <h4>Aloqa</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>azizjon@example.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+998 90 123 45 67</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Ijtimoiy tarmoqlar</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                <Github size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Azizjon Norimboyev. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer