// src/features/landing/OfferPrograms.tsx
import React from "react";
import "./OfferPrograms.css";

const offers = [
  {
    title: "Incubation & Mentorship",
    description:
      "Designed for startups ready to scale. This program includes pitch coaching, growth strategy sessions, and direct introductions to investors.",
    image: "/home/offers/incubation-mentorship.png",
    className: "item-a",
  },
  {
    title: "Formation & Legal Support",
    description:
      "Designed for startups ready to scale. This program includes pitch coaching, growth strategy sessions, and direct introductions to investors.",
    image: "/home/offers/formation-legal.png",
    className: "item-b",
  },
  {
    title: "Founder Community",
    description:
      "Designed for startups ready to scale. This program includes pitch coaching, growth strategy sessions, and direct introductions to investors.",
    image: "/home/offers/test.jpg",
    className: "item-c",
  },
  {
    title: "Investor Readiness",
    description:
      "Designed for startups ready to scale. This program includes pitch coaching, growth strategy sessions, and direct introductions to investors.",
    image: "/home/offers/investor-readiness.png",
    className: "item-d",
  },
];

const OfferPrograms = () => {
  return (
    <section className="offer-section">
      <h2 className="offer-title">What We Offer</h2>
      <div className="offer-underline" />
      <div className="offer-layout-grid">
        {offers.map((offer) => (
          <div key={offer.title} className={`offer-card ${offer.className}`}>
            <img
              src={offer.image}
              alt={offer.title}
              className="offer-image"
              loading="lazy"
            />
            <div className="offer-content">
              <h3 className="offer-heading">{offer.title}</h3>
              <p>{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferPrograms;