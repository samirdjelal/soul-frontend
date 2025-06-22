// src/components/layout/Footer.tsx
import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container-wrapper">
        <div className="footer-top">
          <div className="newsletter">
            <p>Join our newsletter to stay updated on features and releases.</p>
            <div className="subscribe-row">
              <input type="email" placeholder="Enter your email" />
              <button className="subscribe-button">Subscribe</button>
            </div>
            <small>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates.
            </small>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#">
                <i className="fas fa-home"></i> Home
              </a>
              <a href="#">
                <i className="fas fa-briefcase"></i> Our Services
              </a>
              <a href="#">
                <i className="fas fa-trophy"></i> Success Stories
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i> Contact Us
              </a>
            </div>
            <div className="footer-col">
              <h4>About</h4>
              <a href="#">
                <i className="fas fa-question-circle"></i> FAQs
              </a>
              <a href="#">
                <i className="fas fa-info-circle"></i> About us
              </a>
              <a href="#">
                <i className="fas fa-graduation-cap"></i> Programs
              </a>
            </div>
            <div className="footer-col social">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2025 Soul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;