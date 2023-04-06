import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import LoginOverlay from './components/LoginOverlay';

function App() {
    const [showLoginOverlay, setShowLoginOverlay] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    function handleLoginClick() {
        setShowLoginOverlay(true);
    }

    function handleLogoutClick() {
        setLoggedIn(false);
    }

    function handleLoginSuccess() {
        setLoggedIn(true);
        setShowLoginOverlay(false);
    }

    return (
        <>
            <Header loggedIn={loggedIn} onLoginClick={handleLoginClick} onLogoutClick={handleLogoutClick} />
            <Main loggedIn={loggedIn} onLoginSuccess={handleLoginSuccess} onLoginClick={handleLoginClick} />
            <Footer />
            <LoginOverlay show={showLoginOverlay} onClose={() => setShowLoginOverlay(false)} />
        </>
    );
}

export default App;
