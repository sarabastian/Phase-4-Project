import React, { Component, useState } from 'react';
import { withRouter } from 'react-router';
import { MenuItems2 } from './MenuItems2';
import './Navbar.css';
import Login from '../LoginForm/Login';
import Signup from '../SignupForm/Signup';

const CheckNav = () => {
  
        return (
            MenuItems2.map((item, index) => {
                return (
            <li className="nav-li" key={index}>
              <a className={item.cName} href={item.url}>
                  {item.title}
              </a>
            </li>
    
            )
           }
         )
        )
        }
          


const SavedVansNavbar = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);

    const handleClose = () => setShow(false);
    
    const handleShow1 = () => setShow1(true);
 
    const handleShow = () => setShow(true);

    // const isLoggedIn = localStorage.getItem('auth_key') ? true : false

        return (
            <section className="navbar1" >
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
                        CheckNav()
                    }

                    {/* {
                        CheckLogin(props.login, handleShow1, handleShow)
                    } */}





              </ul>
        </nav>
        <Login show={show} onHide={handleClose}  />
        <Signup show={show1} onHide={handleClose1} />
        </section>
        
    )
}


export default SavedVansNavbar;