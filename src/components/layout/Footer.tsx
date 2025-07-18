// src/components/layout/Footer.tsx
import React, { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const FORM_ENDPOINT = "https://formspree.io/f/mblyzeyv";

type Status = "idle" | "sending" | "success" | "error";

interface NavItem {
  label: string;
  to: string;
  isScroll?: boolean;
}

const quickLinks: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Programs", to: "/#programs", isScroll: true },
  { label: "Success Stories", to: "/#success-stories", isScroll: true },
  { label: "Contact Us", to: "/#contact", isScroll: true },
];

const aboutLinks: NavItem[] = [
  { label: "FAQs", to: "/#faqs", isScroll: true },
  { label: "About us", to: "/#about-us", isScroll: true },
  { label: "Programs", to: "/#programs", isScroll: true },
];

const socialLinks = [
  { label: "Facebook", url: "https://www.facebook.com/SOULUAQFTZ/", icon: "fab fa-facebook-f" },
  { label: "Instagram", url: "https://www.instagram.com/souluaqftz", icon: "fab fa-instagram" },
  { label: "Twitter", url: "https://x.com/souluaqftz", icon: "fab fa-twitter" },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/souluaqftz/", icon: "fab fa-linkedin-in" },
  { label: "YouTube", url: "https://www.youtube.com/@SOULUAQFTZ", icon: "fab fa-youtube" },
];

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const scrollOrNav = useCallback(
    (e: React.MouseEvent, item: NavItem) => {
      if (item.isScroll && pathname === "/") {
        e.preventDefault();
        const id = item.to.replace("/#", "");
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [pathname]
  );

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
                {error && <p style={{ color: "#b00020" }}>{error}</p>}
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
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates.
                </small>
              </form>
            )}
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <h4>Quick Links</h4>
              {quickLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={(e) => scrollOrNav(e, item)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="footer-col">
              <h4>About</h4>
              {aboutLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={(e) => scrollOrNav(e, item)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="footer-col social">
              <h4>Follow Us</h4>
              <div className="social-links">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener"
                  >
                    <i className={s.icon}></i> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2025 SOUL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
