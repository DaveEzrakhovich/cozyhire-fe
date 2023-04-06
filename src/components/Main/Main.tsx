import React, { useState } from 'react';
import AboutUsSection from './LandingPage/AboutUsSection';
import WelcomeSection from './LandingPage/WelcomeSection';
import AnonymousSection from './LandingPage/AnonymousSection';
import Scroller from '../Scroller';

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

    return (
        <main>
            <WelcomeSection
                loggedIn={props.loggedIn}
                onLoginSuccess={props.onLoginSuccess}
                onLoginClick={props.onLoginClick}
                onLogoutClick={handleLogoutClick}
            />
            <Scroller direction="down" targetSectionId="about-section" />
            <Scroller direction="up" targetSectionId="welcome-section" />
            <AboutUsSection />
            <Scroller direction="down" targetSectionId="anonymous-section" />
            <Scroller direction="up" targetSectionId="about-section" />
            <AnonymousSection />
        </main>
    );
}

export default Main;
