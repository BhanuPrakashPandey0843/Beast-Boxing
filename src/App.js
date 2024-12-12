import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./Pages/LadingPage"));
const TeamPage = lazy(() => import("./Pages/Ourteam"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
const GallaryPage = lazy(() => import("./Pages/GallaryPage"));
const CarrerPage = lazy(() => import("./Pages/CarrerPage"));
const BoxingformPage = lazy(() => import("./Pages/BoxingformPage"));
const JudgeformPage = lazy(() => import("./Pages/JudgeformPage"));
const Loader = lazy(() => import("./Component/Loader/Loader"));

const PageLoader = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true); // Trigger the loader
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide the loader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [location]);

  return (
    <>
      {isLoading ? <Loader /> : children} {/* Render loader or content */}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <PageLoader>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallery" element={<GallaryPage />} />
            <Route path="/career" element={<CarrerPage />} />
            <Route path="/boxing" element={<BoxingformPage />} />
            <Route path="/judge" element={<JudgeformPage />} />
          </Routes>
        </PageLoader>
      </Suspense>
    </Router>
  );
};

export default App;
