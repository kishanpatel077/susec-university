/**
 * @file Events.jsx
 * @description Renders SUSEC event listings and local event detail pages.
 */

import React from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import events from '../data/eventsData';

// Pagination limit configuration defining maximum events rendered per index listing page.
const EVENTS_PER_PAGE = 20;

/**
 * Normalizes input text by cleaning newline irregularities, replacing malformed question-mark contractions
 * (specifically '?s' with "'s"), and removing excessive empty line breaks.
 * @param {string} text - Raw input description from dataset.
 * @returns {string} Cleaned and formatted plaintext.
 */
const cleanText = (text) => {
  if (!text) return '';
  return text
    .replace(/\r\n/g, '\n')       // Normalize Windows newlines
    .replace(/(\w)\?s\b/g, "$1's") // Replace ?s with 's
    .replace(/\?/g, '"')          // Replace remaining ? with double quotes
    .replace(/\n\n+/g, '\n');     // Collapse double/triple newlines to a single newline for clean, compact spacing
};

/**
 * Events Component rendering either an index listing grid of all events (paginated)
 * or a comprehensive detail section if a specific event ID parameter is provided.
 */
const Events = () => {
  // Extract URL route parameter for single-event viewing
  const { id } = useParams();
  // Read search/query parameters to process pagination state (?page=X)
  const [searchParams] = useSearchParams();
  // Identify the matching event instance from the local repository
  const activeEvent = events.find((event) => String(event.id) === id);
  // Calculate total pages needed based on total record count and limit configuration
  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);
  // Resolve current active page bound safely between page 1 and the total pages limit
  const currentPage = Math.min(
    Math.max(Number(searchParams.get('page')) || 1, 1),
    totalPages
  );
  // Slice index calculations to isolate the active chunk of visible events
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const visibleEvents = events.slice(startIndex, startIndex + EVENTS_PER_PAGE);

  if (id) {
    return (
      <main className="events-details-page" style={{ paddingBottom: '60px' }}>
        <section className="events-details-section">
          <div className="event-single-detail-container">
            <div className="event-detail-card" style={{ background: '#ffffff', padding: '10px 0 36px' }}>
              
              {activeEvent ? (
                <>
                  <div className="section-header events-details-header" style={{ textAlign: 'center', marginBottom: '10px' }}>
                    <h2 style={{ textTransform: 'uppercase', fontSize: '28px', color: '#0b2239', fontWeight: '700', fontFamily: 'var(--font-heading)', lineHeight: '1.3' }}>
                      {activeEvent.title}
                    </h2>
                  </div>

                  <div style={{ backgroundColor: '#ffc107', color: '#212529', textAlign: 'center', padding: '10px 16px', fontSize: '18px', fontWeight: '700', margin: '0 auto 30px', borderRadius: '4px', letterSpacing: '0.5px', fontFamily: '"Raleway", "Inter", sans-serif' }}>
                    {activeEvent.date}{activeEvent.time ? ` (${activeEvent.time})` : ''}
                  </div>

                  <div className="event-detail-columns" style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: '20px' }}>
                    {/* Left Column: Image */}
                    <div className="event-detail-image-col" style={{ flex: '1 1 40%', minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
                      <img
                        src={activeEvent.img}
                        alt={activeEvent.title}
                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px' }}
                        onError={(error) => {
                          error.currentTarget.src = '/susec-assets/img/su_logo.png';
                        }}
                      />
                    </div>

                    {/* Right Column: Description Text */}
                    <div className="event-detail-text-col" style={{ flex: '1 1 50%', minWidth: '300px' }}>
                      <p style={{ whiteSpace: 'pre-line', fontSize: '15px', lineHeight: '1.65', color: '#212529', margin: 0, fontFamily: '"Open Sans", "Inter", var(--font-body), sans-serif' }}>
                        {cleanText(activeEvent.description)}
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <h2 style={{ color: '#0b2239', marginBottom: '16px' }}>Event Not Found</h2>
                  <p style={{ color: '#64748b' }}>The event you are looking for does not exist or has been removed.</p>
                </div>
              )}
              
              <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '24px' }}>
                <Link to="/latest/events" className="btn btn-primary" style={{ textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>
                  Back to Events
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="events-details-page">
      <section className="events-details-section">
        <div className="container">
          <div className="section-header events-details-header">
            <h2>Events Details</h2>
          </div>

          <div className="events-grid-row events-details-grid">
            {visibleEvents.map((event) => (
              <article key={event.id} className="event-item-col events-details-item">
                <div className="event-inner-box">
                  <div className="event-img-col">
                    <img
                      src={event.img}
                      alt={event.title}
                      onError={(error) => {
                        error.currentTarget.src = '/susec-assets/img/su_logo.png';
                        error.currentTarget.classList.add('event-logo-fallback');
                      }}
                    />
                  </div>
                  <div className="event-text-col">
                    <p className="event-datetime-label">
                      {event.date}{event.time ? ` (${event.time})` : ''}
                    </p>
                    <h2 className="event-heading-title" title={event.title}>
                      {event.title}
                    </h2>
                    <Link className="readmore-link" to={`/latest/events/${event.id}`}>
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <nav className="events-details-pagination" aria-label="Events pagination">
            {currentPage > 1 ? (
              <Link to={`/latest/events?page=${currentPage - 1}`}>Previous</Link>
            ) : (
              <span className="disabled">Previous</span>
            )}

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              page === currentPage ? (
                <span key={page} className="active">{page}</span>
              ) : (
                <Link key={page} to={`/latest/events?page=${page}`}>{page}</Link>
              )
            ))}

            {currentPage < totalPages ? (
              <Link to={`/latest/events?page=${currentPage + 1}`}>Next</Link>
            ) : (
              <span className="disabled">Next</span>
            )}
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Events;
