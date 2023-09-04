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
                        <a href="" target=''><FacebookIcon className='icons' /></a>
                        <a href=""><InstagramIcon className='icons' /></a>
                        <a href=""><TwitterIcon className='icons' /></a>
                        <a href=""><LinkedInIcon className='icons' /></a>
                        <a href=""><WhatsAppIcon className='icons' /></a>
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
                        <h4 className='thead'>Our Live Projects</h4>
                        <div className='tbody'>
                            <a href="">Energiccropscience</a>
                            <a href="">Ayopark</a>
                        </div>
                    </div>
                </div>

                <div className="mid-container">
                    <div className='table'>
                        <h4 className='thead'>Career at Techaquarius</h4>
                        <div className='tbody'>
                            <a href="/career">Career</a>
                            <a href="/career/internship">Internship</a>
                            {/* <a href=""></a> */}
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