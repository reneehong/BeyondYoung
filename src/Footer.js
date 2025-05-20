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


                    <p>
                        Email:
                        <a href="mailto:beyondyoungnj@gmail.com"> beyondyoungnj@gmail.com</a>
                    </p>

                    <p>
                        Phone Number:
                        <a href="tel:9178866970"> 917-886-6970</a>
                    </p>

                    <p>
                        Address:
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=374+Millburn+Avenue,+Millburn,+NJ+07078"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            374 Millburn Avenue, Millburn, 07078
                        </a>
                    </p>
                </div>
            </div>
            <div className="footer-copyright">
                Copyright &copy; 2025 Beyond Young
            </div>

        </div>
    );
};

export default Footer;
