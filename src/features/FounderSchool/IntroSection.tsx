// src/features/FounderSchool/IntroSection.tsx
import React from 'react';
import './IntroSection.css';

const imgDir = '/founder/introsection';

const IntroSection: React.FC = () => {
  // mirror MentorCycle defaults
  const style: React.CSSProperties = {
    '--hero-height': '280px',
    '--small-height': '160px',
  } as any;

  return (
    <section className="intro-section" style={style}>
      <div className="intro-card">
        <div className="intro-container">
          {/* TEXT COLUMN */}
          <div className="intro-text">
            <h3>Founder School</h3>
            <h4>Startup Skills You Can Actually Use</h4>
            <p>
              Founder School is a comprehensive, interactive learning track designed
              to equip you with the real-world skills every entrepreneur needs to
              succeed. Whether you’re just starting out or looking to scale your
              startup, this program covers everything from business fundamentals to
              funding strategies — all in one place.
            </p>
            <p>
              Inspired by real founder journeys, the curriculum is focused on
              actionable knowledge over theory. Each module is carefully crafted to
              address common startup challenges, helping you build confidence and
              capability at every step of your journey. Through hands-on
              workshops, engaging video content, and community-driven events, you
              won’t just learn — you’ll apply what you learn in meaningful ways.
            </p>
            <h5>What You’ll Get:</h5>
            <ul className="intro-benefits">
              <li>
                <i className="fas fa-check" /> 1:1 Startup Basics: Idea to Launch
              </li>
              <li>
                <i className="fas fa-check" /> Founder Diaries video series &amp; community
                events
              </li>
              <li>
                <i className="fas fa-check" /> Certifications for your resume and investor decks
              </li>
              <li>
                <i className="fas fa-check" /> Access to SOUL’s resources, tools, and networking events
              </li>
            </ul>
            <button className="intro-button">Apply now</button>
          </div>

          {/* IMAGE GRID */}
          <div className="intro-images-grid">
            <div className="image-card hero-card">
              <img src={`${imgDir}/imgv1.png`} alt="Founder workshop" />
            </div>
            <div className="image-card small-card-1">
              <img src={`${imgDir}/imgv2.png`} alt="Classroom session" />
            </div>
            <div className="image-card small-card-2">
              <img src={`${imgDir}/imgv3.png`} alt="Networking handshake" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
