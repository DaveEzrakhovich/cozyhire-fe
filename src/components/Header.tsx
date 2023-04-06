import React from 'react';

interface HeaderProps {
    onLoginClick: () => void;
}

function Header({ onLoginClick }: HeaderProps) {
    return (
        <header className="Header">
            <div className="Header__logo">CozyHire</div>
            <nav>
                <ul className="Header__menu">
                    <li><a href="#">Our Mission</a></li>
                    <li><button onClick={onLoginClick}>Sign Up / Log In</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
