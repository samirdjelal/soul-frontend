// src/features/landing/ValuesSection.tsx
import React from 'react';
import './ValuesSection.css';

const values = [
  {
    title: 'Authenticity',
    desc: 'We encourage founders to build ventures that align with their values, voice, and vision, not just trends or investor pressure.',
  },
  {
    title: 'Futurism',
    desc: 'We help founders anticipate tomorrow’s challenges and opportunities by embracing emerging trends, technologies, and new working methods.',
  },
  {
    title: 'Empowerment',
    desc: 'We create an environment where founders feel confident, capable, and trusted to make bold decisions, own their journey, and shape the future.',
  },
  {
    title: 'Sustainability',
    desc: 'Founders are encouraged to integrate sustainable practices, ethical leadership, and responsible innovation.',
  },
  {
    title: 'Curiosity',
    desc: 'We nurture a culture of relentless curiosity, where questioning, experimenting, and continuous learning fuel better ideas.',
  },
  {
    title: 'Innovation',
    desc: 'We champion startups that don’t just chase profits but create meaningful, positive impact for communities, industries, and the planet.',
  },
];

const ValuesSection: React.FC = () => {
  return (
    <section className="values-section">
      <h2 className="values-heading">The Values That Shape Our Future</h2>

      <div className="values-grid">
        {values.map((value, index) => (
          <div key={index} className={`value-card value-${index}`}>
            <h3>{value.title}</h3>
            <p>{value.desc}</p>
          </div>
        ))}

        <img
          src="/home/values/background-gradient.png"
          className="values-bg"
          alt="background"
        />
        <img
          src="/home/values/vr-man.png"
          className="values-vr"
          alt="VR"
        />
        <img
          src="/home/values/green-hands.png"
          className="values-earth"
          alt="Earth"
        />
      </div>
    </section>
  );
};

export default ValuesSection;
