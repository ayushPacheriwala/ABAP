import { wedding } from '../content/wedding';
import './DressCode.css';

export function DressCode() {
  const { dressCode } = wedding;

  return (
    <section id="attire" className="section dress-code">
      <div className="container">
        <h2 className="section-title">Dress Code</h2>
        <p className="section-subtitle">{dressCode.intro}</p>

        <div className="dress-code__grid">
          {dressCode.events.map((event) => (
            <article key={event.name} className="dress-code__card card">
              <h3 className="dress-code__event">{event.name}</h3>
              <p className="dress-code__guidance">{event.guidance}</p>

              <div className="dress-code__swatches" aria-label="Suggested colours">
                {event.colors.map((color) => (
                  <span
                    key={color}
                    className="dress-code__swatch"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>

              <p className="dress-code__note">{event.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
