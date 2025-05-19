import React from "react";
import "./Classes.css";
import ClassCard from "./ClassCard";
import businessImage from "./business.png";
import mathImage from "./math.png";
import publicImage from "./public.png";
import artImage from "./art.png";
function Classes() {
    return (
        <div className="classes">
            <h1 className="classes-title">Classes</h1>
            <ClassCard
                title="Business & Financial Literacy"
                id="business-and-financial-literacy"
                description={<>Our Business & Financial Literacy program introduces students to the essential skills of smart money management, entrepreneurial thinking, and economic understanding—starting as early as elementary school. Through interactive projects, role-play simulations, and age-appropriate challenges, students learn how to earn, save, spend, invest, and give with purpose.
                    <br /><br />
                    We don’t just teach kids how money works.
                    <br /><br />
                    We help them think critically about choices, understand value, and build the confidence to lead in a world that rewards creativity, responsibility, and vision.
                    <br /><br />
                    From running a mini business to exploring global markets, our students gain the tools to navigate life with financial sense and entrepreneurial spirit.</>}
                image={businessImage}
            />
            <ClassCard
                title="Mathematical Thinking"
                id="mathematical-thinking"
                description={<>At Beyond Young, math is not just about right answers — it’s about how we think, solve, and make sense of the world. Our Mathematical Thinking program helps students develop strong problem-solving skills, flexible reasoning, and a deep love for mathematical exploration.
                    <br /><br />
                    Grounded in the Singapore Math approach and enriched with real-world challenges, students learn to think visually, communicate their strategies, and apply concepts creatively. From puzzles to patterns, number sense to data analysis, our curriculum turns math into a language kids truly understand and enjoy.
                    <br /><br />
                    Whether your child is building foundational fluency or ready to tackle advanced reasoning, we nurture a mindset that sees challenge as opportunity — and mistakes as part of the learning journey.</>}
                image={mathImage}
            />
            <ClassCard
                title="Public Speaking & Communication"
                id="public-speaing-and-communication"
                description={<>Our Public Speaking & Communication program empowers students to express themselves with clarity, confidence, and authenticity. From classroom discussions to competition stages, we guide children to organize their thoughts, connect with their audience, and speak with impact.
                    <br /><br />
                    Through engaging activities like storytelling, debates, interviews, and impromptu speeches, students learn to think on their feet, articulate ideas effectively, and develop active listening skills. More than just presentation techniques, we nurture the courage to speak up and the empathy to listen.
                    <br /><br />
                    Whether shy or outspoken, every child can find their voice — and use it to lead, inspire, and make a difference.
                </>}
                image={publicImage}
            />
            <ClassCard
                title="Artistic Expression"
                id="artistic-expression"
                description={<>Our Artistic Expression program invites children to explore, create, and communicate through a wide range of visual and performing arts. From painting and design to storytelling and movement, students discover the power of creativity as a form of self-expression and emotional intelligence.
                    <br /><br />
                    We believe art is not about perfection — it’s about process, perspective, and personal growth. Whether experimenting with colors, building with unexpected materials, or presenting original works, students learn to express their ideas, embrace uniqueness, and find confidence in their own voice.
                    <br /><br />
                    At Beyond Young, art isn’t just a subject — it’s a way to see the world differently, and to be seen in return.</>}
                image={artImage}
            />
        </div>

    );
}
export default Classes;