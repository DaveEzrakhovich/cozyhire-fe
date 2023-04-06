import React from 'react';
import '../style.css';
import AboutUsSection from './LandingPage/AboutUsSection';
import WelcomeSection from './LandingPage/WelcomeSection';
import AnonymousSection from './LandingPage/AnonymousSection';

function Main(props: {loggedIn: boolean, onLoginClick: () => void}) {
    return (
        <main>
            <WelcomeSection loggedIn={props.loggedIn} onLoginClick={props.onLoginClick} />
            <AboutUsSection />
            <AnonymousSection />
        </main>
    );
}


export default Main;
