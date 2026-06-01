/**
 * @file Gallery.jsx
 * @description Renders the media gallery component. Displays a list of albums with pagination, and allows clicking on an album to view its photos in a grid layout with a fullscreen popup modal view.
 */

import { useEffect, useState } from 'react';

/**
 * Albums database containing list of media items, covers and sub-photos
 * @type {Array<{id: number, title: string, cover: string, photos: string[]}>}
 */
const albums = [
  {
    id: 24,
    title: 'How to Plan for Start up Legal and Ethical Steps',
    cover: 'img/gallery/1764333029.jpg',
    photos: [
      'img/gallery/17643330291.png',
      'img/gallery/17643330292.jpeg'
    ]
  },
  {
    id: 23,
    title: 'World Environment Day',
    cover: 'img/gallery/1764242534.jpg',
    photos: [
      'img/gallery/17642425341.jpg',
      'img/gallery/17642425342.jpg'
    ]
  },
  {
    id: 22,
    title: 'Budding Sciencist',
    cover: 'img/gallery/1683180558.jpg',
    photos: [
      'img/gallery/16831805581.jpg',
      'img/gallery/16831805582.jpg',
      'img/gallery/16831805583.jpg',
      'img/gallery/16831805584.jpg',
      'img/gallery/16831805585.jpg'
    ]
  },
  {
    id: 21,
    title: 'National Science Day-2023',
    cover: 'img/gallery/1683180294.jpg',
    photos: [
      'img/gallery/16831802941.jpg',
      'img/gallery/16831802942.jpg',
      'img/gallery/16831802943.jpg',
      'img/gallery/16831802944.JPG',
      'img/gallery/16831802945.JPG'
    ]
  },
  {
    id: 20,
    title: 'The ABCs of IPR',
    cover: 'img/gallery/1683179996.png',
    photos: [
      'img/gallery/16831799961.jpg',
      'img/gallery/16831799962.jpg',
      'img/gallery/16831799963.jpg',
      'img/gallery/16831799964.jpg',
      'img/gallery/16831799965.jpg'
    ]
  },
  {
    id: 14,
    title: 'National Innovation day',
    cover: 'img/gallery/1672385646.jpg',
    photos: [
      'img/gallery/16723856461.jpg',
      'img/gallery/16723856462.jpg',
      'img/gallery/16723856463.jpg',
      'img/gallery/16723856464.jpg',
      'img/gallery/16723856465.jpg'
    ]
  },
  {
    id: 13,
    title: 'Intellectual Property Awareness',
    cover: 'img/gallery/1666344947.png',
    photos: [
      'img/gallery/16663449471.jpg',
      'img/gallery/16663449472.jpg',
      'img/gallery/16663449473.jpg',
      'img/gallery/16663449474.jpg',
      'img/gallery/16663449475.jpg'
    ]
  },
  {
    id: 10,
    title: 'Prototype Process Design and Development - Prototyping',
    cover: 'img/gallery/1666344248.jpg',
    photos: [
      'img/gallery/16663442481.png',
      'img/gallery/16663442482.png',
      'img/gallery/16663442483.png',
      'img/gallery/16663442484.png',
      'img/gallery/16663442485.jpg'
    ]
  },
  {
    id: 9,
    title: 'IP Prosecution and Enforcement',
    cover: 'img/gallery/1666342858.png',
    photos: [
      'img/gallery/16663428581.png',
      'img/gallery/16663428582.png',
      'img/gallery/16663428583.png',
      'img/gallery/16663428584.png',
      'img/gallery/16663428585.png'
    ]
  },
  {
    id: 8,
    title: 'IIC regional meet',
    cover: 'img/gallery/1666342437.png',
    photos: [
      'img/gallery/16663424371.jpg',
      'img/gallery/16663424372.jpg',
      'img/gallery/16663424373.jpg',
      'img/gallery/16663424374.jpg',
      'img/gallery/16663424375.jpg'
    ]
  },
  {
    id: 7,
    title: 'National Technology Day',
    cover: 'img/gallery/1666342324.jpg',
    photos: [
      'img/gallery/16663423241.png',
      'img/gallery/16663423242.png',
      'img/gallery/16663423243.png',
      'img/gallery/16663423244.jpg',
      'img/gallery/16663423245.png'
    ]
  },
  {
    id: 6,
    title: 'Mirchi startup express',
    cover: 'img/gallery/1665816167.jpg',
    photos: [
      'img/gallery/16658161671.jpg',
      'img/gallery/16658161672.jpg',
      'img/gallery/16658161673.jpg',
      'img/gallery/16658161674.png',
      'img/gallery/16658161675.png'
    ]
  },
  {
    id: 4,
    title: 'Business Model Canvas',
    cover: 'img/gallery/1665814673.png',
    photos: [
      'img/gallery/16658146731.jpg',
      'img/gallery/16658146732.jpg',
      'img/gallery/16658146733.jpg',
      'img/gallery/16658146734.jpg',
      'img/gallery/16658146735.jpg'
    ]
  },
  {
    id: 3,
    title: 'World Earth Day',
    cover: 'img/gallery/1665814593.png',
    photos: [
      'img/gallery/16658145941.jpg',
      'img/gallery/16658145942.jpg',
      'img/gallery/16658145943.jpg',
      'img/gallery/16658145944.jpg',
      'img/gallery/16658145945.jpg'
    ]
  },
  {
    id: 2,
    title: 'World Entrepreneurs Day',
    cover: 'img/gallery/1665814525.png',
    photos: [
      'img/gallery/16658145251.jpg',
      'img/gallery/16658145252.jpg',
      'img/gallery/16658145253.jpg',
      'img/gallery/16658145254.jpg',
      'img/gallery/16658145255.jpg'
    ]
  },
  {
    id: 1,
    title: 'world environment day',
    cover: 'img/gallery/1665814449.png',
    photos: [
      'img/gallery/16658144491.jfif',
      'img/gallery/16658144492.jfif',
      'img/gallery/16658144493.jfif',
      'img/gallery/16658144494.jfif',
      'img/gallery/16658144495.jfif'
    ]
  }
];

