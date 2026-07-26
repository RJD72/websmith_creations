const GA_MEASUREMENT_ID = "G-D6NBCP0CZM";
const CONSENT_STORAGE_KEY = "websmith-analytics-consent";
const trackedPageViews = new Set();

let analyticsInitialized = false;

export const getAnalyticsConsent = () => {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
};

export const initializeAnalytics = () => {
  if (
    typeof window === "undefined" ||
    getAnalyticsConsent() !== "granted"
  ) {
    return false;
  }

  if (analyticsInitialized) return true;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false,
  });

  if (!document.getElementById("websmith-ga4-script")) {
    const script = document.createElement("script");
    script.id = "websmith-ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  analyticsInitialized = true;
  return true;
};

export const setAnalyticsConsent = (consent) => {
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, consent);
  } catch {
    return;
  }

  if (consent === "granted") initializeAnalytics();
};

export const trackPageView = () => {
  if (!initializeAnalytics()) return;

  const pagePath = `${window.location.pathname}${window.location.search}`;
  if (trackedPageViews.has(pagePath)) return;

  trackedPageViews.add(pagePath);
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: pagePath,
    page_title: document.title,
  });
};

export const trackEvent = (eventName, parameters = {}) => {
  if (!initializeAnalytics()) return;
  window.gtag("event", eventName, parameters);
};
