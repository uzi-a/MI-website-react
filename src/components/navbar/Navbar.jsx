import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
import login from '../../assets/Login button.svg';

const Menu = () => (
  <>
  <p><a href="#home">HOME</a></p>
  <p><a href="#games">GAMES</a></p>
  <p><a href="#help">HELP</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="mi__navbar">

      {/* Navbar top left logo - TC/AYG? */}
      <div className="mi__navbar-links">
        <div className="mi__navbar-links_logo">
          <a href="#home">
            <img src={logo} alt="logo" />
            </a>
        </div>
      </div>

      {/* Links to HOME, GAMES, HELP pages */}
      <div className="mi__navbar-links_container">
        <Menu />
      </div>
      
      {/* Login button */}
      <div className="mi__navbar-login">
        <a href="#login">
          <img src={login} alt="login" width="100" height="50"/>
          </a>
      </div>

      {/* Dropdown menu (for smaller devices) */}
      <div className="mi__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} /> 
        }
        {toggleMenu && (
          <div className="mi__navbar-menu_container scale-up-center">
            <div className = "mi__navbar-menu_container-links">
            <Menu />
            </div>
          </div>
        )}
      </div> 
    </div>
  )
}

export default Navbar
