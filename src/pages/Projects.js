import React from 'react';

const Projects = () => (
  <div className="content-wrapper">
    <h2>Projects</h2>
    <div className="projects-grid">
      <div className="project-card">
        <h3>Project A</h3>
        <p>A productivity app that helps users manage tasks efficiently.</p>
        <a href="https://github.com/your-username/project-a" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub →
        </a>
      </div>

      <div className="project-card">
        <h3>Project B</h3>
        <p>A data visualization tool using D3.js and React.</p>
        <a href="https://github.com/your-username/project-b" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub →
        </a>
      </div>

      <div className="project-card">
        <h3>Project C</h3>
        <p>A personal finance tracker with budget planning features.</p>
        <a href="https://github.com/your-username/project-c" target="_blank" rel="noopener noreferrer" className="project-link">
          View on GitHub →
        </a>
      </div>
    </div>
  </div>
);

export default Projects;


