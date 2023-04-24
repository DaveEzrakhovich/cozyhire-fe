import React from "react";

export enum ArrowDirection {
    Up = 'up',
    Down = 'down',
    left = 'left',
    right = 'right'
}

interface ArrowProps {
    direction: 'left' | 'right';
    onClick: () => void;
}

export interface SectionArrowProps {
    id: string;
    arrowDirection: ArrowDirection;
    onArrowClick: () => void;
}
