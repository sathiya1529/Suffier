import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    // Reset active menus when collapsing
    if (!isCollapsed) {
      setActiveMenu(null);
      setActiveSubMenu(null);
    }
  };

  const handleMenuClick = (menu) => {
    if (isCollapsed) {
      // If sidebar is collapsed, expand it first
      setIsCollapsed(false);
      setActiveMenu(menu);
    } else {
      // Normal toggle behavior when expanded
      setActiveMenu(activeMenu === menu ? null : menu);
      // Reset submenu when a different menu is clicked
      if (activeMenu !== menu) {
        setActiveSubMenu(null);
      }
    }
  };

  const handleSubMenuClick = (submenu) => {
    setActiveSubMenu(activeSubMenu === submenu ? null : submenu);
  };

  // Close sidebar on small screens when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebar = document.querySelector('.sidebar');
      const toggle = document.querySelector('.sidebar-toggle');
      
      if (sidebar && 
          !sidebar.contains(event.target) && 
          toggle && 
          !toggle.contains(event.target) &&
          window.innerWidth <= 768) {
        setIsCollapsed(true);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsCollapsed]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsCollapsed(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    // Initial check on mount
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setIsCollapsed]);

  return (
    <>
      <div className={`sidebar ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className="sidebar-header">
          {!isCollapsed && <Link to="/" className="sidebar-logo">SUFFIER</Link>}
          <button 
            className="sidebar-toggle" 
            onClick={toggleSidebar}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <span className="toggle-icon">{isCollapsed ? '⟩' : '⟨'}</span>
          </button>
        </div>
        
        <ul className="sidebar-menu">
          <li className="menu-item">
            <Link to="/" className="menu-link" data-title="Home">
              <span className="menu-icon">🏠</span>
              {!isCollapsed && <span className="menu-text">Home</span>}
            </Link>
          </li>
          
          <li className="menu-item">
            <div 
              className={`menu-link ${activeMenu === 'platform' ? 'active' : ''}`}
              onClick={() => handleMenuClick('platform')}
              data-title="Platform"
            >
              <span className="menu-icon">🔧</span>
              {!isCollapsed && (
                <>
                  <span className="menu-text">Platform</span>
                  <span className={`arrow-icon ${activeMenu === 'platform' ? 'rotate' : ''}`}>▶</span>
                </>
              )}
            </div>
            
            {!isCollapsed && (
              <ul className={`submenu ${activeMenu === 'platform' ? 'open' : ''}`}>
                <li className="submenu-item">
                  <Link to="/amp" className="submenu-link">
                    <span className="submenu-text">AMP</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="/pmp" className="submenu-link">
                    <span className="submenu-text">PMP</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <div 
                    className={`submenu-link ${activeSubMenu === 'extension' ? 'active' : ''}`}
                    onClick={() => handleSubMenuClick('extension')}
                  >
                    <span className="submenu-text">Extension</span>
                    <span className={`arrow-icon ${activeSubMenu === 'extension' ? 'rotate' : ''}`}>▶</span>
                  </div>
                  
                  <ul className={`nested-submenu ${activeSubMenu === 'extension' ? 'open' : ''}`}>
                    <li className="nested-submenu-item">
                      <Link to="/extension/programmatic" className="nested-submenu-link">Programmatic</Link>
                    </li>
                    <li className="nested-submenu-item">
                      <Link to="/extension/audience-per-count" className="nested-submenu-link">Audience Per Count</Link>
                    </li>
                    <li className="nested-submenu-item">
                      <Link to="/extension/interactivity" className="nested-submenu-link">Interactivity</Link>
                    </li>
                    <li className="nested-submenu-item">
                      <Link to="/extension/extrapolation" className="nested-submenu-link">Extrapolation</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </li>
          
          <li className="menu-item">
            <div 
              className={`menu-link ${activeMenu === 'about' ? 'active' : ''}`}
              onClick={() => handleMenuClick('about')}
              data-title="About"
            >
              <span className="menu-icon">ℹ️</span>
              {!isCollapsed && (
                <>
                  <span className="menu-text">About</span>
                  <span className={`arrow-icon ${activeMenu === 'about' ? 'rotate' : ''}`}>▶</span>
                </>
              )}
            </div>
            
            {!isCollapsed && (
              <ul className={`submenu ${activeMenu === 'about' ? 'open' : ''}`}>
                <li className="submenu-item">
                  <Link to="/about/contact" className="submenu-link">
                    <span className="submenu-text">Contact</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="/about/consumer-privacy" className="submenu-link">
                    <span className="submenu-text">Consumer Privacy</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="/about/terms-of-use" className="submenu-link">
                    <span className="submenu-text">Terms of Use</span>
                  </Link>
                </li>
                <li className="submenu-item">
                  <Link to="/about/company" className="submenu-link">
                    <span className="submenu-text">Company</span>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      
      {!isCollapsed && window.innerWidth <= 768 && (
        <div className="content-overlay" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Sidebar;