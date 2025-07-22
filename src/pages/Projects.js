import React from 'react';

const Projects = () => (
  <div className="content-wrapper">
    <h2>Projects</h2>
    <div className="projects-grid">
    <div className="project-card">
        <h3>Project A</h3>
        <p>TestA.</p>
        <a href="https://github.com/your-username/project-a" target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub →
        </a>
    </div>

    <div className="project-card">
        <h3>Project B</h3>
        <p>TestB.</p>
        <a href="https://github.com/your-username/project-b" target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub →
        </a>
    </div>

    <div className="project-card">
        <h3>Project C</h3>
        <p>TestC.</p>
        <a href="https://github.com/your-username/project-c" target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub →
        </a>
    </div>
    </div>
</div>
);

export default Projects;


