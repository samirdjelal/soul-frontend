// src/features/Acceleration/ApplySection.tsx
import React, { useState } from 'react';
import './ApplySection.css';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const FORM_ENDPOINT = 'https://formspree.io/f/xrbkydke';

const ApplySection: React.FC = () => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    startupName: '',
    website: '',
    description: '',
    workingProduct: '',
    teamSize: '',
    stage: '',
    whyJoin: '',
    techCoFounder: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // check required fields
    const {
      fullName,
      email,
      mobile,
      startupName,
      description,
      workingProduct,
      stage,
      techCoFounder,
    } = data;
    if (
      !fullName ||
      !email ||
      !mobile ||
      !startupName ||
      !description ||
      !workingProduct ||
      !stage ||
      !techCoFounder
    ) {
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
          'Full Name': data.fullName,
          Email: data.email,
          Mobile: data.mobile,
          'Startup Name': data.startupName,
          'Website / App Link': data.website,
          'What does your startup do?': data.description,
          'Working Product': data.workingProduct,
          'Team Size': data.teamSize,
          'Program Stage': data.stage,
          'Why Join': data.whyJoin,
          'Technical Co-Founder': data.techCoFounder,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setData({
          fullName: '',
          email: '',
          mobile: '',
          startupName: '',
          website: '',
          description: '',
          workingProduct: '',
          teamSize: '',
          stage: '',
          whyJoin: '',
          techCoFounder: '',
        });
      } else {
        throw new Error(`Status ${res.status}`);
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Submission failed. Please try again later.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section className="apply-section">
        <div className="apply-card">
          <div className="apply-container">
            <p className="apply-success">
              🎉 Your application has been received! We’ll review it and get back to you shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
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

          {status === 'error' && (
            <p className="apply-error">{errorMsg}</p>
          )}

          <form className="apply-form" onSubmit={handleSubmit} noValidate>
            {/* Row 1 */}
            <div className="form-group">
              <label>
                Full name <span className="asterisk">*</span>
              </label>
              <input
                name="fullName"
                type="text"
                required
                value={data.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                Email <span className="asterisk">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                value={data.email}
                onChange={handleChange}
              />
            </div>

            {/* Row 2 */}
            <div className="form-group">
              <label>
                Mobile <span className="asterisk">*</span>
              </label>
              <input
                name="mobile"
                type="tel"
                required
                value={data.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                Startup name <span className="asterisk">*</span>
              </label>
              <input
                name="startupName"
                type="text"
                required
                value={data.startupName}
                onChange={handleChange}
              />
            </div>

            {/* Row 3 */}
            <div className="form-group">
              <label>Website / App Link (if any)</label>
              <input
                name="website"
                type="url"
                placeholder="https://..."
                value={data.website}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                What does your startup do? <span className="asterisk">*</span>
              </label>
              <input
                name="description"
                type="text"
                required
                value={data.description}
                onChange={handleChange}
              />
            </div>

            {/* Row 4 */}
            <div className="form-group">
              <label>
                Do you have a working product? <span className="asterisk">*</span>
              </label>
              <select
                name="workingProduct"
                required
                value={data.workingProduct}
                onChange={handleChange}
              >
                <option value="">Select one</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-group">
              <label>How many people are on your team?</label>
              <input
                name="teamSize"
                type="number"
                min="1"
                value={data.teamSize}
                onChange={handleChange}
              />
            </div>

            {/* Row 5 */}
            <div className="form-group">
              <label>
                What stage are you at? <span className="asterisk">*</span>
              </label>
              <select
                name="stage"
                required
                value={data.stage}
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
              <label>Why do you want to join this program?</label>
              <textarea
                name="whyJoin"
                placeholder="A short answer – 50–100 words recommended"
                value={data.whyJoin}
                onChange={handleChange}
              />
            </div>

            {/* Row 6 */}
            <div className="form-group">
              <label>
                Do you have a technical co-founder? <span className="asterisk">*</span>
              </label>
              <select
                name="techCoFounder"
                required
                value={data.techCoFounder}
                onChange={handleChange}
              >
                <option value="">Select one</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

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
