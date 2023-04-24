import React from 'react';
import './SectionScroller.css';
import { Section } from '../../../types/Scroller/SectionScroller';
import { ArrowDirection } from '../../../types/Scroller/SectionArrow';

interface SectionScrollerProps {
    sections: Section[];
}

function SectionScroller(props: SectionScrollerProps) {
    return (
        <div className="section-scroller">
            {props.sections.map((section, index) => (
                <div key={section.id} className="section-wrapper" id={section.id}>
                    <section.component />
                    <div className="arrow-wrapper">
                        {section.arrowComponents.up && (
                            <section.arrowComponents.up
                                id={`${section.id}-up-arrow`}
                                arrowDirection={ArrowDirection.Up}
                                onArrowClick={() => {
                                    if (index > 0) {
                                        document
                                            .getElementById(props.sections[index - 1].id)
                                            ?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            />
                        )}
                        {section.arrowComponents.down && (
                            <section.arrowComponents.down
                                id={`${section.id}-down-arrow`}
                                arrowDirection={ArrowDirection.Down}
                                onArrowClick={() => {
                                    if (index < props.sections.length - 1) {
                                        document
                                            .getElementById(props.sections[index + 1].id)
                                            ?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SectionScroller;
