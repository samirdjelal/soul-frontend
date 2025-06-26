// src/features/landing/GetInTouchSection.tsx
import React, { useState} from 'react';
import type { ChangeEvent } from 'react';
import './GetInTouchSection.css';

const FORM_ENDPOINT = 'https://formspree.io/f/xanjpkjd';

type Status = 'idle' | 'sending' | 'success' | 'error';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  agree: boolean;
}

const GetInTouchSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    message: '',
    agree: false,
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement; // Type assertion
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    const { firstName, lastName, email, phone, topic, message, agree } = formData;
    if (!firstName || !lastName || !email || !phone || !topic || !message || !agree) {
      setErrorMsg('Please complete all fields and agree to Terms.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'First Name': firstName,
          'Last Name': lastName,
          Email: email,
          'Phone Number': phone,
          Topic: topic,
          Message: message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          topic: '',
          message: '',
          agree: false,
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
      <section className="getintouch-section">
        <div className="container-wrapper">
          <div className="getintouch-card">
            <div className="getintouch-content">
              <p style={{ padding: '2rem', textAlign: 'center', fontWeight: 600 }}>
                🎉 Thanks for getting in touch! We'll reply to you shortly.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="getintouch-section">
      <div className="container-wrapper">
        <div className="getintouch-card">
          <div className="getintouch-content">
            <div className="getintouch-left">
              <h4>Connect</h4>
              <h2>Get in Touch</h2>
              <p>We're here to answer your questions and assist you.</p>

              <div className="contact-details">
                <div className="contact-detail">
                  <span className="icon">📧</span>
                  <a href="mailto:soul@uaqftza.com" className="contact-info">soul@uaqftza.com</a>
                </div>
                <div className="contact-detail">
                  <span className="icon">📞</span>
                  <a href="tel:+97165799882" className="contact-info">+971 6 579 9882</a>
                </div>
                <div className="contact-detail">
                  <span className="icon">📍</span>
                  <p className="contact-info">
                    G001-G002 Atrium Tower, UAQ Free Trade Zone Authority,<br />
                    Umm Al Quwain, UAE
                  </p>
                </div>
              </div>
            </div>

            <div className="getintouch-right">
              {status === 'error' && (
                <p style={{ color: '#b00020', marginBottom: '1rem', textAlign: 'center' }}>
                  {errorMsg}
                </p>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <input
                      name="phone"
                      type="text"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-field">
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a Topic</option>
                    <option>Partnership Inquiry</option>
                    <option>Program Details</option>
                    <option>Investment Inquiry</option>
                  </select>
                </div>
                <div className="form-field">
                  <textarea
                    name="message"
                    placeholder="Write your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-field checkbox-field">
                  <label className="checkbox">
                    <input
                      name="agree"
                      type="checkbox"
                      checked={formData.agree}
                      onChange={handleChange}
                      required
                    />
                    <span>I agree to Terms</span>
                  </label>
                </div>
                <button
                  type="submit"
                  className="submit-button"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;