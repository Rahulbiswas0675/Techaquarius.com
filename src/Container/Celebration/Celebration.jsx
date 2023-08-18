import React, { useState, useEffect, useContext } from 'react';
import backImg from '../../Images/Background/contactPopup.png';
import Logo from '../../Images/Logo/Logo.png';
import './Celebration.scss';
import { Storage } from '../../App';

function Celebration() {
    const { getCelebrate } = useContext(Storage);
    const targetDate = new Date('2023-09-20T00:00:00');
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
    useEffect(() => {
        if (timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0) {
            setCelebriteActive(true);
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
                    null
                )
            }





        </div>
    )
}

export default Celebration;