import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import Education from "../components/Education.jsx";
import Skill from "../components/Skill.jsx";
import GetInTouch from "../components/GetInTouch.jsx";
import Extensions from "../components/Extensions.jsx";
import Footer from "../components/Footer.jsx";
import Error404 from "../components/OtherComponents/Error404.jsx";
import SystemPolicies from "../components/OtherComponents/SystemPolicies.jsx";
import Analysis from "../components/Analysis.jsx";

const ScrollToSection = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const sectionId = pathname.replace(/^\/|\/$/g, "");

    // 1. Root path: Scroll top
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const scrollToElement = () => {
      const element = document.getElementById(sectionId);
      if (element) {
        // 2. Element found: Smooth scroll with offset
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        // 3. Element not found: Snap to top
        window.scrollTo(0, 0);
      }
    };

    scrollToElement();

    const timer = setTimeout(scrollToElement, 100);
    return () => clearTimeout(timer);

    // 'key' and 'hash' to dependencies to trigger on re-clicks
  }, [pathname, hash, key]);

  return null;
};

// Map IDs for smooth scrolling targets
const HomeLayout = () => (
  <>
    <div id="home">
      <Hero />
    </div>
    <div id="education">
      <Education />
    </div>
    <div id="skills">
      <Skill />
    </div>
    <div id="getintouch">
      <GetInTouch />
    </div>
    <div id="extensions">
      <Extensions />
    </div>
  </>
);

const App = () => {
  const [showPolicies, setShowPolicies] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showPolicies ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showPolicies]);

  return (
    <BrowserRouter>
      <ScrollToSection />

      <div className="bg-black min-h-screen relative selection:bg-cyan-500/30">
        {/* Global Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px]"></div>
        </div>

        <Nav />

        <Routes>
          {/* Home Layout Routes */}
          {[
            "/",
            "/home",
            "/education",
            "/skills",
            "/getintouch",
            "/extensions",
          ].map((path) => (
            <Route key={path} path={path} element={<HomeLayout />} />
          ))}

          {/* Standalone Routes */}
          <Route path="/analysis" element={<Analysis />} />

          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer onShowPolicies={() => setShowPolicies(true)} />

        {showPolicies && (
          <SystemPolicies onClose={() => setShowPolicies(false)} />
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
