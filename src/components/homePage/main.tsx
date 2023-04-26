import React, {useState} from 'react';
import AboutUsSection from './landingPage/aboutUsSection';
import WelcomeSection from './landingPage/welcomeSection';
import AnonymousSection from './landingPage/anonymousSection';
import SectionScroller from './scroller/sectionScroller';
import { ArrowLeft, ArrowRight } from "./scroller/sectionArrow";
import { ArrowDirection } from "../../types/scroller/sectionArrow";

import '../../styles/main.css';
import '../../styles/main/scroller/sectionArrow.css';
import '../../styles/main/scroller/sectionScroller.css';

function Main(props: {
    loggedIn: boolean;
    onLoginSuccess: () => void;
    onLoginClick: () => void;
    onLogoutClick: () => void;
}) {
    const [showLoginOverlay, setShowLoginOverlay] = useState(false);

    const handleLogoutClick = () => {
        props.onLogoutClick();
    };

    const sections = [
        {
            id: 'welcome-section',
            component: <WelcomeSection
                loggedIn={props.loggedIn}
                onLoginSuccess={props.onLoginSuccess}
                onLoginClick={props.onLoginClick}
                onLogoutClick={handleLogoutClick}
            />,
            arrowComponents: {
                right: <ArrowRight direction={ArrowDirection.right} onClick={() => {}} />,
                left: undefined
            }
        },
        {
            id: 'anonymous-section',
            component: <AnonymousSection />,
            arrowComponents: {
                right: <ArrowRight direction={ArrowDirection.right} onClick={() => {}} />,
                left: <ArrowLeft direction={ArrowDirection.left} onClick={() => {}}  />
            }
        },
        {
            id: 'about-section',
            component: <AboutUsSection />,
            arrowComponents: {
                right: undefined,
                left: <ArrowLeft direction={ArrowDirection.left} onClick={() => {}} />
            }
        }
    ] as {
        id: string;
        component: JSX.Element;
        arrowComponents: {
            right?: JSX.Element | undefined;
            left?: JSX.Element | undefined;
        };
    }[];



    return (
        <main className="mainContainer">
            <SectionScroller sections={sections} />
        </main>
    );
}

export default Main;
