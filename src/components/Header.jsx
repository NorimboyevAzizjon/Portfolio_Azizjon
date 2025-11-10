import Navbar from './Navbar'

function Header() {
  return (
    <header style={{
      background: '#2c3e50',
      color: 'white',
      padding: '1rem 0',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>
            Azizjon Norimboyev
          </h1>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header