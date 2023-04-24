import React, {useState} from 'react';
import AboutUsSection from './LandingPage/AboutUsSection';
import WelcomeSection from './LandingPage/WelcomeSection';
import AnonymousSection from './LandingPage/AnonymousSection';
import SectionScroller from './Scroller/SectionScroller';
import {scrollToElement} from "../../utils/scoll";
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
            component: (
                <WelcomeSection
                    loggedIn={props.loggedIn}
                    onLoginSuccess={props.onLoginSuccess}
                    onLoginClick={props.onLoginClick}
                    onLogoutClick={handleLogoutClick}
                />
            ),
            arrowComponents: {
                down: <div className="arrow-down" onClick={() => scrollToElement('about-section')}></div>,
            }
        },
        {
            id: 'anonymous-section',
            component: <AnonymousSection />,
            arrowComponents: {
                up: <div className="arrow-up" onClick={() => scrollToElement('welcome-section')}></div>,
                down: <div className="arrow-down" onClick={() => scrollToElement('about-section')}></div>,
            }
        },
        {
            id: 'about-section',
            component: <AboutUsSection />,
            arrowComponents: {
                up: <div className="arrow-up" onClick={() => scrollToElement('anonymous-section')}></div>,
                down: <div className="arrow-down" onClick={() => scrollToElement('contact-us-section')}></div>,
            }
        },
    ];


    return (
        <main>
            <SectionScroller sections={sections} />
        </main>
    );
}

export default Main;
