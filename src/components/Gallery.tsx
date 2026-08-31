import { wedding } from '../content/wedding';
import './Gallery.css';

const gradients = [
  'linear-gradient(135deg, #7B1E1E 0%, #C9A84C 100%)',
  'linear-gradient(135deg, #C9A84C 0%, #F5E6C8 100%)',
  'linear-gradient(135deg, #5c1414 0%, #7B1E1E 50%, #C9A84C 100%)',
  'linear-gradient(135deg, #FAF7F2 0%, #C9A84C 100%)',
];

export function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          A glimpse of our journey — add your photos to{' '}
          <code className="gallery__hint">public/gallery/</code>
        </p>

        <div className="gallery__scroll">
          {wedding.gallery.map((photo, i) => (
            <figure key={photo.id} className="gallery__item card">
              <div
                className="gallery__placeholder"
                style={{ background: gradients[i % gradients.length] }}
                role="img"
                aria-label={photo.alt}
              >
                <span className="gallery__initials">
                  {wedding.bride.charAt(0)}{wedding.groom.charAt(0)}
                </span>
              </div>
              <figcaption className="gallery__caption">{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
