/**
 * @file PatentListSU.jsx
 * @description Renders a searchable list of patents registered directly under Saurashtra University, displaying their titles, application numbers, types, and statuses.
 */

import React, { useState } from 'react';

/**
 * PatentListSU Page Component
 */
const PatentListSU = () => {
  // Input search term state used to filter patents list by title or application number
  const [searchTerm, setSearchTerm] = useState('');

  const patents = [
    { title: 'METHOD OF PREPARING SUPERABSORBENT POLYMERS FOR SOIL CONDITIONING BY EFFICIENT RELEASE OF NANO NUTRIENTS', type: 'Patent', appNo: '201824004827', status: 'Granted' },
    { title: 'ROD LIKE NANO-SIZED AZIDOPENTAAMMINECOBALT(III)COMPLEXES AS TEXTILE DYEING AGENTS', type: 'Patent', appNo: '201821035858', status: 'Granted' },
    { title: 'CHROMANE COMPOUNDS AS ANTI-CANCER AGENTS', type: 'Patent', appNo: '201821043831', status: 'Granted' },
    { title: 'AN AQUEOUS LIQUID CONCENTRATE OF PTEROCARPUS MARSUPIUM AND GOMUTRA', type: 'Patent', appNo: 'IN 202121020997', status: 'Published' }
  ];

  const filtered = patents.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
           item.appNo.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container section-padding" style={{ maxWidth: '1140px' }}>
      <div className="text-center" style={{ marginBottom: '30px' }}>
        <h2 className="section-title" style={{ fontSize: '32px', color: '#0e1b4d', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
          PATENT LIST SU
        </h2>
        <div style={{ width: '50px', height: '4px', backgroundColor: '#fe9436', margin: '0 auto' }}></div>
      </div>

      <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(14, 27, 77, 0.05)', border: '1px solid #eee' }}>
        {/* Search input - Full Width */}
        <div style={{ marginBottom: '20px', width: '100%' }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              width: '100%',
              padding: '12px 16px',
              fontSize: '15px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              outline: 'none',
              boxSizing: 'border-box'
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Table responsive */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid #dee2e6' }}>
            <thead>
              <tr style={{ backgroundColor: '#f2f2f2' }}>
                <th style={{ padding: '12px 15px', border: '1px solid #dee2e6', textAlign: 'left', color: '#0e1b4d', fontWeight: '700', fontSize: '15px' }}>Sr No.</th>
                <th style={{ padding: '12px 15px', border: '1px solid #dee2e6', textAlign: 'left', color: '#0e1b4d', fontWeight: '700', fontSize: '15px' }}>Title</th>
                <th style={{ padding: '12px 15px', border: '1px solid #dee2e6', textAlign: 'left', color: '#0e1b4d', fontWeight: '700', fontSize: '15px' }}>Type Of IP</th>
                <th style={{ padding: '12px 15px', border: '1px solid #dee2e6', textAlign: 'left', color: '#0e1b4d', fontWeight: '700', fontSize: '15px' }}>Applicaton No.</th>
                <th style={{ padding: '12px 15px', border: '1px solid #dee2e6', textAlign: 'left', color: '#0e1b4d', fontWeight: '700', fontSize: '15px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((item, index) => (
                  <tr style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9f9f9' }}>
                    <td style={{ padding: '12px 15px', border: '1px solid #dee2e6', color: '#555555', fontSize: '15px' }}>{index + 1}</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #dee2e6', color: '#000000', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase' }}>
                      {item.title}
                    </td>
                    <td style={{ padding: '12px 15px', border: '1px solid #dee2e6', color: '#555555', fontSize: '15px' }}>{item.type}</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #dee2e6', color: '#555555', fontSize: '15px' }}>{item.appNo}</td>
                    <td style={{ padding: '12px 15px', border: '1px solid #dee2e6', color: '#555555', fontSize: '15px' }}>{item.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ padding: '20px', textAlign: 'center', border: '1px solid #dee2e6', color: '#777' }}>
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatentListSU;
