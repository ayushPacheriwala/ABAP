import { wedding } from '../content/wedding';
import './Gallery.css';

export function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">A glimpse of our journey</p>

        <div className="gallery__scroll">
          {wedding.gallery.map((photo) => (
            <figure key={photo.id} className="gallery__item card">
              <img
                src={`${import.meta.env.BASE_URL}${encodeURI(photo.image)}`}
                alt={photo.alt}
                className="gallery__photo"
                loading="lazy"
              />
              <figcaption className="gallery__caption">{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
