import React from 'react';
import './Footer.scss';
import logoImg from '../../Images/Logo/Logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer-components">
            <div className="footer-container">
                <div className="left-container">
                    <div className="logo-container">
                        <img src={logoImg} alt="logoImg" className='logoImg' />
                        <h3 className='brand'>Techaquarius</h3>
                    </div>
                    <p className="tags">Techaquarius is a Leading IT company in India specializing in website and app development, digital marketing, SEO, AI development, and business ideas.</p>

                    <div className="location">
                        <p className="heading">Office :</p>
                        <p className="address">Karimpur, Nadia <br /> West Bengal, India, 741122</p>
                    </div>

                    <div className="social-links">
                        <a href="https://www.facebook.com/profile.php?id=61550253659608" target='blank'><FacebookIcon className='icons' /></a>
                        <a href="https://www.instagram.com/techaquarius_official/?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D" target='blank'><InstagramIcon className='icons' /></a>
                        <a href="https://twitter.com/techaquarius?t=NEFhprs2NKw95JuR7TmsMA&s=09" target='blank'><TwitterIcon className='icons' /></a>
                        <a href="https://www.linkedin.com/in/techaquarius-it-solution-486551289/" target='blank'><LinkedInIcon className='icons' /></a>
                        <a href="https://wa.me/8595457520" target='blank'><WhatsAppIcon className='icons' /></a>
                    </div>
                </div>
                <div className="mid-container">
                    <div className='table'>
                        <h4 className='thead'>Qucik Links</h4>
                        <div className='tbody'>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Projects</a>
                            <a href="">Review</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                </div>

                <div className="mid-container">
                    <div className='table'>
                        <h4 className='thead'>Our Best Projects</h4>
                        <div className='tbody'>
                            <a href="https://energiccropscience.com/">Energiccropscience</a>
                            <a href="https://ayopark.com/">Ayopark</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="blank-border"></div>

            <div className="footer-format">
                <p className="pera">© {year} TECHAQUARIUS ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}

export default Footer;