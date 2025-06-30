// src/features/landing/ProgramsSection.tsx
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgramsSection.css';

const programs = [
  {
    title: 'Acceleration program',
    description:
      'Designed for startups ready to scale. This program includes pitch coaching, growth strategy sessions, and direct introductions to investors.',
    action: 'Apply now',
    image: '/home/programs/acceleration.png',
    route: '/acceleration',
  },
  {
    title: 'Incubation Program',
    description:
      'Perfect for early-stage founders with an idea. We support you from concept to MVP with weekly mentorship, product validation, and strategic guidance.',
    action: 'Get started',
    image: '/home/programs/incubation1.png',
    route: '/incubation',
  },
  {
    title: 'Mentorship Circles',
    description:
      'Designed for startups ready to scale. This program includes pitch coaching, growth strategy sessions, and direct introductions to investors.',
    action: 'Join now',
    image: '/home/programs/mentorship.png',
    route: '/mentor-circle',
  },
  {
    title: 'Founder School',
    description:
      'Designed for startups ready to scale. This program includes pitch coaching, growth strategy sessions, and direct introductions to investors.',
    action: 'Start learning',
    image: '/home/programs/founderschool.png',
    route: '/founder-school',
  },
  {
    title: 'Go Global Program',
    description:
      'Scale beyond borders. Learn how to enter international markets with expert support and global partners.',
    action: 'Apply now',
    image: '/home/programs/goglobal.png',
    // no route => scroll to contact
  },
  {
    title: 'Incubation Program',
    description:
      'Perfect for early-stage founders with an idea. We support you from concept to MVP with weekly mentorship, product validation, and strategic guidance.',
    action: 'Get started',
    image: '/home/programs/incubation2.png',
    route: '/incubation',
  },
  {
    title: 'Investor Readiness Lab',
    description:
      'Master your pitch, financials, and fundraising strategy to confidently meet investors and close your next round.',
    action: 'Join now',
    image: '/home/programs/investor.png',
    // no route => scroll to contact
  },
  {
    title: 'Legal & Formation Hub',
    description:
      'From incorporation to IP protection, get the legal support you need to build a strong foundation for your startup.',
    action: 'Get started',
    image: '/home/programs/legal.png',
    // no route => scroll to contact
  },
];

const ProgramsSection: React.FC = () => {
  const navigate = useNavigate();
  const scrollToContact = useCallback(() => {
    const section = document.getElementById('contact');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleClick = (route?: string) => {
    if (route) {
      navigate(route);
    } else {
      scrollToContact();
    }
  };

  return (
    <section className="programs-section">
      <div className="container-wrapper">
        <h2 className="programs-title">
          Empowering Founders Through Structured Programs
        </h2>
        <p className="programs-subtitle">
          Soul offers targeted programs to support your startup journey — from idea to global scale.
        </p>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="programs-card">
              <div className="programs-card-inner">
                <img src={program.image} alt={program.title} />
                <div className="programs-content">
                  <div className="programs-heading">{program.title}</div>
                  <div className="programs-desc">{program.description}</div>
                  <div
                    className="programs-action"
                    onClick={() => handleClick(program.route)}
                    style={{ cursor: 'pointer' }}
                  >
                    {program.action}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
