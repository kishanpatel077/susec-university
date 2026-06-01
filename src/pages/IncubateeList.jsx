/**
 * @file IncubateeList.jsx
 * @description Renders a searchable directory of incubated startups (incubatees) registered with SUSEC, showcasing their descriptions, contact info, websites, and founders.
 */

import React from 'react';

/**
 * IncubateeList Page Component
 */
const IncubateeList = () => {
  const incubatees = [
    {
      title: 'Naturalyn Labs Private Limited',
      desc: 'Research and Development in chemicals (China Import chemicals)',
      phone: '8866761710',
      site: 'www.susec.ac.in',
      user: 'Kaushik Pambhar',
      img: '/susec-assets/img/beneficiary/LOGO%20NaturaLyn%20jpg.jpg'
    },
    {
      title: 'Incredible Inventions Private Limited',
      desc: 'Incredible Inventions Private Limited',
      phone: '84699 72523',
      site: 'www.susec.ac.in',
      user: 'Krutika Borsaniya',
      img: '/susec-assets/img/beneficiary/II-Logo.png'
    },
    {
      title: 'Adroit Solution',
      desc: '',
      phone: '9099847676',
      site: 'www.adroitsolution.in',
      user: 'Sagar Mashru',
      img: '/susec-assets/img/beneficiary/Adroit%20Poster%20-%20Adroit%20Solution.jpg'
    },
    {
      title: 'Voygr Auto Pvt Ltd',
      desc: 'Manufacture of motor vehicles, trailers and semi-trailers',
      phone: '6357435719',
      site: 'https://www.falconebiz.com/company/VOYGR-AUTO-PRIVATE-LIMITED-U29100GJ2024PTC152881',
      user: 'Kartik Vyas',
      img: '/susec-assets/img/beneficiary/susec%20png.png'
    },
    {
      title: 'Lily Ayurved LLP',
      desc: '',
      phone: '7046174610',
      site: 'http://www.lilyayurved.in',
      user: 'Pratik Lalitbhai Vaghela',
      img: '/susec-assets/img/beneficiary/20231009_195705%20-%20Pratik%20Vaghela.jpg'
    },
    {
      title: 'Stride Dynamics Pvt. Ltd.',
      desc: 'Building micro autonomous aerial robots for enterprises, government and defence.',
      phone: '919727799001',
      site: '--',
      user: 'Pence Mataria ,Gajendra Nagar',
      img: '/susec-assets/img/beneficiary/WhatsApp%20Image%202025-04-16%20at%203.02.18%20PM.jpeg'
    },
    {
      title: 'Indepro ',
      desc: 'Indepro is a motordesign and design and development company',
      phone: '8490991979',
      site: 'NA',
      user: 'JAYDEEP VIRAMGAMA',
      img: '/susec-assets/img/beneficiary/susec.png'
    }
  ];

  return (
    <main id="main" className="startup-beneficiary-page space">
      <section>
        <div className="startup-beneficiary-container">
          <div className="startup-beneficiary-card">
            <div className="startup-beneficiary-section-header">
              <h2>Incubetee Of SUSEC</h2>
            </div>
            
            <div className="startup-beneficiary-card-body">
              <div className="startup-beneficiary-row">
                {incubatees.map((incubatee) => (
                  <div key={`${incubatee.title}-${incubatee.user}`} className="startup-beneficiary-col">
                    <div className="startup-beneficiary-gallery">
                      <div className="startup-beneficiary-main-row">
                        <div className="startup-beneficiary-image-col">
                          <img
                            src={incubatee.img}
                            alt={incubatee.title}
                            onError={(event) => {
                              event.currentTarget.src = '/susec-assets/img/su_logo.png';
                            }}
                          />
                        </div>

                        <div className="startup-beneficiary-content-col">
                          <div className="startup-beneficiary-content">
                            <h6>
                              <b>{incubatee.title}</b>
                            </h6>
                            <div className="startup-beneficiary-text-truncate">
                              <p>{incubatee.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <table className="startup-beneficiary-info-table">
                        <tbody>
                          <tr>
                            <td><i className="fa fa-phone text-primary"></i> {incubatee.phone}</td>
                            <td><i className="fa fa-search text-primary"></i> {incubatee.site}</td>
                            <td><i className="fa fa-user text-primary"></i> {incubatee.user}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IncubateeList;
