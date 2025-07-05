import { useState, useEffect } from 'react';
import './Navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
        setActiveMobileMenu(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveMobileMenu(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar-item')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMobileSubmenu = (index) => {
    setActiveMobileMenu(activeMobileMenu === index ? null : index);
  };

  const goBackToMainMenu = () => {
    setActiveMobileMenu(null);
  };

  const menuItems = [
    { 
      title: 'AI', 
      href: '#',
      submenu: [
        { title: 'AI Solutions', href: '#' },
        { title: 'AI Models', href: '#' },
        { title: 'AI Agents', href: '#' },
        { title: 'AI Governance', href: '#' }
      ]
    },
    { 
      title: 'Hybrid Cloud', 
      href: '#',
      submenu: [
        { title: 'Cloud Services', href: '#' },
        { title: 'Infrastructure', href: '#' },
        { title: 'Data Management', href: '#' },
        { title: 'Security', href: '#' }
      ]
    },
    { 
      title: 'Products', 
      href: '#',
      submenu: [
        { title: 'Analytics', href: '#' },
        { title: 'Automation', href: '#' },
        { title: 'Databases', href: '#' },
        { title: 'Servers', href: '#' }
      ]
    },
    { 
      title: 'Consulting', 
      href: '#',
      submenu: [
        { title: 'Business Strategy', href: '#' },
        { title: 'Technology', href: '#' },
        { title: 'Digital Transformation', href: '#' },
        { title: 'Industry Solutions', href: '#' }
      ]
    },
    { 
      title: 'Support', 
      href: '#',
      submenu: [
        { title: 'Technical Support', href: '#' },
        { title: 'Documentation', href: '#' },
        { title: 'Training', href: '#' },
        { title: 'Community', href: '#' }
      ]
    },
    { 
      title: 'Think', 
      href: '#',
      submenu: [
        { title: 'Research', href: '#' },
        { title: 'Insights', href: '#' },
        { title: 'Innovation', href: '#' },
        { title: 'Thought Leadership', href: '#' }
      ]
    }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isOpen ? 'active' : ''}`}></span>
        </div>

        <div className="navbar-logo">
          <a href="/" className="navbar-logo-link">
            <img 
              src="/ibm-black-logo-brandlogos.net_xvk1d52ry.svg" 
              alt="IBM" 
              className="logo-image"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className="navbar-item"
            >
              <a 
                href={item.href} 
                className="navbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(index);
                }}
              >
                {item.title}
                <span className={`dropdown-arrow ${activeDropdown === index ? 'active' : ''}`}>▼</span>
              </a>
              {item.submenu && (
                <div className={`dropdown-menu ${activeDropdown === index ? 'active' : ''}`}>
                  {item.submenu.map((subitem, subindex) => (
                    <a 
                      key={subindex} 
                      href={subitem.href} 
                      className="dropdown-link"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {subitem.title}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`}>
        <ul className="navbar-mobile-list">
          {menuItems.map((item, index) => (
            <li key={index} className="navbar-mobile-item">
              <a 
                href={item.href} 
                className="navbar-mobile-link"
                onClick={(e) => {
                  e.preventDefault();
                  toggleMobileSubmenu(index);
                }}
              >
                {item.title}
                <span className="mobile-arrow">▶</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Submenu Overlay */}
      {menuItems.map((item, index) => (
        <div 
          key={index}
          className={`mobile-submenu-overlay ${activeMobileMenu === index ? 'active' : ''}`}
        >
          <div className="mobile-submenu-header">
            <button 
              className="mobile-back-button"
              onClick={goBackToMainMenu}
            >
              ← Back
            </button>
          </div>
          <ul className="mobile-submenu-list">
            {item.submenu && item.submenu.map((subitem, subindex) => (
              <li key={subindex} className="mobile-submenu-item">
                <a 
                  href={subitem.href} 
                  className="mobile-submenu-link"
                  onClick={() => setIsOpen(false)}
                >
                  {subitem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div 
        className={`navbar-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      ></div>
    </nav>
  );
};
export default Navbar;