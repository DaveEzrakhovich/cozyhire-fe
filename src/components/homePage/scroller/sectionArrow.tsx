import React from 'react';
import '../../../styles/main/scroller/sectionScroller.css';
import {ArrowDirection, SectionArrowProps} from "../../../types/scroller/sectionArrow";

interface ArrowProps {
    direction: ArrowDirection;
    onClick: () => void;
}

export function SectionArrow({ id, arrowDirection, onArrowClick }: SectionArrowProps) {
    const arrowClass = `SectionArrow SectionArrow--${arrowDirection}`;

    return (
        <div id={id} className={arrowClass} onClick={onArrowClick}>
            <div className="SectionArrow__body">
                <div className="SectionArrow__head" />
            </div>
        </div>
    );
}


export const ArrowLeft = (props: ArrowProps) => {
    const { direction, onClick } = props;
    return (
        <div className={`arrow arrow-${direction}`} onClick={onClick}>
            <div className="arrow-body">
                <div className="arrow-head" />
            </div>
        </div>
    );
};

export const ArrowRight = (props: ArrowProps) => {
    const { direction, onClick } = props;
    return (
        <div className={`arrow arrow-${direction}`} onClick={onClick}>
            <div className="arrow-body">
                <div className="arrow-head" />
            </div>
        </div>
    );
};