import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@/App";

/* Order matters: tokens define the custom properties everything else reads,
   then base elements, then components, then the inferred responsive layer last
   so its media queries win. */
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/sections.css";
import "@/styles/responsive.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
