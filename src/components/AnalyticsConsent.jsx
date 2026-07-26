import { useEffect, useState } from "react";
import {
  getAnalyticsConsent,
  setAnalyticsConsent,
  trackEvent,
  trackPageView,
} from "../lib/analytics";

const AnalyticsConsent = () => {
  const [consent, setConsent] = useState(() => getAnalyticsConsent());

  useEffect(() => {
    if (consent === "granted") trackPageView();
  }, [consent]);

  useEffect(() => {
    const trackClick = (event) => {
      const element = event.target.closest("[data-analytics-event]");
      if (!element) return;

      trackEvent(element.dataset.analyticsEvent, {
        click_label:
          element.dataset.analyticsLabel || element.textContent.trim(),
        click_location: element.dataset.analyticsLocation || "unknown",
        destination_url: element.href || undefined,
        client_name: element.dataset.analyticsClient || undefined,
      });
    };

    document.addEventListener("click", trackClick);
    return () => document.removeEventListener("click", trackClick);
  }, []);

  if (consent) return null;

  const chooseConsent = (choice) => {
    setAnalyticsConsent(choice);
    setConsent(choice);
  };

  return (
    <aside
      className="consent-banner"
      aria-labelledby="analytics-consent-title"
    >
      <div>
        <strong id="analytics-consent-title">A quick privacy choice</strong>
        <p>
          WebSmith Creations uses optional analytics to understand which pages
          are useful. Analytics is off until you choose to allow it.
        </p>
      </div>
      <div className="consent-banner__actions">
        <button
          className="button button--secondary"
          type="button"
          onClick={() => chooseConsent("denied")}
        >
          Decline
        </button>
        <button
          className="button button--primary"
          type="button"
          onClick={() => chooseConsent("granted")}
        >
          Allow analytics
        </button>
      </div>
    </aside>
  );
};

export default AnalyticsConsent;
