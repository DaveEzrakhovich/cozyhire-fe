import React, { useState } from 'react';
import LoginOverlay from '../LoginOverlay';
import SectionArrow from '../Scroller/SectionArrow';
import { scrollToElement } from '../../../utils/scoll'

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
        <section id="welcome-section" className="section-1">
            <h1>Welcome to CozyHire</h1>
            <p>Instead of searching for jobs, let them search after you</p>
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
            <SectionArrow direction="down" onClick={() => scrollToElement('about-section')} />
        </section>
    );
}

export default WelcomeSection;
