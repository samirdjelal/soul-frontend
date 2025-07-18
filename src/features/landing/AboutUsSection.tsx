// src/features/landing/AboutUsSection.tsx
import React from 'react';
import './AboutUsSection.css';

const aboutItems = [
  {
    title: 'The SOUL Story',
    text: `SOUL (STARTUP ONE UAQ LAUNCHPAD) is more than just an incubator; we're a catalyst for innovation in Umm Al Quwain. It is a leading UAE-based global innovation hub leveraging low-cost, high-impact strategies that blend AI efficiency, grassroots community engagement, and strategic ecosystem partnerships.`,
    image: '/home/about/soul-story.png',
    reverse: false,
    color: '#0a3161',
  },
  {
    title: 'OUR VISION',
    text: `We aim to establish Umm Al Quwain as a leading regional hub for technology. Our vision is to create a vibrant ecosystem where innovation, entrepreneurship, and advanced digital solutions come together to promote sustainable economic growth. We seek to attract global talent and empower startups to shape the future of technology.`,
    image: '/home/about/vision.png',
    reverse: true,
    color: '#e53935',
  },
  {
    title: 'OUR MISSION',
    text: `To cultivate a dynamic startup ecosystem by offering the necessary tools, connections, and guidance to transform innovative ideas into impactful and profitable ventures within a seamless and accessible digital environment.`,
    image: '/home/about/mission.png',
    reverse: false,
    color: '#1bb7aa',
  },
];

const AboutUsSection: React.FC = () => {
  return (
    <section className="about-section">
      <div className="container-wrapper">
        <h2 className="about-title">About us</h2>
        <div className="about-underline"></div>

        {aboutItems.map((item, idx) => (
          <div
            className={`about-block ${item.reverse ? 'reverse' : ''}`}
            key={idx}
          >
            <div className="about-card">
              <div className="about-card-inner">
                <img src={item.image} alt={item.title} className="about-image" />
                <div className="about-content">
                  <h3 style={{ color: item.color }}>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;