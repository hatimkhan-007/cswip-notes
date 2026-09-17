import React from 'react';
import './Navbar.css';
import logoUrl from '../assets/logo.jpeg';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo-div">
        <img
          src={logoUrl}
          alt="Nexora logo"
          className="logo"
        />
        <h1>Nexora</h1>
      </div>

      <nav className="navigation-bar">
        <ul className="nav-links">

          <li className="nav-item dropdown">
            <a href="/" className="nav-title">
              Services
            </a>

            <div className="dropdown-menu">
              <a href="/">Team Augmentation</a>
              <a href="/">MVP Development</a>
              <a href="/">App Development</a>
              <a href="/">Robotics</a>
              <a href="/">AI Transformation</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a href="/" className="nav-title">
              Technologies
            </a>

            <div className="dropdown-menu">
              <a href="/">AI/ML Learning</a>
              <a href="/">Computer Vision</a>
              <a href="/">Blockchain</a>
              <a href="/">Stacks</a>
              <a href="/">App Development</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a href="/" className="nav-title">
              Customers
            </a>

            <div className="dropdown-menu">
              <a href="/">Startups</a>
              <a href="/">SaaS Companies</a>
              <a href="/">App Companies</a>
              <a href="/">Marketing Agencies</a>
              <a href="/">Enterprises</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a href="/about" className="nav-title">
              Look Inside
            </a>

            <div className="dropdown-menu">
              <a href="/about">Blog</a>
              <a href="/about">Portfolio</a>
              <a href="/about">Careers</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a href="/contact" className="nav-title">
              About Us
            </a>

            <div className="dropdown-menu">
              <a href="/contact">History</a>
              <a href="/contact">Present</a>
              <a href="/contact">Future</a>
              <a href="/contact">Why Us</a>
            </div>
          </li>

        </ul>

        <button className="contact-btn">
          Contact Us
        </button>
      </nav>
    </header>
  );
}

export default Navbar;