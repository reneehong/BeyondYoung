import React from "react";
import "./Programs.css";
import ProgramCard from "./ProgramCard.js";
import compImage from "./compprep.png";
import summerImage from "./summer.png";
import dayImage from "./daycamp.png";
function Programs() {

    return (
        <div className="programs">
            <h1 className="programs-title">Programs</h1>
            <ProgramCard
                id="competition-prep"
                image={compImage}
                title="Competition Prep"
                quote="Confidence. Strategy. Excellence."
                description={<>Our Competition Prep program is designed for students ready to take their skills to the next level through academic and enrichment competitions. Whether it's business, math, public speaking, or interdisciplinary challenges, we provide the tools, coaching, and mindset to compete with purpose — and grow through the process.
                    <br /><br />
                    Students receive personalized guidance on content mastery, presentation techniques, time management, and performance under pressure. More than just winning, we focus on developing resilience, teamwork, and critical thinking that extend far beyond the competition stage.
                    <br /><br />
                    At Beyond Young, we believe every competition is an opportunity — to explore one’s potential, gain real-world experience, and celebrate effort as much as achievement.</>}
                buttonText="Membership Registration"
                buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSdYOwSjl7UbeKDoB4dy78J8PiuKAbI6Vf8LZTGGSpB8_KkkTA/viewform"
            />
            <ProgramCard
                image={summerImage}
                id="summer-camp"
                title="Beyond Young Summer Camp 2025"
                quote="A Summer of Exploration, Confidence, and Real-World Learning"
                description={<>At Beyond Young’s Summer Camp, learning doesn’t take a break — it transforms.
                    <br /><br />
                    Our camp is designed for curious, creative, and motivated students who want more than just fun in the sun. Through hands-on activities, real-world projects, and confidence-building challenges, campers explore key skills in business & financial literacy, mathematical thinking, public speaking, and creative expression — all in an engaging, supportive environment.
                    <br /><br />
                    Whether your child is launching a mini business, solving logic puzzles, preparing for a speech competition, or creating meaningful art, each week brings new opportunities to grow in both skill and character.
                    <br /><br />
                    Small group sizes. Passionate instructors. A culture of encouragement.
                    <br /><br />
                    This is more than camp — it’s a launchpad for future-ready learners.</>}
                buttonText="Register Now"
                buttonLink="https://www.pingrysummer.org/summer-programs/young-entrepreneurship-presented-by-beyond-young/"
            />
            <ProgramCard
                image={dayImage}
                id="day-camp"
                title="Beyond Young Day Enrichment Classes"
                quote="Daily Discovery. Real Skills. Happy Kids."
                description={<>At Beyond Young Day Camp, every day is a chance to learn, create, and
                    grow — in a space designed to spark joy, confidence, and curiosity. Our weekday morning program blends enrichment learning with imaginative play, helping children build real-world skills while having real fun.
                    <br /><br />
                    Tailored for early elementary students, our day enrichment programs features:
                    •​Themed Daily Activities — from storytelling and STEM to mini business games and expressive arts
                    •​Social Skills & Team Play — opportunities to connect, collaborate, and build friendships
                    •​Flexible Drop-Off — attend any weekday morning that fits your schedule
                    •​Small Groups, Big Support — caring instructors and a safe, nurturing environment
                    <br /><br />
                    Whether your child is shy or outspoken, hands-on or imaginative, this is a place where they can explore who they are — and begin growing into who they want to be.</>}
                buttonText="Registration Coming Soon!"

            />
        </div>

    );
}
export default Programs;