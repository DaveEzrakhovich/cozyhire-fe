import React, {useEffect, useRef, useState} from 'react';
import { Section } from '../../../types/scroller/sectionScroller';
import '../../../styles/main/scroller/sectionScroller.css';
import { SectionArrow } from "./sectionArrow";
import { ArrowDirection } from "../../../types/scroller/sectionArrow";

interface SectionScrollerProps {
    sections: Section[];
}

const SectionScroller = ({ sections }: SectionScrollerProps) => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const sectionContainerRef = useRef<HTMLDivElement>(null);

    const handleArrowClick = (direction: 'left' | 'right') => {
        const maxIndex = sections.length - 1;
        let newSectionIndex = currentSectionIndex;
        if (direction === 'left' && currentSectionIndex > 0) {
            newSectionIndex = currentSectionIndex - 1;
        } else if (direction === 'right' && currentSectionIndex < maxIndex) {
            newSectionIndex = currentSectionIndex + 1;
        }
        setCurrentSectionIndex(newSectionIndex);
    };

    useEffect(() => {
        if (sectionContainerRef.current) {
            const sectionWidth = sectionContainerRef.current.clientWidth;
            sectionContainerRef.current.style.transform = `translateX(-${sectionWidth * currentSectionIndex}px)`;
        }
    }, [currentSectionIndex]);

    return (
        <div className="section-scroller">
            <div className="section-container" ref={sectionContainerRef}>
                {sections.map((section, index) => (
                    <div key={index} className="section-content">
                        {section.component}
                    </div>
                ))}
            </div>
            {sections.map((section, index) => (
                <div key={index} className="section-arrow-container">
                    {index > 0 && (
                        <SectionArrow
                            id={`${section.id}-arrow-left`}
                            arrowDirection={ArrowDirection.left}
                            onArrowClick={() => handleArrowClick('left')}
                        />
                    )}
                    {index < sections.length - 1 && (
                        <SectionArrow
                            id={`${section.id}-arrow-right`}
                            arrowDirection={ArrowDirection.right}
                            onArrowClick={() => handleArrowClick('right')}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};


export default SectionScroller;
