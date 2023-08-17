import React, { useContext } from 'react';
import './ContactPopup.scss';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Swal from 'sweetalert2';
import CloseIcon from '@mui/icons-material/Close';
import backImg from '../../Images/Background/contactPopup.png';
import { Storage } from '../../App';

const schema = yup.object({
  name: yup.string().required(),
  number: yup.string().required(),
  email: yup.string().required(),
  message: yup.string().required(),
}).required();


function ContactPopup() {
  const {GetContactPopup} = useContext(Storage);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    if (data.number.length === 10) {
      Swal.fire({
        icon: 'success',
        title: 'Thank you',
        text: 'Send Successfully!',
      })
      GetContactPopup(false);
    } else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Type valid Number',
      })
    }
  };



  return (
    <div className='contact-poup-components'>
      <img src={backImg} alt="backImg" className='backImg'/>

      <div className="popup-container">

        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
          <CloseIcon className='close-Icon' onClick={() => GetContactPopup(false)}/>

          <h3 className="heading">Let’s Work Together</h3>

          <input type='text' name='name' {...register("name")} className='input-box' placeholder='Your Name' required />

          <input type='number' name='number' {...register("number")} className='input-box number' placeholder='Your Number' required />

          <input type='email' name='email' {...register("email")} className='input-box' placeholder='Your Email' required />

          <textarea name="message"  {...register("message")} className='message-box' placeholder='Your Message' required></textarea>

          <button className='submit-btn' type='submit'>Send</button>

        </form>

      </div>
    </div>
  )
}

export default ContactPopup