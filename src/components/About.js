import React from 'react';
import { 
  FaUser, FaGraduationCap, FaTools, FaBug, FaCheckCircle, 
  FaTasks, FaCode, FaJava, FaShieldAlt, FaGithub 
} from 'react-icons/fa';
import { SiPostman, SiJira, SiGit, SiFigma, SiReact, SiMysql, SiTailwindcss } from 'react-icons/si';

function About() {
  return (
    <div className="container">
      <h2><FaUser style={{ color: '#38bdf8' }} /> About Me</h2>
      
      <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
        I am a final-year IT undergraduate at the <strong>Institute of Technology, University of Moratuwa (ITUM)</strong>, 
        passionate about ensuring high software quality, system reliability, and flawless user experiences through rigorous testing methodologies.
        Combining a solid foundation in web technologies with hands-on manual testing, test scenario design, and learning automation, I bring a detail-oriented, 
        analytical approach to every phase of the Software Testing Life Cycle (STLC).
      </p>

      {/* Educational Background */}
      <h3><FaGraduationCap style={{ color: '#38bdf8' }} /> Educational Background</h3>
      <div className="info-card" style={{ borderLeft: '4px solid #38bdf8' }}>
        <h4 style={{ margin: '0 0 6px 0', fontSize: '1.15rem', color: '#ffffff' }}>
          Institute of Technology, University of Moratuwa (ITUM)
        </h4>
        <p style={{ margin: '0 0 6px 0', fontWeight: '600', color: '#38bdf8' }}>
          National Diploma in Technology (NDT) in Information Technology
        </p>
        <p style={{ margin: 0, fontSize: '0.92rem', color: '#94a3b8' }}>
          Final-Year Student | Specializing in Software Quality Assurance & Software Engineering
        </p>
      </div>

      {/* Technical Skills Section */}
      <h3><FaTools style={{ color: '#a855f7' }} /> Technical Skills</h3>
      <div className="skills-grid">
        
        {/* Category 1: QA & Testing */}
        <div className="skills-category-card">
          <div className="skills-category-title">
            <FaBug style={{ color: '#38bdf8' }} /> Testing & Methodologies
          </div>
          <div className="skill-tags">
            <span className="skill-pill qa-pill"><FaCheckCircle size={13} /> Manual Testing</span>
            <span className="skill-pill qa-pill"><FaCheckCircle size={13} /> Functional Testing</span>
            <span className="skill-pill qa-pill"><FaCheckCircle size={13} /> Non-Functional Testing</span>
            <span className="skill-pill qa-pill"><FaCheckCircle size={13} /> Test Case Design</span>
            <span className="skill-pill qa-pill"><FaCheckCircle size={13} /> Defect Tracking & STLC</span>
            <span className="skill-pill qa-pill"><FaCheckCircle size={13} /> Agile (Scrum)</span>
            <span className="skill-pill qa-pill"><FaCheckCircle size={13} /> Boundary Value Analysis</span>
            <span className="skill-pill qa-pill"><FaCheckCircle size={13} /> Negative Testing</span>
          </div>
        </div>

        {/* Category 2: Tools & Technologies */}
        <div className="skills-category-card">
          <div className="skills-category-title">
            <FaTasks style={{ color: '#a855f7' }} /> Tools & Platforms
          </div>
          <div className="skill-tags">
            <span className="skill-pill tools-pill"><SiPostman size={14} color="#ff6c37" /> Postman</span>
            <span className="skill-pill tools-pill"><SiJira size={14} color="#38bdf8" /> Jira</span>
            <span className="skill-pill tools-pill"><SiGit size={14} color="#f05032" /> Git</span>
            <span className="skill-pill tools-pill"><FaGithub size={14} /> GitHub</span>
            <span className="skill-pill tools-pill"><SiFigma size={14} color="#f24e1e" /> Figma</span>
          </div>
        </div>

        {/* Category 3: Development & Database */}
        <div className="skills-category-card">
          <div className="skills-category-title">
            <FaCode style={{ color: '#34d399' }} /> Development & Database
          </div>
          <div className="skill-tags">
            <span className="skill-pill"><SiReact size={14} color="#61dafb" /> React.js</span>
            <span className="skill-pill"><FaJava size={14} color="#f89820" /> Java</span>
            <span className="skill-pill"><SiMysql size={14} color="#38bdf8" /> MySQL</span>
            <span className="skill-pill"><SiTailwindcss size={14} color="#38bdf8" /> Tailwind CSS</span>
            <span className="skill-pill">HTML5 & CSS3</span>
            <span className="skill-pill">JavaScript</span>
          </div>
        </div>

      </div>

      {/* Career Aspirations */}
      <h3><FaShieldAlt style={{ color: '#34d399' }} /> Career Aspirations & QA Mindset</h3>
      <div className="info-card" style={{ borderLeft: '4px solid #34d399' }}>
        <p style={{ margin: 0, lineHeight: '1.8', color: '#cbd5e1' }}>
          My objective is to secure a challenging <strong>Software Quality Assurance (QA) Intern</strong> position where I can bridge technical development with exceptional end-user experience. With my technical foundation in software engineering and testing practices, I aim to ensure software quality through thorough manual testing, meticulous defect logging, and collaborative Agile participation.
        </p>
      </div>
    </div>
  );
}

export default About;
