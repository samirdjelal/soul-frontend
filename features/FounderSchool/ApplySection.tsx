// src/features/FounderSchool/ApplySection.tsx
import React from 'react';
import './ApplySection.css';

const ApplySection: React.FC = () => (
  <section className="apply-section">
    <div className="apply-card">
      <div className="apply-container">
        <div className="apply-header">
          <h3>Join Founder School</h3>
          <span className="required-note">
            Required fields <span className="asterisk">*</span>
          </span>
        </div>

        <p className="apply-description">
          Build essential startup skills with hands-on workshops, inspiring stories,
          and practical tools. Connect with fellow founders ready to learn, grow,
          and take their ideas to the next level.
        </p>

        <form className="apply-form">
          {/* left column */}
          <div className="form-group">
            <label>
              Full name <span className="asterisk">*</span>
            </label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>
              Mobile <span className="asterisk">*</span>
            </label>
            <input type="tel" required />
          </div>
          <div className="form-group">
            <label>If yes, what is the name of your startup?</label>
            <input
              type="text"
              placeholder="Describe your startup idea in 1–2 sentences"
            />
          </div>
          <div className="form-group">
            <label>
              What skills or topics are you most interested in?
            </label>
            <input
              type="text"
              placeholder="e.g. funding, marketing, leadership, product development"
            />
          </div>
          <div className="form-group">
            <label>
              Would you like to receive updates and resources from SOUL?
            </label>
            <select>
              <option value="">Select one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          {/* right column */}
          <div className="form-group">
            <label>
              Email <span className="asterisk">*</span>
            </label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Do you currently have a startup or idea?</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>
              What stage is your startup or idea at?
            </label>
            <select>
              <option value="">Select stage</option>
              <option>Idea</option>
              <option>Prototype</option>
              <option>Revenue</option>
              <option>Scaling</option>
            </select>
          </div>
          <div className="form-group">
            <label>Why do you want to join Founder School?</label>
            <textarea placeholder="A short answer – 50–100 words recommended" />
          </div>

          <button type="submit" className="apply-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ApplySection;
