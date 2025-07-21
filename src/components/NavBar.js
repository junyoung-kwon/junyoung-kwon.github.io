import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="navbar">
    <h2 className="logo">My Portfolio</h2>
    <ul className="nav-links">
      <li><Link to="/personal_website">Home</Link></li>
      <li><Link to="/about">About Me</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/resume">Resume</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default NavBar;
