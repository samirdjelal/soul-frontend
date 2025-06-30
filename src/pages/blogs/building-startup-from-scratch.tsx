import React, { useCallback } from 'react';
import MainLayout from '../../layouts/MainLayout';
import GetInTouchSection from '../../features/landing/GetInTouchSection';
import './building-startup-from-scratch.css';

const BuildingStartupPage: React.FC = () => {
  const scrollToContact = useCallback(() => {
    const sec = document.getElementById('contact');
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <MainLayout>
      {/* Article */}
      <section className="blog-detail-content">
        <div className="blog-detail-card">
          <h1>Building a Startup from Scratch</h1>
          <img
            src="/home/blogs/blog1.png"
            alt="Building a Startup from Scratch"
            className="blog-detail-image"
          />
          <p>
            Every successful startup begins with a simple idea—and the courage to pursue it.
            In this article, we’ll walk through the essential first steps: validating your
            concept with real users, mapping out a lean business model, and assembling your
            first MVP to test in the market.
          </p>
          <p>
            Once you have early feedback, the real work begins: refining your product,
            building a small but dedicated team, and securing your first round of seed
            funding. We’ll cover how to prioritize feature development, set up efficient
            workflows, and craft a pitch that resonates with angel investors.
          </p>
          <button
            className="blog-contact-button"
            onClick={scrollToContact}
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact">
        <GetInTouchSection />
      </section>
    </MainLayout>
  );
};

export default BuildingStartupPage;
