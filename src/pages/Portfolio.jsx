function Portfolio() {
  const projects = [
    { id: 1, name: "Veb Sayt", description: "React da yaratilgan korporativ sayt" },
    { id: 2, name: "Mobile App", description: "React Native ilova" },
    { id: 3, name: "Dashboard", description: "Admin panel" }
  ]

  return (
    <div>
      <h1>Mening Loyihalarim</h1>
      <div>
        {projects.map(project => (
          <div key={project.id} style={{
            border: '1px solid #ddd',
            padding: '1rem',
            margin: '1rem 0',
            borderRadius: '8px'
          }}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio