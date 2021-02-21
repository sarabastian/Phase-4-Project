import React, { Component, useState } from 'react';
import { withRouter } from 'react-router';
// import { Navbar } from 'react-bootstrap';
import { MenuItems } from './MenuItems';
import { MenuItems2 } from './MenuItems2';
import './Navbar.css';
import Login from '../LoginForm/Login';
import Signup from '../SignupForm/Signup';

const CheckLogin = (isLoggedIn, handleShow1, handleShow) => {
    // const [show, setShow] = useState(false);
    // const [show1, setShow1] = useState(false);

    // const handleShow1 = () => {
    //     setShow1(true);
    //     console.log("true")
    // }
 
    // const handleShow = () => setShow(true);

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
    if(!isLoggedIn) {
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

    const handleClose = () => setShow(false);
    
    const handleShow1 = () => setShow1(true);
 
    const handleShow = () => setShow(true);


    const isLoggedIn = localStorage.getItem('auth_key') ? true : false

        return (
            <section className="navbar1" isLoggedIn={isLoggedIn}>
                <h1 className="navbar-logo">
                    <i className="fas fa-shuttle-van">RVnB</i>
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

     {/* <li className="nav-li" >
         <a className="nav-links" href="#" onClick={handleShow1} >
         Sign up
         </a>
     </li>    

     <li className="nav-li" >
         <a className="nav-links" href="#" onClick={handleShow} >
         Login
         </a>
     </li> */}

                    {
                        CheckNav(props.login)
                    }

                    {
                        CheckLogin(props.login, handleShow1, handleShow)
                    }





              </ul>
        </nav>
        <Login show={show} onHide={handleClose} handleLogin={props.handleLogin} />
        <Signup show={show1} onHide={handleClose1} />
        </section>
        
    )
}


export default withRouter(NavBar);