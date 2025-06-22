// src/features/MentorCycle/IntroSection.tsx
import React from 'react';
import './IntroSection.css';

const imgDir = '/mentor/explore';

const IntroSection: React.FC = () => (
  <section className="intro-section">
    <div className="intro-card">
      <div className="intro-container">
        {/* TEXT COLUMN */}
        <div className="intro-text">
          <h3>Mentorship Circle</h3>
          <h4>Real Talk. Real Connections.</h4>
          <p>
            Being a founder often means navigating tough decisions, uncertain
            paths, and moments of doubt — and doing it all alone. But with
            Mentorship Circle, you don’t have to.
          </p>
          <p>
            This program is built to foster meaningful connections with
            experienced mentors and like-minded entrepreneurs who truly
            understand the startup journey. Whether you’re facing a strategic
            dilemma, struggling with growth, or just need a sounding board,
            Mentorship Circle offers a safe, supportive space where you can
            speak openly and get real guidance. Through tailored mentor
            matching, group discussions, and live sessions with seasoned
            founders, you’ll gain not only insights but also genuine
            relationships that can help carry your vision forward.
          </p>
          <h5>What You’ll Get:</h5>
          <ul className="intro-benefits">
            <li>
              <i className="fas fa-check" /> 1:1 Industry-based mentor
              connections
            </li>
            <li>
              <i className="fas fa-check" /> 1:1 Monthly sessions for real
              issues
            </li>
            <li>
              <i className="fas fa-check" /> 1:1 Live sessions with successful
              founders
            </li>
            <li>
              <i className="fas fa-check" /> 1:1 Peer support and safe spaces
              for candid conversations
            </li>
          </ul>
          <button className="intro-button">Apply now</button>
        </div>

        {/* IMAGE GRID */}
        <div className="intro-images-grid">
          <div className="image-card hero-card">
            <img src={`${imgDir}/m1.png`} alt="Mentor meeting" />
          </div>
          <div className="image-card small-card">
            <img src={`${imgDir}/m2.png`} alt="Planning board" />
          </div>
          <div className="image-card small-card">
            <img src={`${imgDir}/m3.png`} alt="Group session" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
