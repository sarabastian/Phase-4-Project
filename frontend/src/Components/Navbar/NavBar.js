import React, { Component, useState } from 'react';
import { withRouter } from 'react-router';
// import { Navbar } from 'react-bootstrap';
import { MenuItems } from './MenuItems';
import { MenuItems2 } from './MenuItems2';
import './Navbar.css';
import Login from '../LoginForm/Login';
import Signup from '../SignupForm/Signup';

const CheckLogin = (isLoggedIn) => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 if (isLoggedIn){
     return (
        <li className="nav-li" >
        <a className="nav-links" href="/" onClick={() => {
            localStorage.clear()

          //   this.props.history.push('/')
        }} >
          Logout
        </a>
        </li>   
     )
 } else {
     return (
    <>
    <li className="nav-li" >
        <a className="nav-links" href="#" onClick={handleShow1} >
        Sign up
        </a>
    </li>    

    <li className="nav-li" >
        <a className="nav-links" href="#" onClick={handleShow} >
        Login
        </a>
    </li> 
    </>
     )
 }      
}

const CheckNav = (isLoggedIn) => {
    if(isLoggedIn) {
        return (
            MenuItems.map((item, index) => {
                return (
                <li className="nav-li" key={index}>
                <a className={item.cName} href={item.url}>
                {item.title}
                </a>
                </li>
                )
                } 
        )
        )} else {
        MenuItems2.map((item, index) => {
            return (
          <li className="nav-li" key={index}>
            <a className={item.cName} href={item.url}>
                {item.title}
            </a>
          </li>
          )
        }
        )}
}

const NavBar = (props) => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    


    const isLoggedIn = localStorage.getItem('auth_key') ? true : false

        return (
            <section className="navbar" isLoggedIn={isLoggedIn}>
                <h1 className="navbar-logo">
                    <i className="fas fa-shuttle-van">RVbnb</i>
                </h1>
                <nav className="NavbarItems">
                <ul className="nav-menu">
                    {/* { if (isLoggedIn === true) {
                        MenuItems.map((item, index) => {
                        return (
                        <li className="nav-li" key={index}>
                        <a className={item.cName} href={item.url}>
                        {item.title}
                        </a>
                        </li>
                        )
                        })
                    }else{
                        MenuItems2.map((item, index) => {
                            return (
                          <li className="nav-li" key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                          </li>
                          )
                        })

                    }
                } */}

                    {
                        CheckNav(props.loginState)
                    }

                    {
                        CheckLogin(props.loginState)
                    }

                    <li className="nav-li" >
                    <img src="https://www.k2e.com/wp-content/uploads/2018/09/person-icon.png" class="rounded-circle" alt="Cinque Terre" height="30px" /> 
                    </li>



              </ul>
        </nav>
        <Login show={show} onHide={handleClose} handleLogin={props.handleLogin} />
        <Signup show={show1} onHide={handleClose1} />
        </section>
        
    )
}


export default withRouter(NavBar);