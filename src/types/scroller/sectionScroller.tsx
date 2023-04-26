import React from "react";

export interface Section {
    id: string;
    component: React.ReactNode;
    arrowComponents?: {
        left?: React.ReactNode;
        right?: React.ReactNode;
    };
    visible: boolean;
}