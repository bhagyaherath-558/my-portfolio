import React from 'react';

function About() {
  return (
    <section id="about" style={{ padding: '80px 40px', background: '#ffffff' }}>
      <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', color: '#333' }}>About Me</h2>
      
      <div style={{ marginTop: '20px' }}>
        <h3>Educational Background</h3>
        <p><strong>Institute:</strong> Institute of Technology, University of Moratuwa (ITUM)</p>
        <p><strong>Course:</strong> National Diploma in Technology (NDT) in Information Technology</p>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h3>Technical Skills</h3>
        <ul style={{ lineHeight: '2' }}>
          <li><strong>Languages:</strong> Java, JavaScript, HTML, CSS</li>
          <li><strong>Frameworks & Tools:</strong> React.js, Git, GitHub, Figma</li>
        </ul>
      </div>
    </section>
  );
}

export default About;