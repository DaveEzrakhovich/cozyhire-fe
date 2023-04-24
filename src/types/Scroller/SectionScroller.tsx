import {ArrowDirection} from "./Arrows";

export interface Section {
    id: string;
    arrowDirection: ArrowDirection;
    onArrowClick: () => void;
    sectionComponent: JSX.Element;
}

export interface SectionScrollerProps {
    sections: Section[];
}