// src/features/landing/GetInTouchSection.tsx
import React from 'react';
import './GetInTouchSection.css';

const GetInTouchSection: React.FC = () => {
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
              <div className="form-row">
                <div className="form-field">
                  <input type="text" placeholder="First Name" />
                </div>
                <div className="form-field">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-field">
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form-field">
                  <input type="text" placeholder="Phone Number" />
                </div>
              </div>
              <div className="form-field">
                <select>
                  <option>Select a Topic</option>
                  <option>Partnership Inquiry</option>
                  <option>Program Details</option>
                  <option>Investment Inquiry</option>
                </select>
              </div>
              <div className="form-field">
                <textarea placeholder="Write your message..." rows={5}></textarea>
              </div>
              <div className="form-field checkbox-field">
                <label className="checkbox">
                  <input type="checkbox" />
                  <span>I agree to Terms</span>
                </label>
              </div>
              <button type="submit" className="submit-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;