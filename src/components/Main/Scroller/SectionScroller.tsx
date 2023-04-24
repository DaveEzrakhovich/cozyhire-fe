import React from 'react';
import { Section } from '../../../types/Scroller/SectionScroller';
import SectionArrow from './SectionArrow';

interface SectionScrollerProps {
    sections: Section[];
}

function SectionScroller(props: SectionScrollerProps) {
    return (
        <div className="section-scroller">
            {props.sections.map((section) => (
                <div key={section.id}>
                    <SectionArrow
                        id={`${section.id}-arrow`}
                        arrowDirection={section.arrowDirection}
                        onArrowClick={section.onArrowClick}
                        sectionComponent={section.sectionComponent}
                    />
                </div>
            ))}
        </div>
    );
}

export default SectionScroller;
