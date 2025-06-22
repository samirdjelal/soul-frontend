// src/features/incubation/IntroSection.tsx
import React from 'react';
import './IntroSection.css';

const imgDir = '/incubation/introsection';

const IntroSection: React.FC = () => (
  <section className="intro-section">
    <div className="intro-card">
    <div className="intro-container">
      {/* TEXT COLUMN */}
      <div className="intro-text">
        <h3>Incubation Program</h3>
        <h4>From Idea to MVP</h4>
        <p>
          Every great startup begins with a bold idea — but transforming that
          idea into a real, working product takes the right guidance,
          structure, and support. The Incubation Program is built for
          early-stage founders who are ready to take their first steps from
          concept to MVP with clarity and confidence.
        </p>
        <p>
          Through hands-on mentorship, user-driven product validation, and
          strategic go-to-market planning, you’ll learn how to build something
          that people not only want, but are willing to use and pay for. You’ll
          work alongside seasoned founders and industry experts who will help
          you avoid common pitfalls and focus on what really matters. Whether
          you’re refining your idea, building your first prototype, or
          preparing to launch, this program gives you the foundation, tools,
          and community you need to bring your vision to life.
        </p>
        <h5>What You’ll Get:</h5>
        <ul className="intro-benefits">
          <li><i className="fas fa-check" /> 1:1 Weekly mentorship with startup experts</li>
          <li><i className="fas fa-check" /> 1:1 Product validation with real user feedback</li>
          <li><i className="fas fa-check" /> 1:1 Go-to-market strategy support</li>
          <li><i className="fas fa-check" /> 1:1 Access to exclusive founder events</li>
        </ul>
        <button className="intro-button">Apply now</button>
      </div>

      {/* IMAGE GRID */}
      <div className="intro-images-grid">
        <div className="image-card hero-card">
          <img src={`${imgDir}/imgv1.png`} alt="Incubation workspace" />
        </div>
        <div className="image-card small-card">
          <img src={`${imgDir}/imgv2.png`} alt="Product conference" />
        </div>
        <div className="image-card small-card">
          <img src={`${imgDir}/imgv3.png`} alt="Laptop analytics" />
        </div>
      </div>
    </div>
    </div>
  </section>
);

export default IntroSection;
