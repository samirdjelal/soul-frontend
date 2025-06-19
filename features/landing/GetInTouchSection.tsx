// src/features/landing/GetInTouchSection.tsx

import React from 'react';
import './GetInTouchSection.css';

const GetInTouchSection: React.FC = () => {
  return (
    <section className="getintouch-section">
      <div className="getintouch-left">
        <h4>Connect</h4>
        <h2>Get in Touch</h2>
        <p>We’re here to answer your questions and assist you.</p>

        <div className="contact-detail">
          <span>📧</span>
          <a href="mailto:soul@uaqftza.com">soul@uaqftza.com</a>
        </div>
        <div className="contact-detail">
          <span>📞</span>
          <a href="tel:+97165799882">+971 6 579 9882</a>
        </div>
        <div className="contact-detail">
          <span>📍</span>
          <p>
            G001-G002 Atrium Tower, UAQ Free Trade Zone Authority,<br />
            Umm Al Quwain, UAE
          </p>
        </div>
      </div>

      <div className="getintouch-right">
        <div className="row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="row">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
        </div>
        <select>
          <option>Select a Topic</option>
          <option>Partnership Inquiry</option>
          <option>Program Details</option>
          <option>Investment Inquiry</option>
        </select>
        <textarea placeholder="Write your message..." rows={5}></textarea>

        <label className="checkbox">
          <input type="checkbox" />
          I agree to Terms
        </label>

        <button type="submit">Send</button>
      </div>
    </section>
  );
};

export default GetInTouchSection;
