import React from 'react';

type LoginOverlayProps = {
    show: boolean;
    onClose: () => void;
}

function LoginOverlay(props: LoginOverlayProps) {
    const { show, onClose } = props;

    return (
        <div className={`login-overlay ${show ? 'show' : ''}`}>
            <div className="login-form">
                <button className="close-button" onClick={onClose}>
                    <i className="fa fa-times"></i>
                </button>
                <h3>Login</h3>
                <button className="google-button">Login with Google</button>
                <button className="microsoft-button">Login with Microsoft</button>
                <button className="apple-button">Login with Apple</button>
            </div>
        </div>
    );
}

export default LoginOverlay;
