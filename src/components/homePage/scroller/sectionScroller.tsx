import React from 'react';
import { Section } from '../../../types/scroller/sectionScroller';
import '../../../styles/main/scroller/sectionScroller.css';
import { SectionArrow } from "./sectionArrow";
import { ArrowDirection } from "../../../types/scroller/sectionArrow";

interface SectionScrollerProps {
    sections: Section[];
}

const SectionScroller = ({ sections }: SectionScrollerProps) => {
    const sectionRefs = sections.reduce((acc, section) => {
        acc[section.id] = React.createRef<HTMLDivElement>();
        return acc;
    }, {} as { [key: string]: React.RefObject<HTMLDivElement> });

    const handleArrowClick = (sectionId: string) => {
        const section = sectionRefs[sectionId].current;
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="section-scroller">
            {sections.map((section, index) => (
                <div key={index} id={section.id} ref={sectionRefs[section.id]}>
                    {section.arrowComponents?.left && (
                        <SectionArrow
                            id={`${section.id}-arrow-left`}
                            arrowDirection={ArrowDirection.left}
                            onArrowClick={() => handleArrowClick(sections[index - 1].id)}
                        />
                    )}
                    {section.component}
                    {section.arrowComponents?.right && (
                        <SectionArrow
                            id={`${section.id}-arrow-right`}
                            arrowDirection={ArrowDirection.right}
                            onArrowClick={() => handleArrowClick(sections[index + 1].id)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default SectionScroller;
