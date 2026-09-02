import Countdown from 'react-countdown';
import { wedding } from '../content/wedding';
import { SectionDivider } from './SectionDivider';
import heroPhoto from '../assets/hero.jpeg';
import './Hero.css';

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="countdown__unit">
      <span className="countdown__value">{String(value).padStart(2, '0')}</span>
      <span className="countdown__label">{label}</span>
    </div>
  );
}

export function Hero() {
  const targetDate = new Date(wedding.countdown.target);

  return (
    <section id="home" className="hero">
     <div
        className="hero__photo"
        style={{ backgroundImage: `url(${heroPhoto})` }}
        aria-hidden="true"
      />
      <div className="hero__overlay" />
      <div className="hero__pattern" aria-hidden="true" />

      <div className="hero__content container">
        <p className="hero__eyebrow">We're getting married</p>
        <h1 className="hero__names">
          {wedding.bride}
          <span className="hero__amp">&</span>
          {wedding.groom}
        </h1>

        <SectionDivider />

        <p className="hero__date">{wedding.dateRange}</p>
        <p className="hero__location">{wedding.venue.name} · {wedding.location}</p>

        <div className="hero__countdown card">
          <p className="hero__countdown-label">{wedding.countdown.label}</p>
          <Countdown
            date={targetDate}
            renderer={({ days, hours, minutes, seconds, completed }) => {
              if (completed) {
                return <p className="hero__countdown-done">The day is here!</p>;
              }
              return (
                <div className="countdown">
                  <CountdownUnit value={days} label="Days" />
                  <CountdownUnit value={hours} label="Hours" />
                  <CountdownUnit value={minutes} label="Mins" />
                  <CountdownUnit value={seconds} label="Secs" />
                </div>
              );
            }}
          />
        </div>

         <SectionDivider />

        <a href="#rsvp" className="btn btn-primary hero__cta">
          RSVP
        </a>
      </div>
    </section>
  );
}
