/**
 * @file Contact.jsx
 * @description Contact component containing Google Map embed link, interactive submission form, and office details block.
 */

import React, { useState } from 'react';
import { submitToGoogleSheet } from '../services/googleFormApi';

/**
 * Contact Page Component
 */
const Contact = () => {
  // Submission success status state
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  // Form input field elements state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  /**
   * Submits the user's contact message and clears input fields.
   * @param {React.FormEvent} e - Form submission event
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      await submitToGoogleSheet({
        'Application Type': 'Contact Form',
        'Name of Applicant': formData.name,
        'Applicant Name': formData.name,
        Name: formData.name,
        'Email Id': formData.email,
        'Email Address': formData.email,
        Email: formData.email,
        Subject: formData.subject,
        Message: formData.message,
        'Application Summary': formData.message,
        Source: 'SUSEC React Website - Contact',
        SubmittedAt: new Date().toISOString(),
      });

      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (submitError) {
      setError(submitError.message || 'Unable to send your message right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handles user text typing updates across inputs dynamically.
   * @param {React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>} e - Change event
   */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main id="main" className="space" style={{ padding: '80px 0 60px 0', backgroundColor: '#f6f7fd' }}>
      <section id="contact_us">
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
                Contact
              </h2>
            </div>
            
            <div className="card-body" style={{
              padding: '20px 40px 40px 40px',
              color: '#555555',
              fontSize: '15px',
              lineHeight: '1.8',
              fontFamily: '"Open Sans", "Raleway", sans-serif'
            }}>
              
              <div className="contact3">
                <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
                  
                  {/* Left Column: Iframe Map */}
                  <div style={{
                    flex: '0 0 50%',
                    maxWidth: '50%',
                    padding: '0 15px',
                    width: '100%',
                    boxSizing: 'border-box'
                  }} className="contact-col-map">
                    <div style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.08)',
                      border: '1px solid #eee',
                      height: '450px'
                    }}>
                      <iframe 
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=su start up and enterpreneurship council&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                        title="SUSEC Map Location"
                      ></iframe>
                    </div>
                  </div>

                  {/* Right Column: Quick Contact Form */}
                  <div style={{
                    flex: '0 0 50%',
                    maxWidth: '50%',
                    padding: '0 15px',
                    width: '100%',
                    boxSizing: 'border-box'
                  }} className="contact-col-form">
                    <div style={{ paddingLeft: '20px' }}>
                      <h1 style={{
                        fontSize: '32px',
                        fontWeight: 300,
                        color: '#060c22',
                        marginTop: '8px',
                        marginBottom: '20px'
                      }}>
                        Quick Contact
                      </h1>
                      
                      {submitted ? (
                        <div style={{
                          padding: '20px',
                          backgroundColor: '#d4edda',
                          color: '#155724',
                          border: '1px solid #c3e6cb',
                          borderRadius: '6px',
                          marginBottom: '20px'
                        }}>
                          <strong>Message submitted successfully!</strong> Thank you for reaching out to SUSEC.
                        </div>
                      ) : null}

                      {error ? (
                        <div style={{
                          padding: '20px',
                          backgroundColor: '#f8d7da',
                          color: '#721c24',
                          border: '1px solid #f5c6cb',
                          borderRadius: '6px',
                          marginBottom: '20px'
                        }}>
                          {error}
                        </div>
                      ) : null}

                      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div>
                          <input 
                            className="form-control" 
                            name="name" 
                            type="text" 
                            placeholder="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                            style={{
                              width: '100%',
                              padding: '12px 15px',
                              border: '1px solid #ccc',
                              borderRadius: '4px',
                              fontSize: '14px',
                              outline: 'none',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>
                        <div>
                          <input 
                            className="form-control" 
                            name="email" 
                            type="email" 
                            placeholder="email address" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                            style={{
                              width: '100%',
                              padding: '12px 15px',
                              border: '1px solid #ccc',
                              borderRadius: '4px',
                              fontSize: '14px',
                              outline: 'none',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>
                        <div>
                          <input 
                            className="form-control" 
                            name="subject" 
                            type="text" 
                            placeholder="subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            required 
                            style={{
                              width: '100%',
                              padding: '12px 15px',
                              border: '1px solid #ccc',
                              borderRadius: '4px',
                              fontSize: '14px',
                              outline: 'none',
                              boxSizing: 'border-box'
                            }}
                          />
                        </div>
                        <div>
                          <textarea 
                            className="form-control" 
                            name="message" 
                            rows="4" 
                            placeholder="message" 
                            value={formData.message}
                            onChange={handleChange}
                            required 
                            style={{
                              width: '100%',
                              padding: '12px 15px',
                              border: '1px solid #ccc',
                              borderRadius: '4px',
                              fontSize: '14px',
                              outline: 'none',
                              fontFamily: 'inherit',
                              boxSizing: 'border-box'
                            }}
                          ></textarea>
                        </div>
                        <div>
                          <button 
                            type="submit" 
                            disabled={isSubmitting}
                            style={{
                              background: 'linear-gradient(to right, #ff416c, #ff4b2b)',
                              color: '#ffffff',
                              border: 0,
                              padding: '12px 30px',
                              fontSize: '14px',
                              fontWeight: 600,
                              borderRadius: '4px',
                              cursor: isSubmitting ? 'not-allowed' : 'pointer',
                              opacity: isSubmitting ? 0.7 : 1,
                              textTransform: 'uppercase',
                              letterSpacing: '1px',
                              transition: '0.3s'
                            }}
                            className="btn-danger-gradient"
                          >
                            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                </div>

                {/* Details Footer Section */}
                <div style={{ 
                  marginTop: '50px', 
                  borderTop: '1px solid #eee', 
                  paddingTop: '30px'
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }} className="contact-details-row">
                    
                    {/* Detail 1: Address */}
                    <div style={{
                      flex: '0 0 33.333333%',
                      maxWidth: '33.333333%',
                      padding: '0 15px',
                      boxSizing: 'border-box'
                    }} className="contact-detail-col">
                      <div style={{ display: 'flex', alignItems: 'center', padding: '15px 0' }}>
                        <div style={{
                          marginRight: '20px',
                          fontSize: '32px',
                          color: '#ff4b2b',
                          width: '50px',
                          display: 'flex',
                          justifyContent: 'center'
                        }}>
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <div>
                          <h6 style={{ fontSize: '16px', fontWeight: 600, color: '#060c22', margin: '0 0 5px 0' }}>Address</h6>
                          <p style={{ margin: 0, fontSize: '14px', color: '#777', lineHeight: '1.5' }}>
                            Incubation Centre, Dr. A P J Abdul Kalam Science Laboratory, Saurashtra University Campus, Rajkot.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Detail 2: Phone */}
                    <div style={{
                      flex: '0 0 33.333333%',
                      maxWidth: '33.333333%',
                      padding: '0 15px',
                      boxSizing: 'border-box'
                    }} className="contact-detail-col">
                      <div style={{ display: 'flex', alignItems: 'center', padding: '15px 0' }}>
                        <div style={{
                          marginRight: '20px',
                          fontSize: '30px',
                          color: '#ff4b2b',
                          width: '50px',
                          display: 'flex',
                          justifyContent: 'center'
                        }}>
                          <i className="fa fa-phone"></i>
                        </div>
                        <div>
                          <h6 style={{ fontSize: '16px', fontWeight: 600, color: '#060c22', margin: '0 0 5px 0' }}>Phone</h6>
                          <p style={{ margin: 0, fontSize: '14px', color: '#777', lineHeight: '1.5' }}>
                            8490991979<br />
                            <span style={{ fontSize: '12px' }}>(Time: 10.30am to 6.10pm)</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Detail 3: Email */}
                    <div style={{
                      flex: '0 0 33.333333%',
                      maxWidth: '33.333333%',
                      padding: '0 15px',
                      boxSizing: 'border-box'
                    }} className="contact-detail-col">
                      <div style={{ display: 'flex', alignItems: 'center', padding: '15px 0' }}>
                        <div style={{
                          marginRight: '20px',
                          fontSize: '30px',
                          color: '#ff4b2b',
                          width: '50px',
                          display: 'flex',
                          justifyContent: 'center'
                        }}>
                          <i className="fa fa-envelope"></i>
                        </div>
                        <div>
                          <h6 style={{ fontSize: '16px', fontWeight: 600, color: '#060c22', margin: '0 0 5px 0' }}>Email</h6>
                          <p style={{ margin: 0, fontSize: '14px', color: '#777', lineHeight: '1.5' }}>
                            <a href="mailto:ssip@sauuni.ac.in" style={{ color: '#ff4b2b', textDecoration: 'none' }}>
                              ssip@sauuni.ac.in
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
