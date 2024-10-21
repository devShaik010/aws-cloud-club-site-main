import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Hero from "../Components/Hero/Hero";
import Benefits from "../Components/Benefits/Benefits";
import Footer from "../Components/Footer/Footer";
import CtaSection from "../Components/CtaSection/CtaSection";
import IntroSection from "../Components/IntroSection/IntroSection";
import Loader from "../Components/Loader/Loader";

function Home() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check local storage to see if the loader has been shown
    const hasLoaded = localStorage.getItem("hasLoaded");

    if (!hasLoaded) {
      // If not loaded, show loader and set a timeout
      const loadingTimeout = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("hasLoaded", "true"); // Mark as loaded
      }, 3500);

      return () => clearTimeout(loadingTimeout);
    } else {
      // If already loaded, skip the loader
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="home-page">
          <NavBar />
          <Hero />
          <IntroSection />
          <Benefits />
          <CtaSection />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
