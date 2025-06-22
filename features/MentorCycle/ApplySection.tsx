// src/features/MentorCycle/ApplySection.tsx
import React from 'react';
import './ApplySection.css';

const ApplySection: React.FC = () => (
  <section className="apply-section">
    <div className="apply-card">
      <div className="apply-container">
        <div className="apply-header">
          <h3>Join the Mentorship Circle</h3>
          <span className="required-note">
            Required fields <span className="asterisk">*</span>
          </span>
        </div>

        <p className="apply-description">
          Connect with experienced mentors and fellow founders for honest
          conversations, practical advice, and real support.
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
            <label>What kind of support or advice are you looking for?</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>
              What stage is your startup at? <span className="asterisk">*</span>
            </label>
            <select required>
              <option value="">Select stage</option>
              <option>Idea</option>
              <option>Prototype</option>
              <option>Revenue</option>
              <option>Scaling</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              Are you interested in joining monthly founder roundtables?{' '}
              <span className="asterisk">*</span>
            </label>
            <select required>
              <option value="">Select one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group">
            <label>
              Are you open to being both a mentee and a peer supporter for
              others? <span className="asterisk">*</span>
            </label>
            <select required>
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
            <label>Startup name / idea name (if any)</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>What challenges are you currently facing as a founder?</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>
              What industry is your startup in? <span className="asterisk">*</span>
            </label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Have you ever worked with a mentor before?</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Why do you want to join the Mentorship Circle?</label>
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
