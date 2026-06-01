/**
 * @file About.jsx
 * @description Renders the About page, detailing Saurashtra University's history, the mission/vision of SUSEC, and the financial assistance scheme for IPR filing.
 */

import React from 'react';

/**
 * About Page Component
 */
const About = () => {
  return (
    <main id="main" className="space" style={{ padding: '80px 0 60px 0', backgroundColor: '#f6f7fd' }}>
      <section id="about_us">
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
                About US
              </h2>
            </div>
            
            <div className="card-body" style={{
              padding: '20px 40px 40px 40px',
              color: '#555555',
              fontSize: '15px',
              lineHeight: '1.8',
              fontFamily: '"Open Sans", "Raleway", sans-serif'
            }}>
              
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#060c22', fontSize: '18px' }}>About Saurashtra University</strong>
              </p>
              
              <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
                The Saurashtra University was created on a rigorous demand, for a separate university out of Gujarat University (Ahmedabad), from the eminent educationists and freedom fighters of the Saurashtra region. The demand was more prominent after the creation of Gujarat State on May 1, 1961. The Saurashtra University Act was passed by the Legislative Assembly of Gujarat in the year 1965(Gujarat Act No. 39 of 1965). Saurashtra University, established on 23rd May, 1967, having two headquarters in the initial stage i.e. Rajkot and Bhavnagar. After the incorporation of the Bhavnagar University, Rajkot became the sole headquarters of the Saurashtra University. The campus of the University is spread over 363 acres of land. The present jurisdiction of the University includes Amreli, Jamnagar, Rajkot, Surendranagar, and Morbi districts. It has 29 Post Graduate Departments on its campus and 238 affiliated colleges.
              </p>
              
              <p style={{ textAlign: 'justify', marginBottom: '30px' }}>
                The university is dedicated to instruction, research, and extending knowledge to the public (public service). It is the policy of the university to carry out its scholarly work in an open and free atmosphere and to publish results obtained there from freely. Research done primarily in anticipation of profit is incompatible with the aims of the university. The university recognizes, however, that patentable inventions sometimes arise in the course of research conducted by its employees and students using university facilities.
              </p>
              
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#060c22', fontSize: '18px' }}>About Saurashtra University Startup and Enterpreneurship Council (SUSEC)</strong>
              </p>
              
              <p style={{ textAlign: 'justify', marginBottom: '30px' }}>
                SUSEC is the place where creativity meets innovation. SUSEC is a non-profit organization that empowers students to unleash their creativity and innovate We believe that imagination is the base for innovation and we nurture the skills and talents of the students to lead their innovations. SUSEC is the best place to be if you want to research and develop your ideas with a team of experts. SUSEC is a hub for entrepreneurs and students to explore, research and develop their ideas. SUSEC is a university-based organization dedicated to increasing the amount of innovation in the world.
              </p>
              
              <p style={{ marginBottom: '20px' }}>
                <strong style={{ color: '#060c22', fontSize: '18px' }}>About Financial Assistant scheme for IPR Filing</strong>
              </p>
              
              <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
                To inculcate culture of innovation amongst the students, researchers, faculty member or start-ups (who are students or passed out in last five academic years) and to provide a conducive environment for optimum harnessing of their creative pursuit, The Education Department, Government of Gujarat has issued Student Start-up and Innovation Policy (SSIP) 2017-2021, vide G.R. No. PRC/2016/IPIES/DS/S/710197, dated: 11/01/2017 and amendments thereafter.
              </p>
              
              <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
                The purpose of present guideline is to promote awareness, protect and promote Intellectual Property Rights of students, researchers, faculty members or start-ups (who are students or passed out in last five academic years) and thus encourage innovation and creativity among them.
              </p>
              
              <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
                The principal objectives of the Saurashtra University (SU) Patent and Copyright Policies set forth herein are:
              </p>
              
              <ul style={{ listStyleType: 'disc', paddingLeft: '25px', marginBottom: '30px' }}>
                <li style={{ marginBottom: '10px' }}>To provide appropriate incentive to creative intellectual effort by faculty, staff, students, and others associated with the university;</li>
                <li style={{ marginBottom: '10px' }}>To establish principles for determining the interests of the institution, inventors, and sponsors in regards to inventions and/or discoveries;</li>
                <li style={{ marginBottom: '10px' }}>To enable the institution to develop procedures by which the significance of inventions and/or discoveries may be determined and brought to the point of commercial utilization;</li>
                <li style={{ marginBottom: '10px' }}>To provide the means for placing in the public realm the results of research, while safeguarding the interests of the university, inventor, and sponsor; and To recognize the right of the inventor to financial benefits from the invention or discovery.</li>
              </ul>
              
              <p style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#060c22', fontSize: '18px' }}>Vision</strong>
              </p>
              
              <p style={{ textAlign: 'justify', marginBottom: '35px' }}>
                Contributing to the Make in India, Startup and Standup India, through Innovation and Entrepreneurship and to support SMEs in Saurashtra region.
              </p>
              
              <p style={{ marginBottom: '10px' }}>
                <strong style={{ color: '#060c22', fontSize: '18px' }}>Mission</strong>
              </p>
              
              <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
                Identifying, exploring and developing regional competitiveness, enhancing links between universities, industries and research institutions and contributing to the growth and success of emerging technology businesses.
              </p>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
