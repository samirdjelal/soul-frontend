import React, { useCallback } from 'react';
import MainLayout from '../../layouts/MainLayout';
import GetInTouchSection from '../../features/landing/GetInTouchSection';
import './the-future-of-tech-startups.css';

const FutureTechStartupsPage: React.FC = () => {
  const scrollToContact = useCallback(() => {
    const sec = document.getElementById('contact');
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <MainLayout>
      {/* Article */}
      <section className="blog-detail-content">
        <div className="blog-detail-card">
          <h1>The Future of Tech Startups</h1>
          <img
            src="/home/blogs/blog2.png"
            alt="The Future of Tech Startups"
            className="blog-detail-image"
          />
          <p>
            Technology startups are constantly reshaping how we live and work. From
            AI-driven automation to decentralized finance, today’s entrepreneurs are
            pushing the boundaries of what’s possible. In this overview, we explore the
            major trends—like machine learning, IoT, and blockchain—that are driving
            the next wave of innovation.
          </p>
          <p>
            But every breakthrough brings new challenges, whether it’s navigating
            complex regulations or scaling infrastructure to meet explosive demand.
            We’ll discuss strategies for staying agile—embracing open source,
            partnering with incumbents, and adopting cloud-native architectures—to
            ensure your startup not only survives but thrives.
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

export default FutureTechStartupsPage;
