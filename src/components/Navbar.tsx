import { useEffect, useState } from 'react';
import { wedding } from '../content/wedding';
import monogram from '../assets/monogram.png';
import './Navbar.css';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#home" className="navbar__brand" onClick={close}>
          <img
            src={monogram}
            alt={`${wedding.bride} & ${wedding.groom}`}
            className="navbar__monogram"
          />
        </a>

        <button
          className={`navbar__toggle ${open ? 'navbar__toggle--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {wedding.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
