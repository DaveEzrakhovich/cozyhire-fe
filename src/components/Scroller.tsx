import React from 'react';

interface ScrollArrowProps {
    direction: 'up' | 'down';
    sectionId: string;
    key: string;
}

function AddScrollArrow({ direction, sectionId, key }: ScrollArrowProps) {
    const iconClass = `fa fa-angle-${direction}`;
    const scrollFunc = () => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const arrowClassName = `scroll-arrow-${direction}-${key}`

    return (
        <div className={arrowClassName} onClick={scrollFunc} key={key}>
            <i className={iconClass}></i>
        </div>
    );
}

export default AddScrollArrow;
