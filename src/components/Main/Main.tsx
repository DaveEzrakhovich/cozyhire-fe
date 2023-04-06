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
            <AddScrollArrow direction="down" sectionId="about-section" uid="about-section-scroll-down"/>
            <AddScrollArrow direction="up" sectionId="welcome-section" uid="about-section-scroll-up"/>
            <AboutUsSection />
            <AddScrollArrow direction="down" sectionId="anonymous-section" uid="anonymous-section-scroll-down" />
            <AddScrollArrow direction="up" sectionId="about-section" uid="anonymous-section-scroll-up" />
            <AnonymousSection />
        </main>
    );
}

export default Main;
