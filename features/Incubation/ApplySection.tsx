// src/features/incubation/ApplySection.tsx
import React from "react";
import "./ApplySection.css";

const ApplySection: React.FC = () => {
  return (
    <section className="apply-section">
      <div className="apply-header">
        <h3>Apply for the Incubation Program</h3>
        <p>
          Turn your idea into a real product. Share your vision and join a
          supportive community of early-stage founders.ng globally.
        </p>
        <span className="apply-required">Required fields.<sup>*</sup></span>
      </div>

      <form className="apply-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Full name<sup>*</sup></label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email<sup>*</sup></label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Mobile<sup>*</sup></label>
            <input type="tel" required />
          </div>
          <div className="form-group">
            <label>Startup name / idea name (if any)</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>What problem are you trying to solve?<sup>*</sup></label>
            <input type="text" required placeholder="Describe your startup idea in 1–2 sentences." />
          </div>
          <div className="form-group">
            <label>Who is your target user or customer?</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Do you already have a prototype or MVP?<sup>*</sup></label>
            <select required>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-group">
            <label>Have you worked on a startup idea before?<sup>*</sup></label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Are you applying as a team or solo founder?<sup>*</sup></label>
            <select required>
              <option value="">Select</option>
              <option value="team">Team</option>
              <option value="solo">Solo</option>
            </select>
          </div>
          <div className="form-group">
            <label>What would you like to achieve during this incubation program?</label>
            <textarea placeholder="A short answer – 50–100 words recommended" />
          </div>
          <div className="form-group full-width">
            <label>Briefly introduce your team (if any).</label>
            <select>
              <option value="">Select</option>
              <option value="solo">I'm a solo founder</option>
              <option value="have_team">I have a team</option>
            </select>
          </div>
        </div>

        <div className="apply-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default ApplySection;
