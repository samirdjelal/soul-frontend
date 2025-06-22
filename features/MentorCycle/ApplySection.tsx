// src/features/incubation/ApplySection.tsx
import React from 'react';
import './ApplySection.css';

const ApplySection: React.FC = () => (
  <section className="apply-section">
    <div className="apply-card">

  
    <div className="apply-container">
      <div className="apply-header">
        <h3>Apply for the Incubation Program</h3>
        <span className="required-note">
          Required fields <span className="asterisk">*</span>
        </span>
      </div>

      <p className="apply-description">
        Turn your idea into a real product. Share your vision and join a
        supportive community of early-stage founders globally.
      </p>

      <form className="apply-form">
        <div className="form-group">
          <label>
            Full name <span className="asterisk">*</span>
          </label>
          <input type="text" required />
        </div>
        <div className="form-group">
          <label>
            Email <span className="asterisk">*</span>
          </label>
          <input type="email" required />
        </div>
        <div className="form-group">
          <label>
            Mobile <span className="asterisk">*</span>
          </label>
          <input type="tel" required />
        </div>
        <div className="form-group">
          <label>Startup name / idea name (if any)</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>
            What problem are you trying to solve?{' '}
            <span className="asterisk">*</span>
          </label>
          <input
            type="text"
            placeholder="Describe your startup idea in 1–2 sentences"
            required
          />
        </div>
        <div className="form-group">
          <label>Who is your target user or customer?</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>
            Do you already have a prototype or MVP?{' '}
            <span className="asterisk">*</span>
          </label>
          <select required>
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            Have you worked on a startup idea before?{' '}
            <span className="asterisk">*</span>
          </label>
          <select required>
            <option value="">Select an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            Are you applying as a team or solo founder?{' '}
            <span className="asterisk">*</span>
          </label>
          <select required>
            <option value="">Select one</option>
            <option>Solo founder</option>
            <option>Team</option>
          </select>
        </div>
        <div className="form-group">
          <label>What would you like to achieve during this incubation program?</label>
          <textarea placeholder="A short answer – 50–100 words recommended" />
        </div>
        <div className="form-group">
          <label>Briefly introduce your team (if any)</label>
          <textarea placeholder="A few lines about your background & teammates" />
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
