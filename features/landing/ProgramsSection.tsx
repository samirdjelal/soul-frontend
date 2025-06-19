// src/features/landing/ProgramsSection.tsx
import React from 'react';
import './ProgramsSection.css';

const programs = [
  {
    title: 'Acceleration program',
    description: 'Designed for startups ready to scale. This program includes pitch coaching, growth strategy sessions, and direct introductions to investors.',
    action: 'Apply now',
    image: '/home/programs/acceleration.png',
  },
  {
    title: 'Incubation Program',
    description: 'Perfect for early-stage founders with an idea. We support you from concept to MVP with weekly mentorship, product validation, and strategic guidance.',
    action: 'Get started',
    image: '/home/programs/incubation1.png',
  },
  {
    title: 'Mentorship Circles',
    description: 'Designed for startups ready to scale. This program includes pitch coaching, growth strategy sessions, and direct introductions to investors.',
    action: 'Join now',
    image: '/home/programs/mentorship.png',
  },
  {
    title: 'Founder School',
    description: 'Designed for startups ready to scale. This program includes pitch coaching, growth strategy sessions, and direct introductions to investors.',
    action: 'Start learning',
    image: '/home/programs/founderschool.png',
  },
  {
    title: 'Go Global Program',
    description: 'Scale beyond borders. Learn how to enter international markets with expert support and global partners.',
    action: 'Apply now',
    image: '/home/programs/goglobal.png',
  },
  {
    title: 'Incubation Program',
    description: 'Perfect for early-stage founders with an idea. We support you from concept to MVP with weekly mentorship, product validation, and strategic guidance.',
    action: 'Get started',
    image: '/home/programs/incubation2.png',
  },
  {
    title: 'Investor Readiness Lab',
    description: 'Master your pitch, financials, and fundraising strategy to confidently meet investors and close your next round.',
    action: 'Join now',
    image: '/home/programs/investor.png',
  },
  {
    title: 'Legal & Formation Hub',
    description: 'From incorporation to IP protection, get the legal support you need to build a strong foundation for your startup.',
    action: 'Get started',
    image: '/home/programs/legal.png',
  },
];

const ProgramsSection: React.FC = () => {
  return (
    <section className="programs-section">
      <h2 className="programs-title">Empowering Founders Through Structured Programs</h2>
      <p className="programs-subtitle">
        Soul offers targeted programs to support your startup journey — from idea to global scale.
      </p>

      <div className="programs-grid">
        <img src="/home/programs/connector-stroke.svg" alt="decorative stroke" className="programs-stroke" />
        {programs.map((program, index) => (
          <div className="programs-card" key={index}>
            <img src={program.image} alt={program.title} />
            <div className="programs-content">
              <div className="programs-heading">{program.title}</div>
              <div className="programs-desc">{program.description}</div>
              <div className="programs-action">{program.action}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;
