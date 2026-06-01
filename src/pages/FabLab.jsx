/**
 * @file FabLab.jsx
 * @description Renders the Fabrication Laboratory infrastructure inventory list detailing machinery, diagnostic tools, and booking disclaimer.
 */

import React from 'react';
import { Cpu, ShieldAlert } from 'lucide-react';

/**
 * FabLab Page Component
 */
const FabLab = () => {
  // Array of laboratory machinery equipment specs and sorting categories
  const labEquipments = [
    {
      title: 'Multi Meter',
      desc: 'A Digital Multimeter is a test tool used to measure two or more electrical values—principally voltage (volts), current (amps) and resistance (ohms).',
      category: 'Electronics Testing',
      img: '/susec-assets/img/fablab/multimeter.jpg'
    }
  ];

  return (
    <div className="container section-padding">
      <div className="text-center">
        <h2 className="section-title">Fab Lab</h2>
        <p className="section-subtitle">A state-of-the-art laboratory equipped with computer-controlled tools to turn your ideas into "almost anything".</p>
      </div>

      <div className="fab-grid" style={{ display: 'flex', justifyContent: 'center' }}>
        {labEquipments.map((item, index) => (
          <div key={index} className="fab-card" style={{ maxWidth: '360px', width: '100%' }}>
            <div style={{ backgroundColor: '#ffffff', height: '200px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #eee' }}>
              <img
                src={item.img}
                alt={item.title}
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="fab-info">
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  color: 'var(--accent-hover)',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}
              >
                {item.category}
              </span>
              <h3 className="fab-title" style={{ color: 'var(--primary-color)' }}>{item.title}</h3>
              <p className="fab-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="fab-disclaimer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', color: 'var(--primary-color)', marginBottom: '8px' }}>
          <ShieldAlert size={18} style={{ color: 'var(--accent-color)' }} /> Disclaimer & Terms
        </div>
        Images and descriptive text utilized are for educational and information purposes. For removing credits or requesting equipment booking, kindly contact the SUSEC Incubation Centre helpdesk.
      </div>
    </div>
  );
};

export default FabLab;