/**
 * Generates absolute asset URL pointing to the external website
 * @param {string} path - Relative asset path
 * @returns {string}
 */
const assetUrl = (path) => `/susec-assets/${path}`;

/**
 * Gallery Component
 */
const Gallery = () => {
  // State to hold the currently selected album ID for showing details
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  // State to hold the image URL of the current popup preview modal
  const [popupImage, setPopupImage] = useState(null);
  // Pagination page state
  const [page, setPage] = useState(1);
  
  // Find current active album object if selected
  const selectedAlbum = albums.find((album) => album.id === selectedAlbumId);
  const pageSize = 12;
  const totalPages = Math.ceil(albums.length / pageSize);
  // Slice albums database records to only show current page's albums
  const visibleAlbums = albums.slice((page - 1) * pageSize, page * pageSize);

  // Close the popup window automatically if Escape key is pressed
  useEffect(() => {
    if (!popupImage) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setPopupImage(null);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [popupImage]);

  return (
    <main id="main" className="susec-gallery-page space">
      <section>
        <div className={selectedAlbum ? 'susec-gallery-detail-container' : 'susec-gallery-container'}>
          <div className={selectedAlbum ? 'susec-gallery-card susec-gallery-detail-card' : 'susec-gallery-card'}>
            <div className="susec-gallery-section-header">
              <h2>Gallery</h2>
            </div>

            {selectedAlbum ? (
              <>
                {/* Back button and title for album detail view */}
                <div className="susec-gallery-subbar">
                  <button type="button" onClick={() => setSelectedAlbumId(null)}>
                    Back
                  </button>
                  <span>{selectedAlbum.title}</span>
                </div>

                {/* Photos grid */}
                <div className="susec-gallery-photo-row">
                  {selectedAlbum.photos.map((photo) => (
                    <div key={photo} className="susec-gallery-photo-col">
                      <div className="susec-gallery-photo-box">
                        <div className="susec-gallery-img">
                          <button type="button" onClick={() => setPopupImage(assetUrl(photo))}>
                            <img src={assetUrl(photo)} alt={selectedAlbum.title} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* List of albums */}
                <div className="susec-gallery-row">
                  {visibleAlbums.map((album) => (
                    <div key={album.id} className="susec-gallery-album-col">
                      <div className="susec-gallery-album-card">
                        <button type="button" onClick={() => setSelectedAlbumId(album.id)}>
                          <img src={assetUrl(album.cover)} alt={album.title} />
                        </button>
                        <span className="susec-gallery-title">{album.title}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="susec-gallery-pagination">
                  {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                      key={pageNumber}
                      type="button"
                      className={page === pageNumber ? 'active-page' : ''}
                      onClick={() => setPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  {page < totalPages && (
                    <button type="button" onClick={() => setPage(page + 1)}>
                      Next &raquo;
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Fullscreen popup overlay */}
      {popupImage && (
        <div className="susec-gallery-popup" onClick={() => setPopupImage(null)}>
          <img src={popupImage} alt="" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </main>
  );
};

export default Gallery;
