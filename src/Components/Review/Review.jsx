import React from 'react';
import './Review.scss';
import startimg from '../../Images/Elements/star.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import dp from '../../Images/Elements/dp.png';

function Review() {
  return (
    <div className='review-components'>
        <div className="review-continer">

            {/* <div className="left-box">
                <div className="header-box">
                    <h3 className="client-text">Client</h3>
                    <h3 className="review-text">Review</h3>
                    <img src={startimg} alt="startimg" className='startimg'/>
                </div>

                <p className="review-para">Don’t Believe Us, Check What Client Think Of Us!</p>

                <div className="btn-div">
                    <div className="btn-item"><ArrowBackIosNewIcon className='review-btn'/></div>

                    <div className="btn-item"><ArrowForwardIosIcon className='review-btn'/></div>
                </div>

            </div>

            <div className="right-box">

                <div className="clients-item">
                    <ThumbsUpDownIcon className='ThumbsUpDownIcon'/>

                    <div className="text-box">
                        <h4 className="name">Subhendu Dey</h4>
                        <p className="tags">Energic Crop Science</p>

                        <div className="stars">
                            <StarIcon className='star'/>
                            <StarIcon className='star'/>
                            <StarIcon className='star'/>
                            <StarIcon className='star'/>
                            <StarIcon className='star'/>
                        </div>
                    </div>

                </div>

                <div className="clients-image">
                    <img src={dp} alt="dp" className='dp-item'/>
                </div>

                <div className="clients-review">
                    <p className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur modi excepturi, voluptatem eum laboriosam eveniet rem inventore, officia officiis totam commodi error. Corporis rerum accusantium, repellendus sed nostrum recusandae veritatis.</p>
                </div>

            </div> */}

        </div>
    </div>
  )
}

export default Review