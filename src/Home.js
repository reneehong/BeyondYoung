import React, { useState } from "react";
import "./Home.css";
import { HashLink } from 'react-router-hash-link';
import posterImage from "./poster.png";
import coverImage from "./cover.png";
import classesImage from "./homeclass.png";
import HomeProgramCard from "./HomeProgramCard";

function Home() {
    const images = [coverImage, posterImage];
    const [currentImage, setCurrentImage] = useState(0);


    const goToPrevious = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="home">
            <div className="home-homebanner">
                <img
                    src={images[currentImage]}
                    alt="Welcome to Beyond Young Academy"
                    className="home-slideshow-image"
                />
                <button className="arrow left-arrow" onClick={goToPrevious}>
                    ❮
                </button>
                <button className="arrow right-arrow" onClick={goToNext}>
                    ❯
                </button>
            </div>



            <div className="home-mission">
                <h1 className="home-mission-title">
                    Welcome to
                    Beyond Young Academy
                </h1>
                <h1 className="home-mission-subtitle">
                    Empowering Future-Ready Learners<br />
                    with Heart, Purpose, and Possibility
                </h1>
                <HashLink smooth to="/ourmission#title" className="home-mission-button">
                    Our Mission →
                </HashLink>
            </div>
            <div className="home-classes">
                <div className="home-about">
                    <div className="home-about-words">
                        <h2>About Our Classes</h2>
                        <p><em><strong>Through hands-on projects, real-world challenges, and value-driven learning,</strong> we help students not only gain knowledge, but also discover purpose, voice, and courage.</em></p>
                        <p><em>Our classrooms are alive with curiosity and collaboration. We nurture not just students, but <strong>future leaders</strong>—children who think independently, express themselves boldly, and grow with empathy and resilience.</em></p>
                    </div>
                    <img src={classesImage} alt="Image of Class" className="home-about-image" />
                </div>
                <div className="home-specialize">
                    <div className="home-specialize-title">We specialize in four core areas:</div>
                    <div className="home-specialize-buttons">
                        <HashLink smooth to="/classes#business-and-financial-literacy" className="specialize-button">Business & <br /> Financial Literacy →</HashLink>
                        <HashLink smooth to="/classes#mathematical-thinking" className="specialize-button">Mathematical  <br /> Thinking →</HashLink>
                        <HashLink smooth to="/classes#public-speaking-and-communication" className="specialize-button">Public Speaking & <br /> Communication →</HashLink>
                        <HashLink smooth to="/classes#artistic-expression" className="specialize-button">Artistic  <br />  Expression →</HashLink>
                    </div>
                </div>
            </div>
            <div className="home-programs">
                <h2 className="home-programs-title">We also offer:</h2>
                <div className="home-programs-cards">
                    <HomeProgramCard
                        title="Competition Prep"
                        description="designed for students ready to take their skills to the next level through academic and enrichment competitions. Whether it’s business, math, public speaking, or interdisciplinary challenges, we provide the tools, coaching, and mindset to compete with purpose - and grow through the process."
                        link="/programs#competition-prep"
                    />
                    <HomeProgramCard
                        title="Summer Camp"
                        description="designed for curious, creative, and motivated students who want more than just fun in the sun. Through hands-on activities, real-world projects, and confidence-building challenges, campers explore key skills in business & financial literacy, mathematical thinking, public speaking, and creative expression — all in an engaging, supportive environment."
                        link="/programs#summer-camp"
                    />
                    <HomeProgramCard
                        title="Day Camp"
                        description="At Beyond Young Day Camp, every day is a chance to learn, create, and grow — in a space designed to spark joy, confidence, and curiosity. Our weekday morning program blends enrichment learning with imaginative play, helping children build real-world skills while having real fun."
                        link="/programs#day-camp"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
