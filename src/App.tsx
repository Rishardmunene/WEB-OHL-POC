import { Route, Routes } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Home from "@/pages/Home";

/* Stage 0 routing shell. The 15 inner pages from decision B5 arrive in Stage 9;
   they have no visual evidence and are built from the home page's system. */
export default function App() {
  return (
    <>
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
