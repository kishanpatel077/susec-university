/**
 * @file Benefits.jsx
 * @description Renders benefits overview section illustrating financial assistance packages, incubation options, and workspace resources.
 */

import React from 'react';
import { Landmark, ShieldAlert, Laptop, ArrowUpRight } from 'lucide-react';

/**
 * Benefits Page Component
 */
const Benefits = () => {
  // Array of key startup programs, seed grants, and links to registration documents
  const benefitsList = [
    {
      title: 'SSIP Proof of Concept (PoC) Grant',
      grantAmount: 'Upto ₹2.5 Lacs',
      desc: 'Financial support for developing innovative ideas into functional prototypes. Covers raw materials, fabrication, testing, and mentorship guidance.',
      applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdl3Qdhm2EukNSRy-Oxvr6tsOZP6R-wkWzniXUfZ6zlRA5lXA/viewform?usp=sf_link',
      icon: <Landmark size={28} />
    },
    {
      title: 'Gujarat Startup Scheme Funding',
      grantAmount: 'Upto ₹40 Lacs',
      desc: 'Seed funding and operational assistance for registered startups. Includes sustenance allowance, product development support, and marketing help.',
      applyUrl: 'https://startup.gujarat.gov.in/account/email-login/Register',
      icon: <ShieldAlert size={28} />
    },
    {
      title: 'Incubation Co-working Space',
      grantAmount: 'Furnished Seats',
      desc: 'Fully equipped coworking workspace at the Saurashtra University Campus. High-speed internet, electricity, conference room access, and incubation support.',
      applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdL4OdbyPud0UMV07Le058a4qUgQXpA2gV9BjkahHpPZZjzbg/viewform?usp=sf_link',
      icon: <Laptop size={28} />
    }
  ];

  return (
    <div className="container section-padding">
      <div className="text-center">
        <h2 className="section-title">All Benefits & Grants</h2>
        <p className="section-subtitle">Financial grants, infrastructure access, and expert incubation resources for startups.</p>
      </div>

      <div className="benefits-grid">
        {benefitsList.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-header">
              <div className="benefit-icon-box">{benefit.icon}</div>
              <div>
                <h3 className="benefit-title">{benefit.title}</h3>
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: '4px',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: 'var(--accent-hover)'
                  }}
                >
                  {benefit.grantAmount}
                </span>
              </div>
            </div>
            <p className="benefit-description">{benefit.desc}</p>
            <div className="benefit-actions">
              <a
                href={benefit.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%', borderRadius: '4px' }}
              >
                Apply Online <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
