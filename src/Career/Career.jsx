import React, { useState } from 'react';
import backgroundImg from '../Images/Background/contactPopup.png';
import './Career.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    number: yup.string().required(),
    dob: yup.string().required(),
    skill: yup.string().required(),
    qualification: yup.string().required(),
    designation: yup.string().required(),
    address: yup.string().required(),
    about: yup.string().required(),
    agery: yup.string().required(),
}).required();


function Career() {
    const navigate = useNavigate();
    const [spinner, setSpinner] = useState(false);
    const { register, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        setSpinner(true);
        const bodyIs = `
            FREE 6-month internship program
            <br/>
            <br/>
            Name : ${data.name},
            <br/>
            Email : ${data.email},
            <br/>
            Number : ${data.number},
            <br/>
            DOB : ${data.dob},
            <br/>
            Address : ${data.address},
            <br/>
            Skill : ${data.skill},
            <br/>
            Qualification : ${data.qualification},
            <br/>
            Designation : ${data.designation},
            <br/>
            About : ${data.about},
            <br/>
            Agery : ${data.agery},
        `;

        // 6cbc34d2-480f-483d-adea-157040d50aa4 ssl
        const config = {
            SecureToken: "6cbc34d2-480f-483d-adea-157040d50aa4",
            To: 'career@techaquarius.com',
            From: 'techaquariusofficial@gmail.com',
            Subject: "FREE 6-month internship program",
            Body: bodyIs,
        }

        if (window.Email) {
            window.Email.send(config)
                .then(() => {
                    setSpinner(false);
                    Swal.fire(
                        'Thank You!',
                        'Our Team Will Contact You Soon!',
                        'success'
                    )
                    reset();
                    navigate('/')
                })
                .catch((err) => {
                    console.log(err);
                    setSpinner(false);
                });
        }
    }

    return (
        <div className='career-container'>
            <img src={backgroundImg} alt="techaquarius.com/career" className='backgroundImg' />

            <div className="carrer-div">
                <h3 className="heading">Career at Techaquarius</h3>
                <div className="pera">Are you a recent graduate eager to jumpstart your career in IT? Look no further! We're thrilled to offer a FREE 6-month internship program for enthusiastic individuals like you. </div>


                <form className='form-container' onSubmit={handleSubmit(onSubmit)}>

                    <input type="text" name='name' placeholder='Enter Full Name' className='input-field' {...register("name")} />

                    <div className="group">
                        <input type="email" name='email' placeholder='Enter Your Email' className='input-field-inner' {...register("email")} />

                        <input type="number" name='number' placeholder='Enter Your Number' className='input-field-inner' {...register("number")} />
                    </div>

                    <div className="group">
                        <input type="date" name='dob' placeholder='Enter Date of Birth' className='input-field-inner' {...register("dob")} />
                        <input type="text" name='skill' placeholder='Enter Your Skills' className='input-field-inner' {...register("skill")} />

                    </div>

                    <Row className="mb-3">

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label className='lable'>Qualification</Form.Label>
                            <select className='select-field-inner' name='qualification' {...register("qualification")}>
                                <option>--- select ---</option>
                                <option>10th</option>
                                <option>12th</option>
                                <option>Diplomat</option>
                                <option>Graduate</option>
                            </select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label className='lable'>Designation</Form.Label>
                            <select className='select-field-inner' name='designation' {...register("designation")}>
                                <option>--- select ---</option>
                                <option>Market Analyst</option>
                                <option>Digital Marketing</option>
                                <option>Customer Executive</option>
                                <option>UI/UX Designer</option>
                                <option>Web Developer</option>
                                <option>App Developer</option>
                                <option>Full-Stack Developer</option>
                                <option>Front-End Developer</option>
                                <option>Back-End Developer</option>
                                <option>SEO Analyst</option>
                                <option>Product Tester</option>
                                <option>Product Manager</option>
                                <option>Human Resource Manager</option>
                                <option>Finance Manager</option>
                            </select>
                        </Form.Group>

                    </Row>

                    <input type='text' placeholder="Enter Full Address" className='input-field' name='address' {...register("address")} />
                    <textarea className='text-area' placeholder='Enter about your self.' name='about' {...register("about")}></textarea>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="I'm sure to join 6-month FREE internship programing." name='agery' {...register("agery")} />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='btn'>
                        {spinner ? 'Sending...' : 'Submit'}
                    </Button>

                </form>
            </div>
        </div>
    )
}

export default Career