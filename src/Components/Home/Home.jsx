import React, { useContext } from 'react';
import backImg from '../../Images/Background/hero.png';
import scrollImg from '../../Images/Elements/scroll.png';
import handimg from '../../Images/Elements/hand.png';
import './Home.scss';
import { Storage } from '../../App';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Home() {
  const { getScrollHandler } = useContext(Storage);
  return (
    <div className='home-components' id='home'>
      <img src={backImg} alt="backImg" className='backImg' />

      <div className="home-container">
        <h3 className='heading'>Your Next Digital Partner for <br /> Web, App, SEO , UI/UX Degign <br />  & AI Solutions</h3>
      </div>

      <div className="contact-div">
        <h4 className="contact_btn">Contact us</h4>
        <h4 className="contact_btn">Now <ArrowRightAltIcon className='icons' /></h4>
      </div>

      <div className="loop-anim-div">
        <div className="scroll-box">
          <img src={scrollImg} alt="scrollImg" className="scroll-roll" />
          <img src={handimg} alt="handimg" className="hand-img" />
        </div>
      </div>


    </div>
  )
}

export default Home