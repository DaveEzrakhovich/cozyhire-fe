import React from 'react';
import './SectionScroller.css';
import { Section } from '../../../types/Scroller/SectionScroller';
import { ArrowDirection } from '../../../types/Scroller/SectionArrow';

interface SectionScrollerProps {
    sections: Section[];
}

function SectionScroller(props: SectionScrollerProps) {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const handleArrowClick = (index: number) => {
        setCurrentSectionIndex(index);
    };

    return (
        <div className="section-scroller">
            {props.sections.map((section, index) => (
                <div className="section-wrapper" key={section.id}>
                    {section.arrowComponents.up && (
                        <section.arrowComponents.up.icon
                            className="arrow up"
                            onClick={() => handleArrowClick(index - 1)}
                        />
                    )}
                    <div className="section" id={section.id}>
                        {section.component}
                    </div>
                    {section.arrowComponents.down && (
                        <section.arrowComponents.down.icon
                            className="arrow down"
                            onClick={() => handleArrowClick(index + 1)}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}

export default SectionScroller;
