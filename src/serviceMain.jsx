import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HuronCountyPage from "./components/HuronCountyPage";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HuronCountyPage />
  </StrictMode>
);
