import { Route, Routes } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Expertise from "@/pages/Expertise";
import Entities from "@/pages/Entities";
import Training from "@/pages/Training";
import Contact from "@/pages/Contact";
import { useReveal } from "@/hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/entities" element={<Entities />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
