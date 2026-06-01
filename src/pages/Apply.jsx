import { Link, useParams } from 'react-router-dom';
import ApplyForm from '../components/forms/ApplyForm';
import { applyFormOptions, defaultApplySlug, externalApplyLinks } from '../config/applyForms';

const Apply = () => {
  const { formSlug = defaultApplySlug } = useParams();
  const selectedApplication = applyFormOptions.find((option) => option.slug === formSlug) || applyFormOptions[0];

  return (
    <main className="apply-page section-padding">
      <div className="container">
        <div className="apply-hero">
          <div>
            <span className="apply-eyebrow">SUSEC Application</span>
            <h1>{selectedApplication.title}</h1>
            <p>
              Fill this custom website form to submit directly into the same Google Form response sheet.
              Google Form UI stays hidden from visitors.
            </p>
          </div>
        </div>

        <div className="apply-layout">
          <aside className="apply-sidebar" aria-label="Application form links">
            <h2>Apply Form Links</h2>
            <div className="apply-link-list">
              {applyFormOptions.map((option) => (
                <Link
                  key={option.slug}
                  to={`/apply/${option.slug}`}
                  className={option.slug === selectedApplication.slug ? 'apply-link active' : 'apply-link'}
                >
                  {option.title}
                </Link>
              ))}
              {externalApplyLinks.map((link) => (
                <a key={link.title} href={link.url} target="_blank" rel="noopener noreferrer" className="apply-link external">
                  {link.title}
                </a>
              ))}
            </div>
          </aside>

          <section className="apply-card" aria-labelledby="apply-form-title">
            <div className="apply-card-header">
              <span>Secure website submission</span>
              <h2 id="apply-form-title">{selectedApplication.title}</h2>
              <p>{selectedApplication.description}</p>
            </div>
            <ApplyForm key={selectedApplication.slug} selectedApplication={selectedApplication} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Apply;
