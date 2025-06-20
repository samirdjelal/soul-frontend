// src/features/incubation/IntroSection.tsx
import React from "react";
import "./IntroSection.css";

const imagePaths = [
  "/incubation/intro/img1.png",
  "/incubation/intro/img2.png",
  "/incubation/intro/img3.png",
  "/incubation/intro/img4.png",
  "/incubation/intro/img5.png",
];

const IntroSection: React.FC = () => {
  return (
    <section className="incubation-intro">
      <div className="intro-container">
        {/* Left Text Column */}
        <div className="intro-text">
          <h2>Incubation Program</h2>
          <h4>From Idea to MVP</h4>
          <p>
            Got a bold idea but not sure where to start? Our Incubation Program is designed for early-stage founders ready to turn concepts into working products.
          </p>

          <ul className="intro-checklist">
            <li>✅ Weekly mentorship with startup experts</li>
            <li>✅ Product validation with real user feedback</li>
            <li>✅ Go-to-market strategy support</li>
            <li>✅ Access to exclusive founder events</li>
          </ul>

          <p className="intro-note">
            <strong style={{ color: "#f44336" }}>
              Perfect for: New founders, university teams, and aspiring entrepreneurs.
            </strong>
          </p>

          <button className="intro-button">Apply now</button>
        </div>

        {/* Right Image Grid */}
        <div className="intro-grid">
          {imagePaths.map((src, index) => (
            <img key={index} src={src} alt={`intro-img-${index + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
