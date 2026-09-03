import { wedding } from '../content/wedding';
import './Venue.css';

export function Venue() {
  const { venue } = wedding;

  return (
    <section id="venue" className="section venue">
      <div className="container">
        <h2 className="section-title">Venue & Travel</h2>
        <p className="section-subtitle">{venue.name}</p>

        <div className="venue__grid">
          <div className="venue__info card">
            <h3 className="venue__heading">Location</h3>
            <address className="venue__address">
              {venue.address}<br />
              {venue.city}<br />
              <span className="venue__landmark">{venue.landmark}</span>
            </address>

            <h3 className="venue__heading">Getting There</h3>
            <ul className="venue__travel">
              <li>
                <strong>Airport:</strong> {venue.travel.airport}
              </li>
              <li>
                <strong>Railway:</strong> {venue.travel.railway}
              </li>
             {/* <li>
                <strong>Parking:</strong> {venue.travel.parking}
              </li>*/}
              <li>
                <strong>Stay:</strong> {venue.travel.accommodation}
              </li>
            </ul>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline venue__directions"
            >
              Open in Google Maps
            </a>
          </div>

          <div className="venue__map card">
            <iframe
              title="Venue location map"
              src={venue.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
