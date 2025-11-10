function Contact() {
  return (
    <div>
      <h1>Bog'lanish</h1>
      <form style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Ismingiz:</label>
          <input type="text" style={{ 
            width: '100%', 
            padding: '0.5rem',
            marginTop: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label>
          <input type="email" style={{ 
            width: '100%', 
            padding: '0.5rem',
            marginTop: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }} />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Xabar:</label>
          <textarea style={{ 
            width: '100%', 
            padding: '0.5rem',
            marginTop: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            minHeight: '100px'
          }} />
        </div>
        <button type="submit" style={{
          background: '#3498db',
          color: 'white',
          padding: '0.75rem 2rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Yuborish
        </button>
      </form>
    </div>
  )
}

export default Contact