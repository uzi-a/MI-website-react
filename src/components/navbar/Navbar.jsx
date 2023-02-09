import React from 'react'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
import login from '../../assets/Login button.svg';

const Navbar = () => {
  return (
    <div className="mi__navbar">
      <div className="mi__navbar-links">
        <div className="mi__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="mi__navbar-links_container">
          <p><a href="#home">HOME</a></p>
          <p><a href="#games">GAMES</a></p>
          <p><a href="#help">HELP</a></p>
        </div>
      </div>
      <div className="mi__navbar-login">
        <img src={login} alt="login" width="100" height="50"/>
        </div> 
    </div>
  )
}

export default Navbar
