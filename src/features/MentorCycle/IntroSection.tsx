import React, { useRef } from 'react';
import './IntroSection.css';

interface IntroSectionProps {
  /** e.g. "40%" or "300px" */
  textWidth?: string;
  /** e.g. "60%" or "300px" */
  imageWidth?: string;
  /** e.g. "342px" */
  heroHeight?: string;
  /** e.g. "216px" */
  smallHeight?: string;
  /** Ref to the ApplySection component */
  applyRef: React.RefObject<HTMLElement | null>;
  /** Function to scroll to a specific section */
  onScrollToSection: (sectionId: string) => void;
}

const IntroSection: React.FC<IntroSectionProps> = ({
  textWidth = '50%',
  imageWidth = '50%',
  heroHeight = '342px',
  smallHeight = '216px',
  applyRef,
  onScrollToSection,
}) => {
  const imgDir = '/mentor/explore';

  // inject our four custom properties
  const style: React.CSSProperties = {
    '--text-width': textWidth,
    '--image-width': imageWidth,
    '--hero-height': heroHeight,
    '--small-height': smallHeight,
  } as any;

  const handleApplyClick = () => {
    onScrollToSection('apply');
  };

  return (
    <section className="intro-section" style={style}>
      <div className="intro-card">
        <div className="intro-container">
          {/* TEXT COLUMN */}
          <div className="intro-text">
            <h3>Mentorship Circle</h3>
            <h4>Real Talk. Real Connections.</h4>
            <p>
              A curated community of experienced founders, investors, and domain experts committed to mentoring early-stage startups. This circle is for mentors passionate about giving back, guiding the next generation of entrepreneurs, and collaborating on high-impact innovation. Mentors can choose startups they resonate with, set their own terms (equity or paid), and become part of the region's most dynamic startup ecosystem.
            </p>
            <p>
              This program is built to foster meaningful connections with
              experienced mentors and like-minded entrepreneurs who truly
              understand the startup journey. Whether you're facing a strategic
              dilemma, struggling with growth, or just need a sounding board,
              Mentorship Circle offers a safe, supportive space where you can
              speak openly and get real guidance.
            </p>
            <h5>What You'll Get:</h5>
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
            <button className="intro-button" onClick={handleApplyClick}>
              Apply now
            </button>
          </div>

          {/* IMAGE GRID */}
          <div className="intro-images-grid">
            <div className="image-card hero-card">
              <img src={`${imgDir}/m1.png`} alt="Mentor meeting" />
            </div>
            <div className="image-card small-card-1">
              <img src={`${imgDir}/m2.png`} alt="Planning board" />
            </div>
            <div className="image-card small-card-2">
              <img src={`${imgDir}/m3.png`} alt="Group session" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;