import React from "react";
import "./Careers.css";
import CareerCard from "./CareerCard";
function Careers() {
    return (
        <div className="careers-page">
            <h1 className="careers-title">Career Opportunities</h1>

            <div className="career-cards">
                <CareerCard
                    title="Summer Camp Instructor – Financial Literacy & Business Competition Prep"
                    description="Join our dynamic summer enrichment program as an instructor guiding middle school students (grades 6–8) through the exciting world of financial literacy and business fundamentals. This camp is designed to lay the groundwork for participation in competitive business organizations such as BPA (Business Professionals of America) and FBLA (Future Business Leaders of America).

The ideal candidate is passionate about youth education, skilled in teaching basic finance and entrepreneurship, and enthusiastic about introducing students to real-world business concepts through engaging, hands-on activities."
                    link="https://www.indeed.com/viewjob?jk=4de9d46cd97df188&from=shareddesktop_copy"
                />
                <CareerCard
                    title="Full-Time Enrichment Program Staff (Preschool & Family Activities)"
                    description="Beyond Young Academy is looking for a Full-Time On-Site Staff Member to coordinate and lead enriching, play-based activities for preschool-aged children (ages 1–5) on a drop-off and caregiver-accompanied basis. This role includes designing and running both independent drop-off sessions and ' Mommy & Me' (or caregiver & child) classes that foster early learning and joyful connection."
                    link="https://www.indeed.com/viewjob?jk=d783433f5333384a&from=shareddesktop_copy"
                />
                <CareerCard
                    title="In-Class Math Teacher (K–12)"
                    description="We are seeking a passionate and engaging Math Teacher to join our afterschool academic team. The ideal candidate will bring strong math teaching skills, enthusiasm for working with students of varying grade levels, and a commitment to making math accessible and fun. This is a unique opportunity to teach small group classes that are both rigorous and student-centered, with a focus on individualized learning and enrichment beyond the classroom."
                    link="https://www.indeed.com/viewjob?jk=edcb1777d4667f14&from=shareddesktop_copy"
                />
                <CareerCard
                    title="Instructor for After-School Financial Literacy & Entrepreneurship Program (Grades 2-8)"
                    description="Are you passionate about helping young minds grow beyond the classroom?

Join Beyond Young Academy—a forward-thinking educational organization that empowers elementary students to explore financial literacy, entrepreneurship, and real-world problem-solving through engaging, hands-on lessons."
                    link="https://www.indeed.com/viewjob?jk=cb8f1d652e0569c8&from=shareddesktop_copy"
                />
            </div>

        </div>

    );
}

export default Careers;