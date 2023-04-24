import React from 'react';
import {ArrowDirection} from "../../../types/Scroller/Arrows";

export interface SectionArrowProps {
    direction: ArrowDirection;
    onClick: () => void;
}

function SectionArrow({ direction, onClick }: SectionArrowProps) {
    return (
        <div className={`section-arrow ${direction}`} onClick={onClick}>
            <i className={`fas fa-angle-${direction}`} />
        </div>
    );
}

export default SectionArrow;
