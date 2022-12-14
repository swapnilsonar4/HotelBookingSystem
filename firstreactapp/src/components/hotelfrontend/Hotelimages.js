import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


export default function Hotelimages() {

  // let [searchParams] = useSearchParams();
  //let [hotelid, setHotelid = searchParams.get('hotelid')

  const param = new URLSearchParams(window.location.search)
  const hotelid = param.get("hotelid")
  let navigate = useNavigate();
  const [file, setFile] = useState();
  // const hotelid=JSON.parse(localStorage.getItem("loggedhotel")).hotelid

  console.log(hotelid)
  const Onformsubmit = (e) => {
    //e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }

    const url = "http://localhost:8080/images?hotelid=" + hotelid;
    axios.post(url, formData, config)
      .then((Response) => {
        alert('image uploaded successfully')
        navigate("/roomimages?hotelid=" + hotelid)
      })
      .catch((err) => {
        console.log('err', err)
      })
  }

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
      </nav>
      <div style={{ color: 'white' }}><h3>Step 2: Upload Hotel Image</h3></div>
      <form enctype="multipart/form-data">
        <div className='mb-3' style={{ color: 'white' }}>
          <label htmlFor='image1'>Upload Hotel Image  </label>
          <input
            className='form-control'
            placeholder='image1'
            type='file'
            name='file'
            noValidate
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
      </form>
      <div className='mb-3'>
        <button class="btn btn-primary" type='submit' onClick={Onformsubmit}>Add Hotel</button>
      </div>
    </div>
  )
}