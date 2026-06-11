import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
  };

  return (
    <section id="contact" style={{ padding: '80px 40px', background: '#ffffff', textAlign: 'center' }}>
      <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px', color: '#333', display: 'inline-block', width: '100%' }}>Contact Me</h2>
      
      <div style={{ marginTop: '30px' }}>
        <p>If you would like to connect or discuss internship opportunities, please drop a message!</p>
        
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '30px auto', display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
          <div>
            <label style={{ fontWeight: 'bold' }}>Email Address:</label>
            <input type="email" required style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }} />
          </div>
          <div>
            <label style={{ fontWeight: 'bold' }}>Message:</label>
            <textarea required rows="4" style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}></textarea>
          </div>
          <button type="submit" style={{ padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;