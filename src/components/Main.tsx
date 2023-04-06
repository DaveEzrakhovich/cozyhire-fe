import React, { useState } from 'react';
import AboutUsSection from './LandingPage/AboutUsSection';
import WelcomeSection from './LandingPage/WelcomeSection';
import AnonymousSection from './LandingPage/AnonymousSection';
import ScrollArrow from "./Scroller";

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
            <ScrollArrow direction="down" sectionId="about-section" />
            <ScrollArrow direction="up" sectionId="welcome-section" />
            <AboutUsSection />
            <ScrollArrow direction="down" sectionId="anonymous-section" />
            <ScrollArrow direction="up" sectionId="about-section" />
            <AnonymousSection />
        </main>
    );
}

export default Main;
