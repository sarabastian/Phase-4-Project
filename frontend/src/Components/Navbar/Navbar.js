import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import { Button, Form, FormGroup, Label, Input }
    from 'react-bootstrap';

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <i className="fas fa-shuttle-van">VanBnB</i>
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
                            <a className="nav-links" href="#">
                                Sign up
                            </a>
                        </li>
                        
                        <li>
                            <a className="nav-links" href="#">
                                Login
                            </a>
                        </li>
                </ul>
            </nav>
        
        )
    }
}

export default Navbar;