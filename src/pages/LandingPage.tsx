import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginOverlay from '../components/LoginOverlay';
import './LandingPage.css';

interface LandingPageProps {
    onLoginClick: () => void;
}

function LandingPage({ onLoginClick }: LandingPageProps) {
    return (
        <>
            <Header onLoginClick={onLoginClick} />
            <main>
                <section className="LandingPage__section">
                    <h1>CozyHire - instead of you chasing your next job, let it chase you!</h1>
                    <div className="LandingPage__buttons">
                        <button className="LandingPage__button" onClick={onLoginClick}>Login</button>
                        <button className="LandingPage__button">Sign Up</button>
                    </div>
                </section>
                <section className="LandingPage__section">
                    <h2>CozyHire is a platform that allows you to lean back and get job offers while staying anonymous. All you need to do is to tell us the experience you're bringing and in which conditions (salary, location etc.) you'd like to get. From that point on, the companies will compete over you!</h2>
                </section>
                <section className="LandingPage__section">
                    <button className="LandingPage__button">Learn More</button>
                </section>
            </main>
            <Footer />
            <LoginOverlay show={false} onClose={() => {}} />
        </>
    );
}

export default LandingPage;
