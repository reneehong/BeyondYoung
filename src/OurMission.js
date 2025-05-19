import React from "react";
import "./OurMission.css";
import missionImage from "./mission.png";

function OurMission() {
    return (
        <div className="mission-page">
            <h1 className="mission-header" id="title">Beyond Young Academy</h1>
            <h2 className="mission-subheader">Our Mission</h2>

            <blockquote className="mission-quote">
                “We empower children to think <strong>independently</strong>, speak <strong>confidently</strong>, and grow <strong>with purpose</strong>.”
            </blockquote>

            <p className="mission-paragraph">
                At Beyond Young Academy, we believe that education is more than academics—it’s about preparing young minds to thrive in a complex, ever-changing world.
                Located in the heart of New Jersey, our K–12 learning community is designed to cultivate creativity, critical thinking, confidence, and character from an early age.
            </p>

            <blockquote className="mission-quote">
                “Not just <strong>academic success</strong> — but <strong>lifelong skills, values, and vision</strong>.”
            </blockquote>

            <div className="mission-bottom">
                <div className="mission-text">
                    <p>At Beyond Young, we don’t just <strong>teach</strong>.</p>
                    <p>We <strong>grow</strong> with tomorrow’s leaders.</p>
                </div>
                <img src={missionImage} alt="National Leadership Conference" className="mission-img" />
            </div>
        </div>
    );
}

export default OurMission;
