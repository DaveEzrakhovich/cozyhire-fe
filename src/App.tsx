import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import LoginOverlay from './components/LoginOverlay';
import './style.css';


function App() {
    const [showLoginOverlay, setShowLoginOverlay] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setShowLoginOverlay(true);
    };

    const handleLogoutClick = () => {
        setLoggedIn(false);
    };

    const handleLoginSuccess = () => {
        setLoggedIn(true);
        setShowLoginOverlay(false);
    };

    return (
        <>
            <Header onLoginClick={handleLoginClick} onLogoutClick={handleLogoutClick} loggedIn={loggedIn} />
            <Main loggedIn={loggedIn} onLoginSuccess={handleLoginSuccess} onLoginClick={() => setShowLoginOverlay(true)} onLogoutClick={() => setLoggedIn(false)} />
            <Footer />
            <LoginOverlay show={showLoginOverlay} onClose={() => setShowLoginOverlay(false)} onLoginSuccess={handleLoginSuccess} />
        </>
    );
}

export default App;
