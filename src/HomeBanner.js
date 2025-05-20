import React from "react";
import { Link } from "react-router-dom";
import "./HomeBanner.css";
const HomeBanner = () => {

    return (
        <div className="homebanner">
            <Link to="/programs" className="homebanner">
                Click Here to Register for 2025 Summer Camps!
            </Link>
        </div>
    );
};

export default HomeBanner;
