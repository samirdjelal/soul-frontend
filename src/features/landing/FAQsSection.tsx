// src/features/landing/FAQsSection.tsx
import React, { useState } from 'react';
import './FAQsSection.css';

const faqData = [
  {
    question: 'Who is SOUL for?',
    answer: 'SOUL is designed for ambitious entrepreneurs, innovative creators, and visionary startups looking to grow in the UAE. Whether you’re a first-time founder, a tech innovator, or part of a creative community, SOUL provides the resources, support, and network to help you turn your ideas into successful businesses.',
  },
  {
    question: 'Can foreign founders apply?',
    answer: 'Absolutely! In fact, 60% of our founders come from international backgrounds. We fully support foreign entrepreneurs by managing 100% of the visa and residency processes, making it easy for you to establish your business and settle in without any hassle.',
  },
  {
    question: 'What features does SOUL offer?',
    answer: 'SOUL offers a comprehensive suite of services, including mentorship, access to investors, legal and regulatory support, co-working space, and more. Our programs are tailored to help startups at every stage of their journey.',
  },
  {
    question: 'Do you invest directly in startups?',
    answer: 'We don’t invest directly in startups, but we connect you with a network of over 50+ VCs and angel investors. In fact, 70% of SOUL startups successfully secure funding within 12 months through our network and investor platforms.',
  },
  {
    question: "What's the duration of the incubation program?",
    answer: 'Our incubation program offers flexible tracks ranging from 3 to 12 months, tailored to your startup’s needs. On average, startups graduate within 6 months, achieving impressive revenue growth of 2.5 times during the program.',
  },
  {
    question: "What's included in the licensing package?",
    answer: 'The license package is priced at AED 14,150 and includes a 1-year trade license, 4 visa quotas, and the option for up to 10 shareholder slots. It also covers 5 approved business activities of your choice, along with complimentary access to co-working spaces within our facility. This package offers a comprehensive solution for entrepreneurs looking to establish and grow their business with flexibility and added value.',
  },
  {
    question: 'Do you provide office space?',
    answer: 'Yes! We offer free co-working space within UAQ Free Trade Zone, allowing you to save up to 40% compared to Dubai. Enjoy 24/7 access, fully equipped meeting rooms, and high-speed internet, all designed to support your productivity and business growth.',
  },
  {
    question: 'How fast is the business setup process?',
    answer: 'With our streamlined approach and pre-approved Free Trade Zone (FTZ) templates, you can get your business license in as little as 7 days. This is significantly faster than the typical UAE average of 30 days. Our efficient process eliminates unnecessary delays, allowing you to start your operations quickly and with confidence. By leveraging our ready-to-use templates and expert support, setting up your business becomes a smooth and hassle-free experience.',
  },
  
  {
    question: 'What makes SOUL different from other UAE incubators?',
    answer: 'SOUL offers startups a 70% funding success rate and a guaranteed business setup within 7 days. With an affordable AED 14,500 all-inclusive license, 4 free visas included, strong mentorship, dedicated support, and supported by Umm Al Quwain Free Trade Zone, SOUL provides a fast, affordable, and well-supported environment for entrepreneurs to launch and grow in the UAE.',
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