// src/features/landing/SuccessStoriesSection.tsx
import React from 'react';
import './SuccessStoriesSection.css';

const stories = [
  {
    name: 'Layla Al-Fahim',
    role: 'Founder, Loop',
    description:
      'Loop is a digital wallet built during our incubation program. The team launched their MVP and secured early funding with our support.',
    image: '/home/success/layla.png',
  },
  {
    name: 'Max David',
    role: 'Founder, Vintory',
    description:
      'Vintory uses AI to help small businesses manage inventory smarter. We guided them from idea to beta launch in just 12 weeks.',
    image: '/home/success/max.png',
  },
  {
    name: 'Elina Costa, Maya Tanaka, Derya Kaplan',
    role: 'Founders, Klima',
    description:
      "Klima delivers smart home energy solutions for a greener future. With SOUL's mentorship, they reached MVP stage and gained investor interest.",
    image: '/home/success/elina.png',
  },
];

const SuccessStoriesSection: React.FC = () => {
  return (
    <section className="success-section">
      <div className="container-wrapper">
        <h2 className="success-title">Success stories</h2>
        <div className="success-grid">
          {stories.map((story, index) => (
            <div className="success-card" key={index}>
              <div className="success-card-inner">
                <img src={story.image} alt={story.name} className="success-img" />
                <div className="success-content">
                  <div className="success-name">{story.name}</div>
                  <div className="success-role">{story.role}</div>
                  <p className="success-desc">{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;