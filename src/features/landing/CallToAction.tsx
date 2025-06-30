// src/features/landing/CallToAction.tsx
import React, { useCallback } from 'react';
import './CallToAction.css';

const CallToAction = () => {
  // helper to scroll smoothly to the "contact" section
  const scrollToContact = useCallback(() => {
    const section = document.getElementById('contact');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="cta-section">
      <div className="container-wrapper">
        <h2 className="cta-title">
          Build Your Dream Business — <span>3 Steps, Zero Hassle</span>
        </h2>
        <p className="cta-subtext">
          Shape your vision, submit your docs, and launch with ease —<br />
          we turn your idea into reality, fast.
        </p>
        <div className="cta-buttons">
          <button
            className="cta-button primary"
            onClick={scrollToContact}
          >
            Apply
          </button>
          <button className="cta-button secondary">
            Learn <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
