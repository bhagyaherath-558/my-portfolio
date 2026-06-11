import React from 'react';

function Home() {
  return (
    <section id="home" style={{ padding: '100px 20px', textAlign: 'center', background: '#f5f5f5' }}>
      <h1 style={{ fontSize: '40px', color: '#333' }}>Welcome! I am Your Name</h1>
      <p style={{ fontSize: '18px', color: '#666', marginTop: '10px' }}>
        Information Technology Student at Institute of Technology, University of Moratuwa.
      </p>
      <div style={{ marginTop: '20px' }}>
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          style={{ borderRadius: '50%', width: '150px', height: '150px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} 
        />
      </div>
    </section>
  );
}

export default Home;