/**
 * @file FAQ.jsx
 * @description FAQ page rendering an interactive accordion component mapping questions and answers about SSIP grants.
 */

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

/**
 * FAQ Page Component
 */
const FAQ = () => {
  // Currently opened accordion item index state (null if all collapsed)
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'Who can Apply for SSIP Grant?',
      a: 'Student Innovators from any recognized academic institutes of Gujarat and Domicile of Gujarat can apply/nominate for this grant. Student innovations from any discipline of having age note more than 35 years.'
    },
    {
      q: 'What is the SSIP?',
      a: 'The Student Startup & Innovation Policy of Government of Gujarat aims to create an integrated, state-wide, university-based innovation ecosystem to support innovations and ideas of young students and provide a conducive environment for optimum harnessing of their creative pursuit.'
    },
    {
      q: 'How can we apply for the grant under SSIP?',
      a: 'We are Providing Support for PoC, Patent Trademark Design Copyright. You can apply by using Menu.'
    },
    {
      q: 'What are the eligibility criteria for the SSIP grant?',
      a: 'Any person up to the age of 35 years, who is, • A school student of Foundational / Preparatory / Middle / Secondary level (Up to Class 12) • A Diploma / Vocational / Undergraduate / Postgraduate / Doctoral student or an alumna / alumnus • Any dropout from school / institute / university'
    },
    {
      q: 'what is support provided under SSIP programme ?',
      a: 'IPR Support like, Patents,Copyrights,Trademarks,International Registration,Industrial Design,Semiconductor Integrated Circuits Layout-Design Registry. All Beneficiaries, Tinkering Lab, Innovation Lab, Incubation Centers • Large scale sensitization, events and programs for developing Scientific Mindset'
    },
    {
      q: 'can I get mentoring support?',
      a: 'Yes And you will Get Technical guidance/inputs related with the innovation/start-up'
    },
    {
      q: 'Can service provider idea is eligible for this scheme?',
      a: 'Under this scheme, any individual/ group of individuals having innovative idea/ Concept will be eligible and/ or Universities/ education institutions, Incubation Centre/ PSUs/ R&D Institutions/ Private and other establishments will be eligible as an institution to support and mentor to innovators as approved by Committee.'
    },
    {
      q: 'can single person apply for this ?',
      a: 'any individual/ group of individuals having innovative idea/ Concept will be eligible'
    },
    {
      q: 'Can group or team apply for this ?',
      a: 'any individual/ group of individuals having innovative idea/ Concept will be eligible'
    },
    {
      q: 'Lab/Space/Laboratory facility are available?',
      a: 'yes instruments and working space would be provided'
    },
    {
      q: 'what is FABLAB',
      a: 'A fab lab is typically equipped with an array of flexible computer-controlled tools that cover several different length scales and various materials, with the aim to make "almost anything".'
    },
    {
      q: 'How can I use FABLAB ?',
      a: 'A Fab-Lab or Digital Fabrication laboratory, is a place to Play, to create, to learn, to mentor, to invent: a place for learning and innovation.'
    },
    {
      q: 'what are the types of grant available?',
      a: 'Mainly grant available for patent filing ,PoC Support ,Trademark Filing ,Copyright Filing under SSIP.'
    },
    {
      q: 'What if the idea is failed?',
      a: 'ans'
    },
    {
      q: 'Shall I get the grant for multiple idea?',
      a: 'Yes'
    },
    {
      q: 'Can I apply for multiple Idea/Patent at same time ?',
      a: 'ans'
    },
    {
      q: 'what are the selection procedure?',
      a: 'ans'
    },
    {
      q: 'is there any fund for patent/design filing',
      a: 'ans'
    },
    {
      q: 'I am a School student interested in entrepreneurship. How can I contact you',
      a: 'ans'
    },
    {
      q: 'Is there any fund for patent/design filing',
      a: 'ans'
    },
    {
      q: 'I am a college student interested in entrepreneurship. How can I contact you',
      a: 'ans'
    },
    {
      q: 'Is there any age limit for availing the incubation facility?',
      a: 'ans'
    },
    {
      q: 'How long we could be incubated in startup mission ?',
      a: 'ans'
    },
    {
      q: 'For how long can a startup operate from start up mission',
      a: 'ans'
    }
  ];

  /**
   * Toggles the active FAQ accordion item.
   * If the clicked item is already open, it collapses it; otherwise, it opens it.
   * @param {number} index - Index of the FAQ item in the array
   */
  const toggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };


  return (
    <div className="container section-padding" style={{ maxWidth: '850px' }}>
      <div className="text-center" style={{ marginBottom: '30px' }}>
        <h2 className="section-title" style={{ fontSize: '32px', color: '#0e1b4d', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
          FAQ
        </h2>
        <div style={{ width: '50px', height: '4px', backgroundColor: '#fe9436', margin: '0 auto' }}></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #dee2e6',
                boxShadow: isOpen ? '0 5px 20px rgba(14, 27, 77, 0.06)' : 'none',
                overflow: 'hidden',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => toggle(index)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontWeight: '700',
                  color: isOpen ? '#fe9436' : '#0e1b4d',
                  fontSize: '16px'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <HelpCircle size={20} style={{ color: '#fe9436', flexShrink: 0 }} />
                  {faq.q}
                </span>
                {isOpen ? <Minus size={18} style={{ flexShrink: 0 }} /> : <Plus size={18} style={{ flexShrink: 0 }} />}
              </button>

              <div
                style={{
                  maxHeight: isOpen ? '500px' : '0px',
                  overflow: 'hidden',
                  transition: 'max-height 0.3s ease',
                  borderTop: isOpen ? '1px solid #dee2e6' : 'none'
                }}
              >
                <p
                  style={{
                    padding: '20px 24px',
                    color: '#555555',
                    lineHeight: '1.6',
                    whiteSpace: 'pre-line',
                    margin: 0,
                    fontSize: '15px'
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
