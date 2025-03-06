import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isSidebarOpen }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showSearchMobile, setShowSearchMobile] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
    // Close mobile search if open
    if (showSearchMobile) {
      setShowSearchMobile(false);
    }
  };

  const toggleSearchMobile = () => {
    setShowSearchMobile(!showSearchMobile);
    // Close user dropdown if open
    if (showUserDropdown) {
      setShowUserDropdown(false);
    }
  };

  // Handle clicks outside dropdown and search
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Handle dropdown clicks
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
      
      // Handle mobile search clicks
      if (searchRef.current && 
          !searchRef.current.contains(event.target) && 
          !event.target.classList.contains('search-toggle')) {
        setShowSearchMobile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''} ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="navbar-content">
        <div className="navbar-brand">
          <Link to="/" className="logo">
            <span className="logo-text">SUFFIER</span>
          </Link>
        </div>
        
        <div ref={searchRef} className={`navbar-search ${showSearchMobile ? 'mobile-active' : ''}`}>
          <div className="search-wrapper">
            <input type="text" placeholder="Search..." className="search-input" />
            <button className="search-button">
              <i className="fa fa-search">🔍</i>
            </button>
          </div>
        </div>
        
        <div className="navbar-actions">
          <button 
            className="icon-button search-toggle" 
            onClick={toggleSearchMobile}
            title="Search"
          >
            <i className="fa fa-search">🔍</i>
          </button>
          
          <button
            className={`icon-button theme-toggle ${darkMode ? 'active' : ''}`}
            onClick={toggleDarkMode}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <i className="fa fa-sun-o">☀️</i>
            ) : (
              <i className="fa fa-moon-o">🌙</i>
            )}
          </button>
          
          <button className="icon-button" title="Settings">
            <i className="fa fa-cog">⚙️</i>
          </button>
          
          <div className="user-dropdown-container" ref={dropdownRef}>
            <button
              className={`icon-button user-button ${showUserDropdown ? 'active' : ''}`}
              onClick={toggleUserDropdown}
              title="User Profile"
            >
              <i className="fa fa-user-circle">👤</i>
            </button>
            
            {showUserDropdown && (
              <div className="user-dropdown">
                <div className="user-info">
                  <div className="user-avatar">👤</div>
                  <div className="user-details">
                    <div className="user-name">q2m</div>
                    <div className="user-email">user@example.com</div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <Link to="/account-settings" className="dropdown-item">
                  <i className="dropdown-icon">⚙️</i>
                  Account Settings
                </Link>
                <Link to="/notifications" className="dropdown-item">
                  <i className="dropdown-icon">🔔</i>
                  Notifications
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/logout" className="dropdown-item">
                  <i className="dropdown-icon">🚪</i>
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;