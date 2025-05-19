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
function App() {

  return (
    <div className="App">
      <NavBar />
      <HomeBanner />

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
  // return (
  //   <BrowserRouter>
  //     <div className="App">
  //       <NavBar />
  //       <Routes>
  //         <Route path="/" element={<HomePage />} />
  //         {/* Add other routes here, like: 
  //             <Route path="/classes" element={<ClassesPage />} />
  //         */}
  //       </Routes>
  //     </div>
  //   </BrowserRouter>
  // );
}

export default App;