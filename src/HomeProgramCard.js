import React from "react";
import "./HomeProgramCard.css";
import { HashLink } from "react-router-hash-link";

function HomeProgramCard({ title, description, link }) {
    return (
        <div className="home-program-card">
            <h3 className="home-program-card-title">{title}</h3>
            <p className="home-program-card-description">{description}</p>
            <HashLink smooth to={link} className="home-program-card-button">
                Learn More Here →
            </HashLink>
        </div>
    );
}

export default HomeProgramCard;
