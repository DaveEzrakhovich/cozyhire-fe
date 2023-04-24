import React from 'react';
import { ArrowDirection } from '../../../types/Scroller/Arrows'
interface SectionArrowProps {
    id: string;
    arrowDirection: ArrowDirection;
    onArrowClick: () => void;
    sectionComponent: JSX.Element;
}

function SectionArrow(props: SectionArrowProps) {
    return (
        <div className={`SectionArrow ${props.arrowDirection}`}>
            <div className="SectionArrow__container" onClick={props.onArrowClick}>
                <div className="SectionArrow__icon" id={props.id}>
                    {props.arrowDirection === ArrowDirection.Up ? (
                        <i className="fas fa-arrow-up" />
                    ) : (
                        <i className="fas fa-arrow-down" />
                    )}
                </div>
                <div className="SectionArrow__content">{props.sectionComponent}</div>
            </div>
        </div>
    );
}

export default SectionArrow;
