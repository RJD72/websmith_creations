import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Footer = () => (
  <footer className="site-footer">
    <div className="container site-footer__top">
      <div className="site-footer__brand">
        <img src={Logo} alt="" width="500" height="500" />
        <div>
          <strong>WebSmith Creations</strong>
          <span>Thoughtful websites for small businesses in Ontario.</span>
        </div>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        <a href="/#work">Work</a>
        <a href="/#services">Services</a>
        <a href="/web-design-huron-county/">Huron County web design</a>
        <a href="/#about">About</a>
        <a href="/#contact">Contact</a>
      </nav>
      <div className="social-links" aria-label="Social media">
        <a
          href="https://www.instagram.com/websmithcreations/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WebSmith Creations on Instagram (opens in a new tab)"
        >
          <FaInstagram aria-hidden="true" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61555314021587"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WebSmith Creations on Facebook (opens in a new tab)"
        >
          <FaFacebookF aria-hidden="true" />
        </a>
      </div>
    </div>
    <div className="container site-footer__bottom">
      <p>
        © {new Date().getFullYear()} WebSmith Creations. All rights reserved.
      </p>
      <a href="#top">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
