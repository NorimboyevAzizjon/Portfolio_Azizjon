function Footer() {
  return (
    <footer style={{
      background: '#34495e',
      color: 'white',
      padding: '2rem 0',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        textAlign: 'center'
      }}>
        <p>&copy; 2024 Azizjon Norimboyev. Barcha huquqlar himoyalangan.</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="tel:+998901234567" style={{ color: '#3498db', margin: '0 1rem' }}>
            Telefon: +998 90 123 45 67
          </a>
          <a href="mailto:azizjon@example.com" style={{ color: '#3498db', margin: '0 1rem' }}>
            Email: azizjon@example.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer