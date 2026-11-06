import React, { useState } from 'react';
import { 
  FaEnvelope, FaPaperPlane, FaLinkedin, FaGithub, FaFacebook, 
  FaCheckCircle, FaExternalLinkAlt, FaPaperclip, 
} from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      {/* Header */}
      <h2>
        <FaEnvelope style={{ color: '#38bdf8' }} /> Connect & Contact
      </h2>
      
      <div className="contact-hero">
        <p>
          I am currently actively seeking a <strong>Software Quality Assurance (QA) Intern</strong> opportunity. 
          Feel free to connect directly via professional networks or send me a message below!
        </p>
      </div>

      {/* Interactive Social & Direct Contact Cards */}
      <div className="social-cards-grid" aria-label="Social and Professional Profiles">
        {/* LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/bhagya-herath-3210b6388?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-card linkedin"
        >
          <div className="social-card-icon">
            <FaLinkedin />
          </div>
          <div className="social-card-info">
            <div className="social-card-title">
              LinkedIn <FaExternalLinkAlt size={10} style={{ opacity: 0.7 }} />
            </div>
            <div className="social-card-subtitle">bhagya-herath • Professional Network</div>
          </div>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/bhagyaherath-558" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-card github"
        >
          <div className="social-card-icon">
            <FaGithub />
          </div>
          <div className="social-card-info">
            <div className="social-card-title">
              GitHub <FaExternalLinkAlt size={10} style={{ opacity: 0.7 }} />
            </div>
            <div className="social-card-subtitle">bhagyaherath-558 • Code & Repositories</div>
          </div>
        </a>

        {/* Direct Email */}
        <a 
          href="mailto:bhagyaherath558@gmail.com" 
          className="social-card email"
        >
          <div className="social-card-icon">
            <MdOutlineMail />
          </div>
          <div className="social-card-info">
            <div className="social-card-title">Email Directly</div>
            <div className="social-card-subtitle">bhagyaherath558@gmail.com</div>
          </div>
        </a>

        {/* Facebook */}
        <a 
          href="https://www.facebook.com/share/1Hkxu9KjhY/?mibextid=wwXIfr" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-card facebook"
        >
          <div className="social-card-icon">
            <FaFacebook />
          </div>
          <div className="social-card-info">
            <div className="social-card-title">
              Facebook <FaExternalLinkAlt size={10} style={{ opacity: 0.7 }} />
            </div>
            <div className="social-card-subtitle">Bhagya Herath • Personal Profile</div>
          </div>
        </a>
      </div>

      {/* Direct Contact Form */}
      <h3 style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '28px' }}>
        <FaPaperclip style={{ color: '#a855f7' }} /> Send a Direct Message
      </h3>

      {submitted ? (
        <div style={{ 
          background: 'rgba(16, 185, 129, 0.12)', 
          color: '#6ee7b7', 
          padding: '24px', 
          borderRadius: '16px', 
          marginTop: '20px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '14px',
          border: '1px solid rgba(52, 211, 153, 0.35)',
          boxShadow: '0 0 25px rgba(16, 185, 129, 0.15)'
        }}>
          <FaCheckCircle size={28} style={{ color: '#34d399', flexShrink: 0 }} />
          <div>
            <strong style={{ fontSize: '1.05rem', color: '#ffffff' }}>Thank You, {formData.name || 'there'}!</strong>
            <div style={{ marginTop: '4px', color: '#cbd5e1' }}>
              Your message has been received. I will get back to you promptly.
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="e.g. john@company.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject / Opportunity</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="e.g. QA Internship Inquiry"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              required 
              placeholder="Write your message or inquiry here..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-glow" style={{ alignSelf: 'flex-start' }}>
            <FaPaperPlane /> Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;
