import React from 'react';
import { FaGoogle, FaMicrosoft, FaApple } from 'react-icons/fa';

interface SocialLoginOverlayProps {
    show: boolean;
    onClose: () => void;
}

function SocialLoginOverlay({ show, onClose }: SocialLoginOverlayProps) {
    if (!show) {
        return null;
    }

    return (
        <div className="overlay">
            <div className="overlay-content">
                <button onClick={onClose}>X</button>
                <h2>Login with:</h2>
                <div className="social-buttons">
                    <button><FaGoogle /> Login with Google</button>
                    <button><FaMicrosoft /> Login with Microsoft</button>
                    <button><FaApple /> Login with Apple</button>
                </div>
            </div>
        </div>
    );
}

export default SocialLoginOverlay;
