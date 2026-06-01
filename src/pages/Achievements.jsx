/**
 * @file Achievements.jsx
 * @description Renders achievements/news announcements block with mock pagination layout representing media items.
 */

import React from 'react';
import { Link, useParams } from 'react-router-dom';

const achievements = [
  {
    id: 'campus-news-boot-camp',
    date: '15-May-2026',
    title: 'Campus News - Boot Camp',
    image: '/susec-assets/img/achievement/WhatsApp%20Image%202026-05-15%20at%2010.09.45%20AM.jpeg',
    description: 'Saurashtra Univrisity Incubation Center organized Boot Camp on 11 & 12 May 2026'
  },
  {
    id: 'bootcamp-news',
    date: '15-May-2026',
    title: 'BootCamp News',
    image: '/susec-assets/img/achievement/WhatsApp%20Image%202026-05-14%20at%209.13.02%20PM.jpeg',
    description: 'Bootcamp Held on 11 & 12 May 2026'
  },
  {
    id: 'khas-khabar-news',
    date: '15-May-2026',
    title: 'Khas Khabar NEWS - Bootcamp held on 11 & 12 May 2026',
    image: '/susec-assets/img/achievement/WhatsApp%20Image%202026-05-14%20at%209.13.01%20PM.jpeg',
    description: 'Khas Khabar NEWS - Bootcamp held on 11 & 12 May 2026'
  }
];

/**
 * Achievements Page Component
 */
const Achievements = () => {
  const { id } = useParams();
  const activeAchievement = achievements.find((item) => item.id === id);

  if (id) {
    return (
      <div className="container section-padding" style={{ maxWidth: '1140px' }}>
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 5px 20px rgba(14, 27, 77, 0.05)',
            border: '1px solid #eee',
            overflow: 'hidden'
          }}
        >
          <div className="text-center" style={{ padding: '32px 24px 18px' }}>
            <h2 className="section-title" style={{ fontSize: '32px', color: '#0e1b4d', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
              {activeAchievement?.title || 'Achievement'}
            </h2>
            <div style={{ width: '50px', height: '4px', backgroundColor: '#fe9436', margin: '0 auto' }}></div>
          </div>

          {activeAchievement ? (
            <div style={{ padding: '0 24px 32px' }}>
              <h4 style={{ backgroundColor: '#ffc107', color: '#212529', textAlign: 'center', padding: '8px 12px', fontSize: '20px', fontWeight: '700', margin: '0 0 20px' }}>
                {activeAchievement.date}
              </h4>
              <img
                src={activeAchievement.image}
                alt={activeAchievement.title}
                style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '16px' }}
              />
              <hr style={{ border: 0, borderTop: '1px solid #ddd', margin: '0 0 18px' }} />
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: '#555', margin: 0 }}>
                {activeAchievement.description}
              </p>
            </div>
          ) : (
            <div style={{ padding: '0 24px 32px', textAlign: 'center' }}>
              <p style={{ color: '#555' }}>Achievement detail not found.</p>
              <Link to="/latest/achievements" style={{ color: '#fe9436', fontWeight: '700', textDecoration: 'none' }}>
                Back to Achievements
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="container section-padding" style={{ maxWidth: '1388px' }}>
      <div className="text-center" style={{ marginBottom: '72px' }}>
        <h2 className="section-title" style={{ fontSize: '42px', color: '#0e1b4d', fontWeight: '700', textTransform: 'uppercase', marginBottom: '20px' }}>
          ACHIEVEMENTS
        </h2>
        <div style={{ width: '76px', height: '5px', backgroundColor: '#fe9436', margin: '0 auto' }}></div>
      </div>

      <div
        style={{
          backgroundColor: '#ffffff',
          border: '1px solid #ddd',
          borderRadius: '4px',
          overflow: 'hidden',
          margin: '0 auto',
          width: '100%'
        }}
      >
        {achievements.map((item, index) => (
          <div
            className="achievement-list-row"
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              minHeight: '200px',
              padding: '16px 44px',
              borderBottom: index < achievements.length - 1 ? '1px solid #ddd' : 'none',
              backgroundColor: '#ffffff'
            }}
          >
            <div className="achievement-list-image" style={{ flex: '0 0 180px', maxWidth: '180px', marginRight: '40px' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '180px',
                  maxHeight: '142px',
                  objectFit: 'contain',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  padding: '4px',
                  display: 'block'
                }}
              />
            </div>
            <div style={{ minWidth: 0, flex: 1 }}>
              <span style={{ fontSize: '20px', color: '#0e1b4d', fontWeight: '400', display: 'block', marginBottom: '34px' }}>
                {item.date}
              </span>
              <h3
                className="achievement-list-title"
                style={{
                  fontSize: '38px',
                  color: '#0e1b4d',
                  fontWeight: '400',
                  margin: '0 0 24px',
                  lineHeight: '1.25',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}
              >
                {item.title}
              </h3>
              <Link
                to={`/latest/achievements/${item.id}`}
                style={{ color: '#fe9436', fontWeight: '400', textDecoration: 'none', fontSize: '20px' }}
                onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.target.style.textDecoration = 'none'}
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 767px) {
            .achievement-list-row {
              align-items: flex-start !important;
              flex-direction: column !important;
              padding: 18px !important;
            }

            .achievement-list-image {
              margin: 0 0 18px !important;
            }

            .achievement-list-title {
              font-size: 26px !important;
              white-space: normal !important;
            }
          }
        `}
      </style>

      {/* Pagination component same to same */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '40px' }}>
        <span style={{ padding: '8px 12px', border: '1px solid #dee2e6', color: '#777', cursor: 'not-allowed', borderRadius: '4px', fontSize: '14px' }}>Previous</span>
        <span style={{ padding: '8px 12px', backgroundColor: '#fe9436', color: '#ffffff', border: '1px solid #fe9436', cursor: 'pointer', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>1</span>
        {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((p) => (
          <span
            key={p}
            style={{ padding: '8px 12px', border: '1px solid #dee2e6', color: '#fe9436', cursor: 'pointer', borderRadius: '4px', fontSize: '14px' }}
            onMouseOver={(e) => { e.target.style.backgroundColor = '#eee'; }}
            onMouseOut={(e) => { e.target.style.backgroundColor = 'transparent'; }}
          >
            {p}
          </span>
        ))}
        <span style={{ padding: '8px 12px', border: '1px solid #dee2e6', color: '#fe9436', cursor: 'pointer', borderRadius: '4px', fontSize: '14px' }}>Next</span>
      </div>
    </div>
  );
};

export default Achievements;
