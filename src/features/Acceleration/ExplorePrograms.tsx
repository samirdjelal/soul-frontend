// src/features/acceleration/ExplorePrograms.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ExplorePrograms.css";

const programs = [
  {
    title: "Incubation Program",
    description:
      "Our Incubation Program is designed for early-stage founders ready to turn concepts into working products.",
    applyLabel: "Apply",
    learnLabel: "Learn",
    image: "/acceleration/explore/incub.png",
    applyPath: "/incubation",
    learnPath: "/incubation",
  },
  {
    title: "Mentorship Circle",
    description:
      "The Mentorship Circle connects you with experienced mentors and fellow entrepreneurs for authentic advice and support.",
    applyLabel: "Apply",
    learnLabel: "Learn",
    image: "/acceleration/explore/mentor.png",
    applyPath: "/mentor-circle",
    learnPath: "/mentor-circle",
  },
  {
    title: "Founder School",
    description:
      "Founder School is an interactive learning track designed to help you launch, lead, and grow your startup.",
    applyLabel: "Apply",
    learnLabel: "Learn",
    image: "/acceleration/explore/found.png",
    applyPath: "/founder-school",
    learnPath: "/founder-school",
  },
];

const ExplorePrograms: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top of the page after navigation
  };

  return (
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
                <button 
                  className="btn-primary"
                  onClick={() => handleNavigation(program.applyPath)}
                >
                  {program.applyLabel}
                </button>
                <button 
                  className="btn-link"
                  onClick={() => handleNavigation(program.learnPath)}
                >
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
};

export default ExplorePrograms;
