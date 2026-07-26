import AnalyticsConsent from "./AnalyticsConsent";
import Footer from "./Footer";
import Header from "./Header";

const SiteLayout = ({ children }) => (
  <>
    <a className="skip-link" href="#main-content">
      Skip to main content
    </a>
    <Header />
    <main id="main-content">{children}</main>
    <Footer />
    <AnalyticsConsent />
  </>
);

export default SiteLayout;
