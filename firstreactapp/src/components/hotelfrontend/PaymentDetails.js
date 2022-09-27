import axios from "axios";
import React, { useRef } from 'react';
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import emailjs from 'emailjs-com';

export default function PaymentDetails(props) {
  let navigate = useNavigate();
  const form = useRef();
  const [email, setEmail] = useState("");

  function getMail(e) {
    e.preventDefault();
    console.log("in getmail");
    navigate("/mailDetails");
  }

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
    <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">Online Hotel Booking System</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/customerhome">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='App container col-8'>
        <br></br>
        <table class="table table-success">
          <thead>
            <tr>
              <th>Payment id</th>
              <th>Payment Mode</th>
              <th>Booking id</th>
              <th>Hotel Name</th>
              <th>Email</th>
              <th>User Name</th>
              <th>Amount paid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{JSON.parse(localStorage.getItem("payment")).paymentid}</td>
              <td>{JSON.parse(localStorage.getItem("payment")).paymentmode}</td>
              <td name="bookingid">{JSON.parse(localStorage.getItem("payment")).bookingid}</td>
              <td>{JSON.parse(localStorage.getItem("hotel")).hname}</td>
              <td>{JSON.parse(localStorage.getItem("loggedinuser")).email}</td>
              <td>{JSON.parse(localStorage.getItem("loggedinuser")).fname}</td>
              <td name="totalcost">{JSON.parse(localStorage.getItem("totalcost"))}</td>
            </tr>
          </tbody>
        </table>
        {/* <input  type="submit" value="Get booking details on email" /> */}
        <div>
          {/* hidden table for sending order detail on gmail */}
          <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="fname" value={JSON.parse(localStorage.getItem("loggedinuser")).fname} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="hidden" name="hname" value={JSON.parse(localStorage.getItem("hotel")).hname} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="hidden" name="bookingid" value={JSON.parse(localStorage.getItem("payment")).bookingid} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="hidden" name="totalcost" value={JSON.parse(localStorage.getItem("totalcost"))} onChange={(e) => setEmail(e.target.value)}></input>
            <input type="hidden" name="email" value={JSON.parse(localStorage.getItem("loggedinuser")).email} onChange={(e) => setEmail(e.target.value)}></input>
            <input class="btn btn-primary" type="submit" value="Get booking details on email" />
          </form>
        </div>
        <div>
          <br></br>
          <h3><i>Thank you for using our services, Hope we will see you soon...!!!</i></h3>
          <a href="/customerhome"><button class="btn btn-primary">Click here to browse hotels</button></a>
          <br></br> <br></br>
          {/* <input class="btn btn-primary" type="submit" value="Get booking details on email" /> */}
        </div>
      </div>
    </div>
  )
}