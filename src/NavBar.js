import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="navbar-logo-photo">
                    <img src="/logo.JPG" alt="Beyond Young Academy Logo" className="logo-image" />
                </Link>
                <div className="navbar-logo-name">
                    Beyond Young Academy
                </div>
            </div>
            <div className="navbar-buttons">

                <Link to="/" className="navbar-home">
                    <div className="navbar-home">Home</div>
                </Link>
                <Link to="/ourmission" className="navbar-ourmission">
                    <div className="navbar-ourmission">Our Mission</div>
                </Link>
                <Link to="/programs" className="navbar-programs">
                    <div className="navbar-programs">Programs</div>
                </Link>
                <Link to="/classes" className="navbar-classes">
                    <div className="navbar-classes">Classes</div>
                </Link>
                <Link to="/careers" className="navbar-careers">
                    <div className="navbar-careers">Careers</div>
                </Link>
                <Link to="/contactus" className="navbar-contactus">
                    <div className="navbar-contactus">Contact Us</div>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;
