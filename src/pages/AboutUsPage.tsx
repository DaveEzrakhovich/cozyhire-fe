import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function AboutUsPage() {
    return (
        <>
            <Header onLoginClick={() => console.log("Login clicked")} />
            <main>
                <section>
                    <h1>About Us</h1>
                    <p>Insert your company description here.</p>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default AboutUsPage;
