/**
 * @file IPRSupport.jsx
 * @description Dynamic page displaying general info, registration link and financial support details for IPR fields (Patent, Trademark, Copyright, or Industrial Design).
 */

import { Link, useParams } from 'react-router-dom';

/**
 * IPRSupport Page Component
 */
const IPRSupport = () => {
  const { type } = useParams();

  const iprContent = {
    patent: {
      title: 'PATENT',
      generalInfo: 'A Patent is a type of intellectual property that gives its owner the legal right to exclude others from making, using, or selling an invention for a limited period of time in exchange for publishing an enabling disclosure of the invention. In most countries, patent rights fall under private law and the patent holder must sue someone infringing the patent in order to enforce their rights',
      assistanceInfo: 'Financial Assistance for Patent Filing Under SU-Incubation Centre at Saurashtra University',
      applyUrl: '#/apply/patent',
      applyText: 'Patent Registration'
    },
    trademark: {
      title: 'TRADEMARK',
      generalInfo: "A trademark is a type of intellectual property consisting of a recognizable sign, design, or expression that identifies products or services from a particular source and distinguishes them from others.A trademark exclusively identifies a product as belonging to a specific company and recognizes the company's ownership of the brand.",
      assistanceInfo: 'Financial Assistance for Trademark Filing Under SU-Incubation Centre at Saurashtra University',
      applyUrl: '#/apply/trademark',
      applyText: 'Trademark Registration'
    },
    copyright: {
      title: 'COPYRIGHT',
      generalInfo: 'A copyright is a type of intellactual property that gives its owner the exclusive right to copy, distribute, adapt, display, and perform a creative work, usually for a limited time.The creative work may be in a literary, artistic, educational, or musical form. Copyright is intended to protect the original expression of an idea in the form of a creative work, but not the idea itself.',
      assistanceInfo: 'Financial Assistance for Copyright Filing Under SU-Incubation Centre at Saurashtra University.',
      applyUrl: '#/apply/copyright',
      applyText: 'Copyright Registration'
    },
    'industrial-design': {
      title: 'INDUSTRIAL DESIGN FILING',
      generalInfo: 'An industrial design constitutes the ornamental aspect of an article. The industrial design recognizes the creation new and original features of new shape, configuration, surface pattern, ornamentations and composition of lines or colours applied to articles which in the finished state appeal to and are judged solely by the eye. It does not protect the technical or functional features of a product.',
      assistanceInfo: 'Financial Assistance for Industrial Design Filing Under SU-Incubation Centre at Saurashtra University.',
      applyUrl: '#/apply/design',
      applyText: 'Industrial Design Registrtation',
      extraText: 'Apply using below link:'
    }
  };

  const activeContent = iprContent[type] || iprContent['patent'];

  return (
    <div className="container section-padding" style={{ maxWidth: '960px' }}>
      <div className="text-center" style={{ marginBottom: '30px' }}>
        <h2 className="section-title" style={{ fontSize: '32px', color: '#0e1b4d', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
          {activeContent.title}
        </h2>
        <div style={{ width: '50px', height: '4px', backgroundColor: '#fe9436', margin: '0 auto' }}></div>
      </div>

      <div style={{ 
        backgroundColor: '#ffffff', 
        padding: '50px 40px', 
        borderRadius: '8px', 
        boxShadow: '0 10px 30px rgba(14, 27, 77, 0.08)',
        border: '1px solid #eee'
      }}>
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ fontSize: '18px', color: '#0e1b4d', fontWeight: '700', marginBottom: '15px' }}>
            General Information:
          </h4>
          <p style={{ fontSize: '15px', color: '#555555', lineHeight: '1.7', textAlign: 'justify' }}>
            {activeContent.generalInfo}
          </p>
        </div>

        <div style={{ marginBottom: '25px' }}>
          <h4 style={{ fontSize: '18px', color: '#0e1b4d', fontWeight: '700', marginBottom: '15px' }}>
            {activeContent.assistanceInfo}
          </h4>
          {activeContent.extraText && (
            <p style={{ fontSize: '15px', color: '#555555', marginBottom: '10px' }}>
              {activeContent.extraText}
            </p>
          )}
          <p style={{ fontSize: '15px', color: '#555555', display: 'flex', gap: '5px', flexWrap: 'wrap', alignItems: 'center' }}>
            Kindly register yourself at:&nbsp;
            <Link
              to={activeContent.applyUrl.replace('#', '')}
              style={{ color: '#fe9436', fontWeight: '600', textDecoration: 'none' }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              {activeContent.applyText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IPRSupport;
