/**
 * @file GranteeData.jsx
 * @description Renders links to Google Apps Scripts pages for PoC and IPR grantee logs, with authorization notice.
 */

import React from 'react';

/**
 * GranteeData Page Component
 */
const GranteeData = () => {
  return (
    <div className="container section-padding" style={{ maxWidth: '960px' }}>
      <div className="text-center" style={{ marginBottom: '30px' }}>
        <h2 className="section-title" style={{ fontSize: '32px', color: '#0e1b4d', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
          SUCCESS GRANT DATA
        </h2>
        <div style={{ width: '50px', height: '4px', backgroundColor: '#fe9436', margin: '0 auto' }}></div>
      </div>

      <div style={{ 
        backgroundColor: '#ffffff', 
        padding: '40px 30px', 
        borderRadius: '8px', 
        boxShadow: '0 10px 30px rgba(14, 27, 77, 0.08)',
        border: '1px solid #eee',
        textAlign: 'center'
      }}>
        {/* Authorization notice requiring users to be logged into their institutional mail account */}
        <p style={{ fontSize: '16px', color: '#555555', marginBottom: '25px', fontWeight: '500' }}>
          Note: This module works only when you login from any mail
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
          {/* Link to Google Apps Script dev deployment for Proof of Concept (PoC) Grantees */}
          <a 
            href="https://script.google.com/a/macros/sauuni.ac.in/s/AKfycbwBlcc8uvizq7eN52oqLvnvwvflRPYiNJsEUhJ2OXH9/dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              display: 'inline-block',
              width: '100%',
              maxWidth: '300px',
              padding: '12px 20px',
              backgroundColor: '#fe9436',
              color: '#ffffff',
              fontWeight: '700',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e0832f'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#fe9436'}
          >
            Our PoC Grantee
          </a>

          {/* Link to Google Apps Script dev deployment for Intellectual Property Rights (IPR) Grantees */}
          <a 
            href="https://script.google.com/a/macros/sauuni.ac.in/s/AKfycbzHy5BRlhPTf4-O2ww2UDv43UMbfTojEHhSSvs5QeRe/dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              display: 'inline-block',
              width: '100%',
              maxWidth: '300px',
              padding: '12px 20px',
              backgroundColor: '#0e1b4d',
              color: '#ffffff',
              fontWeight: '700',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0b153c'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0e1b4d'}
          >
            Our IPR Grantee
          </a>
        </div>
      </div>
    </div>
  );
};

export default GranteeData;
