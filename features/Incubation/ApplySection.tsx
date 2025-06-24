// src/features/incubation/ApplySection.tsx
import React, { useState } from 'react';
import './ApplySection.css';

const FORM_ENDPOINT = 'https://formspree.io/f/xanjpkel';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const ApplySection: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // trigger HTML5 validation UI
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setStatus('submitting');

    const formData = new FormData(form);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      });
      const json = await res.json();
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(json.error || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    }
  };

  return (
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

          {status === 'success' && (
            <p className="success-message">
              🎉 Thanks for applying! We’ll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="error-message">{errorMessage}</p>
          )}

          <form className="apply-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>
                Full name <span className="asterisk">*</span>
              </label>
              <input type="text" name="name" required />
            </div>

            <div className="form-group">
              <label>
                Email <span className="asterisk">*</span>
              </label>
              <input type="email" name="email" required />
            </div>

            <div className="form-group">
              <label>
                Mobile <span className="asterisk">*</span>
              </label>
              <input type="tel" name="mobile" required />
            </div>

            <div className="form-group">
              <label>Startup name / idea name (if any)</label>
              <input type="text" name="startupName" />
            </div>

            <div className="form-group">
              <label>
                What problem are you trying to solve?{' '}
                <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                name="problem"
                placeholder="Describe your startup idea in 1–2 sentences"
                required
              />
            </div>

            <div className="form-group">
              <label>Who is your target user or customer?</label>
              <input type="text" name="targetUser" />
            </div>

            <div className="form-group">
              <label>
                Do you already have a prototype or MVP?{' '}
                <span className="asterisk">*</span>
              </label>
              <select name="hasMvp" required>
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Have you worked on a startup idea before?{' '}
                <span className="asterisk">*</span>
              </label>
              <select name="workedBefore" required>
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Are you applying as a team or solo founder?{' '}
                <span className="asterisk">*</span>
              </label>
              <select name="teamOrSolo" required>
                <option value="">Select one</option>
                <option value="Solo founder">Solo founder</option>
                <option value="Team">Team</option>
              </select>
            </div>

            <div className="form-group">
              <label>What would you like to achieve during this incubation program?</label>
              <textarea
                name="goal"
                placeholder="A short answer – 50–100 words recommended"
              />
            </div>

            <div className="form-group">
              <label>Briefly introduce your team (if any)</label>
              <textarea
                name="teamIntro"
                placeholder="A few lines about your background & teammates"
              />
            </div>

            <button
              type="submit"
              className="apply-button"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Submitting…' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;
