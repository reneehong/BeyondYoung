import React from "react";
import "./OurMission.css";
import missionImage from "./mission.png";

function OurMission() {
    return (
        <div className="mission-page">
            <h1 className="mission-header" id="title">Our Mission</h1>

            <blockquote className="mission-quote">
                “We empower children to <br></br>think <strong>independently</strong>, speak <br></br> <strong>confidently</strong>, and grow <strong> <br></br>with purpose</strong>.”
            </blockquote>

            <p className="mission-paragraph">
                At Beyond Young Academy, we believe that education is more than academics—it’s about preparing young minds to thrive in a complex, ever-changing world.
                Located in the heart of New Jersey, our K–12 learning community is designed to cultivate creativity, critical thinking, confidence, and character from an early age.
            </p>

            <blockquote className="mission-quote">
                “Not just <strong>academic <br></br> success</strong> — but <strong>lifelong <br></br> skills, values, and vision</strong>.”
            </blockquote>

            <div className="mission-bottom">
                <div className="mission-text">
                    <p>At Beyond <br></br>Young, we don’t <br></br>just <strong>teach</strong>.</p><br></br><br></br>
                    <p>We <strong>grow</strong> with <br></br>tomorrow’s <br></br>leaders.</p>
                </div>
                <img src={missionImage} alt="National Leadership Conference" className="mission-img" />
            </div>
        </div>
    );
}

export default OurMission;
