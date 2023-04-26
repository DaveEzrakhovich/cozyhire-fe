import React, { useState } from 'react';
import LoginOverlay from '../loginOverlay';
import '../../../styles/main/landingPage/welcomeSection.css';

type WelcomeSectionProps = {
    loggedIn: boolean;
    onLoginSuccess: () => void;
    onLoginClick: () => void;
    onLogoutClick: () => void
};

function WelcomeSection(props: WelcomeSectionProps) {
    const [showLoginOverlay, setShowLoginOverlay] = useState(false);

    const handleLogoutClick = () => {
        props.onLogoutClick();
    };

    return (
        <section id="welcome-section" className="welcome-section">
            <h1>Welcome to CozyHire</h1>
            <p>Instead of looking for a job, let it find you.</p>
            {props.loggedIn ? (
                <>
                    <button>Browse over open positions</button>
                    <button>Let them chase after me</button>
                    <button onClick={handleLogoutClick}>Logout</button>
                </>
            ) : (
                <button onClick={() => setShowLoginOverlay(true)}>Login / Sign up</button>
            )}
            <LoginOverlay
                show={showLoginOverlay}
                onClose={() => setShowLoginOverlay(false)}
                onLoginSuccess={props.onLoginSuccess}
            />
        </section>
    );
}

export default WelcomeSection;
