import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
function Customerhome() {

  const [city, setCity] = useState("");
  const uid = JSON.parse(localStorage.getItem("loggedinuser")).uid
  const [Hotel, setHotel] = useState([]);
  const [hotelid, setHotelid] = useState("");

  let navigate = useNavigate();
  function useEffect(event) {
    event.preventDefault();
    const reqData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        city: city
      })
    };

    if (city) {
      fetch("http://localhost:8080/city?cityname=" + city, reqData)
        .then(resp => resp.text())
        .then(data => {
          if (data.length != 0) {
            const json = JSON.parse(data)
            console.log(json)
            console.log(Hotel)
            setHotel(json);
            localStorage.setItem("hotels", JSON.stringify(json))
            console.log(Hotel)
          } else if (data.length == 0) {
            console.log(console.error());
            (alert("City not found...!!!"))
          };
          // if (!data.ok || data.length == 0) {
          //   alert("city not found");
          // }
          // if (data == null) {
          //   alert("city not found")//not working . check out why?
          // }
        })
    } else (alert("Please fill tha data...!!!"));
  }
  function viewhotel(event) {
    event.preventDefault();
    //localStorage.setItem("hotelid",hotelid)
    //setHotelid("1");
    navigate(`/viewhotel?hotelid=${hotelid}`)
  }

  return (
    <div >
      <div  >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/"><b>Online Hotel Booking System</b></a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>

                <li class="nav-item">
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/update?uid=${uid}`}
                  >
                    Profile
                  </Link>
                </li>
                <div className="d-flex align-items-center">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/logout">Logout</a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <div className='App container col-6' ><b>Hello from customer home page .....!!!</b>
            <h4>Welcome {JSON.parse(localStorage.getItem("loggedinuser")).fname}....!!</h4>

            <div className='mb-2'>
              <input
                className='form-control'
                placeholder=' Enter City Name'
                type='text'
                name='city'
                required
                onChange={(e) => setCity(e.target.value)}
                onBlur={(e) => {
                  if (/^[a-zA-Z]*$/.test(e.target.value)) {
                    document.getElementById("searchCity").innerHTML = ""
                  } else {
                    document.getElementById("searchCity").innerHTML = "Input must be a character string"
                  }
                }}
              />
              <h6 id="searchCity"></h6>
            </div>
            <div className='mb-3'>
              <button class="btn btn-primary" type='submit' onClick={useEffect}>Search City</button>
              <br></br><br></br>
            </div>
            <div>
              {
                Hotel.map((obj) => (
                  <table class="table table-success">
                    <thead>
                      <tr>
                        <th>Hotel name</th>
                        <th>Hotel address</th>
                        <th>Hotel contact no</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr key={obj.hotelid}>
                        <td>{obj.hname}</td>
                        <td>{obj.address}</td>
                        <td>{obj.contact_no}</td>
                        <td><Link class="btn btn-primary mr-2" to={`/viewhotel?hotelid=${obj.hotelid}`}>
                          View
                        </Link></td>
                      </tr>
                      <br></br>
                    </tbody>
                  </table>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Customerhome;