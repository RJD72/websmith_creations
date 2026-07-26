import { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { navigation } from "../data/siteContent";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="/" aria-label="WebSmith Creations home">
          <img
            src={Logo}
            alt="WebSmith Creations"
            width="500"
            height="500"
          />
          <span>WebSmith Creations</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
          <a
            className="button button--small button--primary"
            href="/#contact"
            data-analytics-event="cta_click"
            data-analytics-label="Start a project"
            data-analytics-location="header"
          >
            Start a project
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav
        className={`mobile-nav ${menuOpen ? "mobile-nav--open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        hidden={!menuOpen}
      >
        <div className="container">
          {navigation.map((item) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="button button--primary"
            href="/#contact"
            data-analytics-event="cta_click"
            data-analytics-label="Start a project"
            data-analytics-location="mobile header"
            onClick={() => setMenuOpen(false)}
          >
            Start a project
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
