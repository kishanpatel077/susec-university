/**
 * @file Home.jsx
 * @description Renders the homepage for SUSEC, including a hero section with the white logo, a scrolling news ticker, a summary section for about us, recent upcoming events list, and vital statistics cards.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import NewsTicker from '../components/NewsTicker';
import whiteLogo from '../assets/WHITE LOGO1.png';

/**
 * Home Page Component
 */
const Home = () => {
  const events = [
    {
      id: 224,
      date: '11-May-2026',
      time: '4:00pm',
      img: '/susec-assets/img/event/IIC%208.0%20Q1%20&%20Q2%20(4).jpg',
      title: 'National Technology Day 2026'
    },
    {
      id: 223,
      date: '11-May-2026',
      time: '10:00am',
      img: '/susec-assets/img/event/WhatsApp%20Image%202026-05-02%20at%205.37.58%20PM%20(1).jpeg',
      title: 'Startup Sankalp – Elite 2-Day Bootcamp 2026'
    },
    {
      id: 222,
      date: '05-May-2026',
      time: '3:30pm',
      img: '/susec-assets/img/event/WhatsApp%20Image%202026-05-01%20at%201.44.11%20PM.jpeg',
      title: 'Section 3 in Action: The Pfizer Case Study'
    },
    {
      id: 221,
      date: '26-Apr-2026',
      time: '1:59pm',
      img: '/susec-assets/img/event/IIC%208.0%20Q1%20&%20Q2-4.jpg',
      title: 'Celebrate innovation and creativity with us on World IP Day 2026'
    }
  ];

  return (
    <div>
      {/* 1. Intro Section */}
      <section id="intro">
        <div className="intro-container">
          <h2 style={{ paddingTop: '70px', color: '#FE9436', fontWeight: 'bold', fontSize: '2rem', letterSpacing: '1px' }}>
            WELCOME
          </h2>
          <img 
            src={whiteLogo} 
            alt="SUSEC White Logo" 
            style={{ width: '200px', height: '180px', objectFit: 'contain', margin: '20px 0' }} 
          />
          <h1 className="hero-title">
            <span>Saurashtra University </span>
            <br />
            Startup And Entrepreneurship Council
          </h1>
          <p className="hero-subtitle-desc">Supporting creative minds, building nation</p>
          <Link to="/about" className="about-btn">
            About The SUSEC
          </Link>
        </div>
      </section>

      {/* 2. News Ticker */}
      <NewsTicker />

      {/* 3. About Us Short Section */}
      <section id="about_us" style={{ padding: '60px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="about-card-box">
            <div className="section-header">
              <h2>About US</h2>
            </div>
            <div className="about-paragraphs">
              <p>SUSEC is the place where creativity meets innovation.</p>
              <p>SUSEC is a non-profit organization that empowers students to unleash their creativity and innovate.</p>
              <p>We believe that imagination is the base for innovation and we nurture the skills and talents of the students to lead their innovations.</p>
              <p>SUSEC is the best place to be if you want to research and develop your ideas with a team of experts.</p>
              <p>SUSEC is a hub for entrepreneurs and students to explore, research and develop their ideas.</p>
              <p>SUSEC is a university-based organization dedicated to increasing the amount of innovation in the world.</p>
            </div>
            <div className="text-center" style={{ marginTop: '24px' }}>
              <Link to="/about" className="btn-default" style={{ textDecoration: 'none', display: 'inline-block' }}>
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Events Section */}
      <section id="latest" className="section-with-bg">
        <div className="container">
          <div className="section-header">
            <h2>Events</h2>
          </div>
          <div className="events-grid-row">
            {events.map((event) => (
              <div key={event.id} className="event-item-col">
                <div className="event-inner-box">
                  <div className="event-img-col">
                    <img src={event.img} alt={event.title} className="img-fluid img-thumbnail" />
                  </div>
                  <div className="event-text-col">
                    <p className="event-datetime-label">{event.date} ({event.time})</p>
                    <h2 className="event-heading-title" title={event.title}>{event.title}</h2>
                    <Link to="/latest/events" className="readmore-link">Read more</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/latest/events" className="btn-default" style={{ textDecoration: 'none', display: 'inline-block' }}>
              view more
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Visitor Counter Section */}
      <section className="stats-section">
        <div className="container stats-grid">
          <div className="stat-card">
            <span className="stat-number">2,95,148</span>
            <h5 className="stat-label">VIEWER</h5>
          </div>
          <div className="stat-card">
            <span className="stat-number">120+</span>
            <h5 className="stat-label">STARTUPS SUPPORTED</h5>
          </div>
          <div className="stat-card">
            <span className="stat-number">65+</span>
            <h5 className="stat-label">IPR SUPPORTEDS</h5>
          </div>
          <div className="stat-card">
            <span className="stat-number">25+</span>
            <h5 className="stat-label">CO-WORKING SEATS</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
