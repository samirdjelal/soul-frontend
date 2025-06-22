// src/features/landing/ValuesSection.tsx
import React from 'react';
import './ValuesSection.css';

const ValuesSection: React.FC = () => (
  <section className="values-section">
    <div className="container-wrapper">
      <h2 className="values-heading">The Values That Shape Our Future</h2>

      <div className="values-grid">
        {/* Row 1 */}
        <div className="value-card value-0">
          <h3>Authenticity</h3>
          <p>
            We encourage founders to build ventures that align with their
            values, voice, and vision, not just trends or investor pressure.
          </p>
        </div>
        <div className="value-card value-1">
          <h3>Futurism</h3>
          <p>
            We help founders anticipate tomorrow’s challenges and
            opportunities by embracing emerging trends, technologies, and new
            working methods.
          </p>
        </div>
        <div className="value-card value-2">
          <h3>Empowerment</h3>
          <p>
            We create an environment where founders feel confident, capable,
            and trusted to make bold decisions, own their journey, and shape
            the future.
          </p>
        </div>
        <div className="value-card value-3">
          <h3>Sustainability</h3>
          <p>
            Founders are encouraged to integrate sustainable practices,
            ethical leadership, and responsible innovation.
          </p>
        </div>

        {/* Row 2 */}
        <div className="value-card value-4">
          <h3>Curiosity</h3>
          <p>
            We nurture a culture of relentless curiosity, where questioning,
            experimenting, and continuous learning fuel better ideas.
          </p>
        </div>
        <div className="value-card value-5">
          <img
            src="/home/values/vr-man.png"
            alt="Person wearing a VR headset"
            className="value-image"
          />
        </div>
        <div className="value-card value-6">
          <h3>Innovation</h3>
          <p>
            We champion startups that don’t just chase profits but create
            meaningful, positive impact for communities, industries, and the
            planet.
          </p>
        </div>
        <div className="value-card value-7">
          <img
            src="/home/values/green-hands.png"
            alt="Hands holding a miniature Earth"
            className="value-image"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ValuesSection;
