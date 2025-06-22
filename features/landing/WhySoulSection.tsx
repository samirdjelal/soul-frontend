// src/features/landing/WhySoulSection.tsx
import React from 'react';
import './WhySoulSection.css';

const WhySoulSection: React.FC = () => {
  return (
    <section className="why-soul-section">
      <div className="container-wrapper">
        <div className="why-soul-card">
          <div className="why-soul-card-inner">
            <img
              src="/home/why/why-soul-graphic.png"
              alt="Why Soul Infographic"
              className="why-soul-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySoulSection;