import React from 'react';
import '../../../styles/main/scroller/SectionScroller.css'
import {ArrowDirection, SectionArrowProps} from "../../../types/Scroller/SectionArrow";

interface ArrowProps {
    direction: ArrowDirection;
    onClick: () => void;
}

function SectionArrow({ id, arrowDirection, onArrowClick }: SectionArrowProps) {
    const arrowClass = `SectionArrow SectionArrow--${arrowDirection}`;

    return (
        <div id={id} className={arrowClass} onClick={onArrowClick}>
            <div className="SectionArrow__body">
                <div className="SectionArrow__head" />
            </div>
        </div>
    );
}

export default SectionArrow;


const ArrowLeft = (props: ArrowProps) => {
    const { direction, onClick } = props;
    return (
        <div className={`arrow arrow-${direction}`} onClick={onClick}>
            <div className="arrow-body">
                <div className="arrow-head" />
            </div>
        </div>
    );
};

const ArrowRight = (props: ArrowProps) => {
    const { direction, onClick } = props;
    return (
        <div className={`arrow arrow-${direction}`} onClick={onClick}>
            <div className="arrow-body">
                <div className="arrow-head" />
            </div>
        </div>
    );
};

export { ArrowLeft, ArrowRight };
