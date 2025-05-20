// import React from "react";
// import { Link } from "react-router-dom";
// import "./NavBar.css";
// const Navbar = () => {

//     return (
//         <div className="navbar">
//             <div className="navbar-logo">
//                 <Link to="/" className="navbar-logo-photo">
//                     <img src="/logo.png" alt="Beyond Young Academy Logo" className="logo-image" />
//                 </Link>

//             </div>
//             <div className="navbar-buttons">

//                 <Link to="/" className="navbar-home">
//                     <div className="navbar-home">Home</div>
//                 </Link>
//                 <Link to="/ourmission" className="navbar-ourmission">
//                     <div className="navbar-ourmission">Our Mission</div>
//                 </Link>
//                 <Link to="/programs" className="navbar-programs">
//                     <div className="navbar-programs">Programs</div>
//                 </Link>
//                 <Link to="/classes" className="navbar-classes">
//                     <div className="navbar-classes">Classes</div>
//                 </Link>
//                 <Link to="/careers" className="navbar-careers">
//                     <div className="navbar-careers">Careers</div>
//                 </Link>
//                 <Link to="/contactus" className="navbar-contactus">
//                     <div className="navbar-contactus">Contact Us</div>
//                 </Link>

//             </div>
//         </div>
//     );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="navbar-logo-photo">
                    <img src="/logo.png" alt="Beyond Young Academy Logo" className="logo-image" />
                </Link>
            </div>

            <div className={`navbar-buttons ${isOpen ? "open" : ""}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/ourmission" onClick={() => setIsOpen(false)}>Our Mission</Link>
                <Link to="/programs" onClick={() => setIsOpen(false)}>Programs</Link>
                <Link to="/classes" onClick={() => setIsOpen(false)}>Classes</Link>
                <Link to="/careers" onClick={() => setIsOpen(false)}>Careers</Link>
                <Link to="/contactus" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </div>

            <div className="hamburger" onClick={toggleSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default Navbar;
