import React, { useMemo, useState } from 'react';
import reports from '../data/reports.all.generated.json';

const PAGE_SIZE = 100;

const Reports = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const filteredReports = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return reports;
    return reports.filter((report) => {
      return (
        report.title.toLowerCase().includes(query) ||
        report.date.toLowerCase().includes(query) ||
        String(report.srNo).includes(query)
      );
    });
  }, [searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredReports.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredReports.slice(start, start + PAGE_SIZE);
  }, [filteredReports, currentPage]);

  const goToPage = (nextPage) => {
    const clamped = Math.max(1, Math.min(totalPages, nextPage));
    setPage(clamped);
  };

  return (
    <div className="container section-padding" style={{ maxWidth: '1000px' }}>
      <div className="text-center" style={{ marginBottom: '30px' }}>
        <h2 className="section-title" style={{ fontSize: '32px', color: '#0e1b4d', fontWeight: '700', textTransform: 'uppercase', marginBottom: '10px' }}>
          REPORTS
        </h2>
        <div style={{ width: '50px', height: '4px', backgroundColor: '#fe9436', margin: '0 auto' }}></div>
      </div>

      <div style={{ backgroundColor: '#ffffff', padding: '30px 24px', borderRadius: '8px', boxShadow: '0 10px 30px rgba(14, 27, 77, 0.08)', border: '1px solid #eee' }}>
        <div className="mb-4">
          <input
            type="text"
            className="search-input"
            placeholder="Search Reports by Title or Date..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPage(1);
            }}
            style={{
              width: '100%',
              padding: '12px 20px',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              fontSize: '15px',
              fontFamily: '"Open Sans", sans-serif',
              outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => { e.target.style.borderColor = '#fe9436'; }}
            onBlur={(e) => { e.target.style.borderColor = '#dee2e6'; }}
          />
        </div>

        <div className="table-responsive">
          <table className="custom-table" style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ width: '10%' }}>Sr No.</th>
                <th style={{ width: '65%' }}>Title</th>
                <th style={{ width: '25%' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {pageItems.length > 0 ? (
                pageItems.map((report) => (
                  <tr key={report.srNo}>
                    <td>{report.srNo}</td>
                    <td>
                      <a
                        href={report.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#0e1b4d', fontWeight: '700', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseOver={(e) => { e.target.style.color = '#fe9436'; }}
                        onMouseOut={(e) => { e.target.style.color = '#0e1b4d'; }}
                      >
                        {report.title}
                      </a>
                    </td>
                    <td>
                      <span style={{ fontSize: '0.9rem', color: '#64748b' }}>
                        {report.date}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: 'center', padding: '24px', color: '#64748b' }}>
                    No reports match your search query.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between', alignItems: 'center', marginTop: '18px', flexWrap: 'wrap' }}>
          <div style={{ color: '#64748b', fontSize: '0.9rem' }}>
            Showing <b>{pageItems.length}</b> of <b>{filteredReports.length}</b> reports
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
              style={{ border: '1px solid #dee2e6' }}
            >
              First
            </button>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ border: '1px solid #dee2e6' }}
            >
              Prev
            </button>
            <span style={{ color: '#0e1b4d', fontWeight: 700 }}>
              {currentPage} / {totalPages}
            </span>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{ border: '1px solid #dee2e6' }}
            >
              Next
            </button>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
              style={{ border: '1px solid #dee2e6' }}
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
