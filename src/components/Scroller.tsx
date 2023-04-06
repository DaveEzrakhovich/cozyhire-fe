import React from 'react';

interface ScrollArrowProps {
    direction: 'up' | 'down';
    sectionId: string;
}

function ScrollArrow({ direction, sectionId }: ScrollArrowProps) {
    const iconClass = `fa fa-angle-${direction}`;
    const scrollFunc = () => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`scroll-arrow ${direction}`} onClick={scrollFunc}>
            <i className={iconClass}></i>
        </div>
    );
}

export default ScrollArrow;
