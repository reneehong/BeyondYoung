import React from "react";
import "./ClassCard.css";

function ClassCard({ image, title, description, id }) {
    return (
        <div className="class-card" id={id}>
            {image && <img src={image} alt={title} className="class-card-image" />}
            <div className="class-card-words">
                <h2 className="class-card-title">{title}</h2>
                <p className="class-card-description">{description}</p>
            </div>

        </div>
    );
}
export default ClassCard;