import React from 'react';
import '../../../styles/main/landingPage/AboutUsSection.css';

type AboutUsSectionProps = {};
function AboutUsSection(props: AboutUsSectionProps ) {

    return (
        <section id="about-section" className="section-2">
            <div className="center-text">
                <h2>Let them chase after you</h2>
                <p>Instead of scrolling through jobs, update your profile and let them search after you</p>
            </div>
        </section>
    );
}

export default AboutUsSection;
