import React from 'react';
import './StepsOverview.css';

const StepsOverview = () => {
  return (
    <section className="steps-section">
      <div className="steps-overlay">
        <div className="steps-content">
          <div className="step">
            <div className="step-number">1</div>
            <div>
              <h3 className="step-title">Define Your Business Identity</h3>
              <p className="step-description">
                Choose your company structure, name, and industry focus. We’ll guide you in selecting a model that aligns with Free Zone regulations and future growth.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div>
              <h3 className="step-title">Upload Your Essentials</h3>
              <p className="step-description">
                Skip the guesswork. Simply upload the required documents — we’ll handle the legal checks, approvals, and communications with UAE authorities.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div>
              <h3 className="step-title">Launch with Confidence</h3>
              <p className="step-description">
                Receive your official license, business documents, and digital toolkit — everything you need to start operating today, with ongoing support tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsOverview;
