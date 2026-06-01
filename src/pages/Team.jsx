/**
 * @file Team.jsx
 * @description Renders the SUSEC administrative and operational team directory, listing staff details like department, role, and profile photos.
 */

import React from 'react';

/**
 * Team Page Component
 */
const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Mahesh N. Jivani',
      dept: 'Department of Electronics',
      role: 'Director',
      img: 'img/members/dr-mahesh-n-jivani-20230810124750-957.jpeg'
    },
    {
      name: 'Mr. Parth Sejpal',
      dept: 'SU STARTUP AND ENTREPRENEURSHIP COUNCIL',
      role: 'CEO',
      img: 'img/members/ParthS.png'
    },
    {
      name: 'Manisha B Dave',
      dept: 'Incubation Center',
      role: 'Administrative Assistant',
      img: 'img/members/manisha mam.png'
    },
    {
      name: 'Vaishali A Bagda',
      dept: 'Incubation center',
      role: 'Operational Assistant',
      img: 'img/members/vaishali.jpg'
    },
    {
      name: 'Anjali K Rathod',
      dept: 'Incubation Center',
      role: 'Operational Assistant',
      img: 'img/members/anjali pic.jpg'
    },
    {
      name: 'Urvi H Kanabar',
      dept: 'Incubation center',
      role: 'Operational Assistant',
      img: 'img/members/G.jpg'
    },
    {
      name: 'Ms. Urvisha Kotadiya',
      dept: 'Incubation Center',
      role: 'Admin Assistant - CFSD',
      img: 'img/members/Urvisha.JPG'
    },
    {
      name: 'Mr. Digvijaysinh Zala',
      dept: 'Incubation Center',
      role: 'Admin Assistant - Placement Cell',
      img: 'img/members/Digvijaysinh.jpeg'
    }
  ];

  return (
    <main id="main" className="team-page space">
      <section id="about_us">
        <div className="team-container-fluid">
          <div className="team-card">
            <div className="team-section-header">
              <h2>Team</h2>
            </div>

            <div className="team-card-body">
              <div className="team-inner-container">
                <div className="team-grid">
                  {teamMembers.map((member) => (
                    <div key={`${member.name}-${member.role}`} className="team-member-box">
                      <div className="team-member-photo">
                        <img
                          src={`/susec-assets/${member.img}`}
                          alt={member.name}
                          onError={(event) => {
                            event.currentTarget.src = '/susec-assets/img/su_logo.png';
                            event.currentTarget.classList.add('team-member-logo-fallback');
                          }}
                        />
                      </div>

                      <div className="team-member-details">
                        <h5>
                          <b>{member.name}</b>
                        </h5>
                        <h6>{member.dept}</h6>
                        <h6>
                          <b>{member.role}</b>
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
