import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Classes from "./Classes";
import Home from "./Home";
import OurMission from "./OurMission";
import Careers from "./Careers";
import Programs from "./Programs";
import ContactUs from "./ContactUs";
import HomeBanner from "./HomeBanner.js";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideBanner = location.pathname === "/careers";
  return (
    <div className="App">
      <NavBar />
      {!hideBanner && <HomeBanner />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourmission" element={<OurMission />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;