import { wedding } from '../content/wedding';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__names">
          {wedding.bride} & {wedding.groom}
        </p>
        <p className="footer__date">{wedding.dateRange} · {wedding.location}</p>
        <p className="footer__venue">{wedding.venue.name}</p>
        <p className="footer__love">With love and gratitude</p>
      </div>
    </footer>
  );
}
