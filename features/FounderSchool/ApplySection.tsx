// src/features/FounderSchool/ApplySection.tsx
import React, { useState } from 'react';
import './ApplySection.css';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const FORM_ENDPOINT = 'https://formspree.io/f/manjpkod';

const ApplySection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    startupName: '',
    interests: '',
    updates: '',
    email: '',
    hasStartup: '',
    stage: '',
    why: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic HTML5 required-field check
    if (!formData.fullName || !formData.mobile || !formData.email) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'Full Name': formData.fullName,
          Mobile: formData.mobile,
          'Startup Name': formData.startupName,
          Interests: formData.interests,
          'Receive Updates': formData.updates,
          Email: formData.email,
          'Have Startup': formData.hasStartup,
          'Startup Stage': formData.stage,
          'Why Join': formData.why,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({
          fullName: '',
          mobile: '',
          startupName: '',
          interests: '',
          updates: '',
          email: '',
          hasStartup: '',
          stage: '',
          why: '',
        });
      } else {
        throw new Error(`Status ${res.status}`);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Submission failed. Please try again later.');
      setStatus('error');
    }
  };

  return (
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

          <form className="apply-form" onSubmit={handleSubmit} noValidate>
            {/* left column */}
            <div className="form-group">
              <label>
                Full name <span className="asterisk">*</span>
              </label>
              <input
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                Mobile <span className="asterisk">*</span>
              </label>
              <input
                name="mobile"
                type="tel"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>If yes, what is the name of your startup?</label>
              <input
                name="startupName"
                type="text"
                placeholder="Describe your startup idea in 1–2 sentences"
                value={formData.startupName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>What skills or topics are you most interested in?</label>
              <input
                name="interests"
                type="text"
                placeholder="e.g. funding, marketing, leadership, product development"
                value={formData.interests}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Would you like to receive updates and resources from SOUL?</label>
              <select
                name="updates"
                value={formData.updates}
                onChange={handleChange}
              >
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
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Do you currently have a startup or idea?</label>
              <input
                name="hasStartup"
                type="text"
                value={formData.hasStartup}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>What stage is your startup or idea at?</label>
              <select
                name="stage"
                value={formData.stage}
                onChange={handleChange}
              >
                <option value="">Select stage</option>
                <option>Idea</option>
                <option>Prototype</option>
                <option>Revenue</option>
                <option>Scaling</option>
              </select>
            </div>
            <div className="form-group">
              <label>Why do you want to join Founder School?</label>
              <textarea
                name="why"
                placeholder="A short answer – 50–100 words recommended"
                value={formData.why}
                onChange={handleChange}
              />
            </div>

            {errorMsg && <p className="apply-error">{errorMsg}</p>}
            {status === 'success' && (
              <p className="apply-success">Thank you! We’ll be in touch soon.</p>
            )}

            <button
              type="submit"
              className="apply-button"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Submitting…' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;
