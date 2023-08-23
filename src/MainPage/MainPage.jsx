import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HomePage from '../Pages/HomePage';
import ContactPage from '../Pages/ContactPage';
import FooterPage from '../Pages/FooterPage';

function MainPage() {
    return (
        <>
            <Navbar />
            <HomePage />
            <ContactPage />
            <FooterPage />
        </>
    )
}

export default MainPage