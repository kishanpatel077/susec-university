/**
 * @file Footer.jsx
 * @description Renders the global footer component containing branding, useful quick links, contact info, and back-to-top handler.
 */

import React from 'react';
import suLogo from '../assets/su_logo.png';

/**
 * Footer component
 */
const Footer = () => {
  /**
   * Helper function to scroll smoothly back to the top of the page.
   * @param {React.MouseEvent} e - Mouse click event
   */
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            {/* Column 1: Branding info */}
            <div className="col-lg-3 col-md-4 footer-info text-center mx-auto" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img 
                src={suLogo} 
                className="mt-lg-3" 
                style={{ width: '8rem', height: 'auto', marginBottom: '15px' }} 
                alt="Saurashtra University Logo" 
              />
              <h3 className="mx-auto" style={{ color: '#fff', fontSize: '26px', fontWeight: 700, margin: '0 0 20px 0', fontFamily: '"Raleway", sans-serif' }}>
                Saurashtra University
              </h3>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://saurashtrauniversity.edu"
                style={{ color: '#FE9436', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}
              >
                https://saurashtrauniversity.edu
              </a>
            </div>

            {/* Column 2: Useful links */}
            <div className="col-lg-6 col-md-6 footer-links">
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', paddingBottom: '12px', borderBottom: '2px solid #FE9436', marginBottom: '20px' }}>
                Useful Links
              </h4>
              <div className="row">
                <div className="col-md-6">
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://startup.gujarat.gov.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>Startup Gujarat</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.education.gov.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>Ministry of Education, Gov. of India</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://ihubgujarat.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>iHub</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://ipindia.gov.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>Intellectual Property Office, India</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://cipam.gov.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>CIPAM</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.investindia.gov.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>Invest India</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://meitystartuphub.in" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>MeitY Startup Hub</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="http://www.ssipgujarat.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>SSIP</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="http://gujarat-education.gov.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>Education Dept., Gov. of Gujarat</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://aim.gov.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>Atal Innovation Mission</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.mic.gov.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>MoE Innovation Cell</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.mygov.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>My Gov</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.startupindia.gov.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>Startup India</a>
                    </li>
                    <li style={{ borderBottom: '1px solid #262c44', padding: '10px 0' }}>
                      <i className="fa fa-angle-right" style={{ paddingRight: '8px', color: '#FE9436', fontSize: '16px' }}></i>
                      <a target="_blank" rel="noopener noreferrer" href="https://idex.gov.in/" style={{ color: '#eee', textDecoration: 'none', fontSize: '14px' }}>Innovations For Defence Excellence</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 3: Contact info */}
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', paddingBottom: '12px', borderBottom: '2px solid #FE9436', marginBottom: '20px' }}>
                Contact Us
              </h4>
              <p style={{ color: '#eee', fontSize: '14px', lineHeight: '26px' }}>
                Incubation Centre,<br />
                Dr. A P J Abdul Kalam Science Laboratory,<br />
                Saurashtra University Campus,<br />
                Rajkot.<br /><br />
                <strong>Phone:</strong> <a target="_blank" rel="noopener noreferrer" href="tel:+8490991979" style={{ color: '#FE9436', textDecoration: 'none' }}>8490991979</a> (Time: 10.30am to 6.10pm)<br />
                <strong>Email:</strong> <a target="_blank" rel="noopener noreferrer" href="mailto:ssip@sauuni.ac.in" style={{ color: '#FE9436', textDecoration: 'none' }}>ssip@sauuni.ac.in</a><br />
              </p>

              <div className="social-links" style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
                <a href="https://twitter.com/susecrajkot" target="_blank" rel="noopener noreferrer" className="twitter" aria-label="Twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/susecrajkot" target="_blank" rel="noopener noreferrer" className="facebook" aria-label="Facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/susecrajkot/" target="_blank" rel="noopener noreferrer" className="instagram" aria-label="Instagram">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="." target="_blank" rel="noopener noreferrer" className="youtube" aria-label="YouTube">
                  <i className="fa fa-youtube-play"></i>
                </a>
                <a href="https://www.linkedin.com/company/82380931/" target="_blank" rel="noopener noreferrer" className="linkedin" aria-label="LinkedIn">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container-fluid" style={{ borderTop: '1px solid #1a223a', paddingTop: '20px', background: '#000' }}>
        <div className="copyright text-center" style={{ color: '#eee', fontSize: '14px' }}>
          &copy; Copyright 2026 <strong>SUSEC</strong>. All Rights Reserved.
        </div>
        <div className="credits" style={{ textAlign: 'center', fontSize: '1px', color: '#101522', opacity: 0 }}>
          Designed by <a href="https://bootstrapmade.com/" style={{ color: '#101522', textDecoration: 'none' }}>BootstrapMade</a>
        </div>
        <a href="#" onClick={scrollToTop} className="back-to-top" style={{
          position: 'fixed',
          right: '15px',
          bottom: '15px',
          background: '#FE9436',
          color: '#fff',
          width: '40px',
          height: '40px',
          borderRadius: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: '0.5s',
          zIndex: 99,
          textDecoration: 'none'
        }}>
          <i className="fa fa-angle-up" style={{ fontSize: '20px' }}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
