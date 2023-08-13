import React from 'react';
import backImg from '../../Images/Background/hero.png';
import './Home.scss';
function Home() {
  return (
    <div className='home-components'>
        <img src={backImg} alt="backImg" className='backImg'/>
    </div>
  )
}

export default Home