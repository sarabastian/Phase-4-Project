import React, { Component, useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import Login from '../LoginForm/Login';
import Signup from '../SignupForm/Signup';


const Navbar = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        return (
            <section>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <i className="fas fa-shuttle-van">Vanbnb</i>
                </h1>
                <div className="menu-icon">
                    
                </div>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                      <li key={index}>
                        <a className={item.cName} href={item.url}>
                            {item.title}
                        </a>
                      </li>
                      )
                    })}
                    <li>
                        <a className="nav-links" href="#" onClick={handleShow1} >
                            Sign up
                        </a>
                    </li>
                        
                    <li>
                          <a className="nav-links" href="#" onClick={handleShow} >
                            Login
                          </a>
                    </li>
              </ul>
        </nav>
        <Login show={show} onHide={handleClose}  />
        <Signup show={show1} onHide={handleClose1} />
        </section>
        
    )
}


export default Navbar;