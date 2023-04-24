import React, {useState} from 'react';
import AboutUsSection from './LandingPage/AboutUsSection';
import WelcomeSection from './LandingPage/WelcomeSection';
import AnonymousSection from './LandingPage/AnonymousSection';
import SectionScroller from './Scroller/SectionScroller';
import {scrollToElement} from "../../utils/scoll";
import {ArrowDirection} from "../../types/Scroller/Arrows";
import {Section} from "../../types/Scroller/SectionScroller";

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

    const sections: Section[] = [
        {
            id: 'welcome-section',
            arrowDirection: ArrowDirection.Down,
            onArrowClick: () => scrollToElement('about-section'),
            sectionComponent: (
                <WelcomeSection
                    loggedIn={props.loggedIn}
                    onLoginSuccess={props.onLoginSuccess}
                    onLoginClick={props.onLoginClick}
                    onLogoutClick={handleLogoutClick}
                />
            ),
        },
        {
            id: 'about-section',
            arrowDirection: ArrowDirection.Down,
            onArrowClick: () => scrollToElement('anonymous-section'),
            sectionComponent: <AboutUsSection />,
        },
        {
            id: 'anonymous-section',
            arrowDirection: ArrowDirection.Up,
            onArrowClick: () => scrollToElement('welcome-section'),
            sectionComponent: <AnonymousSection />,
        },
    ];



    return (
        <main>
            <SectionScroller sections={sections} />
        </main>
    );
}

export default Main;
