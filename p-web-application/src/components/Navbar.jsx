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
              <a href="/">Team Augmentation</a><hr />
              <a href="/">MVP Development</a><hr />
              <a href="/">App Development</a><hr />
              <a href="/">Robotics</a><hr />
              <a href="/">AI Transformation</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a href="/" className="nav-title">
              Technologies
            </a>

            <div className="dropdown-menu">
              <a href="/">AI/ML Learning</a><hr />
              <a href="/">Computer Vision</a><hr />
              <a href="/">Blockchain</a><hr />
              <a href="/">Stacks</a><hr />
              <a href="/">App Development</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a href="/" className="nav-title">
              Customers
            </a>

            <div className="dropdown-menu">
              <a href="/">Startups</a><hr />
              <a href="/">SaaS Companies</a><hr />
              <a href="/">App Companies</a><hr />
              <a href="/">Marketing Agencies</a><hr />
              <a href="/">Enterprises</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a href="/about" className="nav-title">
              Look Inside
            </a>

            <div className="dropdown-menu">
              <a href="/about">Blog</a><hr />
              <a href="/about">Portfolio</a><hr />
              <a href="/about">Careers</a>
            </div>
          </li>

          <li className="nav-item dropdown">
            <a href="/contact" className="nav-title">
              About Us
            </a>

            <div className="dropdown-menu">
              <a href="/contact">History</a><hr />
              <a href="/contact">Present</a><hr />
              <a href="/contact">Future</a><hr />
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