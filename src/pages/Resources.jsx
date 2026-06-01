/**
 * @file Resources.jsx
 * @description Renders the Resources page containing links to downloadable PowerPoint/PDF templates for NI grants, trademarks, and PoC screening presentations.
 */

import React from 'react';

/**
 * Resources Page Component
 */
const Resources = () => {
  const resources = [
    { 
      title: 'Presentation template for NI Grant',
      url: '/susec-assets/img/latest/NI Pitchdeck Outline.pptx.pdf'
    },
    { 
      title: 'Presentation template - Trademark',
      url: '/susec-assets/img/latest/IPR Screening Presentation Format - Trademark.ppt.pdf'
    },
    { 
      title: 'Presontation template of PoC screening',
      url: '/susec-assets/img/latest/Presentation Template.pptx.pdf'
    },
    { 
      title: 'Presontation template of IPR screening',
      url: '/susec-assets/img/latest/IPR Screening Presentation Format ip.pdf'
    }
  ];

  return (
    <div className="container section-padding" style={{ maxWidth: '960px' }}>
      <div className="text-center" style={{ marginBottom: '30px' }}>
        <h2 className="section-title" style={{ fontSize: '32px', color: '#0e1b4d', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
          RESOURCES
        </h2>
        <div style={{ width: '50px', height: '4px', backgroundColor: '#fe9436', margin: '0 auto' }}></div>
      </div>

      <div style={{ 
        backgroundColor: '#ffffff', 
        padding: '40px 30px', 
        borderRadius: '8px', 
        boxShadow: '0 10px 30px rgba(14, 27, 77, 0.08)',
        border: '1px solid #eee'
      }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {resources.map((item, index) => (
            <li 
              key={index} 
              style={{ 
                paddingBottom: '15px', 
                borderBottom: index < resources.length - 1 ? '1px solid #eee' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span style={{ color: '#fe9436', fontWeight: 'bold', fontSize: '18px' }}>•</span>
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '16px', color: '#0e1b4d', fontWeight: '600', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={(e) => { e.target.style.color = '#fe9436'; }}
                onMouseOut={(e) => { e.target.style.color = '#0e1b4d'; }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resources;
