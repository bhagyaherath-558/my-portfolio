import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './index.css';
import './App.css';
import profileImg from './profile.jpg';


import { 
  FaLinkedin, FaFacebook, FaEnvelope, FaCode, 
  FaCheckCircle, FaRocket, FaFolderOpen, FaExternalLinkAlt, 
  FaGraduationCap, FaBug, FaUser, FaPaperPlane 
} from 'react-icons/fa'; 

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main Navigation">
      
      <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About Me</NavLink>
      <NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
    </nav>
  );
}

// 2. Home Page Component (With Your Real Social Icons)
function Home() {
  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <img src={profileImg} alt="Your Professional Profile" className="profile-img" />
      <h1 style={{ marginTop: '15px' }}>Welcome to My Portfolio <FaRocket style={{color: '#f43f5e'}}/></h1>
      <p style={{ fontSize: '1.2rem', color: '#64748b' }}>
        Hello! I am a final-year National Diploma in Technology (NDT) undergraduate student at the Institute of Technology, University of Moratuwa.
      </p>
      <p>Explore my academic journey, technical skills, and software projects designed with HCI best practices[cite: 1].</p>
      
      <div className="social-links" aria-label="Social Profiles">
        <a href="https://www.linkedin.com/in/bhagya-herath-3210b6388?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
          <FaLinkedin size={20} /> LinkedIn
        </a>
        <a href="https://www.facebook.com/share/1Hkxu9KjhY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
          <FaFacebook size={20} /> Facebook
        </a>
        <a href="mailto:bhagyaherath558@gmail.com" className="social-btn email">
          <MdOutlineMail size={20} /> Email Me
        </a>
      </div>
    </div>
  );
}

// 3. About Me Component (With Your QA Career Aspirations)
function About() {
  return (
    <div className="container">
      <h2><FaUser style={{color: '#0284c7'}}/> About Me</h2>
      
      <h3><FaGraduationCap /> Educational Background</h3>
      <p><strong>Institute of Technology, University of Moratuwa (ITUM)</strong><br />National Diploma in Technology (NDT) - Semester III</p>
      
      <h3><FaCode /> Technical Skills</h3>
      <ul>
        <li><IoMdCheckmarkCircleOutline style={{color: '#10b981'}}/> Frontend Development: HTML, JavaScript, React.js</li>
        <li><IoMdCheckmarkCircleOutline style={{color: '#10b981'}}/> UI/UX & HCI: Figma</li>
        <li><FaBug style={{color: '#f43f5e'}}/> QA Interests: Manual Testing, Test Cases, Bug Tracking, UI/UX Testing</li>
      </ul>

      <h3><FaCheckCircle style={{color: '#0284c7'}}/> Career Aspirations</h3>
      <p>
        My goal is to secure a challenging <strong>Software Quality Assurance (QA) Engineering Internship</strong> where I can bridge the gap between technical functionality and exceptional user experience. With my strong foundation in React.js, I aim to ensure high software quality through meticulous usability evaluation and defect tracking.
      </p>
    </div>
  );
}

// 4. Projects Component (With SecureTrack SL & Icons)
function Projects() {
  const myProjects = [
    {
      title: "SecureTrack SL",
      desc: " The aim of this project is to develop a robust, IoT-based real-time container monitoring and anti-theft framework that provides Sri Lanka Customs with enhanced visibility and security for cargo in transit",
      tech: "React.js, Springboot, MySql",
      link: "https://github.com/Hasitha123456789/SecureTrack-SL" 
    },
    {
      title: "Inventory Management System",
      desc: "A group project which is  provides real-time stock monitoring, transaction tracking, product catalog management, and low-stock alerts without authentication barriers.",
      tech: "React, Springboot, MySql",
      link: "https://github.com/reezmahanan/SCM-IMS.git"
    },
    {
      title: "Student Registration Project",
      desc: "A software application used to register,store,and manage student information.",
      tech: "React",
      link: "https://github.com/bhagyaherath-558/ESP"
    }
  ];

  return (
    <div className="container">
      <h2><FaFolderOpen style={{color: '#0284c7'}}/> My Projects</h2>
      <div className="project-grid">
        {myProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 style={{ color: '#0284c7', margin: '0 0 10px 0' }}>{project.title}</h3>
            <p>{project.desc}</p>
            <p><strong>Technologies:</strong> {project.tech}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn" style={{marginTop: '10px', textDecoration: 'none'}}>
              View on GitHub <FaExternalLinkAlt size={12} style={{marginLeft: '5px'}}/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. Contact Component (With Your Email bhagyaherath558@gmail.com)
function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // HCI Visibility of System Status
  };

  return (
    <div className="container">
      <h2><FaEnvelope style={{color: '#0284c7'}}/> Contact Me</h2>
      <p>If you are looking for an enthusiastic QA intern or have any inquiries, feel free to reach out!</p>
      
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:bhagyaherath558@gmail.com" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: 'bold' }}>
          bhagyaherath558@gmail.com
        </a>
      </p>
      
      {submitted ? (
        <div style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '15px', borderRadius: '8px', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <FaCheckCircle size={20}/> <strong>Success!</strong> Your message has been sent successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message <FaPaperPlane/></button>
        </form>
      )}
    </div>
  );
}

// 6. MAIN APP MAIN BOARD (Connecting Everything)
function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove} style={{ minHeight: "100vh", position: "relative" }}>
      
      {/* Dynamic Background Element */}
      <div 
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(2, 132, 199, 0.06) 0%, rgba(255,255,255,0) 70%)",
          top: coords.y - 200,
          left: coords.x - 200,
          pointerEvents: "none", 
          zIndex: 0,
          transition: "transform 0.1s ease"
        }}
      />
      
      <div style={{ position: "relative", zIndex: 1 }}>
        <Router basename="/my-portfolio">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;