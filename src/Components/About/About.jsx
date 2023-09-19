import React from 'react';
import './About.scss';
import abtimg from '../../Images/Elements/abou.png';
import power from '../../Images/Elements/power.png';
function About() {
    return (
        <div className='about-components' id='about'>
            <div className="about-container">
                <div className="left-box">
                    <div className="top-box">
                        <div className="about-text">
                            <h3 className='text-about'>About</h3>
                            <h3 className="us-text">Us</h3>
                            <img src={power} alt="power" className='power'/>
                        </div>
                    </div>
                    <div className="bottom-box">
                        <img src={abtimg} alt="back-img" className='bckimg' />
                    </div>
                </div>
                <div className="right-box">
                    <p className="heading">Why Techaquarius?</p>
                    <p className="about-para">Techaquarius is one of the best website development team. We are a young and proficient team of passionate digital experts who mark in innovative strategies and out-of-the-box settlements for our esteemed clients. Techaquarius is the one-stop solution for all your website design and app development as you want.We have a highly trained and experienced team, so we can guarantee that your website will be reached at an entirely new level. We are ready to provide you with the best web design services at the lowest possible cost. </p>
                    <p className="about-para">At Techaquarius, our passion for technology drives us to deliver outstanding results for our clients. We're not just a tech team; we're your trusted digital partners, committed to pushing the boundaries of digital excellence. Join us on this exciting journey, and let's transform your digital aspirations into reality with Techaquarius.</p>
                    <a href="" className='readme-btn'>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default About