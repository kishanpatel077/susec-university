/**
 * @file NewsTicker.jsx
 * @description News Ticker component providing infinite scrolling text announcements for SUSEC support grants and programs.
 */

import React from 'react';

/**
 * NewsTicker component
 */
const NewsTicker = () => {
  const items = [
    'Startup Support up to 40Lacs',
    'SSIP POC grant support up to 2.50Lacs',
    'SSIP IPR support',
    'Coworking Space for startup grantees',
  ];

  return (
    <div className="ticker-wrapper">
      <div className="ticker-content">
        <div className="ticker-track">
          <span className="ticker-text-item">
            {items.map((t, i) => (
              <React.Fragment key={`${t}-${i}`}>
                {t}
                {i !== items.length - 1 && <span className="ticker-sep">&nbsp;&nbsp;||&nbsp;&nbsp;</span>}
              </React.Fragment>
            ))}
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
