import React from 'react';

interface ScrollerProps {
    direction: 'up' | 'down';
    targetSectionId: string;
}

function Scroller({ direction, targetSectionId }: ScrollerProps) {
    const iconClass = `fa fa-angle-${direction}`;
    const scrollFunc = () => {
        const targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`scroll-arrow ${direction}`} onClick={scrollFunc}>
            <i className={iconClass}></i>
        </div>
    );
}

export default Scroller;
