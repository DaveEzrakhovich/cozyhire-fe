import React, { useState } from 'react';
import AboutUsSection from './LandingPage/AboutUsSection';
import WelcomeSection from './LandingPage/WelcomeSection';
import AnonymousSection from './LandingPage/AnonymousSection';

function Main() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setLoggedIn(false);
    };

    return (
        <main>
            <WelcomeSection loggedIn={loggedIn} onLoginClick={() => setShowLoginOverlay(true)} onLoginSuccess={handleLoginSuccess} onLogoutClick={handleLogoutClick} />
            <AboutUsSection />
            <AnonymousSection />
        </main>
    );
}

export default Main;
