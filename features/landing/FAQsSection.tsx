import React, { useState } from 'react';
import './FAQsSection.css';

const faqData = [
  'Who is Soul for?',
  'Can foreign founders apply?',
  'What features does Soul offer?',
  'Do you invest directly in startups?',
  'What’s the duration of the incubation program?',
  'What’s included in the licensing package?',
  'Do you provide office space?',
  'What makes SOUL different from other UAE incubators?',
];

const FAQsSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="faqs-section">
      <h2 className="faqs-heading">FAQs</h2>
      <p className="faqs-subheading">
        Find answers to common questions about our incubation program and services.
      </p>
      <div className="faqs-grid">
        {faqData.map((q, i) => (
          <div
            key={i}
            className={`faq-item ${openIndexes.includes(i) ? 'open' : ''}`}
            onClick={() => toggleFAQ(i)}
          >
            <div className="faq-question">
              {q}
              <span className="arrow">{openIndexes.includes(i) ? '−' : '+'}</span>
            </div>
            {openIndexes.includes(i) && (
              <div className="faq-answer">
                This is a placeholder answer for “{q}”. You can replace it with actual content.
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQsSection;
