import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HomePage from '../Pages/HomePage';
import ContactPage from '../Pages/ContactPage';
function MainPage() {
    return (
        <>
            <Navbar />
            <HomePage />

            <ContactPage />
        </>
    )
}

export default MainPage