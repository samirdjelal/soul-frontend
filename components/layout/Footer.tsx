// src/components/layout/Footer.tsx
import React, { useState } from "react";
import "./Footer.css";

const FORM_ENDPOINT = "https://formspree.io/f/mblyzeyv";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setError("Subscription failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <footer className="footer">
      <div className="container-wrapper">
        <div className="footer-top">
          <div className="newsletter">
            {status === "success" ? (
              <p style={{ color: "#007a29", fontWeight: 600 }}>
                🎉 Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p>Join our newsletter to stay updated on features and releases.</p>
                {error && (
                  <p style={{ color: "#b00020", marginBottom: "0.5rem" }}>
                    {error}
                  </p>
                )}
                <div className="subscribe-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="subscribe-button"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Subscribe"}
                  </button>
                </div>
                <small>
                  By subscribing, you agree to our Privacy Policy and consent to receive updates.
                </small>
              </form>
            )}
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
