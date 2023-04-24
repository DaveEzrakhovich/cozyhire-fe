import React from 'react';
import '../../styles/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h3 className="footer-header">Contact Us</h3>
                    <p className="footer-text">Email: info@cozyhire.com</p>
                    <p className="footer-text">Phone: 123-456-7890</p>
                </div>
                <div className="footer-column">
                    <h3 className="footer-header">Follow Us</h3>
                    <div className="footer-social">
                        <a href="#" className="footer-social-link">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="footer-social-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="footer-social-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="footer-social-link">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
