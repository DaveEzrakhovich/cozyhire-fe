import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function OurMissionPage() {
    return (
        <>
            <Header onLoginClick={() => console.log("Login clicked")} onLogoutClick={() => console.log("logOut clicked")} loggedIn={false}/>
            <main>
                <section>
                    <h1>Our Mission</h1>
                    <p>Insert your mission statement here.</p>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default OurMissionPage;
