import React from "react";
import { Link } from "react-router-dom";
import bootstrap from 'bootstrap';
//import FontAwesomeIcon from FontAwesomeIcon;
import './footer.css';

const Footer = (props) => {
  return (
    <div className="footer">
      <footer className="text-center text-lg-start bg-light text-muted ">
        <section>
          <div className="boxfooter bg-dark text-center text-md-start mt-5" style={{ fontFamily: "revert" }}>
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Hotel Booking System
                </h6>
                <p>
                  This is CDAC-IACSD's student's academic project. <br></br>
                  <br></br>
                  Devoleped by :
                  <br></br><i class="bi bi-dot"></i> Swapnil Sonar
                  <br></br><i class="bi bi-dot"></i> Aditya Rode
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4"  >
                  Technologies used:
                </h6>
                <p>
                  <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">MySQL</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">SpringBoot</a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" /* style={{ fontSize: '20px', color: 'black' }} */>
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Hotels near me</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Hotels in Pune</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Hotels in Delhi</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Hotels in Mumbai</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact US</h6>
                <p><i class="bi bi-house-door"></i> Sahakar Nagar, Pune, India</p>
                <p>
                  <i class="bi bi-envelope"></i>
                  <a href="mailto:someone@example.com"><span style={{ color: 'white' }}> hotelbookingsystem@gmail.com</span></a>
                </p>
                <p><i class="bi bi-telephone"></i> +91 8484856503</p>
                <p><i class="bi bi-telephone"></i> +91 9370276513</p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="/"> Online Hotel Booking System</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
