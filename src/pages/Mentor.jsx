/**
 * @file Mentor.jsx
 * @description Renders the Mentorship portal page. Currently holds a placeholder message indicating updates are pending.
 */

import React from 'react';

/**
 * Mentor Page Component
 */
const Mentor = () => {
  return (
    <div className="container section-padding" style={{ maxWidth: '960px' }}>
      <div className="text-center" style={{ marginBottom: '30px' }}>
        <h2 className="section-title" style={{ fontSize: '32px', color: '#0e1b4d', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
          MENTOR
        </h2>
        <div style={{ width: '50px', height: '4px', backgroundColor: '#fe9436', margin: '0 auto' }}></div>
      </div>

      <div style={{ 
        backgroundColor: '#ffffff', 
        padding: '50px 40px', 
        borderRadius: '8px', 
        boxShadow: '0 10px 30px rgba(14, 27, 77, 0.08)',
        border: '1px solid #eee',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '16px', color: '#555555', margin: 0 }}>
          Mentorship details will be updated soon.
        </p>
      </div>
    </div>
  );
};

export default Mentor;
