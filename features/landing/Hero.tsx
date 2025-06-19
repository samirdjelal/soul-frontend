// src/features/landing/Hero.tsx

import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-inner">
        <div className="hero-images">
          <img src="/home/hero/hero1.jpg" alt="Hero 1" className="hero-img side" />
          <img src="/home/hero/hero2.png" alt="Hero 2" className="hero-img center" />
          <img src="/home/hero/hero3.jpg" alt="Hero 3" className="hero-img side" />
        </div>

        <div className="hero-text">
          <h1>Every great startup has a Soul.<br />We help you build yours</h1>
          <p>
            At Soul Incubator, we provide early-stage entrepreneurs with comprehensive support —
            from company formation to investor readiness and scalable growth.
          </p>
          <div className="hero-buttons">
            <button className="btn-red">Explore our services</button>
            <button className="btn-red">Explore our programs</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
