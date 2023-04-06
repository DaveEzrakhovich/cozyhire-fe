import React, { useState } from 'react';
import AboutUsSection from './LandingPage/AboutUsSection';
import WelcomeSection from './LandingPage/WelcomeSection';
import AnonymousSection from './LandingPage/AnonymousSection';

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
            <AboutUsSection />
            <AnonymousSection />
        </main>
    );
}

export default Main;
