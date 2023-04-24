
export interface Section {
    id: string;
    component: JSX.Element;
    arrowComponents: {
        left?: JSX.Element;
        right?: JSX.Element;
    };
}