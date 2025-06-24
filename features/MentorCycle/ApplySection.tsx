// src/features/MentorCycle/ApplySection.tsx
import React, { useState } from 'react';
import './ApplySection.css';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const FORM_ENDPOINT = 'https://formspree.io/f/mpwrynrv';

const ApplySection: React.FC = () => {
  const [data, setData] = useState({
    fullName: '',
    mobile: '',
    supportAdvice: '',
    stage: '',
    joinRoundtables: '',
    peerSupport: '',
    email: '',
    startupName: '',
    challenges: '',
    industry: '',
    workedBefore: '',
    whyJoin: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {
      fullName,
      mobile,
      stage,
      joinRoundtables,
      peerSupport,
      email,
      industry,
    } = data;
    if (
      !fullName ||
      !mobile ||
      !stage ||
      !joinRoundtables ||
      !peerSupport ||
      !email ||
      !industry
    ) {
      setErrorMsg('Please complete all required fields.');
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
          Mobile: data.mobile,
          'Support/Advice': data.supportAdvice,
          'Startup Stage': data.stage,
          'Join Roundtables': data.joinRoundtables,
          'Peer Supporter': data.peerSupport,
          Email: data.email,
          'Startup/Idea Name': data.startupName,
          'Current Challenges': data.challenges,
          Industry: data.industry,
          'Worked With Mentor': data.workedBefore,
          'Why Join': data.whyJoin,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setData({
          fullName: '',
          mobile: '',
          supportAdvice: '',
          stage: '',
          joinRoundtables: '',
          peerSupport: '',
          email: '',
          startupName: '',
          challenges: '',
          industry: '',
          workedBefore: '',
          whyJoin: '',
        });
      } else {
        throw new Error(`Status ${res.status}`);
      }
    } catch {
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
              🎉 Your request to join the Mentorship Circle has been received!
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
            <h3>Join the Mentorship Circle</h3>
            <span className="required-note">
              Required fields <span className="asterisk">*</span>
            </span>
          </div>

          <p className="apply-description">
            Connect with experienced mentors and fellow founders for honest conversations,
            practical advice, and real support.
          </p>

          {status === 'error' && (
            <p className="apply-error">{errorMsg}</p>
          )}

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
                value={data.fullName}
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
                value={data.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>What kind of support or advice are you looking for?</label>
              <input
                name="supportAdvice"
                type="text"
                value={data.supportAdvice}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                What stage is your startup at? <span className="asterisk">*</span>
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
              <label>
                Are you interested in joining monthly founder roundtables?{' '}
                <span className="asterisk">*</span>
              </label>
              <select
                name="joinRoundtables"
                required
                value={data.joinRoundtables}
                onChange={handleChange}
              >
                <option value="">Select one</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-group">
              <label>
                Are you open to being both a mentee and a peer supporter for others?{' '}
                <span className="asterisk">*</span>
              </label>
              <select
                name="peerSupport"
                required
                value={data.peerSupport}
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
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Startup name / idea name (if any)</label>
              <input
                name="startupName"
                type="text"
                value={data.startupName}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>What challenges are you currently facing as a founder?</label>
              <input
                name="challenges"
                type="text"
                value={data.challenges}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>
                What industry is your startup in? <span className="asterisk">*</span>
              </label>
              <input
                name="industry"
                type="text"
                required
                value={data.industry}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Have you ever worked with a mentor before?</label>
              <input
                name="workedBefore"
                type="text"
                value={data.workedBefore}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Why do you want to join the Mentorship Circle?</label>
              <textarea
                name="whyJoin"
                placeholder="A short answer – 50–100 words recommended"
                value={data.whyJoin}
                onChange={handleChange}
              />
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
