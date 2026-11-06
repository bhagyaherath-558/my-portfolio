import React from 'react';
import { FaFolderOpen, FaBug, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Projects() {
  const projectsData = [
    {
      title: "SecureTrack SL",
      subtitle: "IoT-Based Container Monitoring & Anti-Theft Framework",
      domain: "IoT, Logistics & Customs Security",
      desc: "An IoT-driven tracking and anti-theft framework designed for Sri Lanka Customs to provide real-time container visibility, tamper detection, and transit tracking.",
      techStack: ["React.js", "Spring Boot", "MySQL", "IoT Sensors", "REST API"],
      metrics: ["100+ Manual Test Cases Executed", "13 System Modules Covered", "Boundary & Negative Testing"],
      qaContribution: "Developed and executed a comprehensive manual test suite comprising over 100 test cases across 13 system modules, covering functional, negative, and boundary value scenarios. Validated system behavior against expected results for core modules like GPS tracking, route deviation detection, and geofencing.",
      github: "https://github.com/Hasitha123456789/SecureTrack-SL"
    },
    {
      title: "SkillBridge LK",
      subtitle: "Skilled Worker Marketplace Platform",
      domain: "E-Commerce / Service Marketplace",
      desc: "A multi-stakeholder platform connecting skilled local tradespeople and technicians with clients seeking verified household and commercial on-demand services.",
      techStack: ["HTML", "Tailwind CSS", "Spring Boot", "MySQL", "JavaScript"],
      metrics: ["Requirements Gathering", "UI/UX Planning", "Functional Test Scenarios"],
      qaContribution: "Contributed to requirements gathering, UI planning, and identifying functional test scenarios for a platform connecting skilled workers with local clients. Analyzed business requirements into executable test conditions for authentication, booking workflows, and service management.",
      github: "https://github.com/bhagyaherath-558"
    },
    {
      title: "Mind Care",
      subtitle: "Mental Health & Wellness Mobile Application",
      domain: "Mobile Health & Student Well-being",
      desc: "A mobile wellness application tailored for university students, featuring daily emotional state tracking, reflective journaling, and conversational support prompts.",
      techStack: ["Mobile App UI", "Figma", "Prompt Engineering", "HCI Principles"],
      metrics: ["UI Design Review", "Conversational Prompt Design", "Usability Validation"],
      qaContribution: "Collaborated on UI design and prompt creation for a mobile application featuring mood tracking and journaling for university students. Evaluated interface usability against HCI guidelines and validated conversational edge cases for mood response prompts.",
      github: "https://github.com/bhagyaherath-558"
    }
  ];

  return (
    <div className="container">
      <h2><FaFolderOpen style={{ color: '#38bdf8' }} /> Projects & QA Experience</h2>
      <p style={{ marginBottom: '28px', fontSize: '1.05rem' }}>
        Selected projects showcasing practical experience in manual testing, comprehensive test case execution, defect verification, and software development.
      </p>

      <div>
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div>
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div style={{ fontSize: '0.92rem', color: '#38bdf8', fontWeight: '600', marginTop: '3px' }}>
                    {project.subtitle}
                  </div>
                </div>
                <span className="project-domain">{project.domain}</span>
              </div>

              <p style={{ marginTop: '12px', fontSize: '0.98rem' }}>{project.desc}</p>

              {/* Metrics Pills */}
              <div className="project-metrics">
                {project.metrics.map((metric, mIdx) => (
                  <span className="metric-tag" key={mIdx}>
                    <IoMdCheckmarkCircleOutline size={14} /> {metric}
                  </span>
                ))}
              </div>

              {/* QA Contribution Box */}
              <div className="project-qa-box">
                <div className="project-qa-box-header">
                  <FaBug size={14} /> QA & Engineering Contribution:
                </div>
                <div style={{ fontSize: '0.94rem', color: '#cbd5e1', lineHeight: '1.7' }}>
                  {project.qaContribution}
                </div>
              </div>

              {/* Tech Stack */}
              <div style={{ marginTop: '16px' }}>
                <strong style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Tech Stack:</strong>
                <div className="tech-tag-container">
                  {project.techStack.map((tech, tIdx) => (
                    <span className="tech-tag" key={tIdx}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div style={{ marginTop: '22px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'flex-start' }}>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-glow"
                style={{ padding: '8px 18px', fontSize: '0.88rem' }}
              >
                <FaGithub size={15} /> View Repository <FaExternalLinkAlt size={11} style={{ marginLeft: '4px' }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
