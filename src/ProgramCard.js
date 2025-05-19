import React from "react";
import "./ProgramCard.css";

function ProgramCard({ image, title, id, quote, description, buttonText, buttonLink }) {
    return (
        <div className="program-card" id={id}>
            <img src={image} alt={title} className="program-card-image" />

            <div className="program-card-content">
                <div className="program-card-header">
                    <h2 className="program-card-title">{title}</h2>
                    {quote && <div className="program-card-quote">“{quote}”</div>}
                </div>

                <p className="program-card-description">{description}</p>

                {buttonText && (
                    buttonLink ? (
                        <a
                            href={buttonLink}
                            className="program-card-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {buttonText}
                        </a>
                    ) : (
                        <button className="program-card-button" disabled>
                            {buttonText}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}

export default ProgramCard;
