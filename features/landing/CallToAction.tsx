import React from 'react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-title">
        Build Your Dream Business — <span>3 Steps, Zero Hassle</span>
      </h2>
      <p className="cta-subtext">
        Shape your vision, submit your docs, and launch with ease —<br />
        we turn your idea into reality, fast.
      </p>
      <div className="cta-buttons">
        <button className="cta-button primary">Apply</button>
        <button className="cta-button secondary">
          Learn <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
