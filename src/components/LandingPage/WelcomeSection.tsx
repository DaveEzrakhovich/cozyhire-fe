import React, {useState} from 'react';
import LoginOverlay from '../LoginOverlay';

type WelcomeSectionProps = {
    loggedIn: boolean;
    onLoginClick: () => void;
}

function WelcomeSection(props: WelcomeSectionProps) {
    const { loggedIn, onLoginClick } = props;
    const [showLoginOverlay, setShowLoginOverlay] = useState(false);

    return (
        <section className="section-1">
            <h1>Welcome to CozyHire</h1>
            <p>Instead of searching for jobs, let them search after you</p>
            {loggedIn ? (
                <>
                    <button>Browse over open positions</button>
                    <button>Let them chase after me</button>
                </>
            ) : (
                <button onClick={onLoginClick}>Login</button>
            )}
            <div className="scroll-down">
                <a href="#about-section">
                    <i className="fa fa-angle-down"></i>
                </a>
            </div>
            <LoginOverlay show={showLoginOverlay} onClose={() => setShowLoginOverlay(false)} />
        </section>
    );
}

export default WelcomeSection;
