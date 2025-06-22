// src/features/landing/FAQsSection.tsx
import React, { useState } from 'react';
import './FAQsSection.css';

const faqData = [
  {
    question: 'Who is Soul for?',
    answer: 'Soul is designed for early-stage entrepreneurs and startups looking to launch and scale their businesses. We welcome founders from all backgrounds and industries.',
  },
  {
    question: 'Can foreign founders apply?',
    answer: 'Absolutely! Soul welcomes applications from both local and international founders. We provide support and guidance to help you navigate the process of setting up your business in the UAE.',
  },
  {
    question: 'What features does Soul offer?',
    answer: 'Soul offers a comprehensive suite of services, including mentorship, access to investors, legal and regulatory support, co-working space, and more. Our programs are tailored to help startups at every stage of their journey.',
  },
  {
    question: 'Do you invest directly in startups?',
    answer: 'While Soul does not directly invest in startups, we have strong relationships with a network of investors and can facilitate introductions and funding opportunities for our program participants.',
  },
  {
    question: "What's the duration of the incubation program?",
    answer: 'The duration of our incubation program is typically 6-12 months, depending on the stage and needs of your startup. We work closely with each founder to create a customized roadmap and timeline.',
  },
  {
    question: "What's included in the licensing package?",
    answer: 'Our licensing package includes everything you need to set up your business in the UAE, such as company registration, trade license, visa sponsorship, and more. We handle all the administrative tasks so you can focus on building your startup.',
  },
  {
    question: 'Do you provide office space?',
    answer: 'Yes, Soul offers co-working space and private offices for our program participants. Our modern, well-equipped facilities provide a collaborative and inspiring environment to help your startup thrive.',
  },
  {
    question: 'What makes SOUL different from other UAE incubators?',
    answer: 'What sets Soul apart is our deep commitment to the success of our founders. We go beyond just providing resources and mentorship – we become true partners in your journey, leveraging our extensive network and expertise to help you achieve your goals.',
  },
];

const FAQsSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="faqs-section">
      <div className="container-wrapper">
        <h2 className="faqs-heading">FAQs</h2>
        <p className="faqs-subheading">
          Find answers to common questions about our incubation program and services.
        </p>
        <div className="faqs-grid">
          {faqData.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndexes.includes(i) ? 'open' : ''}`}
              onClick={() => toggleFAQ(i)}
            >
              <div className="faq-item-inner">
                <div className="faq-question">
                  {faq.question}
                  <span className="arrow">{openIndexes.includes(i) ? '−' : '+'}</span>
                </div>
                {openIndexes.includes(i) && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;