import React from 'react';
import '../../styles/header.css';

interface HeaderProps {
    loggedIn: boolean;
    onLoginClick: () => void;
    onLogoutClick: () => void;
}

function Header({ loggedIn, onLoginClick, onLogoutClick }: HeaderProps) {
    return (
        <header className="header">
            <div className="Header__logo"></div>
            <nav>
                <ul className="Header__menu">
                    <li>
                        <a href="#">Our Mission</a>
                    </li>
                    {loggedIn ? (
                        <li>
                            <button onClick={onLogoutClick}>Logout</button>
                        </li>
                    ) : (
                        <li>
                            <button onClick={onLoginClick}>Login / Sign Up</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
