import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CaseStudyPage from "./components/CaseStudyPage";
import { caseStudies } from "./data/siteContent";
import "./index.css";

const caseStudy = caseStudies[document.body.dataset.caseStudy];

if (!caseStudy) {
  throw new Error("Unknown case study entry.");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaseStudyPage caseStudy={caseStudy} />
  </StrictMode>
);
