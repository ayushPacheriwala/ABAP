import { useState } from 'react';
import { wedding } from '../content/wedding';
import './FAQ.css';

const categories = [...new Set(wedding.faqs.map((f) => f.category))];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | 'All'>('All');

  const filtered =
    activeCategory === 'All'
      ? wedding.faqs
      : wedding.faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <h2 className="section-title">FAQ</h2>
        <p className="section-subtitle">Everything you need to know about our celebrations</p>

        <div className="faq__filters">
          <button
            className={`faq__filter ${activeCategory === 'All' ? 'faq__filter--active' : ''}`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`faq__filter ${activeCategory === cat ? 'faq__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="faq__list">
          {filtered.map((item) => {
            const globalIndex = wedding.faqs.indexOf(item);
            const isOpen = openIndex === globalIndex;

            return (
              <div key={item.question} className="faq__item card">
                <button
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={`faq__icon ${isOpen ? 'faq__icon--open' : ''}`}>+</span>
                </button>
                {isOpen && (
                  <div className="faq__answer">
                    <span className="faq__category-tag">{item.category}</span>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
