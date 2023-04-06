import React from 'react';

interface ScrollArrowProps {
    direction: 'up' | 'down';
    sectionId: string;
    uid: string;
}

function AddScrollArrow({ direction, sectionId, uid }: ScrollArrowProps) {
    const iconClass = `fa fa-angle-${direction}`;
    const arrowClassName = `scroll-arrow ${direction} ${uid}`;

    const scrollFunc = () => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={arrowClassName} onClick={scrollFunc} key={uid}>
            <i className={iconClass}></i>
        </div>
    );
}

export default AddScrollArrow;
