// src/pages/events/uaqftz-emerges-future-best-destination.tsx
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import FAQsSection from '../../features/landing/FAQsSection';
import GetInTouchSection from '../../features/landing/GetInTouchSection';
import './uaqftz-emerges-future-best-destination.css';

const UAQFTZEventPage: React.FC = () => {
  const eventImage = '/home/Events/event-freezone.png';

  return (
    <MainLayout>
      {/* Article content with headline first */}
      <section className="event-detail-content">
        <div className="event-detail-card">
          <h1>UAQFTZ Emerges as Future Best Destination for Startups

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
            alt="UAQFTZ Emerges as Future Best Destination for Startups"
            className="event-detail-image"
          />

          <p><strong>UAQFTZ</strong></p>
          <p>
            Umm Al Quwain Free Trade Zone (UAQFTZ) is quickly emerging as a
            leading hub for startups and innovative businesses in the UAE.
            This rapid growth is positioning UAQFTZ as a prime choice for
            both entrepreneurs and investors. Importantly, the Free Zone
            combines business-friendly policies, strategic incentives, and
            state-of-the-art infrastructure.
          </p>

          <h2>Why UAQ FTZ Attracts Startups</h2>
          <p>
            UAQFTZ’s growth is largely due to its tailored support for
            startups, SMEs, and micro-businesses. Over the past year, more
            than 850 companies have registered here. This highlights UAQFTZ’s
            appeal across diverse sectors, including technology, renewable
            energy, education, and health. These sectors align perfectly
            with the UAE’s vision of sustainable development. Consequently,
            UAQFTZ is a top location for businesses focused on innovation
            and sustainability.
          </p>

          <h2>Key Incentives for Entrepreneurs</h2>
          <ul className="bullet-list">
            <li><strong>100% Foreign Ownership:</strong> Entrepreneurs can fully own their businesses without a local partner.</li>
            <li><strong>Tax Benefits:</strong> Exemptions from corporate & personal income taxes, plus 100% import/export duty relief.</li>
            <li><strong>Repatriation of Profits:</strong> No restrictions on moving capital or profits abroad.</li>
            <li><strong>Cost-Effective Setup:</strong> Affordable registration packages ideal for early-stage startups.</li>
          </ul>

          <h2>Infrastructure Development</h2>
          <p>
            To support its growing business community, UAQFTZ has invested heavily
            in infrastructure. Phase 2 adds new warehouses, offices, and residential
            buildings—giving companies the resources they need to thrive and expand.
          </p>

          <h2>A Future-Focused Vision</h2>
          <p>
            UAQFTZ’s commitment to innovation and sustainability sets it apart.
            By targeting tech, renewables, and education, it aligns with the UAE’s
            long-term economic goals. As the emirate evolves, UAQFTZ will play a
            key role in shaping its growth. For startups seeking a supportive,
            cost-efficient, world-class environment, UAQFTZ offers an exceptional
            opportunity.
          </p>

          <p>
            For more details on setting up in UAQ Free Trade Zone, visit their
            official website and discover how you can join this thriving community.
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

      {/* FAQs & Contact */}
      <section id="faqs">
        <FAQsSection />
      </section>
      <section id="contact">
        <GetInTouchSection />
      </section>
    </MainLayout>
  );
};

export default UAQFTZEventPage;
