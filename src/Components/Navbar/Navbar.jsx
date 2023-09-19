import React, { useContext, useEffect, useState } from 'react'
import './Navbar.scss';
import full_logo from '../../Images/Logo/Logo.png';
import nav_button from '../../Images/Elements/Nav-button.png';
import { Storage } from '../../App';

function Navbar() {
    const { PostContactPopup, GetContactPopup, postScrollIs, getScrollIs } = useContext(Storage);
    const [menuBtn, setMenuBtn] = useState("mobile-nav");
    const [backColor, setBackColor] = useState("none");
    const [sideBar, setSideBar] = useState('hidden');

    const popup_handler = () => {
        GetContactPopup(!PostContactPopup)
    }

    const slider_handler = () => {
        if (sideBar === 'visible') {
            setSideBar("hidden");
            getScrollIs(0);
        } else {
            setSideBar("visible");
            getScrollIs(100);
        }
    }

    useEffect(() => {
        if (postScrollIs) {
            setBackColor("#141774");
        } else {
            setBackColor("transparent");
        }
    }, [postScrollIs]);



    return (
        <div className="navbar-components" style={{ backgroundColor: backColor }}>
            <div className="navbar-container">
                <div className="left-box">
                    <a href='/' className="logo-contaner">
                        <img src={full_logo} alt="Logo" className='logo' />
                        <h3 className="logo-text">Techaquarius</h3>
                    </a>
                </div>

                <div className={`mid-box ${menuBtn}`}>
                    <div className="item-container">
                        <a href="/#home" className="items">Home</a>
                        <a href="/#about" className="items">About</a>
                        <a href="/#project" className="items">Projects</a>
                        {/* <a href="/#review" className="items">Review</a> */}
                        <a href="/#contact" className="items">Contact</a>
                    </div>

                </div>

                <div className="right-box">
                    <div className="button-container">
                        <img src={nav_button} alt="nav_button" className='nav_button' onClick={slider_handler} />
                        <button className="contact-btn" onClick={popup_handler}>Contact</button>
                    </div>
                </div>
            </div>

            <div className={`mobile-nav ${sideBar}`}>
                <div className="item-container">
                    <a href="#home" className="items">Home</a>
                    <a href="#about" className="items">About</a>
                    <a href="#project" className="items">Projects</a>
                    {/* <a href="#review" className="items">Review</a> */}
                    <a href="#contact" className="items">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;