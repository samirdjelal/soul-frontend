import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import FAQsSection from '../../features/landing/FAQsSection';
import GetInTouchSection from '../../features/landing/GetInTouchSection';
import './soul-inaugurated-as-uaq-new-hub.css';

const SoulInauguratedUAQPage: React.FC = () => {
  const eventImage = '/home/Events/event-main.png';

  return (
    <MainLayout>
      {/* Article content */}
      <section className="event-detail-content">
        <div className="event-detail-card">
          <h1>
            SOUL Inaugurated as UAQ Free Trade Zone’s New Hub for Startup Innovation and Growth

            <p
              style={{
                fontSize: '16px',
                color: 'var(--primary-color)',
                fontWeight: 'bold',
                marginTop: '10px',
              }}
            >
              2024-05-20
              
            </p>
          </h1>
          <img
            src={eventImage}
            alt="SOUL Inaugurated as UAQ Free Trade Zone’s New Hub for Startup Innovation and Growth"
            className="event-detail-image"
          />

          <p><strong>soul startup incubator</strong></p>
          <p>
            The Umm Al Quwain Free Trade Zone (UAQ FTZ) has officially opened SOUL
            (Startup One UAQ Launchpad). This new startup incubator aims to empower
            local and international entrepreneurs. It provides a space for high-growth,
            tech-focused ventures to thrive in the UAE. Moreover, the inauguration
            ceremony featured esteemed guests, including Sheikh Khalid bin Rashid Al Mualla,
            Chairman of UAQ FTZ, and Sheikh Mansoor Bin Ibrahim Al Mu’alla,
            Director of Ports, Customs, and Free Zone Corporation.
          </p>

          <h2>A Commitment to High-Growth Sectors</h2>
          <p>
            SOUL startup incubator is dedicated to supporting startups in critical tech
            fields. These include AI, Blockchain, Fintech, EdTech, PropTech, Reg-Tech,
            and Robotics. By fostering talent in these areas, SOUL aims to contribute to
            the UAE’s vision of becoming a global leader in technology and innovation.
            Additionally, it provides essential resources for entrepreneurs who want
            to establish themselves in the UAE and scale within the broader GCC market.
          </p>

          <blockquote>
            “SOUL’s objective is to create an innovation hub,” said Mr. Johnson M. George,
            General Manager of UAQ FTZ. He explained that the incubator supports startups
            in their journey to become key players in the UAE and GCC markets. With its
            structured programs, SOUL provides the resources and guidance that startups
            need to overcome challenges and grow quickly.
          </blockquote>

          <h2>A Comprehensive Ecosystem for Startup Success</h2>
          <p>
            At SOUL, entrepreneurs will find various services tailored to drive success.
            These services include incubation, mentorship, market access, and MVP validation.
            Furthermore, SOUL hosts structured programs featuring workshops, networking
            events, and pitch days. As a result, this collaborative environment allows
            startups to refine their ideas and connect with potential investors.
          </p>

          <h2>Targeted Mentorship for Accelerated Growth</h2>
          <p>
            In addition to its services, SOUL’s mentorship program is distinct. It focuses
            specifically on startups that already have an MVP or seek validation for their
            business models. Dr. Hisham Safadi, founder of UDENZ and a mentor at SOUL,
            emphasizes this support: “SOUL offers targeted assistance to startups ready to
            validate or refine their business models. Consequently, this mentorship is
            invaluable for those looking to scale quickly.”
          </p>

          <h2>Aligning with the UAE’s Vision for Innovation</h2>
          <p>
            The launch of SOUL is a significant milestone in the UAE’s commitment to
            fostering a technology-driven economy. By supporting high-impact startups,
            SOUL reinforces the UAE’s position as a hub for innovation and entrepreneurship.
            It also contributes to the region’s growth and development.
          </p>

          <p>
            Join SOUL here today and be part of this exciting journey!
          </p>
        </div>
      </section>

      {/* Registration form */}
      <section className="event-registration-section">
        <div className="event-registration-card">
          <h2>Register Your Interest</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments</label>
              <textarea id="comments" name="comments" rows={4} />
            </div>
            <button type="submit" className="form-submit-button">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* FAQ and contact */}
      <section id="faqs">
        <FAQsSection />
      </section>
      <section id="contact">
        <GetInTouchSection />
      </section>
    </MainLayout>
  );
};

export default SoulInauguratedUAQPage;
