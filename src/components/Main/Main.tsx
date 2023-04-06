import React, { useState } from 'react';
import AboutUsSection from './LandingPage/AboutUsSection';
import WelcomeSection from './LandingPage/WelcomeSection';
import AnonymousSection from './LandingPage/AnonymousSection';
import AddScrollArrow from "../Scroller";

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
            <AddScrollArrow direction="down" sectionId="about-section" key="about-down" />
            <AddScrollArrow direction="up" sectionId="welcome-section" key="about-up" />
            <AboutUsSection />
            <AddScrollArrow direction="down" sectionId="anonymous-section" key="anon-down" />
            <AddScrollArrow direction="up" sectionId="about-section" key="anon-up" />
            <AnonymousSection />
        </main>
    );
}

export default Main;
