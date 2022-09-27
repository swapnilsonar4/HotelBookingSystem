import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';

export const ContactUs = () => {
    const form = useRef();
    const [email, setEmail] = useState("");
    const [name, setname] = useState("");
    const [message, setmessage] = useState("");

    let navigate = useNavigate();

    function sendEmail(e) {
        e.preventDefault();
        console.log("in send email");
        alert("Email send, Kindly check your inbox");
        emailjs.sendForm(
            'service_8ceo7ga',
            'template_fo67ylg',
            form.current, 'feja0C-RTjpwjrIwt'
        ).then(res => {
            console.log(res.text);
            navigate("/");
        }).catch(err => console.log(err.text));
    };

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="/">Online Hotel Booking System</a>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">Login</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/register">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

            {/*  <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
             <input type="text" name="user_name" />
             <label>Email</label>
             <input type="email" name="user_email" />
             <label>Message</label>
             <textarea name="message" />
             <input type="submit" value="Send" />
         </form> */}

            <div className="Login">
                <h2>Contact Us</h2>
                <h4>We would love to hear from you !</h4>
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" class="col-md-9" size="lg" name="name" placeholder='Name' required onChange={(e) => setEmail(e.target.value)}></input><br></br><br></br>
                    <input type="text" class="col-md-9" size="lg" name="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)}></input> <br></br><br></br>
                    <textarea type="text" class="col-md-9" name="message" placeholder='Message' required onChange={(e) => setEmail(e.target.value)} /> <br></br><br></br>
                    <input class="btn btn-primary" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
}
export default ContactUs;