import React from 'react';

function Projects() {
  const myProjects = [
    {
      title: "IoT Container Monitoring System",
      desc: "A smart container monitoring system developed to track real-time conditions. Features custom interfaces for companies and truck drivers.",
      tech: "React.js, Node.js, IoT Sensors, Firebase",
      github: "https://github.com/yourusername/iot-container-monitoring"
    },
    {
      title: "E-Commerce Web Application",
      desc: "An online shopping platform where users can browse products, add items to a cart, and place orders securely.",
      tech: "Java, Servlets, MySQL, HTML/CSS",
      github: "https://github.com/yourusername/ecommerce-app"
    },
    {
      title: "Student Management System",
      desc: "A desktop application created to manage student records, attendance, and exam grades effectively.",
      tech: "Java Swing, OOP Principles, MS Access",
      github: "https://github.com/yourusername/student-system"
    }
  ];

  return (
    <section id="projects" style={{ padding: '80px 40px', background: '#f9f9f9' }}>
      <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', color: '#333' }}>My Projects</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
        {myProjects.map((proj, index) => (
          <div key={index} style={{ background: '#fff', padding: '25px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
            <h3 style={{ color: '#007bff', marginBottom: '10px' }}>{proj.title}</h3>
            <p style={{ color: '#666', fontSize: '15px', height: '70px' }}>{proj.desc}</p>
            <p style={{ marginTop: '15px', fontSize: '14px' }}><strong>Technologies:</strong> <span style={{ color: '#555' }}>{proj.tech}</span></p>
            <a href={proj.github} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '15px', color: '#fff', background: '#333', padding: '8px 15px', textDecoration: 'none', borderRadius: '4px', fontSize: '14px' }}>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;