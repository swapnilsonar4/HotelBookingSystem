import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import mailDetails from "./mailDetails";

import { useSearchParams } from 'react-router-dom';
export default function Payment() {

  const [cardno, setCardno] = useState("");
  const [cvv, setCvv] = useState("");
  const [expiry, setExpiry] = useState("");
  const [paymentmode, setMode] = useState("");
  const [error, setError] = useState("");

  const param = new URLSearchParams(window.location.search)
  const bookingid = param.get("bookingid")
  const uid = param.get("uid")
  let navigate = useNavigate();

  //const[status1,setStatus1]=useState(0);
  /* let [searchParams] = useSearchParams();
  let [rid, setRid] = searchParams.get('rid')
  const uid=JSON.parse(localStorage.getItem("loggedinuser")).uid
  //const rid=JSON.parse(localStorage.getItem("room"))
  
  //let rid=useParams("rid");  
  console.log(searchParams.get('rid'));
  */


  function dispMsg(ev) {
    ev.preventDefault();
    console.log(uid);
    console.log(bookingid);
    const reqData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cardno: cardno,
        cvv: cvv,
        expiry: expiry,
        bookingid: bookingid,
        uid: uid,
        paymentmode: paymentmode
      })
    };

    if (cardno && cvv && expiry && bookingid && uid && paymentmode) {
      fetch("http://localhost:8080/payment", reqData)
        //.then(resp => resp.json())
        //.then(data => this.setState({st: data, success: true}));
        .then(resp => resp.text())
        .then(data => {
          if (data.length != 0) {
            const json = JSON.parse(data)
            localStorage.setItem("payment", JSON.stringify(json))
            console.log(json)
            console.log("success")
            alert("payment succesfull")
            navigate("/paymentdetails");
          }
          else
            console.log("failed");
        })
    } else (alert("Please fill the data......!!!!!!"));
  }

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
      <div className='App container col-6'>
        <form>
          <div>
            Total cost to  pay:
            <h3>{JSON.parse(localStorage.getItem("totalcost"))}</h3>
          </div>
          <div style={{ fontSize: "24px" }}>
            Payment Mode:
            <input type="radio" name="mode" value="online" onChange={(e) => setMode(e.target.value)} required />Online
          </div>
          <div className='mb-3'>
            <label htmlFor='cardno'>Enter Card No. </label>
            <input
              className='form-control'
              placeholder='Card NO'
              type='text'
              name='cardno'
              noValidate
              required
              onChange={(e) => setCardno(e.target.value)}
              onBlur={(e) => {
                if (/^\d{16}$/.test(e.target.value)) {
                  document.getElementById("CardnumError").innerHTML = null
                } else {
                  document.getElementById("CardnumError").innerHTML = " Card Number must be 16 digits only"
                }
              }}
            />
            <h6 id="CardnumError"></h6>
          </div>

          <div className='mb-3'>
            <label htmlFor='cvv'>Enter Card CVV </label>
            <input
              className='form-control'
              placeholder='cvv'
              type='text'
              name='cvv'
              noValidate
              required
              onChange={(e) => setCvv(e.target.value)}
              onBlur={(e) => {
                if (/^\d{3}$/.test(e.target.value)) {
                  document.getElementById("cvvError").innerHTML = null
                } else {
                  alert("cvv must be 3 digits");
                  document.getElementById("cvvError").innerHTML = " CVV Number must be 3 digits only"
                }
              }}
            />
            <span id="cvvError"></span>
          </div>

          <div className='mb-3'>
            <label htmlFor='expiry'>Select Expiry Date</label>
            <input
              className='form-control'
              placeholder='MM/YYYY'
              type='date'
              name='expiry'
              noValidate
              required
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <button class="btn btn-primary" type='submit' onClick={dispMsg} >Confirm Room Booking</button>
          </div>
          <br></br>
        </form>
      </div>
    </div>
  )
}