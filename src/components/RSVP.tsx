import { wedding } from '../content/wedding';
import './RSVP.css';

export function RSVP() {
  const { rsvp } = wedding;
  const hasForm = Boolean(rsvp.googleFormUrl);

  return (
    <section id="rsvp" className="section rsvp">
      <div className="container">
        <h2 className="section-title">RSVP</h2>
        <p className="section-subtitle">
          Please RSVP by {rsvp.deadline}. We can't wait to celebrate with you!
        </p>

        <div className="rsvp__card card">
          {hasForm ? (
            <>
              <iframe
                title="RSVP Form"
                src={rsvp.googleFormUrl}
                className="rsvp__iframe"
              />
              <a
                href={rsvp.googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline rsvp__fallback"
              >
                Open RSVP Form
              </a>
            </>
          ) : (
            <div className="rsvp__placeholder">
              <p>
                RSVP form coming soon! In the meantime, please reach out to{' '}
                <strong>{rsvp.contactName}</strong> at{' '}
                <a href={`tel:${rsvp.contactPhone.replace(/\s/g, '')}`}>
                  {rsvp.contactPhone}
                </a>
              </p>
              <p className="rsvp__hint">
                To add your Google Form, set <code>rsvp.googleFormUrl</code> in{' '}
                <code>src/content/wedding.ts</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
