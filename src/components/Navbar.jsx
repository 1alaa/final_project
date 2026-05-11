import { useState } from 'react';

const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => handleNavClick('home')}>
          <span className="logo-icon">☕</span>
          Cafferium
        </div>

        <button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
          <span className={isOpen ? 'active' : ''}></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><button onClick={() => handleNavClick('home')} className="nav-button">Home</button></li>
          <li><button onClick={() => handleNavClick('coffee-types')} className="nav-button">Coffee Types</button></li>
          <li><a href="#brewing">Brewing Methods</a></li>
          <li><a href="#history">History</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
