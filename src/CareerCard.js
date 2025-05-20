import React from "react";
import "./CareerCard.css";

function CareerCard({ title, description, link }) {
    return (
        <div className="career-card">
            <h3 className="career-card-title">{title}</h3>
            <p className="career-card-description">{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="career-card-button">
                Apply Here →
            </a>
        </div>
    );
}

export default CareerCard;
