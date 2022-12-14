import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { URLSearchParamsInit } from "react-router-dom";

export default function ViewHotel(props) {

  /* const [hotel, setHotel] = useState({
     hname: "",
     hotelid:"",
     email: "",
     address: "",
     contact_no: "",
     hotelregno:"",
     ac_room:"",
     non_ac_room:""
   });*/

  const [hotel, setHotel] = useState([]);
  //const [hname, setHname] = useState("");
  var [post, setPost] = useState([]);
  /* const [searchParams] = useSearchParams();
   const [hid, setHotelid] = searchParams.get('hotelid')*/
  const param = new URLSearchParams(window.location.search)
  const hid = param.get("hotelid")
  console.log(hid);
  const hname = ""
  const hotelregno = ""
  const contact_no = ""
  const email = ""
  const address = ""
  const ac_room = ""
  const non_ac_room = ""

  useEffect(() => {
    loadHotel();
    console.log(hid);
  }, []);

  console.log(hid);
  /*const loadHotel =async  () => {
   // const res = await axios.get("http://localhost:8080/viewhotel?hotelid="+hid);
    //const res = fetch("http://localhost:8080/viewhotel?hotelid="+hid);

    axios.get("http://localhost:8080/viewhotel?hotelid="+hid).then((response) => {
      setPost(response.data);
      console.log(response.data);
      console.log(post);
  });    
   // console.log(post.hname);
  };*/

  function importAll(r) {
    let images = {};
    console.log("in import all");
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

  const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  //const obj = JSON.parse(localStorage.getItem("hotel"));
  // console.log(obj);

  function loadHotel(ev) {
    //ev.preventDefault();
    console.log("in loadHotel");
    console.log(hid);
    const reqData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hid: hid
      })
    };

    fetch(`http://localhost:8080/viewhotel?hotelid=${hid}`, reqData)
      .then(resp => resp.text())
      .then(data => {
        if (data.length != 0) {
          const json = JSON.parse(data);
          localStorage.setItem("hotel", JSON.stringify(json));
          // hname=data.hname;
          /* hotelregno = json.hotelregno;
          contact_no = json.contact_no;
          email = json.email;
          address = json.address;
          ac_room = json.ac_room;
          non_ac_room = json.non_ac_room;
          console.log(json.hname);*/
        }
        else
          console.log("failed");
      })
  }

  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">Online Hotel Booking System</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/customerhome">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='App container col-8'>
        <br></br>
        {
          <table class="table table-success">
            <thead>
              <tr>
                <th>Hotel image</th>
                <th>Hotel Name</th>
                <th>Hotel Email</th>
                <th>Hotel Reg. No</th>
                <th>Hotel Address</th>
                <th>Hotel contact no</th>
                <th>Total Ac Room</th>
                <th>Hotel Non Ac room</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                // hotel.map((obj) => (
                // <tr key={obj.hotelid}>
                <tr>
                  {/* <td><img> src={'./images/1.jpg'}</img></td> */}
                  <td><img src={images[JSON.parse(localStorage.getItem("hotel")).hotelid + ".jpg"]} width="350" height={150}></img></td>
                  <td> {JSON.parse(localStorage.getItem("hotel")).hname}</td>
                  <td>{JSON.parse(localStorage.getItem("hotel")).email}</td>
                  <td>{JSON.parse(localStorage.getItem("hotel")).hotelregno}</td>
                  <td>{JSON.parse(localStorage.getItem("hotel")).address}</td>
                  <td>{JSON.parse(localStorage.getItem("hotel")).contact_no}</td>
                  <td>{JSON.parse(localStorage.getItem("hotel")).ac_room}</td>
                  <td>{JSON.parse(localStorage.getItem("hotel")).non_ac_room}</td>
                  <td><Link class="btn btn-primary mr-2" to={`/checkroom?hotelid=` + JSON.parse(localStorage.getItem("hotel")).hotelid}>
                    Check Room
                  </Link></td>

                  {/* <td><img src={images[obj.hotelid + ".jpg"]} width="350" height={150}></img></td> */}
                  {/* <td><img src={images[JSON.parse(localStorage.getItem("hotel")).hotelid + ".jpg"]} width="350" height={150}></img></td>
                    <td> {obj.hname}</td>
                    <td>{obj.email}</td>
                    <td>{obj.hotelregno}</td>
                    <td>{obj.address}</td>
                    <td>{obj.contact_no}</td>
                    <td>{obj.ac_room}</td>
                    <td>{obj.non_ac_room}</td>
                    <td><Link class="btn btn-primary mr-2" to={`/checkroom?hotelid=` + obj.hotelid}>
                      Check Room
                    </Link></td> */}
                </tr>
                //))
              }
            </tbody>
          </table>
        }<br></br>
      </div>
    </div>
  )
}