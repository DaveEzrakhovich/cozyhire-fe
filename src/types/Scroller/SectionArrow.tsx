export enum ArrowDirection {
    Up = 'up',
    Down = 'down'
}

export interface SectionArrowProps {
    id: string;
    arrowDirection: ArrowDirection;
    onArrowClick: () => void;
}

export interface SectionArrow {
    direction: ArrowDirection;
    onClick: () => void;
    icon: React.ReactElement;
}
