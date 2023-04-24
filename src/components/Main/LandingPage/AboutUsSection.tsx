import React from 'react';
import SectionArrow from '../Scroller/SectionArrow';
import { scrollToElement } from '../../../utils/scoll'

type AboutUsSectionProps = {};
function AboutUsSection(props: AboutUsSectionProps ) {

    return (
        <section id="about-section" className="section-2">
            <div className="center-text">
                <h2>Let them chase after you</h2>
                <p>Instead of scrolling through jobs, update your profile and let them search after you</p>
            </div>
            <SectionArrow direction="down" onClick={() => scrollToElement('anonymous-section')} />
        </section>
    );
}

export default AboutUsSection;
