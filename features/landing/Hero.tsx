// src/features/landing/Hero.tsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container-wrapper">
        <div className="hero-content">
          <div className="hero-images">
            <div className="image-wrapper side">
              <img src="/home/hero/hero1.jpg" alt="Hero 1" className="hero-img" />
            </div>
            <div className="image-wrapper center">
              <img src="/home/hero/hero2.png" alt="Hero 2" className="hero-img" />
            </div>
            <div className="image-wrapper side">
              <img src="/home/hero/hero3.jpg" alt="Hero 3" className="hero-img" />
            </div>
          </div>

          <div className="hero-text">
            <h1>
              Every great startup has a Soul.
              <br />
              We help you build yours
            </h1>
            <p>
              At Soul Incubator, we provide early-stage entrepreneurs with comprehensive support —
              from company formation to investor readiness and scalable growth.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Explore our services</button>
              <button className="btn-primary">Explore our programs</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;