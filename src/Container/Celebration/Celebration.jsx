import React, { useState, useEffect, useContext } from 'react';
import backImg from '../../Images/Background/contactPopup.png';
import Logo from '../../Images/Logo/Logo.png';
import './Celebration.scss';
import { Storage } from '../../App';
import Celebrate from '../Celebrate/Celebrate';
import CelebrateBoom from '../Celebrate/CelebrateBoom';

function Celebration() {
    const { getCelebrate } = useContext(Storage);

    // this for real date
    // const targetDate = new Date('2023-09-20T00:00:00');  

    // this for testing date
    const targetDate = new Date('2023-08-22T00:00:00'); 

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    const [celebrateActive, setCelebriteActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function calculateTimeRemaining() {
        const now = new Date();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }
    function celibrare() {
        setTimeout(() => {
            getCelebrate(false);
        }, 10000)
    }
    useEffect(() => {
        if (timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
            setCelebriteActive(true);
            celibrare();
        }
    }, [timeRemaining.seconds])

    return (
        <div className="celebration-components">
            <img src={backImg} alt="techaquarius.com" className='background-img' />

            {
                !celebrateActive ? (
                    <div className="timer-container">
                        <h1 className='head-1 animate__animated animate__pulse animate__infinite infinite '>LAUNCHING</h1>
                        <h1 className='head-2 animate__animated animate__pulse animate__infinite infinite animate__delay-2s animate__zoomOut'>SOON!</h1>
                        <h3 className='head-3'>{targetDate.toDateString()}</h3>

                        <div className="flex-timer">
                            <h3 className="heading">Time remaining :</h3>
                            <h3 className='bold-text'>{timeRemaining.days}<span>days,</span></h3>
                            <h3 className='bold-text'>{timeRemaining.hours}<span>hours,</span></h3>
                            <h3 className='bold-text'>{timeRemaining.minutes}<span>minutes,</span></h3>
                            <h3 className='bold-text'>{timeRemaining.seconds}<span>seconds</span></h3>
                        </div>
                        <h3 className='head-4'> <h3 className='bold-text'>{timeRemaining.days}</h3>days, <h3>{timeRemaining.hours}</h3>hours, <h3>{timeRemaining.minutes}</h3>minutes, <h3>{timeRemaining.seconds}</h3>seconds</h3>
                        <div className="company">
                            <img src={Logo} alt="Techaquarius" className="logo" />
                            <h3 className="brand">Techaquarius</h3>
                        </div>
                    </div>
                ) : (
                    <div className="timer-container">
                        <CelebrateBoom isExploding={celebrateActive} />
                        <div className="wellcome-page">
                            <div className="company  animate__animated  animate__zoomInDown">
                                <img src={Logo} alt="Techaquarius" className="logo" />
                                <h3 className="brand">Techaquarius</h3>
                            </div>

                            <div className="content-box animate__animated  animate__zoomInDown">
                                <h1 className='tags'>Your Next Digital Partner <br /> for Web, App, SEO , UI/UX Design <br />  & AI Solutions</h1>
                            </div>

                            <div className="thankyou-box animate__animated  animate__zoomInDown">
                                <h1 className='message'>Thank You For Visiting Our Website</h1>
                            </div>
                        </div>
                    </div>
                )
            }

            {
                celebrateActive ? <Celebrate isExploding={celebrateActive} className="celebraton-boom" /> : null
            }

        </div>
    )
}

export default Celebration;