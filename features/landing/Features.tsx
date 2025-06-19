import React from "react";

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
      "SOUL facilitates startup funding through investor networks, pitch events, grants, and premium introduction services while tracking founders’ progress.",
    image: "/home/features/funding.png",
  },
];

const Features = () => {
  return (
    <section style={{ padding: "4rem 1rem", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "left", fontWeight: 700 }}>
        Why Join <span style={{ color: "#d32f2f" }}>Our Incubator?</span>
      </h2>
      <hr style={{ width: "50px", border: "2px solid #d32f2f", margin: "0.5rem 0 2rem" }} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        {features.map((feature, index) => (
          <div key={index} style={{ background: "#fff", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden" }}>
            <img src={feature.image} alt={feature.title} style={{ width: "100%", height: "auto" }} />
            <div style={{ padding: "1rem", textAlign: "left" }}>
              <h3 style={{ marginBottom: "0.5rem", fontWeight: "600" }}>{feature.title}</h3>
              <p style={{ fontSize: "0.95rem", color: "#444" }}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
