import React from 'react';
import {ArrowDirection, SectionArrowProps} from '../../../types/Scroller/SectionArrow';
import './SectionArrow.css';

function SectionArrow(props: SectionArrowProps) {
    const arrowClass = `SectionArrow SectionArrow--${props.arrowDirection}`;

    return (
        <div id={props.id} className={arrowClass} onClick={props.onArrowClick}>
            <div className="SectionArrow__body">
                <div className="SectionArrow__head" />
            </div>
        </div>
    );
}

export default SectionArrow;
