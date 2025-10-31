import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbars"; 
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetailes"; // Make sure file name matches exactly

function App() {
  return (
    <Router>
      {/* ✅ Use Tailwind light/dark colors instead of hard-coded black/white */}
      <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300">
        {/* Navbar stays at top */}
        <Navbar />

        {/* Main content grows to fill available space */}
        <main className="flex-grow">
          <Routes>
            {/* Home page with all sections */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <About />
                  <Skills />
                  <Projects />
                  <Timeline />
                  <Certificate />
                  <Contact />
                </>
              }
            />

            {/* Dynamic project detail page */}
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
