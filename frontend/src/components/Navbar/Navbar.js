import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('home');

  const handleToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = (id) => {
    setNavOpen(false);
    setActiveNavItem(id);
  };

  const navItems = [
    { id: '', label: 'Home' },
    { id: 'blog', label: 'Blog' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About Us' },
  ];

  return (
    <nav className="navbar navbar-expand-lg p-3">
      <div className="container">
        <div className="navbar-header d-flex align-items-center">
          <Link className="navbar-brand" to="/">            
            <img src="../rudine_logo.png" width="40%" alt="weblogo" />
          </Link>
          <button
            className={`navbar-toggler ${isNavOpen ? '' : 'collapsed'}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {navItems.map((item) => (
              <li key={item.id} className={`nav-item ${activeNavItem === item.id ? 'active' : ''}`}>
                <Link
                  className="nav-link"
                  to={`/${item.id}`}
                  id={item.id}
                  onClick={() => handleNavLinkClick(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <a href="http://192.168.144.96:8088" target="_blank" className="nav-link" id="game" rel="noopener noreferrer">
                Game
              </a>
            </li>
          </ul>

          <Link className="btn btn-contact btn-pill btn-primary ml-2" to="/contactus">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
