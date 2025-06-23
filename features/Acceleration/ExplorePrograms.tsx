// src/features/acceleration/ExplorePrograms.tsx
import React from "react";
import "./ExplorePrograms.css";

const programs = [
  {
    title: "Incubation Program",
    description:
      "Our Incubation Program is designed for early-stage founders ready to turn concepts into working products.",
    applyLabel: "Apply",
    learnLabel: "Learn",
    image: "/acceleration/explore/incub.png",
  },
  {
    title: "Mentorship Circle",
    description:
      "The Mentorship Circle connects you with experienced mentors and fellow entrepreneurs for authentic advice and support.",
    applyLabel: "Apply",
    learnLabel: "Learn",
    image: "/acceleration/explore/mentor.png",
  },
  {
    title: "Founder School",
    description:
      "Founder School is an interactive learning track designed to help you launch, lead, and grow your startup.",
    applyLabel: "Apply",
    learnLabel: "Learn",
    image: "/acceleration/explore/found.png",
  },
];

const ExplorePrograms: React.FC = () => (
  <section className="explore-section">
    <h3 className="explore-heading">Explore More Programs</h3>
    <p className="explore-subheading">
      Discover other opportunities designed for founders.
    </p>

    <div className="explore-cards">
      {programs.map((program, i) => (
        <div className="explore-card" key={i}>
          <div className="explore-card-content">
            <h4>{program.title}</h4>
            <p>{program.description}</p>
            <div className="explore-buttons">
              <button className="btn-primary">{program.applyLabel}</button>
              <button className="btn-link">
                {program.learnLabel} <span>›</span>
              </button>
            </div>
          </div>
          <img
            src={program.image}
            alt={program.title}
            className="explore-image"
          />
        </div>
      ))}
    </div>
  </section>
);

export default ExplorePrograms;
