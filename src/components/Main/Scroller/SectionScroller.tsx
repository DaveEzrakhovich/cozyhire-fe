import React from 'react';
import SectionArrow from './SectionArrow';
import {SectionScrollerProps} from "../../../types/Scroller/SectionScroller";

function SectionScroller(props: SectionScrollerProps) {
    const renderSections = () => {
        return props.sections.map((section) => {
            return (
                <div key={section.id}>
                    <section.sectionComponent />
                    <SectionArrow
                        direction={section.arrowDirection}
                        onClick={section.onArrowClick}
                    />
                </div>
            );
        });
    };

    return <>{renderSections()}</>;
}

export default SectionScroller;
