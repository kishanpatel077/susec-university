/**
 * @file Header.jsx
 * @description Header component rendering the main navigation system (desktop and mobile side drawer), quick links, and active route states.
 */

import { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

/**
 * Header navigation component
 */
const Header = () => {
  // Mobile side navigation drawer open/close state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Active dropdown index indicator state for desktop and mobile menus
  const [activeDropdown, setActiveDropdown] = useState(null);
  // Sticky layout background scroll state
  const [scrolled, setScrolled] = useState(false);
  // Reference hook to register quick apply dropdown boundary
  const applyDropdownRef = useRef(null);
  // React Router hook to read current navigation route location
  const location = useLocation();

  // Register scrolling listener to toggle header background opacity when scrolled past 50px
  useEffect(() => {
    /**
     * Toggles scrolled state based on window vertical scroll offset.
     */
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Toggles dropdown selection index or closes it if already open.
   * @param {number|string} index - Dropdown component identifier
   */
  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Add click-away and keyboard listeners to dismiss the "Apply" popup modal when open
  useEffect(() => {
    if (activeDropdown !== 'apply') return undefined;

    /**
     * Closes the dropdown if the click/touch event falls outside the dropdown ref container.
     * @param {MouseEvent|TouchEvent} event - DOM mouse/touch event
     */
    const closeApplyDropdown = (event) => {
      if (!applyDropdownRef.current?.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    /**
     * Closes the dropdown when the Escape key is pressed.
     * @param {KeyboardEvent} event - DOM keyboard event
     */
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', closeApplyDropdown);
    document.addEventListener('touchstart', closeApplyDropdown);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('mousedown', closeApplyDropdown);
      document.removeEventListener('touchstart', closeApplyDropdown);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [activeDropdown]);


  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Members',
      children: [
        { label: 'Team', path: '/members/team' },
        { label: 'IIC Committee', path: '/members/iic' },
      ],
    },
    {
      label: 'Benefits',
      children: [
        { label: 'All Benefits', path: '/benefits/all' },
        { label: 'FAB-LAB', path: '/benefits/fablab' },
      ],
    },
    {
      label: 'Start-up',
      children: [
        { label: 'SSIP', path: '/startup/ssip' },
        { label: 'Grantee Beneficiary List', path: '/startup/grantees' },
        { label: 'Incubatee List', path: '/startup/incubatees' },
      ],
    },
    {
      label: 'IPR Support',
      children: [
        { label: 'Patent', path: '/ipr/patent' },
        { label: 'Trademark', path: '/ipr/trademark' },
        { label: 'Copyright', path: '/ipr/copyright' },
        { label: 'Industrial Design Filing', path: '/ipr/industrial-design' },
        { label: 'IP Filing under SSIP', path: '/ipr/ssip-filing' },
        { label: 'Patent List SU', path: '/ipr/patent-list' },
      ],
    },
    { label: 'Gallery', path: '/gallery' },
    {
      label: 'Latest',
      children: [
        { label: 'Events', path: '/latest/events' },
        { label: 'FAQ', path: '/latest/faq' },
        { label: 'Achievements', path: '/latest/achievements' },
        { label: 'Resources', path: '/latest/resources' },
        { label: 'Career', path: '/latest/career' },
        { label: 'Reports', path: '/latest/reports' },
        { label: 'SUSEC Grantee Data', path: '/latest/grantee-data' },
        { label: 'Mentor', path: '/latest/mentor' },
      ],
    },
    { label: 'Contact', path: '/contact' },
  ];

  const applyLinks = [
    { label: 'Apply Coworking space for startup', path: '/apply/coworking-space' },
    { label: 'Apply For SSIP PoC Support (Upto 2.5lacs)', path: '/apply/ssip-poc-support' },
    { label: 'Apply for Startup Support (Upto 40 lacs)', url: 'https://startup.gujarat.gov.in/account/email-login/Register' },
    { label: 'Apply for Patent', path: '/apply/patent' },
    { label: 'Apply for Trademark', path: '/apply/trademark' },
    { label: 'Apply for Copyright', path: '/apply/copyright' },
    { label: 'Apply for Design', path: '/apply/design' },
    { label: 'Startup Interested for Angel Investment and VC Funding', path: '/apply/angel-investment-vc-funding' },
    { label: 'IP facilitator Registration Form', path: '/apply/ip-facilitator-registration' },
  ];

  const isLinkActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header className={`header-wrapper ${(!isHomePage || scrolled) ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="logo-link">
            <span className="logo-text"><span>SU</span>SEC</span>
          </Link>

          {/* Desktop Navigation */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item, index) => (
                <li key={index} className={`nav-item ${item.path && isLinkActive(item.path) ? 'active' : ''}`}>
                  {item.children ? (
                    <>
                      <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                        {item.label} <ChevronDown size={14} />
                      </a>
                      <div className="dropdown-menu">
                        {item.children.map((child, cIndex) => (
                          <Link key={cIndex} to={child.path} className="dropdown-link">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link to={item.path} className="nav-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}

              {/* Special Apply Dropdown */}
              <li className="nav-item" ref={applyDropdownRef}>
                <a href="#" className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleDropdownToggle('apply'); }} style={{ padding: '8px 24px', borderRadius: '50px' }}>
                  Apply <ChevronDown size={14} style={{ marginLeft: '4px' }} />
                </a>
                <div className="dropdown-menu" style={{ display: activeDropdown === 'apply' ? 'flex' : 'none', right: 0, left: 'auto', minWidth: '320px' }}>
                  {applyLinks.map((link, idx) => (
                    link.path ? (
                      <Link key={idx} to={link.path} className="dropdown-link" style={{ fontSize: '0.85rem' }} onClick={() => setActiveDropdown(null)}>
                        {link.label}
                      </Link>
                    ) : (
                      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="dropdown-link" style={{ fontSize: '0.85rem' }}>
                        {link.label}
                      </a>
                    )
                  ))}
                </div>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="menu-btn" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Sidebar Drawer */}
      {mobileMenuOpen && (
        <div className="sidebar-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="sidebar-container" onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-header">
              <span className="sidebar-title">SUSEC Menu</span>
              <button className="sidebar-close-btn" onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <ul className="sidebar-nav-links">
              {navItems.map((item, index) => (
                <li key={index} className="sidebar-nav-item">
                  {item.children ? (
                    <>
                      <a href="#" className="sidebar-nav-link" onClick={(e) => { e.preventDefault(); handleDropdownToggle(index); }}>
                        {item.label} <ChevronDown size={16} style={{ transform: activeDropdown === index ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                      </a>
                      {activeDropdown === index && (
                        <ul className="sidebar-submenu">
                          {item.children.map((child, cIndex) => (
                            <li key={cIndex}>
                              <Link to={child.path} className="sidebar-submenu-link" onClick={() => setMobileMenuOpen(false)}>
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link to={item.path} className="sidebar-nav-link" onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}

              {/* Mobile Special Apply Dropdown */}
              <li className="sidebar-nav-item">
                <a href="#" className="sidebar-nav-link" onClick={(e) => { e.preventDefault(); handleDropdownToggle('mob-apply'); }} style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>
                  Apply Quick Links <ChevronDown size={16} style={{ transform: activeDropdown === 'mob-apply' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                </a>
                {activeDropdown === 'mob-apply' && (
                  <ul className="sidebar-submenu">
                    {applyLinks.map((link, idx) => (
                      <li key={idx}>
                        {link.path ? (
                          <Link to={link.path} className="sidebar-submenu-link" style={{ fontSize: '0.8rem' }} onClick={() => setMobileMenuOpen(false)}>
                            {link.label}
                          </Link>
                        ) : (
                          <a href={link.url} target="_blank" rel="noopener noreferrer" className="sidebar-submenu-link" style={{ fontSize: '0.8rem' }}>
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
