import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-info">
                <Link to="/" className="navbar-logo">
                    <img src="/logo.png" alt="Beyond Young Academy Logo" className="logo-image" />
                </Link>
                <div className="footer-contactus">
                    <div>Contact Us:</div>
                    <div>Address: 374 Milburn Avenue, Milburn, NJ 07079</div>
                    <div>Email: beyondyoungnj@gmail.com</div>
                </div>
            </div>
            <div className="footer-copyright">
                Copyright 2025 Beyond Young
            </div>

        </div>
    );
};

export default Footer;
