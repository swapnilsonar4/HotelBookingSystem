import React from "react";
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import Hello1 from './components/class';
import Header from './components/header';
import Date from './components/time';
import Fact from './components/fact';
import propTypes from 'prop-types';
import Array from './components/array';
import Emp from './components/emp';
import Msg from './components/compState1';
import Msg2 from './components/compState2';
import Styl from './components/stylecomp1';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sty2 from './components/stylecomp2';
import Msge from './components/compLife1';
import changeColor from './components/compLife2';
import Msge2 from './components/compLife2';
import Form1 from './components/form1';
import Form2 from './components/form2';
import Form3 from './components/form3';
import { BrowserRouter, Link, NavigationType, Route, Router, Routes, Switch } from 'react-router-dom';
import Getcomp from './components/restapi';
import GetComp from './components/GetComp';
import GetEmp from './components/restapi2';
import { GetStudents } from './components/GetStudents';
import GetContacts from './components/GetContacts';
import { StudentSave } from './components/StudentSave';
import Login from './components/hotelfrontend/login';
import Form from './components/hotelfrontend/register';
import Register from "./components/hotelfrontend/register";
import User from "./components/hotelfrontend/Form";
import Regn from "./components/hotelfrontend/Form";
import Registration from "./components/hotelfrontend/Registration";
import RegistrationForm from "./components/hotelfrontend/Registration";
import RForm2 from "./components/hotelfrontend/Registration";
import Customerhome from "./components/hotelfrontend/Customerhome";
import Signin from "./components/hotelfrontend/Signin";
import Servicehome from "./components/hotelfrontend/Servicehome";
import Adminhome from "./components/hotelfrontend/Adminhome";
import Signup from "./components/hotelfrontend/Signup";
import MainMenu from "./components/hotelfrontend/MainMenu";
import Addhotel from "./components/hotelfrontend/Addhotel";
import Hotelimages from "./components/hotelfrontend/Hotelimages";
import HotelByCity from "./components/hotelfrontend/Hotelbycity";
import ViewHotel from "./components/hotelfrontend/Viewhotel";
import Footer from "./components/hotelfrontend/Footer";
import EditUser from "./components/hotelfrontend/EditUser";
import CheckRoom from "./components/CheckRoom";
import Booking from "./components/hotelfrontend/Booking";
import Hotels from "./components/hotelfrontend/Hotels";
import HotelByid from "./components/hotelfrontend/HotelByid";
import DeleteHotel from "./components/hotelfrontend/DeleteHotel";
import DeleteUser from "./components/hotelfrontend/DeleteUser";
import Payment from "./components/hotelfrontend/Payment";
import PaymentDetails from "./components/hotelfrontend/PaymentDetails";
import RoomDetails from "./components/hotelfrontend/RoomDetails";
import Logout from "./components/hotelfrontend/Logout";
import ContactUs from "./components/hotelfrontend/ContactUs";
import mailDetails from "./components/hotelfrontend/mailDetails";



function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>modified react</h1>
            <Hello/>
            <Hello1/>
            <Header/>
            <Date/>
            
       </header>
       <Fact/>
        
      <Array/>
      <Emp/>
      <Msg/>
      <Msg2/>
      <Styl/>
      <Sty2/>
      <Msge/>
      <Msge2/>
      <Form1/>
      <Form2/>
      <Form3/>

      <BrowserRouter>
        <ul className='nav nav-tabs'>
            <li className='nav-item'><Link className='nav-link' to="login">login</Link></li>
            <li className='nav-item'><Link className='nav-link' to="reg">RegForm</Link></li>
            <li className='nav-item'><Link className='nav-link' to="mount">Mounting</Link></li>
            <li className='nav-item'><Link className='nav-link' to="update">Updating</Link></li>

        </ul>
        <Routes>
            <Route path="/login" element={<Form3/>}/>
            <Route path="/reg" element={<Form2/>}/>
            <Route path="/mount" element={<Msge/>}/>
            <Route path="/update" element={<Msge2/>}/>

        </Routes>

  </BrowserRouter>
      <Form3/>
      <Getcomp/>
      <GetEmp/>
     
      <GetContacts/>
       <GetStudents/>
       <StudentSave/>
       
  <Register/>
  <Login/>*/}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customerhome" element={<Customerhome />} />
          <Route path="/servicehome" element={<Servicehome />} />
          <Route path="/adminhome" element={<Adminhome />} />
          <Route path="/" element={<MainMenu />} />
          <Route path="/addhotel" element={<Addhotel />} />
          <Route path="/images" element={<Hotelimages />} />
          <Route path="/hotelbycity" element={<HotelByCity />} />
          <Route path="/viewhotel" element={<ViewHotel />} />
          <Route path="/update" element={<EditUser />} />
          <Route path="/checkroom" element={<CheckRoom />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/gethotels" element={<Hotels />} />
          <Route path="/hotelbyid" element={<HotelByid />} />
          <Route path="/deletehotelbyhid" element={<DeleteHotel />} />
          <Route path="/deleteuser" element={<DeleteUser />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentdetails" element={<PaymentDetails />} />
          <Route path="/roomimages" element={<RoomDetails />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
