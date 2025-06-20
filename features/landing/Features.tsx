// src/features/landing/Features.tsx
import React from "react";
import "./Features.css";

const features = [
  {
    title: "Mentorship",
    description:
      "SOUL provides customized mentorship through industry experts, structured programs, and a network of over 100 vetted mentors.",
    image: "/home/features/mentorship.png",
  },
  {
    title: "Modern Workspace",
    description:
      "SOUL offers a dynamic workspace combining functional offices with creative community areas, flexible setups, and co-branded amenities.",
    image: "/home/features/workspace.png",
  },
  {
    title: "Strategic Networking",
    description:
      "SOUL organizes impactful events and partnerships to connect startups with investors, decision-makers, and peers both locally and globally.",
    image: "/home/features/networking.png",
  },
  {
    title: "Funding Access",
    description:
      "SOUL facilitates startup funding through investor networks, pitch events, grants, and premium introduction services while tracking founders' progress.",
    image: "/home/features/funding.png",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="container-wrapper">
        <div className="features-header">
          <h2>
            Why Join <span className="accent-text">Our Incubator?</span>
          </h2>
        </div>
        <div className="features-grid">
          <div className="feature-card-wrapper">
            <div className="feature-card">
              <img src={features[0].image} alt={features[0].title} className="feature-image" />
              <div className="feature-content">
                <h3 className="feature-title">{features[0].title}</h3>
                <p className="feature-description">{features[0].description}</p>
              </div>
            </div>
          </div>
          <div className="feature-card-wrapper">
            <div className="feature-card">
              <img src={features[1].image} alt={features[1].title} className="feature-image" />
              <div className="feature-content">
                <h3 className="feature-title">{features[1].title}</h3>
                <p className="feature-description">{features[1].description}</p>
              </div>
            </div>
          </div>
          <div className="feature-card-wrapper">
            <div className="feature-card">
              <img src={features[2].image} alt={features[2].title} className="feature-image" />
              <div className="feature-content">
                <h3 className="feature-title">{features[2].title}</h3>
                <p className="feature-description">{features[2].description}</p>
              </div>
            </div>
          </div>
          <div className="feature-card-wrapper">
            <div className="feature-card">
              <img src={features[3].image} alt={features[3].title} className="feature-image" />
              <div className="feature-content">
                <h3 className="feature-title">{features[3].title}</h3>
                <p className="feature-description">{features[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;