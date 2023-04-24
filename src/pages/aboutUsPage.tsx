import React from 'react';
import Header from '../components/homePage/header';
import Footer from '../components/homePage/footer';

function AboutUsPage() {
    return (
        <>
            <Header onLoginClick={() => console.log("Login clicked")} onLogoutClick={() => console.log("logOut clicked")} loggedIn={false}/>
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
