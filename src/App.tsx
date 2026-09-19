import { Route, Routes } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Home from "@/pages/Home";

export default function App() {
  return (
    <>
      {/* WCAG 2.4.1. The header carries two rows of links before the content. */}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Inner pages are 100% inferred (spec J-12) and deliberately not
              scaffolded yet: nothing about them is evidenced, and they may never
              be used as precedent to change the home page. */}
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
