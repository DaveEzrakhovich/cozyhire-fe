import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main'
// import JobsPage from './pages/JobsPage';
import Footer from './components/Footer';
import LoginOverlay from './components/LoginOverlay';
import './App.css';

function App() {
    const [showLoginOverlay, setShowLoginOverlay] = useState(false);
    const onLoginClick = () => setShowLoginOverlay(true);

    return (
        <>
            <Header onLoginClick={onLoginClick} />
            <Main loggedIn={false} onLoginClick={onLoginClick} />
            <Footer />
            <LoginOverlay show={showLoginOverlay} onClose={() => setShowLoginOverlay(false)} />
        </>
    );
}


export default App;
