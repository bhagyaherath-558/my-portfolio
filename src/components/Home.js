import React from 'react';
import { FaBug, FaShieldAlt, FaCode } from 'react-icons/fa';
import profileImg from '../profile.jpg';

function Home() {
  return (
    <div className="container" style={{ textAlign: 'center', maxWidth: '680px', padding: '55px 35px' }}>
      {/* 1. Circular Profile Picture with Subtle Glow */}
      <div className="profile-wrapper">
        <img 
          src={profileImg} 
          alt="Bhagya Herath" 
          className="profile-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://ui-avatars.com/api/?name=Bhagya+Herath&background=0284c7&color=fff&size=160";
          }}
        />
      </div>

      {/* Status Badge */}
      <div>
        <span className="role-badge">
          <span className="role-badge-pulse"></span>
          <FaShieldAlt size={12} style={{ marginRight: '2px' }} />
          QA & Testing Enthusiast
        </span>
      </div>

      {/* 2. Name & Title with QA/Tech Symbols */}
      <h1 style={{ margin: '10px 0 10px 0' }}>
        Bhagya Herath
      </h1>

      <div className="home-subtitle">
        <FaBug className="icon-glow" size={16} />
        <span>Software Quality Assurance Intern / QA Enthusiast</span>
        <FaCode className="icon-glow" size={16} />
      </div>
      
      {/* 3. Short Description / Bio */}
      <p style={{ fontSize: '1.05rem', lineHeight: '1.8', maxWidth: '620px', margin: '0 auto' }}>
        Final-year IT student at the Institute of Technology, University of Moratuwa (ITUM), specializing in Software Quality Assurance with hands-on experience in manual testing, test case design, and currently learning test automation.
      </p>
    </div>
  );
}

export default Home;
