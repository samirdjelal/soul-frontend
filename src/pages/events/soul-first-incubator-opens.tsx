import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import FAQsSection from '../../features/landing/FAQsSection';
import GetInTouchSection from '../../features/landing/GetInTouchSection';
import './soul-first-incubator-opens.css';

const SoulFirstIncubatorOpensPage: React.FC = () => {
  const eventImage = '/home/Events/event-techinc.png'; // reuse the 3rd card image

  return (
    <MainLayout>
      {/* Article content with headline first */}
      <section className="event-detail-content">
        <div className="event-detail-card">
          <h1>SOUL: The First Incubator Opens soon in Umm Al Qaiwain

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
            alt="SOUL: The First Incubator Opens soon in Umm Al Qaiwain"
            className="event-detail-image"
          />

          <p><strong>soul opening</strong></p>
          <p>
            We are thrilled to announce the grand opening of our new incubator,
            SOUL under the UAQ Free Trade Zone, in the vibrant emirate of Umm al Qaiwain!
            Indeed, this milestone marks a significant step in our journey to foster
            innovation, creativity, and entrepreneurship in the region.
          </p>

          <h2>Why Umm al Qaiwain?</h2>
          <p>
            To begin with, Umm al Qaiwain, with its rich heritage and forward-looking
            vision, offers the perfect backdrop for our incubator. Moreover, known for
            its serene environment and strategic location, this emirate provides an
            ideal setting for startups to grow and thrive. As a result, we believe
            that by setting up SOUL in Umm al Qaiwain, we can tap into the unique
            opportunities this region offers, fostering a new wave of innovation and
            economic growth.
          </p>

          <h2>What is SOUL?</h2>
          <p>
            SOUL is more than just an incubator; it’s a nurturing ground for dreams
            and ideas. At SOUL, we understand that every startup has its unique
            journey, and we are here to support that journey from inception to success.
            Our incubator offers a comprehensive suite of services, including:
          </p>
          <ul className="bullet-list">
            <li><strong>Mentorship and Guidance:</strong> Access to experienced mentors who can provide invaluable insights and advice.</li>
            <li><strong>Workspace Solutions:</strong> State-of-the-art facilities designed to inspire creativity and productivity.</li>
            <li><strong>Networking Opportunities:</strong> Connect with industry leaders, potential investors, and like-minded entrepreneurs.</li>
            <li><strong>Funding Support:</strong> Assistance in securing funding to take your startup to the next level.</li>
          </ul>

          <h2>Our Vision</h2>
          <p>
            At SOUL, our vision is to create a dynamic ecosystem where startups can
            flourish. Furthermore, we aim to be a catalyst for innovation, providing
            the resources and support needed for entrepreneurs to turn their ideas
            into successful ventures. Therefore, we are committed to fostering a
            community where creativity and collaboration thrive, contributing to
            the economic development of Umm al Qaiwain and beyond.
          </p>

          <h2>Join Us at the Grand Opening</h2>
          <p>
            We warmly invite you to join us for the grand opening of SOUL Incubator
            in Umm al Qaiwain next month. In fact, this event will be an opportunity
            to meet our team, explore our facilities, and learn more about the exciting
            opportunities we offer. Stay tuned for more details about the date and time
            of the event.
          </p>

          <h2>Get Involved</h2>
          <p>
            Whether you are a budding entrepreneur with a groundbreaking idea, an investor
            looking for the next big opportunity, or a mentor with valuable experience
            to share, SOUL Incubator welcomes you. Together, we can build a thriving
            ecosystem that nurtures innovation and drives success.
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

export default SoulFirstIncubatorOpensPage;
