/**
 * @file SSIP.jsx
 * @description Renders the Student Startup and Innovation Policy (SSIP) details page, showcasing its vision, mission, and core objectives.
 */

import React from 'react';

/**
 * SSIP Page Component
 */
const SSIP = () => {
  return (
    <main id="main" className="space" style={{ padding: '80px 0 60px 0', backgroundColor: '#f6f7fd' }}>
      <section id="support">
        <div className="container-fluid" style={{ width: '96%', margin: '40px auto', padding: '0 15px' }}>
          <div className="card" style={{
            background: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 25px rgba(0, 0, 0, 0.05)',
            overflow: 'hidden',
            width: '100%'
          }}>
            <div className="section-header" style={{
              paddingTop: '40px',
              marginBottom: '30px',
              position: 'relative',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '36px',
                textTransform: 'uppercase',
                fontWeight: 700,
                color: '#060c22',
                letterSpacing: '1px',
                marginBottom: '10px'
              }}>
                SSIP
              </h2>
            </div>
            
            <div className="card-body" style={{
              padding: '20px 40px 40px 40px',
              color: '#555555',
              fontSize: '15px',
              lineHeight: '1.8',
              fontFamily: '"Open Sans", "Raleway", sans-serif'
            }}>
              
              <h2 style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#060c22',
                marginBottom: '20px'
              }}>
                What is&nbsp;SSIP?
              </h2>

              <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
                The government of Gujarat has developed a policy for providing assistance to startups/ innovation. Under this scheme, any individual/ group of individuals having innovative idea/ concept will be eligible and/ or universities/ education institutions, incubation centres/ PSUs/ R&amp;D institutions/ private and other establishments will be eligible as an institution to support and mentor to innovators as approved by committee. Startups in an economy&#39;s technology sectors is an important indicator of technological performance for several reasons.
              </p>

              <p style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#060c22', fontSize: '18px' }}>VISION:</strong>
              </p>
              
              <p style={{ textAlign: 'justify', marginBottom: '25px' }}>
                Contributing to the Make in India, Startup and Standup India, through Innovation and Entrepreneurship and to support SMEs in Saurashtra region.
              </p>

              <p style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#060c22', fontSize: '18px' }}>MISSION:</strong>
              </p>
              
              <p style={{ textAlign: 'justify', marginBottom: '25px' }}>
                Identifying, exploring and developing regional competitiveness, enhancing links between universities, industries and research institutions and contributing to the growth and success of emerging technology businesses.
              </p>

              <p style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#060c22', fontSize: '18px' }}>OBJECTIVE:</strong>
              </p>

              <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '20px' }}>
                <li style={{ marginBottom: '10px' }}>To promote entrepreneurship among students and society.</li>
                <li style={{ marginBottom: '10px' }}>To create ecosystem for Innovation-based enterprises / start-ups.</li>
                <li style={{ marginBottom: '10px' }}>To create and sustain jobs.</li>
                <li style={{ marginBottom: '10px' }}>To provide support to SMEs of the region.</li>
                <li style={{ marginBottom: '10px' }}>To create a linkage between academia and business.</li>
              </ul>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SSIP;
