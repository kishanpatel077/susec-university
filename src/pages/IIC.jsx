/**
 * @file IIC.jsx
 * @description Renders the Institutional Innovation Council (IIC) Committee page, listing members, their departments, designations, and profile pictures.
 */

import React from 'react';

/**
 * IIC Committee Page Component
 */
const IIC = () => {
  const members = [
    {
      name: 'Prof. (Dr.) Utpal Joshi',
      img: 'img/members/249.jpg',
      text1: 'Hon Vice Chancellor',
      text2: 'Head'
    },
    {
      name: 'Dr. Mahesh N. Jivani',
      img: 'img/members/dr-mahesh-n-jivani-20230810124750-957.jpeg',
      text1: 'Department of Electronics',
      text2: 'President'
    },
    {
      name: 'Dr. Harikrishna Parikh',
      img: 'img/members/mr-harikrishna-n-parikh.jpg',
      text1: 'Department of Electronics',
      text2: 'Vice President'
    },
    {
      name: 'Mr. Parth Sejpal',
      img: 'img/members/ParthS.png',
      text1: 'Incubation Centre',
      text2: 'Convenor'
    },
    {
      name: 'Dr. Ramesh Kothari',
      img: 'img/members/RkothariS.jpg',
      text1: 'Department of BioSciences',
      text2: 'Innovation Activity Coordinator'
    },
    {
      name: 'Dr. Ashish B. Ravalia',
      img: 'img/members/ashis ravaliya.PNG',
      text1: 'Department of Nanoscience and Advanced Materials',
      text2: 'Startup Activity Coordinator'
    },
    {
      name: 'Dr. Priya Patel',
      img: 'img/members/ms-priya-patel.jpg',
      text1: 'Department of Pharmaceutical Sciences',
      text2: 'IPR Activity Coordinator'
    },
    {
      name: 'Dr. Sanjay S. Mukherjee',
      img: 'img/members/sMukherjee.jpg',
      text1: 'Department of English & Comparative Literary Studies',
      text2: 'NIRF Coordinator'
    },
    {
      name: 'Dr. Mahesh N. Jivani',
      img: 'img/members/dr-mahesh-n-jivani-20230810124750-957.jpeg',
      text1: 'Placement Cell',
      text2: 'Internship coordinator'
    },
    {
      name: 'Mr. Parth Sejpal',
      img: 'img/members/ParthS.png',
      text1: 'Incubation Centre',
      text2: 'NIRF Innovation Coordinator'
    },
    {
      name: 'Dr. Hitesh Shukla',
      img: 'img/members/shuklaS.png',
      text1: 'Department of Business Management',
      text2: 'Member'
    },
    {
      name: 'Dr. Deepak Patel',
      img: 'img/members/dr-deepak-p-patel.jpg',
      text1: 'Department of Gujarati',
      text2: 'Member'
    },
    {
      name: 'Dr. Piyush Solanki',
      img: 'img/members/dr-piyush-s-solanki-.jpg',
      text1: 'Department of Physics',
      text2: 'Member'
    },
    {
      name: 'Dr. Rajesh Dave',
      img: 'img/members/dr-rajesh-m-dave-.jpg',
      text1: 'Department of Human Rights & IHL',
      text2: 'Member'
    },
    {
      name: 'Dr. Jigna Tank',
      img: 'img/members/dr-jigna-tank-.jpg',
      text1: 'Department Of BioSciences',
      text2: 'Member'
    },
    {
      name: 'Dr. Trupesh M. Pethani',
      img: 'img/members/truP.jpg',
      text1: 'Department of Pharmaceutical Sciences',
      text2: 'Member'
    },
    {
      name: 'Dr. Jagdish Sambada',
      img: 'img/members/mr-jagdish-sambada-.jpg',
      text1: 'Department of Business Management',
      text2: 'Member'
    },
    {
      name: 'Dr. Raja N. Kathad',
      img: 'img/members/rk.jpg',
      text1: 'Department of Sanskrit',
      text2: 'Member'
    },
    {
      name: 'Dr. Ashvin H. Solanki',
      img: 'img/members/aswin solanki (1).jpg',
      text1: 'Department of Commerce & Business Administration',
      text2: 'Member'
    },
    {
      name: 'Dr. Sanjay A. Pandya',
      img: 'img/members/drsanjaypandya.jpg',
      text1: 'Department of Economics',
      text2: 'Member'
    },
    {
      name: 'Dr. Hasmukh D. Joshi',
      img: 'img/members/drhasmukhdevjijoshi.jpg',
      text1: 'Department of Home Science',
      text2: 'Member'
    },
    {
      name: 'Ms. Anjali Rathod',
      img: 'img/members/anjali pic.jpg',
      text1: 'Incubation Centre',
      text2: 'Social Media Coordinator'
    },
    {
      name: 'Ms. Urvi Kanabar',
      img: 'img/members/urvi.jpg',
      text1: 'Incubation Centre',
      text2: 'Innovation Activity Coordinator'
    }
  ];

  return (
    <main id="main" className="iic-page space">
      <section id="about_us">
        <div className="iic-container-fluid">
          <div className="iic-card">
            <div className="iic-section-header">
              <h2>IIC Committee</h2>
            </div>

            <div className="iic-card-body">
              <div className="iic-inner-container">
                <div className="iic-grid">
                  {members.map((member) => (
                    <div key={`${member.name}-${member.text2}-${member.text1}`} className="gallery">
                      <div className="gallery-img-wrapper">
                        <img
                          src={`/susec-assets/${member.img}`}
                          alt={member.name}
                          onError={(event) => {
                            event.currentTarget.src = '/susec-assets/img/su_logo.png';
                            event.currentTarget.classList.add('gallery-logo-fallback');
                          }}
                        />
                      </div>

                      <div className="gallery-body">
                        <h5 className="gallery-name">
                          <b>{member.name}</b>
                        </h5>
                        <h6 className="gallery-dept">{member.text1}</h6>
                        <h6 className="gallery-role">
                          <b>{member.text2}</b>
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

export default IIC;
