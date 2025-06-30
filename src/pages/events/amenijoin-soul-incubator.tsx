// src/pages/events/amenijoin-soul-incubator.tsx
import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import FAQsSection from '../../features/landing/FAQsSection';
import GetInTouchSection from '../../features/landing/GetInTouchSection';
import './amenijoin-soul-incubator.css';

const AmeniJoinSoulIncubatorPage: React.FC = () => {
  const eventImage = '/home/Events/event-ameni.png';

  return (
    <MainLayout>
      {/* Article content with headline first */}
      <section className="event-detail-content">
        <div className="event-detail-card">
          <h1>Ameni Joins SOUL Incubator: Shaping Tomorrow’s Tech
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
            alt="Ameni Joins SOUL Incubator: Shaping Tomorrow’s Tech"
            className="event-detail-image"
          />

          <p><strong>Ameni Onboarding in SOUL incubator programme</strong></p>
          <p>
            We are thrilled to announce that Ameni, a leader in computer systems,
            communication equipment, software design, and IT consulting, has officially
            joined the Soul Incubator program at the UAQ Free Trade Zone. This milestone
            not only marks a significant achievement for Ameni but also sets the stage
            for groundbreaking advancements in technology. As a result, the program is
            poised to drive innovation and create exciting opportunities within the
            tech landscape.
          </p>

          <h2>Empowering Innovation</h2>
          <p>
            Moreover, the UAQ Free Trade Zone is renowned for its business-friendly
            policies and cutting-edge infrastructure. Consequently, it provides a
            thriving ecosystem for emerging enterprises. By offering tax incentives,
            streamlined regulatory processes, and state-of-the-art facilities, the
            Free Trade Zone establishes an ideal environment for startups to launch
            and scale their operations. Additionally, the combination of the Soul
            Incubator’s resources and the Free Trade Zone’s strategic advantages
            positions new ventures for both success and innovation.
          </p>

          <h2>A Hub for Creativity</h2>
          <p>
            Located in the UAQ Free Trade Zone, the Soul Incubator stands out as a top
            destination for startups and innovators. In particular, it offers a
            supportive environment that fosters creativity and growth. Furthermore,
            the incubator is well-known for its dedication to providing comprehensive
            mentorship and valuable networking opportunities.
          </p>

          <h2>Looking Ahead</h2>
          <p>
            Therefore, stay tuned for updates on Ameni’s progress and the exciting
            developments emerging from the Soul Incubator program. For more insights
            and news, visit our website and follow us on social media.
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

export default AmeniJoinSoulIncubatorPage;
