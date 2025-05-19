import React from "react";
import { Link } from "react-router-dom";
import "./HomeBanner.css";
const HomeBanner = () => {

    return (
        <div className="homebanner">
            <Link to="/programs" className="homebanner">
                Last Day to Sign Up for Summer Camp! Click Here to Learn More
            </Link>
        </div>
    );
};

export default HomeBanner;
