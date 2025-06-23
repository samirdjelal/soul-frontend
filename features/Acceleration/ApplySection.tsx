import React from 'react';
import './ApplySection.css';

const ApplySection: React.FC = () => (
  <section className="apply-section">
    <div className="apply-card">
      <div className="apply-container">
        <div className="apply-header">
          <h3>Apply for the Acceleration Program</h3>
          <span className="required-note">
            Required fields <span className="asterisk">*</span>
          </span>
        </div>

        <p className="apply-description">
          Tell us about your startup and take the first step towards scaling globally.
        </p>

        <form className="apply-form">
          {/* Row 1 */}
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

          {/* Row 2 */}
          <div className="form-group">
            <label>
              Mobile <span className="asterisk">*</span>
            </label>
            <input type="tel" required />
          </div>
          <div className="form-group">
            <label>
              Startup name <span className="asterisk">*</span>
            </label>
            <input type="text" required />
          </div>

          {/* Row 3 */}
          <div className="form-group">
            <label>Website / App Link (if any)</label>
            <input type="url" placeholder="https://..." />
          </div>
          <div className="form-group">
            <label>
              What does your startup do? <span className="asterisk">*</span>
            </label>
            <input type="text" required />
          </div>

          {/* Row 4 */}
          <div className="form-group">
            <label>
              Do you have a working product? <span className="asterisk">*</span>
            </label>
            <select required>
              <option value="">Select one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group">
            <label>How many people are on your team?</label>
            <input type="number" min="1" />
          </div>

          {/* Row 5 */}
          <div className="form-group">
            <label>
              What stage are you at? <span className="asterisk">*</span>
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
            <label>Why do you want to join this program?</label>
            <textarea placeholder="A short answer – 50–100 words recommended" />
          </div>

          {/* Row 6 */}
          <div className="form-group">
            <label>
              Do you have a technical co-founder? <span className="asterisk">*</span>
            </label>
            <select required>
              <option value="">Select one</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          {/* intentionally leave the next cell blank */}

          {/* Submit */}
          <button type="submit" className="apply-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default ApplySection;
