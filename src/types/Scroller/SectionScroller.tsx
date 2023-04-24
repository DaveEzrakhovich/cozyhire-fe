import { SectionArrow } from "./SectionArrow";

export interface Section {
    id: string;
    component: JSX.Element;
    arrowComponents: {
        up?: SectionArrow;
        down?: SectionArrow;
    };
}



export interface SectionScrollerProps {
    sections: Section[];
}