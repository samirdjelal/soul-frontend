import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="newsletter">
          <p>Join our newsletter to stay updated on features and releases.</p>
          <div className="subscribe-row">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <small>
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates.
          </small>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <a href="#">Home</a>
            <a href="#">Our Services</a>
            <a href="#">Success Stories</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-col">
            <a href="#">FAQs</a>
            <a href="#">About us</a>
            <a href="#">Programs</a>
          </div>
          <div className="footer-col social">
            <p>Follow Us</p>
            <a href="#">📘 Facebook</a>
            <a href="#">📸 Instagram</a>
            <a href="#">𝕏 X</a>
            <a href="#">💼 LinkedIn</a>
            <a href="#">▶️ YouTube</a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <p>© 2025 Soul. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
