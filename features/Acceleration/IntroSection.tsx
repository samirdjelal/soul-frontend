import React, { useRef } from 'react';
import './IntroSection.css';

interface IntroSectionProps {
  applyRef: React.RefObject<HTMLElement | null>;
  onScrollToSection: (sectionId: string) => void;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  applyRef,
  onScrollToSection,
}) => {
  const imgDir = '/acceleration/introsection';

  const handleApplyClick = () => {
    onScrollToSection('apply');
  };

  return (
    <section className="intro-section">
      <div className="intro-card">
        <div className="intro-container">
          <div className="intro-text">
            <h3>Acceleration Program</h3>
            <h4>Scale Smarter, Grow Faster</h4>
            <p>
              Growing a startup is tough — and doing it efficiently, with the right
              support and connections, makes all the difference. The Acceleration
              Program is designed for early-stage startups that are ready to refine,
              scale, and break into new markets with confidence.
            </p>
            <p>
              In this high-impact program, you'll work closely with experts to
              fine-tune your pitch, validate your growth strategy, and prepare for
              investor conversations that matter. We go beyond theory to give you
              practical guidance, insider knowledge, and access to a powerful network
              of founders, mentors, and investors. Whether you're preparing for your
              first round of funding or expanding into new markets, the Acceleration
              Program gives you the structure, support, and resources to grow smarter
              — not just faster.
            </p>
            <h5>What You'll Get:</h5>
            <ul className="intro-benefits">
              <li><i className="fas fa-check" /> 1:1 Pitch coaching and fundraising workshops</li>
              <li><i className="fas fa-check" /> 1:1 Growth strategy sessions tailored to your business</li>
              <li><i className="fas fa-check" /> 1:1 Investor introductions and demo days</li>
              <li><i className="fas fa-check" /> 1:1 Business scaling and international expansion support</li>
            </ul>
            <button className="intro-button" onClick={handleApplyClick}>
              Apply now
            </button>
          </div>

          <div className="intro-images-grid">
            <div className="image-card hero-card">
              <img src={`${imgDir}/acc1.png`} alt="Whiteboard planning session" />
            </div>
            <div className="image-card small-card-1">
              <img src={`${imgDir}/acc2.png`} alt="Global market concept" />
            </div>
            <div className="image-card small-card-2">
              <img src={`${imgDir}/acc3.png`} alt="Live, work, create mural" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;