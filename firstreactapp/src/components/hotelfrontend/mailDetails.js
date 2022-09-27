import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';

export const mailDetails = () => {
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
      'template_2bc3sen',
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

      <div className="Login">
        console.log("in mailDetails");
        <h2>Thank you for scheduling stays with us...!!!</h2>
        <h4>We would love to hear from you again......!!!</h4>
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" class="col-md-9" size="lg" name="name" value={JSON.parse(localStorage.getItem("loggedinuser")).fname} onChange={(e) => setEmail(e.target.value)}></input><br></br><br></br>
          <input type="text" class="col-md-9" size="lg" name="hname" value={JSON.parse(localStorage.getItem("hotel")).hname} onChange={(e) => setEmail(e.target.value)}></input> <br></br><br></br>
          <input type="text" class="col-md-9" size="lg" name="bookingid" value={JSON.parse(localStorage.getItem("payment")).bookingid} onChange={(e) => setEmail(e.target.value)}></input> <br></br><br></br>
          <input type="text" class="col-md-9" size="lg" name="email" value={JSON.parse(localStorage.getItem("loggedinuser")).email} onChange={(e) => setEmail(e.target.value)}></input> <br></br><br></br>
          <input type="text" class="col-md-9" size="lg" name="totalcost" value={JSON.parse(localStorage.getItem("totalcost"))} onChange={(e) => setEmail(e.target.value)}></input> <br></br><br></br>
          <input class="btn btn-primary" type="submit" value="Get booking details on email" />
        </form>
      </div>
    </div>
  );
}
export default mailDetails;

  // return (
  //   <div>
  //     <h1>Hello </h1>
  //     <form onSubmit={sendEmail}>
  //       <input type="text" name="fname" value="fname" >{/* {JSON.parse(localStorage.getItem("loggedinuser")).fname} */}</input>
  //       <input type="text" name="paymentid" value=" bookingid">{/* {JSON.parse(localStorage.getItem("payment")). bookingid} */}</input>
  //       <input type="text" name="email" value="email">{/* {JSON.parse(localStorage.getItem("loggedinuser")).email} */}</input>
  //       <input type="text" name="hname" value="hname">{/* {JSON.parse(localStorage.getItem("hotel")).hname} */}</input>
  //       <input type="text" name="totalcost" value="totalcost">{/* {JSON.parse(localStorage.getItem("totalcost"))} */}</input>
  //       <button type='submit'>Get Email</button>
  //     </form>
  //   </div>
  // );
