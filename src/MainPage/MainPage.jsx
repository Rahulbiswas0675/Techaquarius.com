import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import ReviewPage from '../Pages/ReviewPage';
import ContactPage from '../Pages/ContactPage';
import FooterPage from '../Pages/FooterPage';
import ProjectsPage from '../Pages/ProjectsPage';

function MainPage() {
    return (
        <>
            <Navbar />
            <HomePage />
            <AboutPage/>
            <ProjectsPage />
            <ReviewPage/>
            <ContactPage />
            <FooterPage />
        </>
    )
}

export default MainPage