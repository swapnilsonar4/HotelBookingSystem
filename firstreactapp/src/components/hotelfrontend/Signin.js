import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import mystore from "./Store";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginerror, setLoginerror] = useState("");
  const [loggedinuser, setLoggedinuser] = useState("");
  const [state, setState] = useState("");
  const [verified, setVerified] = useState(false);
  let navigate = useNavigate();
  function validateForm() {
    return email.length > 0 && password.length > 0 && setVerified != false;
  }

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }// for captcha

  function handleSubmit(event) {
    event.preventDefault();
    const reqData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    };

    fetch("http://localhost:8080/login", reqData)
      .then(resp => resp.text())
      .then(data => {
        if (data.length != 0) {
          const json = JSON.parse(data)
          if (json.usertype == "customer") {
            //setCustomer(json);
            //this.setState({customer:json})
            // localStorage.setItem("loggedinuser",JSON.stringify(state.customer))     
            localStorage.setItem("loggedinuser", JSON.stringify(json))
            //useNavigate("/customerhome")
            //this.props.navigate("/customerhome")
            // navigate("http://localhost:3000/login")
            // mystore.dispatch({type:'LOGGEDIN'})
            navigate("/customerhome");
          }
          if (json.usertype == "service") {
            //this.setState({service:json})
            localStorage.setItem("loggedinuser", JSON.stringify(json))
            //this.props.history.push("/customerhome")
            //this.setState({user:json.usertype})
            navigate('/servicehome')
          }
          if (json.usertype == "admin") {
            //this.setState({admin:json})
            //localStorage.setItem("loggedinuser",JSON.stringify(this.state.admin))
            //this.props.history.push("/customerhome")
            //this.setState({user:json.usertype})
            localStorage.setItem("loggedinuser", JSON.stringify(json))
            navigate('/adminhome')
          }
        }
        else {
          //this.setState({loginerror:"Wrong email and password"})
          setLoginerror("Wrong email and password");
          console.log(loginerror);
          alert("Invalid email and password. Please enter correct details");
        }
      }).catch(err => console.log(err.text));
  }

  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">Online Hotel Booking System</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group> <br />
          {/* Captcha */}
          <ReCAPTCHA
            sitekey="6Lf8PhciAAAAAKKRbb2kbDc1IViFH8EhISdemZYd"
            onChange={onChange}
            required
          />
          {/* Captcha code ends*/}
          <Button classNameName="mt-3" block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
          <br />
          <a href="/register">New User? Sign Up</a>
        </Form>
      </div>
    </div>
  );
}