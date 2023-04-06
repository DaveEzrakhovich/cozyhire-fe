import React from 'react';

function AboutUsSection() {
    return (
        <section id="about-section" className="section-2">
            <div className="scroll-up">
                <a href="#welcome-section">
                    <i className="fa fa-angle-up"></i>
                </a>
            </div>
            <div className="center-text">
                <h2>Let them chase after you</h2>
                <p>Instead of scrolling through jobs, update your profile and let them search after you</p>
            </div>
            <div className="scroll-down">
                <a href="#anonymous-section">
                    <i className="fa fa-angle-down"></i>
                </a>
            </div>
        </section>
    );
}

export default AboutUsSection;
