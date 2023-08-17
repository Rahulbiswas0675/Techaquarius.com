import React from 'react';
import './Contact.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import mapImg from '../../Images/Elements/map.png';
import HelpLine from '../../Images/Elements/helpline.png';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const schema = yup.object({
    name: yup.string().required(),
    number: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required(),

}).required();

function Contact() {

    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
        reset();
    };



    return (
        <div className='contact-components'>
            <div className="contact-container-left">

                <div className="contact-details-container">

                    <div className="contact-details">

                        <div className="heading-box">
                            <div className="left-item">
                                <img src={HelpLine} alt="HelpLine" className='icon-img'/>
                                <h3 className="head">Get in</h3>
                            </div>
                            <div className="right-item">
                                <h3 className="head">Touch</h3>
                            </div>
                        </div>


                        <div className="para-box">
                            <p className="pera">Leave your name, email, number and message <br /> we'll get right back to you.</p>
                        </div>

                        <div className="contact-item-container">

                            <div className="item-box">
                                <div className="left-box">
                                    <CallIcon className='icons' />
                                </div>
                                <div className="right-box">
                                    <p className="head">Phone Number</p>
                                    <p className="content">+91 9732149101</p>
                                </div>
                            </div>

                            <div className="item-box">
                                <div className="left-box">
                                    <EmailIcon className='icons' />
                                </div>
                                <div className="right-box">
                                    <p className="head">Email Address</p>
                                    <p className="content">support@techaquarius.com</p>
                                </div>
                            </div>

                            <div className="item-box">
                                <div className="left-box">
                                    <LocationOnIcon className='icons' />
                                </div>
                                <div className="right-box">
                                    <p className="head">Map Street</p>
                                    <p className="content">Karimpur, Nadia,West Bengal, India, 741122</p>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="map-box">
                        <img src={mapImg} className="map-img" />
                    </div>

                </div>

            </div>
            <div className="contact-container-right">
                <div className="contact-form-container">
                    <h3 className="heading">Let's Work Together</h3>

                    <form className='form-container' onSubmit={handleSubmit(onSubmit)}>

                        <div className="input-container">
                            <label className='lable'>Full Name</label>
                            <input type="text" className='input' placeholder='Enter Your Name' {...register("name")} required />
                        </div>

                        <div className="input-container">
                            <label className='lable'>Your Email</label>
                            <input type="email" className='input' placeholder='Enter Your Email' {...register("email")} required />
                        </div>

                        <div className="input-container">
                            <label className='lable'>Your Number</label>
                            <input type="number" className='input number' placeholder='Enter Your Number' {...register("number")} required />
                        </div>

                        <div className="input-container">
                            <label className='lable'>Message</label>
                            <textarea type="text" className='textarea' placeholder='Enter Your Message' {...register("message")} required />
                        </div>

                        <div className="btn-div">
                            <button className="submit-btn" type='submit'>SEND</button>
                        </div>



                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;