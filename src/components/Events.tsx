import { useState } from 'react';
import { wedding } from '../content/wedding';
import './Events.css';

export function Events() {
  const [activeDay, setActiveDay] = useState(0);
  const day = wedding.events[activeDay];

  return (
    <section id="events" className="section events">
      <div className="container">
        <h2 className="section-title">Celebrations</h2>
        <p className="section-subtitle">Two days of love, laughter, and tradition</p>

        <div className="events__tabs" role="tablist">
          {wedding.events.map((d, i) => (
            <button
              key={d.day}
              role="tab"
              aria-selected={activeDay === i}
              className={`events__tab ${activeDay === i ? 'events__tab--active' : ''}`}
              onClick={() => setActiveDay(i)}
            >
              {d.title}
            </button>
          ))}
        </div>

        <p className="events__date">{day.date}</p>

        <div className="events__timeline">
          {day.items.map((item) => (
            <article
              key={item.name}
              className={`events__item card ${'highlight' in item && item.highlight ? 'events__item--highlight' : ''}`}
            >
              <time className="events__time">{item.time}</time>
              <div className="events__details">
                <h3 className="events__name">{item.name}</h3>
                <p className="events__desc">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
